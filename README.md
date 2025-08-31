# HaKu's Blog

这是一个基于 VuePress 2.x 的个人博客项目，主要记录算法竞赛、学习笔记和生活感悟。

## ✨ 特色功能

- 📝 **在线简历**：基于 Markdown 的精美简历页面，支持响应式设计
- 🏆 **算法竞赛记录**：LeetCode、AtCoder、CodeForces 比赛记录
- 📚 **学习笔记整理**：技术学习和知识总结
- 💭 **生活感悟分享**：个人思考和生活记录
- 📊 **数学公式支持**：使用 KaTeX 渲染数学公式
- 🚀 **自动化部署**：GitHub Actions 自动部署到 GitHub Pages

## 🚀 快速开始

### 📋 查看在线简历

项目中包含一个精美的 Markdown 简历页面：

- **本地预览**：访问 `http://localhost:8080/resume.html`
- **线上地址**：`https://hakuless.github.io/BLOG/resume.html`

简历页面特色：
- 响应式设计，支持移动端查看
- 精美的渐变背景和样式
- 支持打印和 PDF 导出
- 包含联系方式、技能水平、工作经历等完整信息

### 本地开发

### 环境要求
- Node.js 18+
- npm 或 yarn

### 安装依赖
```bash
npm install
# 或者
yarn install
```

### 启动开发服务器
```bash
npm run docs:dev
# 或者
yarn docs:dev
```

开发服务器将在 `http://localhost:8080` 启动。

### 构建生产版本
```bash
npm run docs:build
# 或者
yarn docs:build
```

## 部署

### 🚀 一键部署脚本

项目提供了便捷的部署脚本：

**Windows 用户：**
```bash
.\deploy.bat
```

**Linux/macOS 用户：**
```bash
bash deploy.sh
```

脚本将自动：
1. 提交未保存的更改
2. 构建项目
3. 部署到 GitHub Pages
4. 显示简历页面链接

### GitHub Pages 部署

项目已配置 GitHub Actions 自动部署到 GitHub Pages。

1. 确保你的仓库名为 `BLOG`
2. 推送代码到 `master` 分支
3. GitHub Actions 将自动构建并部署到 `gh-pages` 分支
4. 在仓库设置中启用 GitHub Pages，选择 `gh-pages` 分支作为源

### 手动部署

如果你想手动部署到其他平台：

1. 运行 `npm run docs:build` 构建项目
2. 将 `docs/.vuepress/dist/` 目录中的文件上传到你的服务器

## 项目结构

```
BLOG/
├── docs/                    # 文档目录
│   ├── .vuepress/          # VuePress 配置
│   ├── resume.md           # 📋 在线简历页面
│   ├── Contest/            # 算法竞赛相关
│   │   ├── LeetCode/       # LeetCode 周赛/双周赛
│   │   ├── AtCoder/        # AtCoder 比赛
│   │   └── CodeForces/     # CodeForces 比赛
│   ├── Study/              # 学习笔记
│   └── Life/               # 生活感悟
├── .github/workflows/      # GitHub Actions 配置
├── deploy.sh              # Linux/macOS 部署脚本
├── deploy.bat             # Windows 部署脚本
├── read_pdf.py            # PDF 简历读取工具
└── package.json            # 项目依赖
```

## 注意事项

- 项目使用 VuePress 2.x 版本
- 已配置数学公式支持 (KaTeX)
- 已配置代码行号显示
- 部署时需要确保 `base` 路径与仓库名一致
- 简历页面支持响应式设计，适配移动端和打印

## 📞 联系方式

如果您对该项目有任何问题或建议，欢迎联系：

- **GitHub**：[github.com/HakuLess](https://github.com/HakuLess)
- **邮箱**：hakuless@gmail.com

---

✨ **特别鸣谢**：感谢 VuePress 和 vuepress-theme-hope 提供的优秀框架和主题支持！
