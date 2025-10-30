# Firebase 部署指南

## 📋 概述

本指南将帮助您完成Firebase数据库的完整部署，包括表结构设计、数据迁移、索引优化和安全配置。

## 🚀 快速开始

### 1. 准备工作

#### 1.1 创建Firebase项目
1. 访问 [Firebase控制台](https://console.firebase.google.com/)
2. 点击"创建项目"
3. 输入项目名称（如：anime-database）
4. 选择是否启用Google Analytics
5. 等待项目创建完成

#### 1.2 启用Firestore数据库
1. 在Firebase控制台中选择您的项目
2. 点击左侧菜单的"Firestore Database"
3. 点击"创建数据库"
4. 选择"以测试模式启动"（稍后会配置安全规则）
5. 选择数据库位置（建议选择离用户最近的区域）

#### 1.3 获取配置信息
1. 点击项目设置（齿轮图标）
2. 选择"项目设置"
3. 滚动到"您的应用"部分
4. 点击"</>"图标添加Web应用
5. 输入应用昵称
6. 复制Firebase配置对象

### 2. 配置Firebase连接

#### 2.1 使用数据管理界面
1. 打开 `scripts/dataManager.html`
2. 在"配置"选项卡中填入Firebase配置信息：
   - API Key
   - Auth Domain
   - Project ID
   - Storage Bucket
   - Messaging Sender ID
   - App ID
3. 点击"测试连接"验证配置
4. 点击"保存配置"保存到本地

#### 2.2 手动配置
如果您需要在代码中直接配置，请更新以下文件：
- `docs/.vuepress/config/firebase.js`
- `docs/.vuepress/services/AnimeService.js`

## 📊 数据库结构部署

### 3. 部署增强型数据库结构

#### 3.1 理解数据库架构
我们设计了以下集合：

**核心集合：**
- `animes` - 动画数据
- `mangas` - 漫画数据
- `users` - 用户数据
- `reviews` - 评论数据
- `lists` - 用户列表

**详细结构请参考：**
- [原始架构](firebase-schema.md)
- [增强架构](enhanced-firebase-schema.md)

#### 3.2 执行数据迁移
1. 打开数据管理界面的"数据迁移"选项卡
2. 根据需要选择迁移类型：
   - **动画数据迁移**：升级现有动画数据
   - **漫画数据迁移**：升级现有漫画数据
   - **完整迁移**：执行所有数据的完整迁移
3. 点击相应的迁移按钮
4. 等待迁移完成并验证结果

#### 3.3 添加示例数据
1. 打开 `scripts/addData.html`
2. 配置Firebase连接
3. 点击"添加示例数据"
4. 查看日志确认数据添加成功

### 4. 索引优化

#### 4.1 部署索引配置
```bash
# 安装Firebase CLI
npm install -g firebase-tools

# 登录Firebase
firebase login

# 初始化项目
firebase init firestore

# 复制索引配置
cp scripts/firestore.indexes.json firestore.indexes.json

# 部署索引
firebase deploy --only firestore:indexes
```

#### 4.2 验证索引
1. 在Firebase控制台中查看"Firestore Database" > "索引"
2. 确认所有索引都已创建完成
3. 测试查询性能

### 5. 安全规则配置

#### 5.1 部署安全规则
```bash
# 复制安全规则
cp scripts/firestore.rules firestore.rules

# 部署安全规则
firebase deploy --only firestore:rules
```

#### 5.2 测试安全规则
1. 在Firebase控制台中查看"Firestore Database" > "规则"
2. 使用规则模拟器测试不同场景
3. 确认规则按预期工作

## 🔧 高级配置

### 6. 性能优化

#### 6.1 查询优化
- 使用复合索引优化多字段查询
- 限制查询结果数量
- 使用分页减少数据传输

#### 6.2 缓存策略
```javascript
// 启用离线持久化
import { enableNetwork, disableNetwork } from 'firebase/firestore';

// 在应用启动时启用
await enableNetwork(db);
```

#### 6.3 监控和分析
1. 启用Firebase Performance Monitoring
2. 设置查询性能警报
3. 定期检查使用情况和成本

### 7. 备份和恢复

#### 7.1 自动备份
```bash
# 设置定期备份
gcloud firestore export gs://your-bucket-name/backups/$(date +%Y%m%d-%H%M%S)
```

#### 7.2 数据导出
使用数据管理界面的导出功能：
1. 选择要导出的集合
2. 点击"导出数据"
3. 保存JSON文件

## 🛠️ 故障排除

### 8. 常见问题

#### 8.1 连接问题
- **问题**：无法连接到Firebase
- **解决**：检查API密钥和项目ID是否正确

#### 8.2 权限问题
- **问题**：读写操作被拒绝
- **解决**：检查安全规则配置

#### 8.3 索引问题
- **问题**：查询失败，提示需要索引
- **解决**：创建相应的复合索引

#### 8.4 性能问题
- **问题**：查询速度慢
- **解决**：优化查询条件，添加适当索引

### 9. 监控和维护

#### 9.1 日常监控
- 检查Firebase控制台的使用情况
- 监控查询性能
- 查看错误日志

#### 9.2 定期维护
- 清理无效数据
- 更新索引配置
- 优化安全规则

## 📚 参考资源

### 10. 相关文档
- [Firebase官方文档](https://firebase.google.com/docs)
- [Firestore安全规则](https://firebase.google.com/docs/firestore/security/get-started)
- [Firestore索引](https://firebase.google.com/docs/firestore/query-data/indexing)

### 11. 工具和脚本
- `dataManager.html` - 数据管理界面
- `addData.html` - 数据添加工具
- `dataMigration.js` - 数据迁移脚本
- `firestore.indexes.json` - 索引配置
- `firestore.rules` - 安全规则

## 🎯 最佳实践

### 12. 开发建议

#### 12.1 数据建模
- 避免深度嵌套的数据结构
- 合理使用子集合
- 考虑查询模式设计数据结构

#### 12.2 安全性
- 始终使用最小权限原则
- 定期审查安全规则
- 验证用户输入

#### 12.3 性能
- 使用分页加载大量数据
- 缓存常用查询结果
- 监控查询成本

---

## 🚀 部署检查清单

- [ ] Firebase项目已创建
- [ ] Firestore数据库已启用
- [ ] Firebase配置已正确设置
- [ ] 数据库结构已部署
- [ ] 示例数据已添加
- [ ] 索引配置已部署
- [ ] 安全规则已配置
- [ ] 应用连接测试通过
- [ ] 查询功能正常工作
- [ ] 性能监控已启用

完成以上步骤后，您的Firebase数据库就可以正常使用了！

如有问题，请参考故障排除部分或查看Firebase控制台的错误日志。