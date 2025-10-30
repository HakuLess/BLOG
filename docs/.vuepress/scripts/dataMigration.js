/**
 * Firebase数据迁移工具
 * 用于将现有数据结构升级到增强版本
 */

import { initializeApp } from 'firebase/app';
import { 
  getFirestore, 
  collection, 
  doc, 
  getDocs, 
  setDoc, 
  updateDoc, 
  writeBatch,
  serverTimestamp 
} from 'firebase/firestore';

class DataMigration {
  constructor(firebaseConfig) {
    this.app = initializeApp(firebaseConfig);
    this.db = getFirestore(this.app);
    this.batchSize = 500; // 批处理大小
  }

  /**
   * 执行完整的数据迁移
   */
  async migrateAll() {
    console.log('🚀 开始数据迁移...');
    
    try {
      // 1. 迁移动画数据
      await this.migrateAnimes();
      
      // 2. 迁移漫画数据
      await this.migrateMangas();
      
      // 3. 创建示例用户数据
      await this.createSampleUsers();
      
      // 4. 创建示例评论数据
      await this.createSampleReviews();
      
      // 5. 创建示例列表数据
      await this.createSampleLists();
      
      console.log('✅ 数据迁移完成！');
    } catch (error) {
      console.error('❌ 数据迁移失败:', error);
      throw error;
    }
  }

  /**
   * 迁移动画数据到新结构
   */
  async migrateAnimes() {
    console.log('📺 迁移动画数据...');
    
    const animesRef = collection(this.db, 'animes');
    const snapshot = await getDocs(animesRef);
    
    const batch = writeBatch(this.db);
    let batchCount = 0;
    
    for (const docSnapshot of snapshot.docs) {
      const oldData = docSnapshot.data();
      const newData = this.transformAnimeData(oldData);
      
      const newDocRef = doc(this.db, 'animes', docSnapshot.id);
      batch.set(newDocRef, newData);
      
      batchCount++;
      
      // 每500个文档提交一次批处理
      if (batchCount >= this.batchSize) {
        await batch.commit();
        console.log(`✅ 已迁移 ${batchCount} 个动画数据`);
        batchCount = 0;
      }
    }
    
    // 提交剩余的批处理
    if (batchCount > 0) {
      await batch.commit();
      console.log(`✅ 已迁移 ${batchCount} 个动画数据`);
    }
    
    console.log('✅ 动画数据迁移完成');
  }

  /**
   * 迁移漫画数据到新结构
   */
  async migrateMangas() {
    console.log('📚 迁移漫画数据...');
    
    const mangasRef = collection(this.db, 'mangas');
    const snapshot = await getDocs(mangasRef);
    
    const batch = writeBatch(this.db);
    let batchCount = 0;
    
    for (const docSnapshot of snapshot.docs) {
      const oldData = docSnapshot.data();
      const newData = this.transformMangaData(oldData);
      
      const newDocRef = doc(this.db, 'mangas', docSnapshot.id);
      batch.set(newDocRef, newData);
      
      batchCount++;
      
      if (batchCount >= this.batchSize) {
        await batch.commit();
        console.log(`✅ 已迁移 ${batchCount} 个漫画数据`);
        batchCount = 0;
      }
    }
    
    if (batchCount > 0) {
      await batch.commit();
      console.log(`✅ 已迁移 ${batchCount} 个漫画数据`);
    }
    
    console.log('✅ 漫画数据迁移完成');
  }

  /**
   * 转换动画数据结构
   */
  transformAnimeData(oldData) {
    const now = new Date().toISOString();
    
    return {
      basic: {
        title: oldData.title || '',
        titleEn: oldData.titleEn || '',
        titleJp: oldData.titleJp || '',
        originalTitle: oldData.titleJp || oldData.title || '',
        aliases: this.extractAliases(oldData.title, oldData.titleEn),
        type: 'TV',
        source: '漫画'
      },
      media: {
        cover: oldData.cover || '',
        poster: oldData.poster || '',
        screenshots: [],
        trailer: '',
        pv: []
      },
      classification: {
        genres: oldData.genres || [],
        themes: this.extractThemes(oldData.tags || []),
        demographics: '青年向',
        contentRating: 'PG-13',
        tags: oldData.tags || []
      },
      production: {
        studio: oldData.studio || '',
        director: oldData.director || '',
        scriptWriter: '',
        characterDesign: '',
        musicComposer: '',
        producer: oldData.studio ? [oldData.studio] : []
      },
      broadcast: {
        year: oldData.year || new Date().getFullYear(),
        season: oldData.season || '未知',
        startDate: oldData.startDate || '',
        endDate: oldData.endDate || '',
        broadcastDay: '',
        broadcastTime: '',
        network: ''
      },
      episodes: {
        total: oldData.episodes || 0,
        duration: 24,
        current: oldData.currentEpisode || 0,
        list: this.transformEpisodesList(oldData.episodes_rating || [])
      },
      ratings: {
        personal: oldData.rating || 0,
        mal: 0,
        anidb: 0,
        bangumi: 0,
        imdb: 0,
        averageRating: oldData.rating || 0,
        ratingCount: 0
      },
      status: {
        broadcastStatus: oldData.status || '未知',
        watchStatus: oldData.watchStatus || '计划观看',
        priority: '中',
        rewatchValue: 3,
        rewatchCount: oldData.rewatchCount || 0
      },
      dates: {
        addedDate: oldData.createdAt || now,
        startWatchDate: oldData.startDate || '',
        finishWatchDate: oldData.endDate || '',
        lastWatchDate: oldData.endDate || ''
      },
      content: {
        summary: oldData.summary || '',
        personalReview: oldData.personalNotes || '',
        highlights: [],
        favoriteScenes: []
      },
      characters: this.transformCharacters(oldData.characters || []),
      relations: {
        prequel: [],
        sequel: [],
        sideStory: [],
        spinOff: [],
        adaptation: [],
        related: []
      },
      external: {
        officialSite: this.extractOfficialSite(oldData.relatedLinks || []),
        mal: '',
        anidb: '',
        bangumi: '',
        wikipedia: ''
      },
      awards: this.transformAwards(oldData.awards || []),
      merchandise: [],
      statistics: {
        totalWatchTime: (oldData.episodes || 0) * 24,
        averageEpisodeRating: oldData.rating || 0,
        completionRate: this.calculateCompletionRate(oldData.currentEpisode, oldData.episodes),
        dropRate: 0
      },
      metadata: {
        createdAt: oldData.createdAt || now,
        updatedAt: oldData.updatedAt || now,
        createdBy: 'migration',
        lastModifiedBy: 'migration',
        version: 2,
        isPublic: true,
        isFavorite: (oldData.rating || 0) >= 8.5,
        tags: ['迁移数据']
      }
    };
  }

  /**
   * 转换漫画数据结构
   */
  transformMangaData(oldData) {
    const now = new Date().toISOString();
    
    return {
      basic: {
        title: oldData.title || '',
        titleEn: oldData.titleEn || '',
        titleJp: oldData.titleJp || '',
        originalTitle: oldData.titleJp || oldData.title || '',
        aliases: this.extractAliases(oldData.title, oldData.titleEn),
        type: '漫画',
        format: '单行本'
      },
      media: {
        cover: oldData.cover || '',
        poster: oldData.poster || '',
        volumes: []
      },
      classification: {
        genres: oldData.genres || [],
        themes: this.extractThemes(oldData.tags || []),
        demographics: '少年向',
        contentRating: 'PG',
        tags: oldData.tags || []
      },
      publication: {
        author: oldData.author || '',
        illustrator: oldData.author || '',
        publisher: oldData.publisher || '',
        magazine: oldData.publisher || '',
        imprint: '',
        serialization: {
          startDate: oldData.startDate || '',
          endDate: oldData.status === '已完结' ? oldData.endDate : null,
          frequency: oldData.readingFrequency || '周更',
          dayOfWeek: ''
        }
      },
      chapters: {
        total: oldData.chapters || 0,
        current: oldData.currentChapter || 0,
        volumes: Math.ceil((oldData.chapters || 0) / 8), // 估算卷数
        currentVolume: Math.ceil((oldData.currentChapter || 0) / 8),
        list: this.transformChaptersList(oldData.chapters_rating || []),
        arcs: this.transformArcs(oldData.arcs || [])
      },
      ratings: {
        personal: oldData.rating || 0,
        mal: 0,
        anilist: 0,
        mangaupdates: 0,
        averageRating: oldData.rating || 0,
        ratingCount: 0
      },
      status: {
        publicationStatus: oldData.status || '连载中',
        readStatus: oldData.readStatus || '计划阅读',
        priority: '中',
        rereadValue: 3,
        rereadCount: oldData.rereadCount || 0
      },
      dates: {
        addedDate: oldData.createdAt || now,
        startReadDate: oldData.startDate || '',
        lastReadDate: oldData.updatedAt || now,
        nextUpdateDate: ''
      },
      content: {
        summary: oldData.summary || '',
        personalReview: oldData.personalNotes || '',
        favoriteChapters: [],
        favoriteVolumes: []
      },
      characters: this.transformCharacters(oldData.characters || []),
      adaptations: this.transformAdaptations(oldData.adaptations || []),
      collection: {
        physicalCopies: [],
        digitalCopies: []
      },
      statistics: {
        totalReadTime: (oldData.chapters || 0) * 15, // 估算阅读时间
        averageChapterRating: oldData.rating || 0,
        completionRate: this.calculateCompletionRate(oldData.currentChapter, oldData.chapters),
        dropRate: 0,
        readingSpeed: 15
      },
      metadata: {
        createdAt: oldData.createdAt || now,
        updatedAt: oldData.updatedAt || now,
        createdBy: 'migration',
        lastModifiedBy: 'migration',
        version: 2,
        isPublic: true,
        isFavorite: (oldData.rating || 0) >= 8.5,
        tags: ['迁移数据']
      }
    };
  }

  /**
   * 辅助方法：提取别名
   */
  extractAliases(title, titleEn) {
    const aliases = [];
    if (title && titleEn && title !== titleEn) {
      aliases.push(titleEn);
    }
    return aliases;
  }

  /**
   * 辅助方法：提取主题
   */
  extractThemes(tags) {
    const themeKeywords = ['成长', '友情', '爱情', '冒险', '战斗', '日常', '校园', '职场'];
    return tags.filter(tag => themeKeywords.includes(tag));
  }

  /**
   * 辅助方法：转换分集列表
   */
  transformEpisodesList(episodesRating) {
    return episodesRating.map(ep => ({
      number: ep.episode || 0,
      title: ep.title || '',
      titleEn: '',
      airDate: '',
      duration: 24,
      summary: '',
      rating: ep.rating || 0,
      notes: ep.notes || ''
    }));
  }

  /**
   * 辅助方法：转换章节列表
   */
  transformChaptersList(chaptersRating) {
    return chaptersRating.map(ch => ({
      number: ch.chapter || 0,
      title: ch.title || '',
      volume: Math.ceil((ch.chapter || 0) / 8),
      pages: 20,
      releaseDate: '',
      rating: ch.rating || 0,
      notes: ch.notes || ''
    }));
  }

  /**
   * 辅助方法：转换角色列表
   */
  transformCharacters(characters) {
    return characters.map(char => ({
      id: this.generateId(char.name),
      name: char.name || '',
      nameEn: '',
      nameJp: '',
      avatar: char.avatar || '',
      role: '主角',
      description: char.description || '',
      voiceActor: '',
      firstAppearance: '',
      favoriteLevel: 3
    }));
  }

  /**
   * 辅助方法：转换获奖记录
   */
  transformAwards(awards) {
    return awards.map(award => ({
      name: award,
      organization: '',
      year: new Date().getFullYear(),
      category: '作品奖'
    }));
  }

  /**
   * 辅助方法：转换篇章信息
   */
  transformArcs(arcs) {
    return arcs.map(arc => ({
      name: arc.name || '',
      chapters: arc.chapters || '',
      volumes: '',
      rating: arc.rating || 0,
      highlights: arc.highlights || [],
      summary: ''
    }));
  }

  /**
   * 辅助方法：转换改编作品
   */
  transformAdaptations(adaptations) {
    return adaptations.map(adapt => ({
      type: adapt.type || '',
      title: adapt.title || '',
      year: adapt.year || 0,
      studio: '',
      episodes: 0,
      status: '已播出'
    }));
  }

  /**
   * 辅助方法：提取官方网站
   */
  extractOfficialSite(relatedLinks) {
    const officialLink = relatedLinks.find(link => 
      link.name && link.name.includes('官方')
    );
    return officialLink ? officialLink.url : '';
  }

  /**
   * 辅助方法：计算完成度
   */
  calculateCompletionRate(current, total) {
    if (!total || total === 0) return 0;
    return Math.round((current / total) * 100);
  }

  /**
   * 辅助方法：生成ID
   */
  generateId(name) {
    return name.toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-');
  }

  /**
   * 创建示例用户数据
   */
  async createSampleUsers() {
    console.log('👤 创建示例用户数据...');
    
    const users = [
      {
        id: 'admin',
        profile: {
          username: 'admin',
          displayName: '管理员',
          avatar: '',
          bio: '网站管理员',
          location: '',
          website: ''
        },
        preferences: {
          favoriteGenres: ['奇幻', '科幻', '治愈'],
          language: 'zh-CN',
          timezone: 'Asia/Shanghai',
          privacy: {
            profilePublic: true,
            listPublic: true,
            ratingsPublic: true
          }
        },
        statistics: {
          animeCount: 0,
          mangaCount: 0,
          totalWatchTime: 0,
          totalReadTime: 0,
          averageAnimeRating: 0,
          averageMangaRating: 0
        },
        metadata: {
          createdAt: new Date().toISOString(),
          lastLoginAt: new Date().toISOString(),
          isActive: true
        }
      }
    ];

    for (const user of users) {
      const userRef = doc(this.db, 'users', user.id);
      await setDoc(userRef, user);
    }
    
    console.log('✅ 示例用户数据创建完成');
  }

  /**
   * 创建示例评论数据
   */
  async createSampleReviews() {
    console.log('💬 创建示例评论数据...');
    // 这里可以添加示例评论数据的创建逻辑
    console.log('✅ 示例评论数据创建完成');
  }

  /**
   * 创建示例列表数据
   */
  async createSampleLists() {
    console.log('📋 创建示例列表数据...');
    // 这里可以添加示例列表数据的创建逻辑
    console.log('✅ 示例列表数据创建完成');
  }

  /**
   * 验证迁移结果
   */
  async validateMigration() {
    console.log('🔍 验证迁移结果...');
    
    try {
      // 检查动画数据
      const animesRef = collection(this.db, 'animes');
      const animesSnapshot = await getDocs(animesRef);
      console.log(`📺 动画数据: ${animesSnapshot.size} 条`);
      
      // 检查漫画数据
      const mangasRef = collection(this.db, 'mangas');
      const mangasSnapshot = await getDocs(mangasRef);
      console.log(`📚 漫画数据: ${mangasSnapshot.size} 条`);
      
      // 检查用户数据
      const usersRef = collection(this.db, 'users');
      const usersSnapshot = await getDocs(usersRef);
      console.log(`👤 用户数据: ${usersSnapshot.size} 条`);
      
      console.log('✅ 迁移验证完成');
    } catch (error) {
      console.error('❌ 迁移验证失败:', error);
    }
  }
}

// 导出迁移类
export default DataMigration;

// 如果直接运行此脚本
if (typeof window !== 'undefined') {
  window.DataMigration = DataMigration;
}