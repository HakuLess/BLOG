// AI对话框组件
import aiService from '../services/aiService.js';

/**
 * AI对话框类
 * 提供智能的动漫数据管理对话界面
 */
class AIDialog {
  constructor() {
    this.isOpen = false;
    this.conversations = [];
    this.isLoading = false;
    this.currentContext = {};
    
    this.init();
  }

  /**
   * 初始化对话框
   */
  init() {
    this.addStyles();
    this.createDialogHTML();
    this.bindEvents();
    this.loadConversationHistory();
  }

  /**
   * 创建对话框HTML结构
   */
  createDialogHTML() {
    const dialogHTML = `
      <div id="ai-dialog-overlay" class="ai-dialog-overlay" style="display: none;">
        <div class="ai-dialog-container">
          <div class="ai-dialog-header">
            <div class="ai-dialog-title">
              <span class="ai-icon">🤖</span>
              <h3>AI动漫助手</h3>
            </div>
            <button class="ai-dialog-close" id="ai-dialog-close">×</button>
          </div>
          
          <div class="ai-dialog-body">
            <div class="ai-conversation-area" id="ai-conversation-area">
              <div class="ai-welcome-message">
                <div class="ai-message ai-message-assistant">
                  <div class="ai-message-avatar">🤖</div>
                  <div class="ai-message-content">
                    <p>你好！我是你的AI动漫助手。我可以帮你：</p>
                    <ul>
                      <li>📝 添加新的动漫/漫画记录</li>
                      <li>📊 更新观看/阅读进度</li>
                      <li>⭐ 修改评分和状态</li>
                      <li>🗑️ 删除不需要的记录</li>
                      <li>🔍 查询和筛选数据</li>
                      <li>💡 推荐相似作品</li>
                    </ul>
                    <p>请告诉我你想要做什么吧！</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="ai-input-area">
              <div class="ai-quick-actions">
                <button class="ai-quick-btn" data-action="add-anime">添加动漫</button>
                <button class="ai-quick-btn" data-action="update-progress">更新进度</button>
                <button class="ai-quick-btn" data-action="get-recommendations">获取推荐</button>
                <button class="ai-quick-btn" data-action="search-anime">搜索作品</button>
              </div>
              
              <div class="ai-input-container">
                <textarea 
                  id="ai-input" 
                  class="ai-input" 
                  placeholder="输入你的请求，比如：'我想添加《进击的巨人》，已经看完了，评分9分'"
                  rows="2"
                ></textarea>
                <button id="ai-send-btn" class="ai-send-btn" disabled>
                  <span class="ai-send-icon">📤</span>
                </button>
              </div>
            </div>
          </div>
          
          <div class="ai-dialog-footer">
            <div class="ai-status" id="ai-status">就绪</div>
            <button class="ai-clear-btn" id="ai-clear-history">清空对话</button>
          </div>
        </div>
      </div>
    `;

    // 添加到页面
    document.body.insertAdjacentHTML('beforeend', dialogHTML);
    
    // 添加样式
    this.addStyles();
  }

  /**
   * 添加样式
   */
  addStyles() {
    const styles = `
      <style id="ai-dialog-styles">
        .ai-dialog-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(5px);
          z-index: 10000;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: fadeIn 0.3s ease;
        }

        .ai-dialog-container {
          width: 90%;
          max-width: 800px;
          height: 80vh;
          max-height: 700px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 20px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          animation: slideUp 0.3s ease;
        }

        .ai-dialog-header {
          background: rgba(255, 255, 255, 0.1);
          padding: 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
        }

        .ai-dialog-title {
          display: flex;
          align-items: center;
          gap: 10px;
          color: white;
        }

        .ai-icon {
          font-size: 24px;
          animation: bounce 2s infinite;
        }

        .ai-dialog-title h3 {
          margin: 0;
          font-size: 20px;
          font-weight: 600;
        }

        .ai-dialog-close {
          background: rgba(255, 255, 255, 0.2);
          border: none;
          color: white;
          font-size: 24px;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .ai-dialog-close:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: rotate(90deg);
        }

        .ai-dialog-body {
          flex: 1;
          display: flex;
          flex-direction: column;
          background: white;
          margin: 0 20px 20px 20px;
          border-radius: 15px;
          overflow: hidden;
        }

        .ai-conversation-area {
          flex: 1;
          padding: 20px;
          overflow-y: auto;
          background: #f8f9fa;
        }

        .ai-message {
          display: flex;
          gap: 12px;
          margin-bottom: 20px;
          animation: messageSlide 0.3s ease;
        }

        .ai-message-user {
          flex-direction: row-reverse;
        }

        .ai-message-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          flex-shrink: 0;
        }

        .ai-message-user .ai-message-avatar {
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
        }

        .ai-message-assistant .ai-message-avatar {
          background: linear-gradient(135deg, #f093fb, #f5576c);
          color: white;
        }

        .ai-message-content {
          flex: 1;
          background: white;
          padding: 15px;
          border-radius: 15px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          position: relative;
        }

        .ai-message-user .ai-message-content {
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
        }

        .ai-message-content::before {
          content: '';
          position: absolute;
          top: 15px;
          width: 0;
          height: 0;
          border: 8px solid transparent;
        }

        .ai-message-assistant .ai-message-content::before {
          left: -16px;
          border-right-color: white;
        }

        .ai-message-user .ai-message-content::before {
          right: -16px;
          border-left-color: #667eea;
        }

        .ai-message-content p {
          margin: 0 0 10px 0;
          line-height: 1.6;
        }

        .ai-message-content p:last-child {
          margin-bottom: 0;
        }

        .ai-message-content ul {
          margin: 10px 0;
          padding-left: 20px;
        }

        .ai-message-content li {
          margin: 5px 0;
          line-height: 1.5;
        }

        .ai-input-area {
          background: white;
          padding: 20px;
          border-top: 1px solid #e9ecef;
        }

        .ai-quick-actions {
          display: flex;
          gap: 10px;
          margin-bottom: 15px;
          flex-wrap: wrap;
        }

        .ai-quick-btn {
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          border: none;
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .ai-quick-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
        }

        .ai-input-container {
          display: flex;
          gap: 10px;
          align-items: flex-end;
        }

        .ai-input {
          flex: 1;
          border: 2px solid #e9ecef;
          border-radius: 15px;
          padding: 12px 16px;
          font-size: 14px;
          resize: none;
          transition: all 0.3s ease;
          font-family: inherit;
        }

        .ai-input:focus {
          outline: none;
          border-color: #667eea;
          box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
        }

        .ai-send-btn {
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          border: none;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .ai-send-btn:hover:not(:disabled) {
          transform: scale(1.1);
          box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
        }

        .ai-send-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .ai-send-icon {
          font-size: 18px;
        }

        .ai-dialog-footer {
          background: rgba(255, 255, 255, 0.1);
          padding: 15px 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: white;
        }

        .ai-status {
          font-size: 14px;
          opacity: 0.8;
        }

        .ai-clear-btn {
          background: rgba(255, 255, 255, 0.2);
          color: white;
          border: none;
          padding: 8px 16px;
          border-radius: 15px;
          cursor: pointer;
          font-size: 12px;
          transition: all 0.3s ease;
        }

        .ai-clear-btn:hover {
          background: rgba(255, 255, 255, 0.3);
        }

        .ai-loading {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #667eea;
          font-style: italic;
        }

        .ai-loading::after {
          content: '';
          width: 20px;
          height: 20px;
          border: 2px solid #e9ecef;
          border-top: 2px solid #667eea;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideUp {
          from { transform: translateY(50px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-10px); }
          60% { transform: translateY(-5px); }
        }

        @keyframes messageSlide {
          from { transform: translateX(-20px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        /* 响应式设计 */
        @media (max-width: 768px) {
          .ai-dialog-container {
            width: 95%;
            height: 90vh;
            margin: 20px;
          }

          .ai-quick-actions {
            justify-content: center;
          }

          .ai-quick-btn {
            font-size: 11px;
            padding: 6px 12px;
          }
        }
      </style>
    `;

    document.head.insertAdjacentHTML('beforeend', styles);
  }

  /**
   * 绑定事件
   */
  bindEvents() {
    const overlay = document.getElementById('ai-dialog-overlay');
    const closeBtn = document.getElementById('ai-dialog-close');
    const input = document.getElementById('ai-input');
    const sendBtn = document.getElementById('ai-send-btn');
    const clearBtn = document.getElementById('ai-clear-history');
    const quickBtns = document.querySelectorAll('.ai-quick-btn');

    // 关闭对话框
    closeBtn.addEventListener('click', () => this.close());
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) this.close();
    });

    // ESC键关闭
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen) {
        this.close();
      }
    });

    // 输入框事件
    input.addEventListener('input', () => {
      sendBtn.disabled = !input.value.trim();
    });

    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        if (!sendBtn.disabled) {
          this.sendMessage();
        }
      }
    });

    // 发送按钮
    sendBtn.addEventListener('click', () => this.sendMessage());

    // 清空对话
    clearBtn.addEventListener('click', () => this.clearConversation());

    // 快捷按钮
    quickBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const action = btn.dataset.action;
        this.handleQuickAction(action);
      });
    });
  }

  /**
   * 打开对话框
   */
  open(context = {}) {
    this.currentContext = context;
    this.isOpen = true;
    document.getElementById('ai-dialog-overlay').style.display = 'flex';
    document.body.style.overflow = 'hidden';
    
    // 聚焦输入框
    setTimeout(() => {
      document.getElementById('ai-input').focus();
    }, 300);
  }

  /**
   * 关闭对话框
   */
  close() {
    this.isOpen = false;
    document.getElementById('ai-dialog-overlay').style.display = 'none';
    document.body.style.overflow = '';
  }

  /**
   * 发送消息
   */
  async sendMessage() {
    const input = document.getElementById('ai-input');
    const message = input.value.trim();
    
    if (!message || this.isLoading) return;

    // 添加用户消息到界面
    this.addMessage(message, 'user');
    
    // 清空输入框
    input.value = '';
    document.getElementById('ai-send-btn').disabled = true;
    
    // 设置加载状态
    this.setLoading(true);
    
    try {
      // 调用AI服务
      const response = await aiService.processUserRequest(message, this.currentContext);
      
      // 添加AI回复到界面
      this.addMessage(response.aiResponse, 'assistant');
      
      // 如果有操作结果，显示操作反馈
      if (response.result) {
        this.showOperationResult(response.operation, response.result);
      }
      
    } catch (error) {
      console.error('发送消息失败:', error);
      this.addMessage('抱歉，我遇到了一些问题，请稍后再试。', 'assistant');
    } finally {
      this.setLoading(false);
    }
  }

  /**
   * 添加消息到对话区域
   */
  addMessage(content, type) {
    const conversationArea = document.getElementById('ai-conversation-area');
    const avatar = type === 'user' ? '👤' : '🤖';
    
    const messageHTML = `
      <div class="ai-message ai-message-${type}">
        <div class="ai-message-avatar">${avatar}</div>
        <div class="ai-message-content">
          ${this.formatMessage(content)}
        </div>
      </div>
    `;
    
    conversationArea.insertAdjacentHTML('beforeend', messageHTML);
    conversationArea.scrollTop = conversationArea.scrollHeight;
  }

  /**
   * 格式化消息内容
   */
  formatMessage(content) {
    // 处理换行
    content = content.replace(/\n/g, '<br>');
    
    // 处理列表
    content = content.replace(/^\* (.+)$/gm, '<li>$1</li>');
    content = content.replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>');
    
    return `<p>${content}</p>`;
  }

  /**
   * 设置加载状态
   */
  setLoading(loading) {
    this.isLoading = loading;
    const status = document.getElementById('ai-status');
    
    if (loading) {
      status.innerHTML = '<span class="ai-loading">AI正在思考中...</span>';
    } else {
      status.textContent = '就绪';
    }
  }

  /**
   * 显示操作结果
   */
  showOperationResult(operation, result) {
    let resultMessage = '';
    
    switch (operation.type) {
      case 'add':
        resultMessage = `✅ 成功添加了 ${result.title || '新记录'}`;
        break;
      case 'update':
        resultMessage = `✅ 成功更新了 ${result.length} 条记录`;
        break;
      case 'delete':
        resultMessage = `✅ 成功删除了 ${result.length} 条记录`;
        break;
      case 'query':
        resultMessage = `📊 找到了 ${result.length} 条匹配的记录`;
        break;
      case 'recommend':
        resultMessage = `💡 为您推荐了 ${result.length} 部作品`;
        break;
    }
    
    if (resultMessage) {
      this.addMessage(resultMessage, 'assistant');
    }
  }

  /**
   * 处理快捷操作
   */
  handleQuickAction(action) {
    const input = document.getElementById('ai-input');
    
    const quickMessages = {
      'add-anime': '我想添加一部新动漫',
      'update-progress': '我想更新观看进度',
      'get-recommendations': '请给我推荐一些动漫',
      'search-anime': '帮我搜索动漫'
    };
    
    input.value = quickMessages[action] || '';
    input.focus();
    document.getElementById('ai-send-btn').disabled = false;
  }

  /**
   * 清空对话
   */
  clearConversation() {
    const conversationArea = document.getElementById('ai-conversation-area');
    const welcomeMessage = conversationArea.querySelector('.ai-welcome-message');
    
    // 保留欢迎消息，清空其他对话
    conversationArea.innerHTML = '';
    conversationArea.appendChild(welcomeMessage);
    
    this.conversations = [];
  }

  /**
   * 加载对话历史
   */
  async loadConversationHistory() {
    try {
      const history = await aiService.getConversationHistory(5);
      // 这里可以选择是否显示历史对话
      // 暂时不显示，保持界面简洁
    } catch (error) {
      console.error('加载对话历史失败:', error);
    }
  }

  /**
   * 设置上下文
   */
  setContext(context) {
    this.currentContext = { ...this.currentContext, ...context };
  }
}

// 创建全局实例
if (typeof window !== 'undefined') {
  window.AIDialog = AIDialog;
}

export default AIDialog;