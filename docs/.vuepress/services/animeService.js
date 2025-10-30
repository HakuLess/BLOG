// 动漫数据服务模块
import { db } from '../firebase.js';
import { 
  collection, 
  doc, 
  getDocs, 
  getDoc, 
  query, 
  where, 
  orderBy, 
  limit 
} from 'firebase/firestore';

/**
 * 动漫数据服务类
 */
class AnimeService {
  constructor() {
    this.animesCollection = collection(db, 'animes');
    this.mangasCollection = collection(db, 'mangas');
  }

  /**
   * 获取所有动画
   * @param {Object} filters - 筛选条件
   * @returns {Promise<Array>} 动画列表
   */
  async getAnimes(filters = {}) {
    try {
      let q = this.animesCollection;
      
      // 应用筛选条件
      if (filters.genre) {
        q = query(q, where('genres', 'array-contains', filters.genre));
      }
      
      if (filters.status) {
        q = query(q, where('status', '==', filters.status));
      }
      
      if (filters.rating) {
        q = query(q, where('rating', '>=', parseFloat(filters.rating)));
      }
      
      // 按评分排序
      q = query(q, orderBy('rating', 'desc'));
      
      const querySnapshot = await getDocs(q);
      const animes = [];
      
      querySnapshot.forEach((doc) => {
        animes.push({
          id: doc.id,
          ...doc.data()
        });
      });
      
      return animes;
    } catch (error) {
      console.error('获取动画数据失败:', error);
      return [];
    }
  }

  /**
   * 获取所有漫画
   * @param {Object} filters - 筛选条件
   * @returns {Promise<Array>} 漫画列表
   */
  async getMangas(filters = {}) {
    try {
      let q = this.mangasCollection;
      
      // 应用筛选条件
      if (filters.genre) {
        q = query(q, where('genres', 'array-contains', filters.genre));
      }
      
      if (filters.status) {
        q = query(q, where('status', '==', filters.status));
      }
      
      if (filters.rating) {
        q = query(q, where('rating', '>=', parseFloat(filters.rating)));
      }
      
      // 按评分排序
      q = query(q, orderBy('rating', 'desc'));
      
      const querySnapshot = await getDocs(q);
      const mangas = [];
      
      querySnapshot.forEach((doc) => {
        mangas.push({
          id: doc.id,
          ...doc.data()
        });
      });
      
      return mangas;
    } catch (error) {
      console.error('获取漫画数据失败:', error);
      return [];
    }
  }

  /**
   * 根据ID获取动画详情
   * @param {string} id - 动画ID
   * @returns {Promise<Object|null>} 动画详情
   */
  async getAnimeById(id) {
    try {
      const docRef = doc(this.animesCollection, id);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        return {
          id: docSnap.id,
          ...docSnap.data()
        };
      } else {
        console.log('未找到该动画');
        return null;
      }
    } catch (error) {
      console.error('获取动画详情失败:', error);
      return null;
    }
  }

  /**
   * 根据ID获取漫画详情
   * @param {string} id - 漫画ID
   * @returns {Promise<Object|null>} 漫画详情
   */
  async getMangaById(id) {
    try {
      const docRef = doc(this.mangasCollection, id);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        return {
          id: docSnap.id,
          ...docSnap.data()
        };
      } else {
        console.log('未找到该漫画');
        return null;
      }
    } catch (error) {
      console.error('获取漫画详情失败:', error);
      return null;
    }
  }

  /**
   * 获取推荐动画（高评分）
   * @param {number} limitCount - 限制数量
   * @returns {Promise<Array>} 推荐动画列表
   */
  async getRecommendedAnimes(limitCount = 6) {
    try {
      const q = query(
        this.animesCollection,
        where('rating', '>=', 8.0),
        orderBy('rating', 'desc'),
        limit(limitCount)
      );
      
      const querySnapshot = await getDocs(q);
      const animes = [];
      
      querySnapshot.forEach((doc) => {
        animes.push({
          id: doc.id,
          ...doc.data()
        });
      });
      
      return animes;
    } catch (error) {
      console.error('获取推荐动画失败:', error);
      return [];
    }
  }

  /**
   * 获取推荐漫画（高评分）
   * @param {number} limitCount - 限制数量
   * @returns {Promise<Array>} 推荐漫画列表
   */
  async getRecommendedMangas(limitCount = 6) {
    try {
      const q = query(
        this.mangasCollection,
        where('rating', '>=', 8.0),
        orderBy('rating', 'desc'),
        limit(limitCount)
      );
      
      const querySnapshot = await getDocs(q);
      const mangas = [];
      
      querySnapshot.forEach((doc) => {
        mangas.push({
          id: doc.id,
          ...doc.data()
        });
      });
      
      return mangas;
    } catch (error) {
      console.error('获取推荐漫画失败:', error);
      return [];
    }
  }

  /**
   * 搜索动画
   * @param {string} keyword - 搜索关键词
   * @returns {Promise<Array>} 搜索结果
   */
  async searchAnimes(keyword) {
    try {
      // 注意：Firestore不支持全文搜索，这里使用简单的标题匹配
      // 在实际应用中，建议使用Algolia等专门的搜索服务
      const querySnapshot = await getDocs(this.animesCollection);
      const results = [];
      
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        if (data.title.toLowerCase().includes(keyword.toLowerCase()) ||
            data.titleEn?.toLowerCase().includes(keyword.toLowerCase())) {
          results.push({
            id: doc.id,
            ...data
          });
        }
      });
      
      return results;
    } catch (error) {
      console.error('搜索动画失败:', error);
      return [];
    }
  }

  /**
   * 搜索漫画
   * @param {string} keyword - 搜索关键词
   * @returns {Promise<Array>} 搜索结果
   */
  async searchMangas(keyword) {
    try {
      const querySnapshot = await getDocs(this.mangasCollection);
      const results = [];
      
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        if (data.title.toLowerCase().includes(keyword.toLowerCase()) ||
            data.titleEn?.toLowerCase().includes(keyword.toLowerCase())) {
          results.push({
            id: doc.id,
            ...data
          });
        }
      });
      
      return results;
    } catch (error) {
      console.error('搜索漫画失败:', error);
      return [];
    }
  }
}

// 创建单例实例
const animeService = new AnimeService();

export default animeService;