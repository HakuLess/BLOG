# 间谍过家家

<!-- 加载状态 -->
<div id="loading-state" class="loading-state">
  <div class="loading-spinner"></div>
  <p>正在加载漫画详情...</p>
</div>

<!-- 错误状态 -->
<div id="error-state" class="error-state" style="display: none;">
  <div class="error-icon">❌</div>
  <h3>加载失败</h3>
  <p>无法加载漫画详情，请检查网络连接或稍后重试。</p>
  <button onclick="loadMangaDetail()" class="retry-btn">重新加载</button>
</div>

<!-- 漫画内容 -->
<div id="manga-content" style="display: none;">
  <div class="manga-header">
    <div class="manga-cover-large">
      <img id="manga-poster" src="" alt="">
    </div>
    
    <div class="manga-details">
      <h1 id="manga-title">加载中...</h1>
      <p id="manga-subtitle" class="manga-subtitle"></p>
      
      <div id="manga-meta" class="manga-meta">
        <!-- 元数据将通过JavaScript动态填充 -->
      </div>
    </div>
  </div>

  ## 📖 剧情简介
  <div id="summary-content">
    <!-- 剧情简介将通过JavaScript动态填充 -->
  </div>

  ## 👥 主要角色
  <div id="characters-grid" class="characters-grid">
    <!-- 角色信息将通过JavaScript动态填充 -->
  </div>

  ## 💭 阅读感想
  <div id="impressions-content">
    <!-- 阅读感想将通过JavaScript动态填充 -->
  </div>

  ## 📚 章节评价
  <div id="chapters-content">
    <!-- 章节评价将通过JavaScript动态填充 -->
  </div>

  ## 📈 阅读进度
  <div id="progress-content">
    <!-- 阅读进度将通过JavaScript动态填充 -->
  </div>

  ## 🏆 获奖记录
  <div id="awards-content">
    <!-- 获奖记录将通过JavaScript动态填充 -->
  </div>

  ## 🔗 相关作品
  <div id="related-content">
    <!-- 相关作品将通过JavaScript动态填充 -->
  </div>

  ## 🌐 相关链接
  <div id="links-content">
    <!-- 相关链接将通过JavaScript动态填充 -->
  </div>
</div>

## 🎭 主要角色

<div class="character-grid">
  <div class="character-card">
    <div class="character-avatar">
      <img src="https://via.placeholder.com/120x120/FF6B6B/FFFFFF?text=黄昏" alt="黄昏">
    </div>
    <h4>劳埃德·福杰 (黄昏)</h4>
    <p>精英间谍，代号"黄昏"。为了任务假扮成精神科医生，收养阿尼亚并与约儿结婚。</p>
  </div>
  
  <div class="character-card">
    <div class="character-avatar">
      <img src="https://via.placeholder.com/120x120/4ECDC4/FFFFFF?text=约儿" alt="约儿">
    </div>
    <h4>约儿·福杰</h4>
    <p>杀手，代号"荆棘公主"。表面是市政府职员，与劳埃德假结婚成为阿尼亚的继母。</p>
  </div>
  
  <div class="character-card">
    <div class="character-avatar">
      <img src="https://via.placeholder.com/120x120/45B7D1/FFFFFF?text=阿尼亚" alt="阿尼亚">
    </div>
    <h4>阿尼亚·福杰</h4>
    <p>拥有读心能力的少女，被劳埃德收养。知道父母的真实身份但选择保守秘密。</p>
  </div>
  
  <div class="character-card">
    <div class="character-avatar">
      <img src="https://via.placeholder.com/120x120/96CEB4/FFFFFF?text=邦德" alt="邦德">
    </div>
    <h4>邦德·福杰</h4>
    <p>福杰家的宠物狗，拥有预知未来的能力。原本是实验体，后被阿尼亚拯救。</p>
  </div>
</div>

## 💭 阅读感想

### 🌟 亮点
- **设定新颖**：间谍、杀手、超能力者组成家庭的设定非常有趣
- **搞笑元素**：阿尼亚的表情包和各种误会制造了大量笑点
- **温馨日常**：虽然都有秘密，但家庭互动非常温暖
- **画风精美**：远藤达哉的画风清新，人物表情生动

### 📝 详细评价

这部作品最大的魅力在于"伪装家庭"的设定。三个各有秘密的人组成家庭，却意外地和谐。阿尼亚作为唯一知道所有秘密的人，她的反应和表情包成为了作品的一大看点。

作者在搞笑和温情之间把握得很好，既有因为误会产生的喜剧效果，也有真正的家庭温暖。特别是劳埃德和约儿虽然是假结婚，但对阿尼亚的关爱是真实的。

## 📊 章节评价

<div class="chapter-ratings">
  <div class="arc-group">
    <h4>入学篇 (第1-17话)</h4>
    <div class="chapter-highlights">
      <p><strong>精彩章节：</strong></p>
      <ul>
        <li>第1话 - 家庭组建，设定展开 ⭐⭐⭐⭐⭐</li>
        <li>第7话 - 入学面试，全家总动员 ⭐⭐⭐⭐⭐</li>
        <li>第15话 - 阿尼亚的朋友，达米安登场 ⭐⭐⭐⭐</li>
      </ul>
    </div>
  </div>
  
  <div class="arc-group">
    <h4>校园篇 (第18-40话)</h4>
    <div class="chapter-highlights">
      <p><strong>精彩章节：</strong></p>
      <ul>
        <li>第25话 - 阿尼亚的第一次考试 ⭐⭐⭐⭐</li>
        <li>第32话 - 约儿的嫉妒，家庭危机 ⭐⭐⭐⭐⭐</li>
        <li>第38话 - 校外教学，邦德登场 ⭐⭐⭐⭐⭐</li>
      </ul>
    </div>
  </div>
  
  <div class="arc-group">
    <h4>邮轮篇 (第41-65话)</h4>
    <div class="chapter-highlights">
      <p><strong>精彩章节：</strong></p>
      <ul>
        <li>第45话 - 邮轮度假开始 ⭐⭐⭐⭐</li>
        <li>第58话 - 约儿大显身手 ⭐⭐⭐⭐⭐</li>
        <li>第62话 - 家庭羁绊加深 ⭐⭐⭐⭐⭐</li>
      </ul>
    </div>
  </div>
</div>

## 📈 阅读进度

<div class="reading-progress">
  <div class="progress-bar">
    <div class="progress-fill" style="width: 85%"></div>
  </div>
  <p class="progress-text">已阅读：第95话 / 连载中 (85%)</p>
  
  <div class="reading-stats">
    <div class="stat-item">
      <span class="stat-label">开始阅读：</span>
      <span class="stat-value">2022年4月</span>
    </div>
    <div class="stat-item">
      <span class="stat-label">追更频率：</span>
      <span class="stat-value">每周更新</span>
    </div>
    <div class="stat-item">
      <span class="stat-label">重读次数：</span>
      <span class="stat-value">3次</span>
    </div>
  </div>
</div>

## 🏆 获奖记录

- **2020年 下一部漫画大奖** - 第1位
- **2021年 手冢治虫文化奖** - 短篇奖
- **2022年 小学馆漫画奖** - 少年向部门

## 📺 相关作品

### 动画化
- **TV动画 第一季** (2022年4月-6月) - 12集
- **TV动画 第二季** (2023年10月-12月) - 12集
- **剧场版** (2023年12月) - CODE: White

### 衍生作品
- **小说版**：间谍过家家 家族的肖像
- **游戏**：间谍过家家 Operation Diary

## 🔗 相关链接

- [官方网站](https://spy-family.net/)
- [少年Jump+](https://shonenjumpplus.com/episode/3269754496401369355)
- [动画官网](https://spy-family.net/anime/)

## 📝 个人笔记

### 最喜欢的情节
1. **阿尼亚的入学面试** - 全家人的紧张和努力让人印象深刻
2. **约儿的醋意大发** - 展现了她作为妻子的一面
3. **邦德的加入** - 让这个家庭更加完整

### 经典台词
> "为了世界和平！" - 阿尼亚
> 
> "这就是...家庭吗？" - 劳埃德
> 
> "我想保护这个家庭。" - 约儿

---

<div class="navigation-buttons">
  <a href="/Anime/manga/" class="nav-button">← 返回漫画专区</a>
  <a href="/Anime/manga/jujutsu-kaisen.html" class="nav-button">下一部：咒术回战 →</a>
</div>

<style>
.manga-header {
  display: flex;
  gap: 30px;
  margin: 30px 0;
  padding: 20px;
  background: linear-gradient(135deg, #FF6B6B 0%, #4ECDC4 100%);
  border-radius: 15px;
  color: white;
}

.manga-cover-large img {
  width: 300px;
  height: 420px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 8px 25px rgba(0,0,0,0.3);
}

.manga-details {
  flex: 1;
}

.manga-details h1 {
  font-size: 2.5em;
  margin: 0 0 10px 0;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

.manga-subtitle {
  font-size: 1.2em;
  opacity: 0.9;
  margin: 0 0 20px 0;
}

.manga-meta {
  display: grid;
  gap: 10px;
}

.meta-item {
  display: flex;
  align-items: center;
}

.meta-label {
  font-weight: bold;
  min-width: 100px;
}

.meta-value {
  flex: 1;
}

.meta-value.rating {
  font-size: 1.1em;
  font-weight: bold;
}

.meta-value.status.reading {
  background: #007bff;
  color: white;
  padding: 4px 12px;
  border-radius: 15px;
  font-size: 0.9em;
  display: inline-block;
}

.character-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.character-card {
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  text-align: center;
  transition: transform 0.3s ease;
}

.character-card:hover {
  transform: translateY(-5px);
}

.character-avatar img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 15px;
}

.character-card h4 {
  margin: 0 0 10px 0;
  color: #333;
}

.character-card p {
  color: #666;
  font-size: 0.9em;
  line-height: 1.4;
}

.chapter-ratings {
  margin: 20px 0;
}

.arc-group {
  margin: 25px 0;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 10px;
}

.arc-group h4 {
  color: #333;
  border-bottom: 2px solid #FF6B6B;
  padding-bottom: 5px;
  margin-bottom: 15px;
}

.chapter-highlights ul {
  list-style: none;
  padding: 0;
}

.chapter-highlights li {
  padding: 8px 0;
  border-bottom: 1px solid #eee;
}

.reading-progress {
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  margin: 20px 0;
}

.progress-bar {
  width: 100%;
  height: 20px;
  background: #f0f0f0;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 10px;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #FF6B6B, #4ECDC4);
  border-radius: 10px;
  transition: width 0.3s ease;
}

.progress-text {
  text-align: center;
  font-weight: bold;
  color: #333;
  margin-bottom: 15px;
}

.reading-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 10px;
}

.stat-item {
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
}

.stat-label {
  font-weight: bold;
  color: #666;
}

.stat-value {
  color: #333;
}

.navigation-buttons {
  display: flex;
  justify-content: space-between;
  margin: 40px 0 20px 0;
  gap: 20px;
}

.nav-button {
  background: #FF6B6B;
  color: white;
  padding: 12px 24px;
  border-radius: 25px;
  text-decoration: none;
  font-weight: bold;
  transition: all 0.3s ease;
  flex: 1;
  text-align: center;
}

.nav-button:hover {
  background: #ff5252;
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .manga-header {
    flex-direction: column;
    text-align: center;
  }
  
  .manga-cover-large img {
    width: 250px;
    height: 350px;
  }
  
  .character-grid {
    grid-template-columns: 1fr;
  }
  
  .navigation-buttons {
    flex-direction: column;
  }
  
  .reading-stats {
    grid-template-columns: 1fr;
  }
}
</style>

<script>
// 导入Firebase服务
import { AnimeService } from '../../.vuepress/services/animeService.js';

// 全局变量
let animeService;
let currentMangaId;

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', async function() {
  try {
    animeService = new AnimeService();
    
    // 从URL获取漫画ID，如果没有则使用默认ID
    currentMangaId = getMangaIdFromUrl() || 'spy-family';
    
    await loadMangaDetail();
  } catch (error) {
    console.error('初始化失败:', error);
    showErrorState();
  }
});

// 从URL获取漫画ID
function getMangaIdFromUrl() {
  const path = window.location.pathname;
  const matches = path.match(/\/manga\/([^\/]+)\.html?$/);
  return matches ? matches[1] : null;
}

// 加载漫画详情
async function loadMangaDetail() {
  try {
    showLoadingState();
    
    // 从Firebase获取漫画详情
    const manga = await animeService.getMangaById(currentMangaId);
    
    if (!manga) {
      showErrorState();
      return;
    }
    
    // 渲染漫画详情
    renderMangaDetail(manga);
    
    // 显示内容并隐藏加载状态
    hideLoadingState();
    showContent();
    
  } catch (error) {
    console.error('加载漫画详情失败:', error);
    showErrorState();
  }
}

// 显示加载状态
function showLoadingState() {
  document.getElementById('loading-state').style.display = 'block';
  document.getElementById('error-state').style.display = 'none';
  document.getElementById('manga-content').style.display = 'none';
}

// 显示错误状态
function showErrorState() {
  document.getElementById('loading-state').style.display = 'none';
  document.getElementById('error-state').style.display = 'block';
  document.getElementById('manga-content').style.display = 'none';
}

// 隐藏加载状态并显示内容
function hideLoadingState() {
  document.getElementById('loading-state').style.display = 'none';
  document.getElementById('error-state').style.display = 'none';
}

// 显示内容
function showContent() {
  document.getElementById('manga-content').style.display = 'block';
}

// 渲染漫画详情
function renderMangaDetail(manga) {
  // 更新页面标题
  document.title = manga.title + ' - 漫画详情';
  
  // 更新基本信息
  document.getElementById('manga-title').textContent = manga.title;
  document.getElementById('manga-subtitle').textContent = manga.subtitle || '';
  
  const poster = document.getElementById('manga-poster');
  poster.src = manga.coverImage || `https://via.placeholder.com/300x420/FF6B6B/FFFFFF?text=${encodeURIComponent(manga.title)}`;
  poster.alt = manga.title;
  
  // 渲染元数据
  renderMangaMeta(manga);
  
  // 渲染各个内容区域
  renderSummary(manga.summary);
  renderCharacters(manga.characters);
  renderImpressions(manga.impressions);
  renderChapters(manga.chapters);
  renderProgress(manga.progress);
  renderAwards(manga.awards);
  renderRelated(manga.related);
  renderLinks(manga.links);
}

// 渲染元数据
function renderMangaMeta(manga) {
  const metaContainer = document.getElementById('manga-meta');
  
  const metaItems = [
    { label: '作者', value: manga.author },
    { label: '类型', value: (manga.genres || []).join(' · ') },
    { label: '连载杂志', value: manga.magazine },
    { label: '连载时间', value: manga.serialization },
    { label: '当前进度', value: `第${manga.currentChapter}话 / ${manga.status === 'ongoing' ? '连载中' : '已完结'}` },
    { label: '我的评分', value: `⭐⭐⭐⭐⭐ ${manga.rating}/10`, class: 'rating' },
    { label: '阅读状态', value: getStatusText(manga.status), class: `status ${manga.status}` }
  ];
  
  metaContainer.innerHTML = metaItems.map(item => `
    <div class="meta-item">
      <span class="meta-label">${item.label}：</span>
      <span class="meta-value ${item.class || ''}">${item.value || '未知'}</span>
    </div>
  `).join('');
}

// 渲染剧情简介
function renderSummary(summary) {
  const container = document.getElementById('summary-content');
  container.innerHTML = summary ? `<p>${summary}</p>` : '<p>暂无剧情简介</p>';
}

// 渲染角色信息
function renderCharacters(characters) {
  const container = document.getElementById('characters-grid');
  
  if (!characters || characters.length === 0) {
    container.innerHTML = '<p>暂无角色信息</p>';
    return;
  }
  
  container.innerHTML = characters.map(character => `
    <div class="character-card">
      <div class="character-avatar">
        <img src="${character.avatar || 'https://via.placeholder.com/80x80/4ECDC4/FFFFFF?text=' + encodeURIComponent(character.name)}" 
             alt="${character.name}">
      </div>
      <div class="character-info">
        <h4>${character.name}</h4>
        <p class="character-role">${character.role || ''}</p>
        <p class="character-description">${character.description || ''}</p>
      </div>
    </div>
  `).join('');
}

// 渲染阅读感想
function renderImpressions(impressions) {
  const container = document.getElementById('impressions-content');
  
  if (!impressions || impressions.length === 0) {
    container.innerHTML = '<p>暂无阅读感想</p>';
    return;
  }
  
  container.innerHTML = impressions.map(impression => `
    <div class="impression-item">
      <h4>${impression.title}</h4>
      <p>${impression.content}</p>
    </div>
  `).join('');
}

// 渲染章节评价
function renderChapters(chapters) {
  const container = document.getElementById('chapters-content');
  
  if (!chapters || chapters.length === 0) {
    container.innerHTML = '<p>暂无章节评价</p>';
    return;
  }
  
  container.innerHTML = `
    <div class="chapters-grid">
      ${chapters.map(chapter => `
        <div class="chapter-card">
          <div class="chapter-header">
            <span class="chapter-number">第${chapter.number}话</span>
            <span class="chapter-rating">⭐ ${chapter.rating}/10</span>
          </div>
          <h4 class="chapter-title">${chapter.title}</h4>
          <p class="chapter-comment">${chapter.comment || ''}</p>
        </div>
      `).join('')}
    </div>
  `;
}

// 渲染阅读进度
function renderProgress(progress) {
  const container = document.getElementById('progress-content');
  
  if (!progress) {
    container.innerHTML = '<p>暂无阅读进度信息</p>';
    return;
  }
  
  const progressPercentage = Math.round((progress.current / progress.total) * 100);
  
  container.innerHTML = `
    <div class="reading-progress">
      <div class="progress-text">阅读进度：${progress.current}/${progress.total} (${progressPercentage}%)</div>
      <div class="progress-bar">
        <div class="progress-fill" style="width: ${progressPercentage}%"></div>
      </div>
      <div class="reading-stats">
        <div class="stat-item">
          <span class="stat-label">开始阅读：</span>
          <span class="stat-value">${progress.startDate || '未记录'}</span>
        </div>
        <div class="stat-item">
          <span class="stat-label">最后更新：</span>
          <span class="stat-value">${progress.lastUpdate || '未记录'}</span>
        </div>
        <div class="stat-item">
          <span class="stat-label">阅读天数：</span>
          <span class="stat-value">${progress.readingDays || 0}天</span>
        </div>
        <div class="stat-item">
          <span class="stat-label">平均评分：</span>
          <span class="stat-value">${progress.averageRating || 0}/10</span>
        </div>
      </div>
    </div>
  `;
}

// 渲染获奖记录
function renderAwards(awards) {
  const container = document.getElementById('awards-content');
  
  if (!awards || awards.length === 0) {
    container.innerHTML = '<p>暂无获奖记录</p>';
    return;
  }
  
  container.innerHTML = `
    <div class="awards-list">
      ${awards.map(award => `
        <div class="award-item">
          <div class="award-icon">🏆</div>
          <div class="award-info">
            <h4>${award.name}</h4>
            <p>${award.year} · ${award.category}</p>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

// 渲染相关作品
function renderRelated(related) {
  const container = document.getElementById('related-content');
  
  if (!related || related.length === 0) {
    container.innerHTML = '<p>暂无相关作品</p>';
    return;
  }
  
  container.innerHTML = `
    <div class="related-grid">
      ${related.map(item => `
        <div class="related-card">
          <img src="${item.image || 'https://via.placeholder.com/150x200/4ECDC4/FFFFFF?text=' + encodeURIComponent(item.title)}" 
               alt="${item.title}">
          <div class="related-info">
            <h4>${item.title}</h4>
            <p>${item.type} · ${item.year}</p>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

// 渲染相关链接
function renderLinks(links) {
  const container = document.getElementById('links-content');
  
  if (!links || links.length === 0) {
    container.innerHTML = '<p>暂无相关链接</p>';
    return;
  }
  
  container.innerHTML = `
    <div class="links-grid">
      ${links.map(link => `
        <a href="${link.url}" target="_blank" class="link-card">
          <div class="link-icon">${link.icon || '🔗'}</div>
          <div class="link-info">
            <h4>${link.name}</h4>
            <p>${link.description || ''}</p>
          </div>
        </a>
      `).join('')}
    </div>
  `;
}

// 获取状态文本
function getStatusText(status) {
  const statusMap = {
    'reading': '正在阅读',
    'completed': '已完成',
    'planned': '计划阅读',
    'paused': '暂停',
    'dropped': '已弃坑',
    'ongoing': '连载追更中'
  };
  return statusMap[status] || '未知状态';
}

// 全局函数，供重新加载按钮调用
window.loadMangaDetail = loadMangaDetail;
</script>