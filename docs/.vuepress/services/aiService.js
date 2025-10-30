// AI服务模块 - 集成Firebase AI功能
import { db } from '../firebase.js';
import { 
  collection, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  getDocs, 
  query,
  where,
  orderBy,
  serverTimestamp
} from 'firebase/firestore';

/**
 * AI助手服务类
 * 使用Firebase AI功能来处理动漫数据的智能管理
 */
class AIService {
  constructor() {
    this.animesCollection = collection(db, 'animes');
    this.mangasCollection = collection(db, 'mangas');
    this.conversationsCollection = collection(db, 'ai_conversations');
    
    // Gemini API配置 (需要在Firebase项目中配置)
    this.geminiApiKey = 'AIzaSyCwJYHjVqzn2-GZ2y5_ZB6LQCVZry64qbI'; // 使用Firebase项目的API Key
    this.geminiEndpoint = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent';
  }

  /**
   * 处理用户的自然语言请求
   * @param {string} userMessage - 用户输入的消息
   * @param {string} context - 上下文信息（当前页面、用户数据等）
   * @returns {Promise<Object>} AI响应和执行的操作
   */
  async processUserRequest(userMessage, context = {}) {
    try {
      // 构建系统提示词
      const systemPrompt = this.buildSystemPrompt(context);
      
      // 调用Gemini API
      const aiResponse = await this.callGeminiAPI(systemPrompt, userMessage);
      
      // 解析AI响应，提取操作指令
      const parsedResponse = this.parseAIResponse(aiResponse);
      
      // 执行相应的数据库操作
      const operationResult = await this.executeOperation(parsedResponse);
      
      // 保存对话记录
      await this.saveConversation(userMessage, aiResponse, operationResult);
      
      return {
        aiResponse: aiResponse,
        operation: parsedResponse.operation,
        result: operationResult,
        success: true
      };
    } catch (error) {
      console.error('AI请求处理失败:', error);
      return {
        aiResponse: '抱歉，我遇到了一些问题，请稍后再试。',
        operation: null,
        result: null,
        success: false,
        error: error.message
      };
    }
  }

  /**
   * 构建系统提示词
   */
  buildSystemPrompt(context) {
    return `你是一个专业的动漫数据库管理助手。你可以帮助用户管理动漫和漫画数据，包括：

1. 添加新的动漫/漫画记录
2. 更新观看/阅读进度
3. 修改评分和状态
4. 删除记录
5. 查询和筛选数据
6. 推荐相似作品

当前上下文：
- 页面类型: ${context.pageType || '未知'}
- 当前作品: ${context.currentItem || '无'}
- 用户偏好: ${JSON.stringify(context.userPreferences || {})}

请根据用户的自然语言请求，返回JSON格式的响应，包含：
{
  "response": "给用户的回复",
  "operation": {
    "type": "add|update|delete|query|recommend",
    "collection": "animes|mangas",
    "data": {...},
    "conditions": {...}
  }
}

示例：
用户说："我想添加一部新动漫《鬼灭之刃》，已经看完了，评分9.5"
你应该返回：
{
  "response": "好的，我来为您添加《鬼灭之刃》到动漫数据库中。",
  "operation": {
    "type": "add",
    "collection": "animes",
    "data": {
      "title": "鬼灭之刃",
      "status": "completed",
      "rating": 9.5,
      "watchStatus": "completed"
    }
  }
}`;
  }

  /**
   * 调用Gemini API
   */
  async callGeminiAPI(systemPrompt, userMessage) {
    const response = await fetch(`${this.geminiEndpoint}?key=${this.geminiApiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: `${systemPrompt}\n\n用户请求：${userMessage}`
          }]
        }],
        generationConfig: {
          temperature: 0.7,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 1024,
        }
      })
    });

    if (!response.ok) {
      throw new Error(`Gemini API请求失败: ${response.status}`);
    }

    const data = await response.json();
    return data.candidates[0].content.parts[0].text;
  }

  /**
   * 解析AI响应
   */
  parseAIResponse(aiResponse) {
    try {
      // 尝试从响应中提取JSON
      const jsonMatch = aiResponse.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        return JSON.parse(jsonMatch[0]);
      }
      
      // 如果没有找到JSON，返回默认响应
      return {
        response: aiResponse,
        operation: null
      };
    } catch (error) {
      console.error('解析AI响应失败:', error);
      return {
        response: aiResponse,
        operation: null
      };
    }
  }

  /**
   * 执行数据库操作
   */
  async executeOperation(parsedResponse) {
    if (!parsedResponse.operation) {
      return null;
    }

    const { type, collection: collectionName, data, conditions } = parsedResponse.operation;
    const targetCollection = collectionName === 'animes' ? this.animesCollection : this.mangasCollection;

    try {
      switch (type) {
        case 'add':
          return await this.addRecord(targetCollection, data);
        
        case 'update':
          return await this.updateRecord(targetCollection, data, conditions);
        
        case 'delete':
          return await this.deleteRecord(targetCollection, conditions);
        
        case 'query':
          return await this.queryRecords(targetCollection, conditions);
        
        case 'recommend':
          return await this.getRecommendations(targetCollection, conditions);
        
        default:
          throw new Error(`未知操作类型: ${type}`);
      }
    } catch (error) {
      console.error('数据库操作失败:', error);
      throw error;
    }
  }

  /**
   * 添加记录
   */
  async addRecord(collection, data) {
    const recordData = {
      ...data,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    };
    
    const docRef = await addDoc(collection, recordData);
    return { id: docRef.id, ...recordData };
  }

  /**
   * 更新记录
   */
  async updateRecord(collection, data, conditions) {
    const q = query(collection, where(conditions.field, '==', conditions.value));
    const querySnapshot = await getDocs(q);
    
    const updates = [];
    querySnapshot.forEach(async (docSnapshot) => {
      const updateData = {
        ...data,
        updatedAt: serverTimestamp()
      };
      await updateDoc(docSnapshot.ref, updateData);
      updates.push({ id: docSnapshot.id, ...updateData });
    });
    
    return updates;
  }

  /**
   * 删除记录
   */
  async deleteRecord(collection, conditions) {
    const q = query(collection, where(conditions.field, '==', conditions.value));
    const querySnapshot = await getDocs(q);
    
    const deletions = [];
    querySnapshot.forEach(async (docSnapshot) => {
      await deleteDoc(docSnapshot.ref);
      deletions.push({ id: docSnapshot.id });
    });
    
    return deletions;
  }

  /**
   * 查询记录
   */
  async queryRecords(collection, conditions) {
    let q = collection;
    
    if (conditions.where) {
      q = query(q, where(conditions.where.field, conditions.where.operator, conditions.where.value));
    }
    
    if (conditions.orderBy) {
      q = query(q, orderBy(conditions.orderBy.field, conditions.orderBy.direction));
    }
    
    const querySnapshot = await getDocs(q);
    const records = [];
    querySnapshot.forEach((doc) => {
      records.push({ id: doc.id, ...doc.data() });
    });
    
    return records;
  }

  /**
   * 获取推荐
   */
  async getRecommendations(collection, conditions) {
    // 基于用户偏好和历史数据生成推荐
    // 这里可以实现更复杂的推荐算法
    const q = query(collection, orderBy('rating', 'desc'));
    const querySnapshot = await getDocs(q);
    
    const recommendations = [];
    querySnapshot.forEach((doc) => {
      recommendations.push({ id: doc.id, ...doc.data() });
    });
    
    return recommendations.slice(0, 5); // 返回前5个推荐
  }

  /**
   * 保存对话记录
   */
  async saveConversation(userMessage, aiResponse, operationResult) {
    try {
      await addDoc(this.conversationsCollection, {
        userMessage,
        aiResponse,
        operationResult,
        timestamp: serverTimestamp()
      });
    } catch (error) {
      console.error('保存对话记录失败:', error);
    }
  }

  /**
   * 获取对话历史
   */
  async getConversationHistory(limit = 10) {
    try {
      const q = query(
        this.conversationsCollection, 
        orderBy('timestamp', 'desc'),
        limit(limit)
      );
      const querySnapshot = await getDocs(q);
      
      const conversations = [];
      querySnapshot.forEach((doc) => {
        conversations.push({ id: doc.id, ...doc.data() });
      });
      
      return conversations.reverse(); // 按时间正序返回
    } catch (error) {
      console.error('获取对话历史失败:', error);
      return [];
    }
  }
}

// 创建单例实例
const aiService = new AIService();
export default aiService;