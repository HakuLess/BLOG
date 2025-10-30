# 增强的Firebase数据库结构设计

## 🎯 设计目标

1. **可扩展性**: 支持未来功能扩展
2. **性能优化**: 合理的索引和查询结构
3. **数据完整性**: 规范化的数据格式
4. **用户体验**: 支持个性化和社交功能

## 📋 集合结构设计

### 1. animes 集合（动画数据）

```json
{
  "id": "frieren-2023", // 文档ID: 作品名-年份
  "basic": {
    "title": "葬送的芙莉莲",
    "titleEn": "Frieren: Beyond Journey's End",
    "titleJp": "葬送のフリーレン",
    "originalTitle": "葬送のフリーレン", // 原始标题
    "aliases": ["芙莉莲", "Frieren"], // 别名数组
    "type": "TV", // TV/OVA/Movie/Special
    "source": "漫画" // 原作类型
  },
  "media": {
    "cover": "https://example.com/frieren-cover.jpg",
    "poster": "https://example.com/frieren-poster.jpg",
    "screenshots": [ // 截图数组
      "https://example.com/screenshot1.jpg",
      "https://example.com/screenshot2.jpg"
    ],
    "trailer": "https://youtube.com/watch?v=xxx", // 预告片链接
    "pv": [ // PV视频
      {
        "title": "第1弹PV",
        "url": "https://youtube.com/watch?v=xxx",
        "duration": "01:30"
      }
    ]
  },
  "classification": {
    "genres": ["奇幻", "冒险", "剧情"], // 类型
    "themes": ["成长", "友情", "时间"], // 主题
    "demographics": "青年向", // 受众群体
    "contentRating": "PG-13", // 内容分级
    "tags": ["治愈", "魔法", "精灵"] // 用户标签
  },
  "production": {
    "studio": "MADHOUSE", // 制作公司
    "director": "斋藤圭一郎", // 导演
    "scriptWriter": "铃木智尋", // 脚本
    "characterDesign": "长泽翔子", // 角色设计
    "musicComposer": "Evan Call", // 音乐
    "producer": ["日本テレビ", "MADHOUSE"] // 制作方
  },
  "broadcast": {
    "year": 2023,
    "season": "秋季", // 春季/夏季/秋季/冬季
    "startDate": "2023-09-29",
    "endDate": "2024-03-22",
    "broadcastDay": "金曜日", // 播出日
    "broadcastTime": "23:00", // 播出时间
    "network": "日本テレビ" // 播出电视台
  },
  "episodes": {
    "total": 28, // 总集数
    "duration": 24, // 单集时长(分钟)
    "current": 28, // 当前观看集数
    "list": [ // 分集信息
      {
        "number": 1,
        "title": "冒险的结束",
        "titleEn": "The Journey's End",
        "airDate": "2023-09-29",
        "duration": 24,
        "summary": "勇者一行打倒魔王后...",
        "rating": 9.0,
        "notes": "完美的开篇"
      }
    ]
  },
  "ratings": {
    "personal": 9.5, // 个人评分 (0-10)
    "mal": 9.34, // MyAnimeList评分
    "anidb": 8.95, // AniDB评分
    "bangumi": 9.1, // Bangumi评分
    "imdb": 8.8, // IMDB评分
    "averageRating": 9.1, // 平均评分
    "ratingCount": 125000 // 评分人数
  },
  "status": {
    "broadcastStatus": "已完结", // 播出状态
    "watchStatus": "已完成", // 个人观看状态
    "priority": "高", // 观看优先级
    "rewatchValue": 5, // 重看价值(1-5)
    "rewatchCount": 2 // 重看次数
  },
  "dates": {
    "addedDate": "2023-09-01", // 添加到列表日期
    "startWatchDate": "2023-09-29", // 开始观看日期
    "finishWatchDate": "2024-03-22", // 完成观看日期
    "lastWatchDate": "2024-03-22" // 最后观看日期
  },
  "content": {
    "summary": "在打倒了魔王的勇者一行解散后...", // 剧情简介
    "personalReview": "这是一部关于时间和成长的作品...", // 个人评价
    "highlights": ["第16集", "第21集"], // 精彩集数
    "favoriteScenes": [ // 喜爱场景
      {
        "episode": 16,
        "timestamp": "12:30",
        "description": "芙莉莲的回忆"
      }
    ]
  },
  "characters": [
    {
      "id": "frieren",
      "name": "芙莉莲",
      "nameEn": "Frieren",
      "avatar": "https://example.com/frieren-avatar.jpg",
      "role": "主角", // 主角/配角/反派
      "description": "精灵族魔法师，勇者队伍的成员",
      "voiceActor": "種﨑敦美", // 声优
      "favoriteLevel": 5 // 喜爱程度(1-5)
    }
  ],
  "relations": {
    "prequel": [], // 前作
    "sequel": [], // 续作
    "sideStory": [], // 外传
    "spinOff": [], // 衍生作品
    "adaptation": ["frieren-manga"], // 改编自
    "related": [] // 相关作品
  },
  "external": {
    "officialSite": "https://frieren-anime.jp/",
    "mal": "https://myanimelist.net/anime/52991",
    "anidb": "https://anidb.net/anime/17617",
    "bangumi": "https://bgm.tv/subject/394812",
    "wikipedia": "https://ja.wikipedia.org/wiki/葬送のフリーレン"
  },
  "awards": [
    {
      "name": "2024年度最佳动画",
      "organization": "东京动画奖",
      "year": 2024,
      "category": "年度作品奖"
    }
  ],
  "merchandise": [ // 周边商品
    {
      "type": "BD/DVD",
      "title": "葬送的芙莉莲 第1卷",
      "releaseDate": "2024-01-24",
      "price": 7700,
      "owned": true
    }
  ],
  "statistics": {
    "totalWatchTime": 672, // 总观看时间(分钟)
    "averageEpisodeRating": 9.2, // 平均分集评分
    "completionRate": 100, // 完成度百分比
    "dropRate": 0 // 弃番率
  },
  "metadata": {
    "createdAt": "2024-01-01T00:00:00Z",
    "updatedAt": "2024-01-01T00:00:00Z",
    "createdBy": "admin", // 创建者
    "lastModifiedBy": "admin", // 最后修改者
    "version": 1, // 数据版本
    "isPublic": true, // 是否公开
    "isFavorite": true, // 是否收藏
    "tags": ["个人收藏", "推荐作品"] // 个人标签
  }
}
```

### 2. mangas 集合（漫画数据）

```json
{
  "id": "spy-family-2019",
  "basic": {
    "title": "间谍过家家",
    "titleEn": "SPY×FAMILY",
    "titleJp": "スパイファミリー",
    "originalTitle": "スパイファミリー",
    "aliases": ["间谍家族", "Spy Family"],
    "type": "漫画", // 漫画/轻小说/网络漫画
    "format": "单行本" // 连载形式
  },
  "media": {
    "cover": "https://example.com/spy-family-cover.jpg",
    "poster": "https://example.com/spy-family-poster.jpg",
    "volumes": [ // 单行本封面
      {
        "volume": 1,
        "cover": "https://example.com/vol1-cover.jpg",
        "releaseDate": "2019-07-04"
      }
    ]
  },
  "classification": {
    "genres": ["喜剧", "动作", "家庭"],
    "themes": ["间谍", "家庭", "学校"],
    "demographics": "少年向",
    "contentRating": "PG",
    "tags": ["搞笑", "温馨", "日常"]
  },
  "publication": {
    "author": "远藤达哉", // 作者
    "illustrator": "远藤达哉", // 插画师
    "publisher": "集英社", // 出版社
    "magazine": "少年Jump+", // 连载杂志
    "imprint": "ジャンプコミックス+", // 出版标签
    "serialization": {
      "startDate": "2019-03-25",
      "endDate": null, // null表示连载中
      "frequency": "隔周更新", // 更新频率
      "dayOfWeek": "月曜日" // 更新日
    }
  },
  "chapters": {
    "total": 95, // 总话数
    "current": 95, // 当前阅读话数
    "volumes": 13, // 单行本卷数
    "currentVolume": 13, // 当前阅读卷数
    "list": [
      {
        "number": 1,
        "title": "家庭组建",
        "volume": 1,
        "pages": 19,
        "releaseDate": "2019-03-25",
        "rating": 9.5,
        "notes": "设定展开完美"
      }
    ],
    "arcs": [ // 篇章信息
      {
        "name": "入学篇",
        "chapters": "第1-17话",
        "volumes": "第1-2卷",
        "rating": 9.0,
        "highlights": ["家庭组建", "入学面试"],
        "summary": "劳埃德组建假家庭的故事"
      }
    ]
  },
  "ratings": {
    "personal": 9.3,
    "mal": 9.05,
    "anilist": 8.9,
    "mangaupdates": 8.7,
    "averageRating": 8.9,
    "ratingCount": 89000
  },
  "status": {
    "publicationStatus": "连载中",
    "readStatus": "连载追更中",
    "priority": "高",
    "rereadValue": 4,
    "rereadCount": 3
  },
  "dates": {
    "addedDate": "2022-04-01",
    "startReadDate": "2022-04-01",
    "lastReadDate": "2024-01-15",
    "nextUpdateDate": "2024-01-22" // 下次更新日期
  },
  "content": {
    "summary": "为了潜入名门伊甸学园...",
    "personalReview": "这部作品最大的魅力在于...",
    "favoriteChapters": ["第1话", "第37话"],
    "favoriteVolumes": [1, 5, 8]
  },
  "characters": [
    {
      "id": "lloyd-forger",
      "name": "劳埃德·福杰",
      "nameEn": "Lloyd Forger",
      "nameJp": "ロイド・フォージャー",
      "avatar": "https://example.com/lloyd-avatar.jpg",
      "role": "主角",
      "description": "精英间谍，代号黄昏",
      "firstAppearance": "第1话",
      "favoriteLevel": 5
    }
  ],
  "adaptations": [
    {
      "type": "动画",
      "title": "间谍过家家",
      "year": 2022,
      "studio": "WIT STUDIO × CloverWorks",
      "episodes": 25,
      "status": "已播出"
    },
    {
      "type": "真人电影",
      "title": "SPY×FAMILY CODE: White",
      "year": 2023,
      "status": "已上映"
    }
  ],
  "collection": {
    "physicalCopies": [ // 实体收藏
      {
        "volume": 1,
        "format": "单行本",
        "condition": "全新",
        "purchaseDate": "2022-04-15",
        "price": 528
      }
    ],
    "digitalCopies": [ // 数字版本
      {
        "platform": "少年Jump+",
        "volumes": [1, 2, 3],
        "purchaseDate": "2022-04-01"
      }
    ]
  },
  "statistics": {
    "totalReadTime": 1200, // 总阅读时间(分钟)
    "averageChapterRating": 9.1,
    "completionRate": 100,
    "dropRate": 0,
    "readingSpeed": 15 // 每话平均阅读时间(分钟)
  },
  "metadata": {
    "createdAt": "2024-01-01T00:00:00Z",
    "updatedAt": "2024-01-01T00:00:00Z",
    "createdBy": "admin",
    "lastModifiedBy": "admin",
    "version": 1,
    "isPublic": true,
    "isFavorite": true,
    "tags": ["个人收藏", "推荐作品"]
  }
}
```

### 3. users 集合（用户数据）- 新增

```json
{
  "id": "user123",
  "profile": {
    "username": "AnimeOtaku",
    "displayName": "动漫爱好者",
    "avatar": "https://example.com/avatar.jpg",
    "bio": "热爱动漫的程序员",
    "location": "Tokyo, Japan",
    "website": "https://myblog.com"
  },
  "preferences": {
    "favoriteGenres": ["奇幻", "科幻", "治愈"],
    "language": "zh-CN",
    "timezone": "Asia/Shanghai",
    "privacy": {
      "profilePublic": true,
      "listPublic": true,
      "ratingsPublic": true
    }
  },
  "statistics": {
    "animeCount": 150,
    "mangaCount": 80,
    "totalWatchTime": 15000, // 分钟
    "totalReadTime": 8000, // 分钟
    "averageAnimeRating": 7.8,
    "averageMangaRating": 8.2
  },
  "metadata": {
    "createdAt": "2024-01-01T00:00:00Z",
    "lastLoginAt": "2024-01-15T10:30:00Z",
    "isActive": true
  }
}
```

### 4. reviews 集合（评论数据）- 新增

```json
{
  "id": "review123",
  "contentId": "frieren-2023", // 关联的动画/漫画ID
  "contentType": "anime", // anime/manga
  "userId": "user123",
  "rating": 9.5,
  "title": "时间与成长的赞歌",
  "content": "这是一部关于时间流逝和成长的杰作...",
  "spoilerLevel": 0, // 0-无剧透, 1-轻微剧透, 2-重度剧透
  "tags": ["推荐", "治愈", "深度"],
  "likes": 25,
  "dislikes": 2,
  "replies": 8,
  "isPublic": true,
  "metadata": {
    "createdAt": "2024-01-01T00:00:00Z",
    "updatedAt": "2024-01-01T00:00:00Z"
  }
}
```

### 5. lists 集合（自定义列表）- 新增

```json
{
  "id": "list123",
  "userId": "user123",
  "name": "2024年度最佳",
  "description": "我心目中2024年最优秀的动漫作品",
  "type": "custom", // custom/system
  "category": "anime", // anime/manga/mixed
  "items": [
    {
      "contentId": "frieren-2023",
      "contentType": "anime",
      "addedAt": "2024-01-01T00:00:00Z",
      "note": "年度最佳治愈番"
    }
  ],
  "isPublic": true,
  "tags": ["年度推荐", "治愈"],
  "followers": 156,
  "metadata": {
    "createdAt": "2024-01-01T00:00:00Z",
    "updatedAt": "2024-01-01T00:00:00Z"
  }
}
```

## 🔍 索引优化策略

### 复合索引配置

```javascript
// animes集合索引
db.animes.createIndex({ "classification.genres": 1, "ratings.personal": -1 })
db.animes.createIndex({ "broadcast.year": -1, "ratings.averageRating": -1 })
db.animes.createIndex({ "status.broadcastStatus": 1, "ratings.personal": -1 })
db.animes.createIndex({ "metadata.isFavorite": 1, "ratings.personal": -1 })
db.animes.createIndex({ "dates.finishWatchDate": -1 })

// mangas集合索引
db.mangas.createIndex({ "classification.genres": 1, "ratings.personal": -1 })
db.mangas.createIndex({ "publication.serialization.startDate": -1, "ratings.averageRating": -1 })
db.mangas.createIndex({ "status.publicationStatus": 1, "ratings.personal": -1 })
db.mangas.createIndex({ "metadata.isFavorite": 1, "ratings.personal": -1 })

// 全文搜索索引
db.animes.createIndex({ 
  "basic.title": "text", 
  "basic.titleEn": "text", 
  "basic.titleJp": "text",
  "content.summary": "text"
})
```

## 🛡️ 安全规则

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // 动画数据 - 只读
    match /animes/{animeId} {
      allow read: if true;
      allow write: if request.auth != null && 
                      request.auth.token.admin == true;
    }
    
    // 漫画数据 - 只读
    match /mangas/{mangaId} {
      allow read: if true;
      allow write: if request.auth != null && 
                      request.auth.token.admin == true;
    }
    
    // 用户数据 - 用户可编辑自己的数据
    match /users/{userId} {
      allow read: if true;
      allow write: if request.auth != null && 
                      request.auth.uid == userId;
    }
    
    // 评论数据 - 用户可编辑自己的评论
    match /reviews/{reviewId} {
      allow read: if true;
      allow create: if request.auth != null;
      allow update, delete: if request.auth != null && 
                               request.auth.uid == resource.data.userId;
    }
    
    // 列表数据 - 用户可编辑自己的列表
    match /lists/{listId} {
      allow read: if resource.data.isPublic == true || 
                     (request.auth != null && 
                      request.auth.uid == resource.data.userId);
      allow create: if request.auth != null;
      allow update, delete: if request.auth != null && 
                               request.auth.uid == resource.data.userId;
    }
  }
}
```

## 📈 性能优化建议

1. **分页查询**: 使用 `limit()` 和 `startAfter()` 实现分页
2. **字段选择**: 使用 `select()` 只获取需要的字段
3. **缓存策略**: 对热门数据启用离线缓存
4. **批量操作**: 使用 `batch()` 进行批量写入
5. **监听优化**: 合理使用实时监听，避免不必要的网络请求

## 🔄 数据迁移策略

1. **版本控制**: 在 `metadata.version` 字段记录数据版本
2. **向后兼容**: 新字段使用默认值，保持旧版本兼容
3. **渐进迁移**: 分批次迁移数据，避免一次性大量操作
4. **回滚机制**: 保留迁移前的数据备份

这个增强的表结构设计提供了更完整的数据模型，支持用户系统、评论功能、自定义列表等高级特性，同时保持了良好的性能和可扩展性。