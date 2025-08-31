@echo off
REM Windows 部署脚本 - 将博客（包含简历）部署到 GitHub Pages
REM 使用方法: deploy.bat

echo 🚀 开始部署博客到 GitHub Pages...

REM 检查是否有未提交的更改
git status --porcelain > nul 2>&1
if %errorlevel% equ 0 (
    echo 📝 发现未提交的更改，正在提交...
    git add .
    git commit -m "Update blog content including resume"
) else (
    echo ✅ 工作目录干净，无需提交
)

REM 构建项目
echo 🔨 构建项目...
call npm run docs:build

if %errorlevel% neq 0 (
    echo ❌ 构建失败！
    exit /b 1
)

echo ✅ 构建成功！

REM 进入构建目录
cd docs\.vuepress\dist

REM 初始化 git 并部署
git init
git add -A
git commit -m "Deploy blog with resume"

REM 部署到 GitHub Pages
echo 📤 推送到 GitHub Pages...
git push -f git@github.com:HakuLess/BLOG.git main:gh-pages

cd ..\..\..

echo 🎉 部署完成！
echo 📱 简历页面将在几分钟后可通过以下链接访问：
echo 🔗 https://hakuless.github.io/BLOG/resume.html

pause