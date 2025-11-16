// 动漫数据服务模块
import { db } from '../firebase.js';
import { 
  collection, 
  doc, 
  getDocs, 
  getDoc, 
  addDoc,
  updateDoc,
  deleteDoc,
  query, 
  where, 
  orderBy, 
  limit,
  serverTimestamp,
  onSnapshot,
  setDoc,
  runTransaction
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
   * 订阅动画列表（实时）
   * @param {Object} filters 筛选条件
   * @param {(Array)=>void} onData 数据回调
   * @returns {Function} 取消订阅函数
   */
  subscribeAnimes(filters = {}, onData) {
    try {
      let q = this.animesCollection;
      if (filters.genre) q = query(q, where('genres', 'array-contains', filters.genre));
      if (filters.status) q = query(q, where('status', '==', filters.status));
      if (filters.rating) q = query(q, where('rating', '>=', parseFloat(filters.rating)));
      q = query(q, orderBy('rating', 'desc'));
      return onSnapshot(q, (snapshot) => {
        const list = [];
        snapshot.forEach((d)=> list.push({ id: d.id, ...d.data() }))
        onData(list)
      })
    } catch (error) {
      console.error('订阅动画失败:', error)
      return () => {}
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
   * 订阅漫画列表（实时）
   * @param {Object} filters 筛选条件
   * @param {(Array)=>void} onData 数据回调
   * @returns {Function} 取消订阅函数
   */
  subscribeMangas(filters = {}, onData) {
    try {
      let q = this.mangasCollection;
      if (filters.genre) q = query(q, where('genres', 'array-contains', filters.genre));
      if (filters.status) q = query(q, where('status', '==', filters.status));
      if (filters.rating) q = query(q, where('rating', '>=', parseFloat(filters.rating)));
      q = query(q, orderBy('rating', 'desc'));
      return onSnapshot(q, (snapshot) => {
        const list = [];
        snapshot.forEach((d)=> list.push({ id: d.id, ...d.data() }))
        onData(list)
      })
    } catch (error) {
      console.error('订阅漫画失败:', error)
      return () => {}
    }
  }

  subscribeUserAnimeProgress(uid, onData){
    try{
      const col = collection(db, 'userProgress', uid, 'animes')
      return onSnapshot(col, (snap)=>{
        const map = {}
        snap.forEach(d=>{ map[d.id] = d.data() })
        onData(map)
      })
    }catch(error){
      console.error('订阅用户动画进度失败:', error)
      return ()=>{}
    }
  }

  subscribeUserMangaProgress(uid, onData){
    try{
      const col = collection(db, 'userProgress', uid, 'mangas')
      return onSnapshot(col, (snap)=>{
        const map = {}
        snap.forEach(d=>{ map[d.id] = d.data() })
        onData(map)
      })
    }catch(error){
      console.error('订阅用户漫画进度失败:', error)
      return ()=>{}
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


  /**
   * 添加新动画
   * @param {Object} animeData - 动画数据
   * @returns {Promise<Object>} 添加结果
   */
  async addAnime(animeData) {
    try {
      // 验证必需字段
      if (!animeData.title) {
        throw new Error('动画标题不能为空');
      }

      // 设置默认值和时间戳
      const newAnime = {
        title: animeData.title,
        titleEn: animeData.titleEn || '',
        description: animeData.description || '',
        genres: animeData.genres || [],
        rating: parseFloat(animeData.rating) || 0,
        status: animeData.status || 'planning', // planning, watching, completed, dropped, on_hold
        episodes: parseInt(animeData.episodes) || 0,
        watchedEpisodes: parseInt(animeData.watchedEpisodes) || 0,
        year: parseInt(animeData.year) || new Date().getFullYear(),
        studio: animeData.studio || '',
        image: animeData.image || '',
        tags: animeData.tags || [],
        notes: animeData.notes || '',
        startDate: animeData.startDate || null,
        endDate: animeData.endDate || null,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      };

      const docRef = await addDoc(this.animesCollection, newAnime);
      
      return {
        success: true,
        id: docRef.id,
        data: newAnime,
        message: `成功添加动画：${newAnime.title}`
      };
    } catch (error) {
      console.error('添加动画失败:', error);
      return {
        success: false,
        error: error.message,
        message: '添加动画失败'
      };
    }
  }

  /**
   * 添加新漫画
   * @param {Object} mangaData - 漫画数据
   * @returns {Promise<Object>} 添加结果
   */
  async addManga(mangaData) {
    try {
      // 验证必需字段
      if (!mangaData.title) {
        throw new Error('漫画标题不能为空');
      }

      // 设置默认值和时间戳
      const newManga = {
        title: mangaData.title,
        titleEn: mangaData.titleEn || '',
        description: mangaData.description || '',
        genres: mangaData.genres || [],
        rating: parseFloat(mangaData.rating) || 0,
        status: mangaData.status || 'planning', // planning, reading, completed, dropped, on_hold
        chapters: parseInt(mangaData.chapters) || 0,
        readChapters: parseInt(mangaData.readChapters) || 0,
        volumes: parseInt(mangaData.volumes) || 0,
        readVolumes: parseInt(mangaData.readVolumes) || 0,
        year: parseInt(mangaData.year) || new Date().getFullYear(),
        author: mangaData.author || '',
        image: mangaData.image || '',
        tags: mangaData.tags || [],
        notes: mangaData.notes || '',
        startDate: mangaData.startDate || null,
        endDate: mangaData.endDate || null,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      };

      const docRef = await addDoc(this.mangasCollection, newManga);
      
      return {
        success: true,
        id: docRef.id,
        data: newManga,
        message: `成功添加漫画：${newManga.title}`
      };
    } catch (error) {
      console.error('添加漫画失败:', error);
      return {
        success: false,
        error: error.message,
        message: '添加漫画失败'
      };
    }
  }

  /**
   * 更新动画
   * @param {string} id - 动画ID
   * @param {Object} updateData - 更新数据
   * @returns {Promise<Object>} 更新结果
   */
  async updateAnime(id, updateData) {
    try {
      const docRef = doc(this.animesCollection, id);
      
      // 检查文档是否存在
      const docSnap = await getDoc(docRef);
      if (!docSnap.exists()) {
        throw new Error('动画不存在');
      }

      // 准备更新数据
      const updates = {
        ...updateData,
        updatedAt: serverTimestamp()
      };

      // 处理数值类型
      if (updates.rating) updates.rating = parseFloat(updates.rating);
      if (updates.episodes) updates.episodes = parseInt(updates.episodes);
      if (updates.watchedEpisodes) updates.watchedEpisodes = parseInt(updates.watchedEpisodes);
      if (updates.year) updates.year = parseInt(updates.year);

      await updateDoc(docRef, updates);
      
      return {
        success: true,
        id: id,
        data: updates,
        message: `成功更新动画：${docSnap.data().title}`
      };
    } catch (error) {
      console.error('更新动画失败:', error);
      return {
        success: false,
        error: error.message,
        message: '更新动画失败'
      };
    }
  }

  /**
   * 更新漫画
   * @param {string} id - 漫画ID
   * @param {Object} updateData - 更新数据
   * @returns {Promise<Object>} 更新结果
   */
  async updateManga(id, updateData) {
    try {
      const docRef = doc(this.mangasCollection, id);
      
      // 检查文档是否存在
      const docSnap = await getDoc(docRef);
      if (!docSnap.exists()) {
        throw new Error('漫画不存在');
      }

      // 准备更新数据
      const updates = {
        ...updateData,
        updatedAt: serverTimestamp()
      };

      // 处理数值类型
      if (updates.rating) updates.rating = parseFloat(updates.rating);
      if (updates.chapters) updates.chapters = parseInt(updates.chapters);
      if (updates.readChapters) updates.readChapters = parseInt(updates.readChapters);
      if (updates.volumes) updates.volumes = parseInt(updates.volumes);
      if (updates.readVolumes) updates.readVolumes = parseInt(updates.readVolumes);
      if (updates.year) updates.year = parseInt(updates.year);

      await updateDoc(docRef, updates);
      
      return {
        success: true,
        id: id,
        data: updates,
        message: `成功更新漫画：${docSnap.data().title}`
      };
    } catch (error) {
      console.error('更新漫画失败:', error);
      return {
        success: false,
        error: error.message,
        message: '更新漫画失败'
      };
    }
  }

  /**
   * 删除动画
   * @param {string} id - 动画ID
   * @returns {Promise<Object>} 删除结果
   */
  async deleteAnime(id) {
    try {
      const docRef = doc(this.animesCollection, id);
      
      // 检查文档是否存在
      const docSnap = await getDoc(docRef);
      if (!docSnap.exists()) {
        throw new Error('动画不存在');
      }

      const title = docSnap.data().title;
      await deleteDoc(docRef);
      
      return {
        success: true,
        id: id,
        message: `成功删除动画：${title}`
      };
    } catch (error) {
      console.error('删除动画失败:', error);
      return {
        success: false,
        error: error.message,
        message: '删除动画失败'
      };
    }
  }

  /**
   * 删除漫画
   * @param {string} id - 漫画ID
   * @returns {Promise<Object>} 删除结果
   */
  async deleteManga(id) {
    try {
      const docRef = doc(this.mangasCollection, id);
      
      // 检查文档是否存在
      const docSnap = await getDoc(docRef);
      if (!docSnap.exists()) {
        throw new Error('漫画不存在');
      }

      const title = docSnap.data().title;
      await deleteDoc(docRef);
      
      return {
        success: true,
        id: id,
        message: `成功删除漫画：${title}`
      };
    } catch (error) {
      console.error('删除漫画失败:', error);
      return {
        success: false,
        error: error.message,
        message: '删除漫画失败'
      };
    }
  }

  /**
   * 批量更新动画进度
   * @param {Array} updates - 更新数组，每个元素包含 {id, watchedEpisodes, status}
   * @returns {Promise<Object>} 批量更新结果
   */
  async batchUpdateAnimeProgress(updates) {
    try {
      const results = [];
      
      for (const update of updates) {
        const result = await this.updateAnime(update.id, {
          watchedEpisodes: update.watchedEpisodes,
          status: update.status
        });
        results.push(result);
      }
      
      const successCount = results.filter(r => r.success).length;
      
      return {
        success: true,
        results: results,
        message: `成功更新 ${successCount}/${updates.length} 个动画进度`
      };
    } catch (error) {
      console.error('批量更新动画进度失败:', error);
      return {
        success: false,
        error: error.message,
        message: '批量更新动画进度失败'
      };
    }
  }

  /**
   * 批量更新漫画进度
   * @param {Array} updates - 更新数组，每个元素包含 {id, readChapters, readVolumes, status}
   * @returns {Promise<Object>} 批量更新结果
   */
  async batchUpdateMangaProgress(updates) {
    try {
      const results = [];
      
      for (const update of updates) {
        const result = await this.updateManga(update.id, {
          readChapters: update.readChapters,
          readVolumes: update.readVolumes,
          status: update.status
        });
        results.push(result);
      }
      
      const successCount = results.filter(r => r.success).length;
      
      return {
        success: true,
        results: results,
        message: `成功更新 ${successCount}/${updates.length} 个漫画进度`
      };
    } catch (error) {
      console.error('批量更新漫画进度失败:', error);
      return {
        success: false,
        error: error.message,
        message: '批量更新漫画进度失败'
      };
    }
  }

  async upsertAnimeProgress(uid, animeId, payload) {
    try {
      const ref = doc(collection(db, 'userProgress', uid, 'animes'), animeId)
      await setDoc(ref, { ...payload, lastUpdated: serverTimestamp() }, { merge: true })
      return { success: true }
    } catch (error) {
      return { success: false, error: error.message }
    }
  }

  async getAnimeProgress(uid, animeId) {
    try {
      const ref = doc(collection(db, 'userProgress', uid, 'animes'), animeId)
      const snap = await getDoc(ref)
      return snap.exists() ? { success: true, data: snap.data() } : { success: true, data: null }
    } catch (error) {
      return { success: false, error: error.message }
    }
  }

  async upsertMangaProgress(uid, mangaId, payload) {
    try {
      const ref = doc(collection(db, 'userProgress', uid, 'mangas'), mangaId)
      await setDoc(ref, { ...payload, lastUpdated: serverTimestamp() }, { merge: true })
      return { success: true }
    } catch (error) {
      return { success: false, error: error.message }
    }
  }

  async getMangaProgress(uid, mangaId) {
    try {
      const ref = doc(collection(db, 'userProgress', uid, 'mangas'), mangaId)
      const snap = await getDoc(ref)
      return snap.exists() ? { success: true, data: snap.data() } : { success: true, data: null }
    } catch (error) {
      return { success: false, error: error.message }
    }
  }

  async rateAnime(id, score) {
    try {
      const ref = doc(this.animesCollection, id)
      await runTransaction(db, async (tx) => {
        const snap = await tx.get(ref)
        if (!snap.exists()) throw new Error('not found')
        const data = snap.data()
        const count = parseInt(data.ratingCount || 0)
        const current = parseFloat(data.rating || 0)
        const newCount = count + 1
        const newRating = ((current * count) + parseFloat(score)) / newCount
        tx.update(ref, { rating: newRating, ratingCount: newCount, updatedAt: serverTimestamp() })
      })
      return { success: true }
    } catch (error) {
      return { success: false, error: error.message }
    }
  }

  async rateManga(id, score) {
    try {
      const ref = doc(this.mangasCollection, id)
      await runTransaction(db, async (tx) => {
        const snap = await tx.get(ref)
        if (!snap.exists()) throw new Error('not found')
        const data = snap.data()
        const count = parseInt(data.ratingCount || 0)
        const current = parseFloat(data.rating || 0)
        const newCount = count + 1
        const newRating = ((current * count) + parseFloat(score)) / newCount
        tx.update(ref, { rating: newRating, ratingCount: newCount, updatedAt: serverTimestamp() })
      })
      return { success: true }
    } catch (error) {
      return { success: false, error: error.message }
    }
  }
}
// 创建单例实例
const animeService = new AnimeService();

export default animeService;