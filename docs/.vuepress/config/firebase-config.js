// Firebase配置管理
// 这个文件用于集中管理Firebase配置

/**
 * Firebase项目配置
 * 注意：这些配置信息在前端是公开的，真正的安全性通过以下方式保证：
 * 1. Firestore安全规则
 * 2. Firebase Authentication
 * 3. 适当的API限制和配额
 */
export const firebaseConfig = {
  // 项目基本信息
  apiKey: "AIzaSyCwJYHjVqzn2-GZ2y5_ZB6LQCVZry64qbI",
  authDomain: "animalist-ad3f5.firebaseapp.com",
  projectId: "animalist-ad3f5",
  
  // 存储配置
  storageBucket: "animalist-ad3f5.firebasestorage.app",
  databaseURL: "https://animalist-ad3f5-default-rtdb.asia-southeast1.firebasedatabase.app",
  
  // 消息和分析
  messagingSenderId: "234037219443",
  appId: "1:234037219443:web:f7b52f6bc5d26844bd9a06",
  measurementId: "G-5MZL2EWFMH"
};

/**
 * Firebase服务配置
 */
export const firebaseServices = {
  // 启用的服务
  firestore: true,
  analytics: true,
  auth: false, // 暂未启用认证
  storage: false, // 暂未启用存储
  
  // Firestore配置
  firestoreSettings: {
    // 启用离线持久化
    enablePersistence: true,
    // 缓存大小限制（MB）
    cacheSizeBytes: 40 * 1024 * 1024, // 40MB
  },
  
  // Analytics配置
  analyticsSettings: {
    // 是否自动收集页面浏览量
    automaticDataCollectionEnabled: true,
    // 是否启用广告个性化
    adPersonalizationEnabled: false
  }
};

/**
 * 安全配置建议
 */
export const securityNotes = {
  // API密钥安全说明
  apiKeySecurity: `
    Firebase API密钥在客户端是公开的，这是正常的。
    真正的安全性通过以下方式保证：
    1. Firestore安全规则限制数据访问
    2. Firebase项目配置中的API限制
    3. 域名白名单限制
  `,
  
  // 推荐的安全措施
  recommendations: [
    "在Firebase控制台中设置API密钥的HTTP引用限制",
    "配置适当的Firestore安全规则",
    "定期监控API使用情况和配额",
    "启用Firebase App Check以防止滥用",
    "考虑使用Firebase Authentication进行用户验证"
  ]
};

export default firebaseConfig;