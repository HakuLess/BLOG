// Firebase配置文件
import { initializeApp } from 'firebase/app';
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';
import { firebaseConfig, firebaseServices } from './config/firebase-config.js';

// 初始化Firebase应用
const app = initializeApp(firebaseConfig);

// 初始化Firestore
export const db = getFirestore(app);

// 在开发环境中可以连接到Firestore模拟器
// if (process.env.NODE_ENV === 'development' && !db._delegate._databaseId.projectId.includes('demo-')) {
//   connectFirestoreEmulator(db, 'localhost', 8080);
// }

// 初始化Analytics（仅在浏览器环境中）
let analytics = null;
if (typeof window !== 'undefined' && firebaseServices.analytics) {
  try {
    analytics = getAnalytics(app);
  } catch (error) {
    console.warn('Analytics初始化失败:', error);
  }
}

// 导出服务实例
export { analytics };
export { firebaseConfig, firebaseServices };
export default app;