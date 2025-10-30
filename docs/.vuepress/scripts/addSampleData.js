// Firebase示例数据添加脚本
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, doc, setDoc } from 'firebase/firestore';

// Firebase配置 - 请替换为你的实际配置
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "your-app-id"
};

// 初始化Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// 示例动画数据
const sampleAnimes = [
  {
    id: 'frieren',
    title: '葬送的芙莉莲',
    subtitle: 'Frieren: Beyond Journey\'s End / 葬送のフリーレン',
    coverImage: 'https://via.placeholder.com/300x420/FF6B6B/FFFFFF?text=葬送的芙莉莲',
    genres: ['奇幻', '冒险', '剧情'],
    studio: 'MADHOUSE',
    airDate: '2023年9月',
    totalEpisodes: 28,
    rating: 9.5,
    status: 'completed',
    summary: '在打倒魔王的冒险结束后，魔法使芙莉莲送别了勇者辛美尔一行人。对于活了一千多年的精灵来说，与人类共度的十年只不过是人生中的一瞬间。没有理解人类的芙莉莲，无法理解辛美尔临终时的话语，带着后悔踏上了新的旅程。',
    characters: [
      {
        name: '芙莉莲',
        role: '主角',
        avatar: 'https://via.placeholder.com/80x80/4ECDC4/FFFFFF?text=芙莉莲',
        description: '活了一千多年的精灵魔法使，曾是勇者队伍的一员'
      },
      {
        name: '费伦',
        role: '主角',
        avatar: 'https://via.placeholder.com/80x80/4ECDC4/FFFFFF?text=费伦',
        description: '芙莉莲的弟子，年轻的人类魔法使'
      },
      {
        name: '修塔尔克',
        role: '主角',
        avatar: 'https://via.placeholder.com/80x80/4ECDC4/FFFFFF?text=修塔尔克',
        description: '年轻的战士，艾森的弟子'
      }
    ],
    impressions: [
      {
        title: '时间的意义',
        content: '这部作品让我重新思考了时间的意义。对于不同寿命的种族来说，时间的价值是如此不同。'
      },
      {
        title: '成长与回忆',
        content: '芙莉莲通过旅程逐渐理解人类的情感，这种成长过程非常感人。'
      }
    ],
    episodes: [
      {
        number: 1,
        title: '冒险的结束',
        rating: 9.0,
        comment: '完美的开篇，建立了整个故事的基调'
      },
      {
        number: 2,
        title: '不应该存在的魔法',
        rating: 9.2,
        comment: '芙莉莲开始理解人类情感的重要性'
      }
    ],
    awards: [
      {
        name: '2024年度最佳动画',
        year: '2024',
        category: '剧情类'
      }
    ],
    links: [
      {
        name: '官方网站',
        url: 'https://frieren-anime.jp/',
        icon: '🌐',
        description: '动画官方网站'
      },
      {
        name: 'MyAnimeList',
        url: 'https://myanimelist.net/anime/52991',
        icon: '📊',
        description: 'MAL评分页面'
      }
    ],
    records: [
      {
        date: '2023-09-29',
        title: '开始观看',
        description: '开始追这部期待已久的作品'
      },
      {
        date: '2024-03-22',
        title: '完成观看',
        description: '看完了第一季，期待第二季'
      }
    ]
  },
  {
    id: 'demon-slayer',
    title: '鬼灭之刃',
    subtitle: 'Demon Slayer / 鬼滅の刃',
    coverImage: 'https://via.placeholder.com/300x420/FF6B6B/FFFFFF?text=鬼灭之刃',
    genres: ['动作', '超自然', '历史'],
    studio: 'ufotable',
    airDate: '2019年4月',
    totalEpisodes: 44,
    rating: 8.7,
    status: 'completed',
    summary: '大正时代，卖炭少年炭治郎的平凡幸福生活，在家人遭到鬼杀害的那一天发生了巨变。唯一幸存但变成了鬼的妹妹祢豆子，和变成鬼的祢豆子一起踏上了斩鬼的旅程。',
    characters: [
      {
        name: '灶门炭治郎',
        role: '主角',
        avatar: 'https://via.placeholder.com/80x80/4ECDC4/FFFFFF?text=炭治郎',
        description: '心地善良的少年，为了拯救妹妹而成为鬼杀队员'
      },
      {
        name: '灶门祢豆子',
        role: '主角',
        avatar: 'https://via.placeholder.com/80x80/4ECDC4/FFFFFF?text=祢豆子',
        description: '炭治郎的妹妹，变成鬼后仍保持人性'
      }
    ],
    impressions: [
      {
        title: '兄妹之情',
        content: '炭治郎和祢豆子的兄妹情深深打动了我，这是整部作品的核心。'
      }
    ],
    episodes: [
      {
        number: 19,
        title: '火神',
        rating: 10.0,
        comment: '神作级别的一集，ufotable的作画巅峰'
      }
    ],
    awards: [
      {
        name: '2020年度最受欢迎动画',
        year: '2020',
        category: '人气奖'
      }
    ],
    links: [
      {
        name: '官方网站',
        url: 'https://kimetsu.com/',
        icon: '🌐',
        description: '动画官方网站'
      }
    ],
    records: [
      {
        date: '2019-04-06',
        title: '开始观看',
        description: '开始追这部热门作品'
      }
    ]
  }
];

// 示例漫画数据
const sampleMangas = [
  {
    id: 'spy-family',
    title: '间谍过家家',
    subtitle: 'SPY×FAMILY / スパイファミリー',
    coverImage: 'https://via.placeholder.com/300x420/FF6B6B/FFFFFF?text=间谍过家家',
    author: '远藤达哉',
    genres: ['喜剧', '动作', '家庭'],
    magazine: '少年Jump+',
    serialization: '2019年3月 - 连载中',
    currentChapter: 95,
    rating: 9.3,
    status: 'ongoing',
    summary: '为了潜入名门伊甸学园，间谍"黄昏"需要在一周内组建家庭。他收养了能读心的少女阿尼亚作为女儿，与杀手约儿假结婚。三人各自隐瞒身份，组成了这个充满秘密的"伪装家庭"。',
    characters: [
      {
        name: '洛伊德·福杰',
        role: '父亲/间谍',
        avatar: 'https://via.placeholder.com/80x80/4ECDC4/FFFFFF?text=洛伊德',
        description: '代号"黄昏"的顶级间谍，为了任务组建了伪装家庭'
      },
      {
        name: '约儿·福杰',
        role: '母亲/杀手',
        avatar: 'https://via.placeholder.com/80x80/4ECDC4/FFFFFF?text=约儿',
        description: '代号"荆棘公主"的杀手，与洛伊德假结婚'
      },
      {
        name: '阿尼亚·福杰',
        role: '女儿/超能力者',
        avatar: 'https://via.placeholder.com/80x80/4ECDC4/FFFFFF?text=阿尼亚',
        description: '能够读心的少女，被洛伊德收养'
      }
    ],
    impressions: [
      {
        title: '温馨的伪装家庭',
        content: '虽然每个人都有秘密，但这个家庭却意外地温馨和谐，让人感动。'
      },
      {
        title: '阿尼亚太可爱了',
        content: '阿尼亚的表情包简直是治愈系，每次看到都会心情变好。'
      }
    ],
    chapters: [
      {
        number: 1,
        title: '行动开始',
        rating: 9.0,
        comment: '完美的开篇，建立了整个故事的设定'
      },
      {
        number: 2,
        title: '寻找妻子',
        rating: 8.8,
        comment: '约儿的登场，伪装家庭开始成形'
      }
    ],
    progress: {
      current: 95,
      total: 95,
      startDate: '2019-03-25',
      lastUpdate: '2024-01-15',
      readingDays: 1500,
      averageRating: 9.1
    },
    awards: [
      {
        name: '2022年度最佳漫画',
        year: '2022',
        category: '喜剧类'
      }
    ],
    related: [
      {
        title: '间谍过家家 动画版',
        type: '动画',
        year: '2022',
        image: 'https://via.placeholder.com/150x200/4ECDC4/FFFFFF?text=动画版'
      }
    ],
    links: [
      {
        name: '官方网站',
        url: 'https://spy-family.net/',
        icon: '🌐',
        description: '漫画官方网站'
      },
      {
        name: '少年Jump+',
        url: 'https://shonenjumpplus.com/',
        icon: '📚',
        description: '连载平台'
      }
    ]
  },
  {
    id: 'one-piece',
    title: '海贼王',
    subtitle: 'ONE PIECE / ワンピース',
    coverImage: 'https://via.placeholder.com/300x420/FF6B6B/FFFFFF?text=海贼王',
    author: '尾田荣一郎',
    genres: ['冒险', '动作', '喜剧'],
    magazine: '周刊少年Jump',
    serialization: '1997年7月 - 连载中',
    currentChapter: 1100,
    rating: 9.8,
    status: 'ongoing',
    summary: '拥有橡胶能力的少年路飞，为了成为海贼王而踏上伟大航路的冒险旅程。',
    characters: [
      {
        name: '蒙奇·D·路飞',
        role: '船长',
        avatar: 'https://via.placeholder.com/80x80/4ECDC4/FFFFFF?text=路飞',
        description: '草帽海贼团船长，拥有橡胶果实能力'
      }
    ],
    impressions: [
      {
        title: '永不落幕的冒险',
        content: '25年的连载，尾田老师创造了一个无比宏大的世界。'
      }
    ],
    chapters: [
      {
        number: 1,
        title: 'ROMANCE DAWN',
        rating: 9.5,
        comment: '传奇的开始'
      }
    ],
    progress: {
      current: 1100,
      total: 1100,
      startDate: '2000-01-01',
      lastUpdate: '2024-01-15',
      readingDays: 8000,
      averageRating: 9.5
    },
    awards: [
      {
        name: '吉尼斯世界纪录',
        year: '2015',
        category: '单一作者创作发行量最高的漫画系列'
      }
    ],
    related: [
      {
        title: '海贼王 动画版',
        type: '动画',
        year: '1999',
        image: 'https://via.placeholder.com/150x200/4ECDC4/FFFFFF?text=动画版'
      }
    ],
    links: [
      {
        name: '官方网站',
        url: 'https://one-piece.com/',
        icon: '🌐',
        description: '漫画官方网站'
      }
    ]
  }
];

// 添加数据到Firebase的函数
async function addSampleData() {
  try {
    console.log('开始添加示例数据到Firebase...');
    
    // 添加动画数据
    console.log('添加动画数据...');
    for (const anime of sampleAnimes) {
      await setDoc(doc(db, 'animes', anime.id), anime);
      console.log(`已添加动画: ${anime.title}`);
    }
    
    // 添加漫画数据
    console.log('添加漫画数据...');
    for (const manga of sampleMangas) {
      await setDoc(doc(db, 'mangas', manga.id), manga);
      console.log(`已添加漫画: ${manga.title}`);
    }
    
    console.log('所有示例数据添加完成！');
    
  } catch (error) {
    console.error('添加数据时出错:', error);
  }
}

// 如果直接运行此脚本，则执行添加数据操作
if (typeof window === 'undefined') {
  // Node.js环境
  addSampleData();
} else {
  // 浏览器环境，导出函数供调用
  window.addSampleData = addSampleData;
}

export { addSampleData };