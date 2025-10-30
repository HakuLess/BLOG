# Firebase 安全配置指南

## 概述

本文档详细说明了Firebase项目的安全配置和最佳实践，确保您的应用程序和数据安全。

## 🔐 安全原则

### 1. 客户端配置安全性

**重要说明：** Firebase配置信息（包括API密钥）在客户端是**公开可见**的，这是正常现象。真正的安全性通过以下机制保证：

- ✅ **Firestore安全规则** - 控制数据访问权限
- ✅ **Firebase Authentication** - 用户身份验证
- ✅ **API限制和配额** - 防止滥用
- ✅ **域名白名单** - 限制访问来源

### 2. 当前项目配置

```javascript
// 当前Firebase项目配置
const firebaseConfig = {
  apiKey: "AIzaSyCwJYHjVqzn2-GZ2y5_ZB6LQCVZry64qbI",
  authDomain: "animalist-ad3f5.firebaseapp.com",
  projectId: "animalist-ad3f5",
  storageBucket: "animalist-ad3f5.firebasestorage.app",
  // ... 其他配置
};
```

## 🛡️ 安全措施配置

### 1. Firebase控制台安全设置

#### API密钥限制
1. 登录 [Firebase控制台](https://console.firebase.google.com/)
2. 选择项目 `animalist-ad3f5`
3. 进入 **项目设置** → **常规**
4. 在 **您的应用** 部分，点击Web应用
5. 配置以下限制：

```
HTTP引用限制：
- https://your-domain.com/*
- http://localhost:*
- http://127.0.0.1:*

API限制：
- Cloud Firestore API
- Firebase Analytics API
```

#### 应用检查 (App Check)
```javascript
// 启用App Check（推荐用于生产环境）
import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check';

const appCheck = initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider('your-recaptcha-site-key'),
  isTokenAutoRefreshEnabled: true
});
```

### 2. Firestore安全规则

当前安全规则位置：`docs/.vuepress/scripts/firestore.rules`

#### 基本规则结构
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // 动画数据 - 只读访问
    match /animes/{animeId} {
      allow read: if true;
      allow write: if isAdmin();
    }
    
    // 漫画数据 - 只读访问
    match /mangas/{mangaId} {
      allow read: if true;
      allow write: if isAdmin();
    }
    
    // 用户数据 - 用户只能访问自己的数据
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

### 3. 配额和限制监控

#### 设置配额警报
1. 进入Firebase控制台 → **使用情况和结算**
2. 设置以下警报：
   - 读取操作：每日10,000次
   - 写入操作：每日1,000次
   - 删除操作：每日100次

#### 性能监控
```javascript
// 启用性能监控
import { getPerformance } from 'firebase/performance';
const perf = getPerformance(app);
```

## 🔧 开发环境安全

### 1. 本地开发配置

```javascript
// 开发环境使用模拟器
if (process.env.NODE_ENV === 'development') {
  connectFirestoreEmulator(db, 'localhost', 8080);
}
```

### 2. 环境变量管理

创建 `.env.local` 文件（不要提交到版本控制）：
```
VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_PROJECT_ID=your-project-id
# ... 其他敏感配置
```

## 📊 监控和审计

### 1. 访问日志监控
- 定期检查Firebase控制台中的使用情况
- 监控异常的API调用模式
- 设置自动警报

### 2. 安全审计清单

- [ ] API密钥已设置HTTP引用限制
- [ ] Firestore安全规则已部署并测试
- [ ] 启用了Firebase App Check
- [ ] 配置了适当的配额限制
- [ ] 设置了监控和警报
- [ ] 定期审查访问日志

## 🚨 应急响应

### 如果发现安全问题：

1. **立即行动**
   - 在Firebase控制台中禁用受影响的API密钥
   - 更新Firestore安全规则以限制访问

2. **调查和修复**
   - 检查访问日志确定影响范围
   - 修复安全漏洞
   - 更新配置和规则

3. **预防措施**
   - 生成新的API密钥
   - 加强监控
   - 更新安全文档

## 📚 参考资源

- [Firebase安全规则文档](https://firebase.google.com/docs/rules)
- [Firebase App Check文档](https://firebase.google.com/docs/app-check)
- [Firebase安全最佳实践](https://firebase.google.com/docs/rules/security)

## 联系信息

如有安全相关问题，请联系项目维护者或安全团队。

---

**最后更新：** 2024年12月
**版本：** 1.0