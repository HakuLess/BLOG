#!/usr/bin/env bash

# 部署脚本 - 将博客（包含简历）部署到 GitHub Pages
# 使用方法: bash deploy.sh

echo "🚀 开始部署博客到 GitHub Pages..."

# 确保我们在正确的目录
cd "$(dirname "$0")"

# 检查是否有未提交的更改
if [[ -n $(git status -s) ]]; then
    echo "📝 发现未提交的更改，正在提交..."
    git add .
    git commit -m "Update blog content including resume"
else
    echo "✅ 工作目录干净，无需提交"
fi

# 构建项目
echo "🔨 构建项目..."
npm run docs:build

if [ $? -ne 0 ]; then
    echo "❌ 构建失败！"
    exit 1
fi

echo "✅ 构建成功！"

# 进入构建目录
cd docs/.vuepress/dist

# 如果你是第一次部署到这个仓库，取消注释下面的行
# git init
# git checkout -b gh-pages

# 添加所有文件
git init
git add -A
git commit -m 'Deploy blog with resume'

# 部署到 GitHub Pages
# 请将 <USERNAME> 替换为你的 GitHub 用户名
# 请将 <REPO> 替换为你的仓库名
echo "📤 推送到 GitHub Pages..."
git push -f git@github.com:HakuLess/BLOG.git main:gh-pages

cd -

echo "🎉 部署完成！"
echo "📱 简历页面将在几分钟后可通过以下链接访问："
echo "🔗 https://hakuless.github.io/BLOG/resume.html"