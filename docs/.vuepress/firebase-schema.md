# Firebase 数据库结构

## 集合结构

### animes 集合（动画数据）

```json
{
  "id": "frieren", // 文档ID
  "title": "葬送的芙莉莲", // 中文标题
  "titleEn": "Frieren: Beyond Journey's End", // 英文标题
  "titleJp": "葬送のフリーレン", // 日文标题
  "cover": "https://example.com/frieren-cover.jpg", // 封面图片URL
  "poster": "https://example.com/frieren-poster.jpg", // 海报图片URL
  "genres": ["奇幻", "冒险", "剧情"], // 类型数组
  "status": "已完结", // 状态：连载中、已完结、计划观看
  "episodes": 28, // 总集数
  "currentEpisode": 28, // 当前观看集数
  "rating": 9.5, // 个人评分 (0-10)
  "year": 2023, // 年份
  "season": "秋季", // 季度
  "studio": "MADHOUSE", // 制作公司
  "director": "斋藤圭一郎", // 导演
  "summary": "在打倒了魔王的勇者一行解散后...", // 剧情简介
  "tags": ["治愈", "成长", "友情"], // 标签
  "watchStatus": "已完成", // 观看状态
  "startDate": "2023-09-29", // 开始观看日期
  "endDate": "2024-03-22", // 完成观看日期
  "rewatchCount": 2, // 重看次数
  "characters": [ // 主要角色
    {
      "name": "芙莉莲",
      "avatar": "https://example.com/frieren-avatar.jpg",
      "description": "精灵族魔法师，勇者队伍的成员"
    }
  ],
  "episodes_rating": [ // 分集评分
    {
      "episode": 1,
      "title": "冒险的结束",
      "rating": 9.0,
      "notes": "完美的开篇"
    }
  ],
  "personalNotes": "这是一部关于时间和成长的作品...", // 个人观后感
  "awards": ["2024年度最佳动画"], // 获奖记录
  "relatedLinks": [ // 相关链接
    {
      "name": "官方网站",
      "url": "https://frieren-anime.jp/"
    }
  ],
  "createdAt": "2024-01-01T00:00:00Z", // 创建时间
  "updatedAt": "2024-01-01T00:00:00Z" // 更新时间
}
```

### mangas 集合（漫画数据）

```json
{
  "id": "spy-family", // 文档ID
  "title": "间谍过家家", // 中文标题
  "titleEn": "SPY×FAMILY", // 英文标题
  "titleJp": "スパイファミリー", // 日文标题
  "cover": "https://example.com/spy-family-cover.jpg", // 封面图片URL
  "poster": "https://example.com/spy-family-poster.jpg", // 海报图片URL
  "genres": ["喜剧", "动作", "家庭"], // 类型数组
  "status": "连载中", // 状态：连载中、已完结、计划阅读
  "chapters": 95, // 总话数
  "currentChapter": 95, // 当前阅读话数
  "rating": 9.3, // 个人评分 (0-10)
  "year": 2019, // 开始连载年份
  "author": "远藤达哉", // 作者
  "publisher": "少年Jump+", // 出版社/连载杂志
  "summary": "为了潜入名门伊甸学园...", // 剧情简介
  "tags": ["搞笑", "温馨", "日常"], // 标签
  "readStatus": "连载追更中", // 阅读状态
  "startDate": "2022-04-01", // 开始阅读日期
  "readingFrequency": "每周更新", // 追更频率
  "rereadCount": 3, // 重读次数
  "characters": [ // 主要角色
    {
      "name": "劳埃德·福杰",
      "avatar": "https://example.com/lloyd-avatar.jpg",
      "description": "精英间谍，代号黄昏"
    }
  ],
  "chapters_rating": [ // 分章节评分
    {
      "chapter": 1,
      "title": "家庭组建",
      "rating": 9.5,
      "notes": "设定展开完美"
    }
  ],
  "arcs": [ // 篇章信息
    {
      "name": "入学篇",
      "chapters": "第1-17话",
      "rating": 9.0,
      "highlights": ["家庭组建", "入学面试"]
    }
  ],
  "personalNotes": "这部作品最大的魅力在于...", // 个人阅读感想
  "awards": ["2020年下一部漫画大奖第1位"], // 获奖记录
  "adaptations": [ // 改编作品
    {
      "type": "动画",
      "title": "间谍过家家",
      "year": 2022
    }
  ],
  "relatedLinks": [ // 相关链接
    {
      "name": "官方网站",
      "url": "https://spy-family.net/"
    }
  ],
  "createdAt": "2024-01-01T00:00:00Z", // 创建时间
  "updatedAt": "2024-01-01T00:00:00Z" // 更新时间
}
```

## 索引建议

为了提高查询性能，建议在Firebase控制台中创建以下复合索引：

### animes 集合索引
- `status` (升序) + `rating` (降序)
- `genres` (数组) + `rating` (降序)
- `year` (降序) + `rating` (降序)
- `rating` (降序) + `createdAt` (降序)

### mangas 集合索引
- `status` (升序) + `rating` (降序)
- `genres` (数组) + `rating` (降序)
- `year` (降序) + `rating` (降序)
- `rating` (降序) + `createdAt` (降序)

## 安全规则

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // 允许读取动画和漫画数据
    match /animes/{document} {
      allow read: if true;
      allow write: if false; // 只允许管理员写入
    }
    
    match /mangas/{document} {
      allow read: if true;
      allow write: if false; // 只允许管理员写入
    }
  }
}
```

## 数据管理

### 添加新数据
可以通过Firebase控制台手动添加数据，或者创建管理界面进行数据管理。

### 数据更新
建议定期更新观看/阅读进度，可以通过脚本或管理界面批量更新。

### 备份策略
建议定期导出数据进行备份，Firebase提供数据导出功能。