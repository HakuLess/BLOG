# HaKu's Blog

这是一个基于 VuePress 1.x 的个人博客项目，主要记录算法竞赛、学习笔记和生活感悟。

## 本地开发

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
│   ├── Contest/            # 算法竞赛相关
│   │   ├── LeetCode/       # LeetCode 周赛/双周赛
│   │   ├── AtCoder/        # AtCoder 比赛
│   │   └── CodeForces/     # CodeForces 比赛
│   ├── Study/              # 学习笔记
│   └── Life/               # 生活感悟
├── .github/workflows/      # GitHub Actions 配置
└── package.json            # 项目依赖
```

## 注意事项

- 项目使用 VuePress 1.x 版本
- 已配置数学公式支持 (KaTeX)
- 已配置代码行号显示
- 部署时需要确保 `base` 路径与仓库名一致
