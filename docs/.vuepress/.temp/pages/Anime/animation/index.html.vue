<template><div><h1 id="🎞️-动画专区" tabindex="-1"><a class="header-anchor" href="#🎞️-动画专区"><span>🎞️ 动画专区</span></a></h1>
<div class="animation-zone">
  <!-- 加载状态 -->
  <div id="loadingState" class="loading-state">
    <div class="loading-spinner"></div>
    <p>正在加载动画数据...</p>
  </div>
  <!-- 错误状态 -->
  <div id="errorState" class="error-state" style="display: none;">
    <p>❌ 加载失败，请检查网络连接或稍后重试</p>
    <button onclick="loadAnimes()" class="retry-button">重新加载</button>
  </div>
  <!-- 筛选器 -->
  <div class="filters" id="filtersContainer" style="display: none;">
    <div class="filter-group">
      <label>类型筛选：</label>
      <select id="genreFilter">
        <option value="">全部类型</option>
        <option value="奇幻">奇幻</option>
        <option value="冒险">冒险</option>
        <option value="剧情">剧情</option>
        <option value="喜剧">喜剧</option>
        <option value="动作">动作</option>
        <option value="治愈">治愈</option>
        <option value="科幻">科幻</option>
        <option value="恋爱">恋爱</option>
        <option value="悬疑">悬疑</option>
      </select>
    </div>
<pre><code>&lt;div class=&quot;filter-group&quot;&gt;
  &lt;label&gt;状态筛选：&lt;/label&gt;
  &lt;select id=&quot;statusFilter&quot;&gt;
    &lt;option value=&quot;&quot;&gt;全部状态&lt;/option&gt;
    &lt;option value=&quot;正在观看&quot;&gt;正在观看&lt;/option&gt;
    &lt;option value=&quot;已完成&quot;&gt;已完成&lt;/option&gt;
    &lt;option value=&quot;计划观看&quot;&gt;计划观看&lt;/option&gt;
    &lt;option value=&quot;暂停观看&quot;&gt;暂停观看&lt;/option&gt;
  &lt;/select&gt;
&lt;/div&gt;

&lt;div class=&quot;filter-group&quot;&gt;
  &lt;label&gt;评分筛选：&lt;/label&gt;
  &lt;select id=&quot;ratingFilter&quot;&gt;
    &lt;option value=&quot;&quot;&gt;全部评分&lt;/option&gt;
    &lt;option value=&quot;9&quot;&gt;9分以上&lt;/option&gt;
    &lt;option value=&quot;8&quot;&gt;8分以上&lt;/option&gt;
    &lt;option value=&quot;7&quot;&gt;7分以上&lt;/option&gt;
  &lt;/select&gt;
&lt;/div&gt;

&lt;div class=&quot;filter-group&quot;&gt;
  &lt;label&gt;搜索：&lt;/label&gt;
  &lt;input type=&quot;text&quot; id=&quot;searchInput&quot; placeholder=&quot;输入动画名称...&quot;&gt;
&lt;/div&gt;
</code></pre>
  </div>
  <!-- 动画卡片容器 -->
  <div class="anime-grid" id="animeGrid" style="display: none;">
    <!-- 动画卡片将通过JavaScript从Firebase动态生成 -->
  </div>
  <!-- 空状态 -->
  <div id="emptyState" class="empty-state" style="display: none;">
    <p>📺 暂无符合条件的动画</p>
  </div>
  <!-- 动画卡片 1 -->
  <div class="anime-card" data-genre="fantasy,adventure" data-status="completed" data-rating="9.5">
    <div class="anime-poster">
      <img src="https://via.placeholder.com/200x280/FF6B6B/FFFFFF?text=葬送的芙莉莲" alt="葬送的芙莉莲">
      <div class="anime-overlay">
        <div class="anime-rating">9.5</div>
        <div class="anime-status completed">已完成</div>
      </div>
    </div>
    <div class="anime-info">
      <h3 class="anime-title">葬送的芙莉莲</h3>
      <p class="anime-genres">奇幻 · 冒险 · 治愈</p>
      <p class="anime-year">2023年</p>
      <p class="anime-episodes">28集</p>
      <div class="anime-description">
        精灵法师芙莉莲在勇者辛美尔死后，踏上了理解人类情感的旅程...
      </div>
      <a href="/Anime/animation/frieren.html" class="anime-link">查看详情 →</a>
    </div>
  </div>
  <!-- 动画卡片 2 -->
  <div class="anime-card" data-genre="mystery,drama" data-status="completed" data-rating="9.2">
    <div class="anime-poster">
      <img src="https://via.placeholder.com/200x280/4ECDC4/FFFFFF?text=药屋少女的呢喃" alt="药屋少女的呢喃">
      <div class="anime-overlay">
        <div class="anime-rating">9.2</div>
        <div class="anime-status completed">已完成</div>
      </div>
    </div>
    <div class="anime-info">
      <h3 class="anime-title">药屋少女的呢喃</h3>
      <p class="anime-genres">推理 · 古风 · 宫廷</p>
      <p class="anime-year">2023年</p>
      <p class="anime-episodes">24集</p>
      <div class="anime-description">
        猫猫在后宫中运用药学知识解决各种谜团的故事...
      </div>
      <a href="/Anime/animation/kusuriya.html" class="anime-link">查看详情 →</a>
    </div>
  </div>
  <!-- 动画卡片 3 -->
  <div class="anime-card" data-genre="action,fantasy" data-status="completed" data-rating="9.0">
    <div class="anime-poster">
      <img src="https://via.placeholder.com/200x280/45B7D1/FFFFFF?text=咒术回战" alt="咒术回战">
      <div class="anime-overlay">
        <div class="anime-rating">9.0</div>
        <div class="anime-status completed">已完成</div>
      </div>
    </div>
    <div class="anime-info">
      <h3 class="anime-title">咒术回战 第二季</h3>
      <p class="anime-genres">动作 · 奇幻 · 热血</p>
      <p class="anime-year">2023年</p>
      <p class="anime-episodes">23集</p>
      <div class="anime-description">
        虎杖悠仁与咒术师们对抗咒灵的激烈战斗...
      </div>
      <a href="/Anime/animation/jujutsu-kaisen.html" class="anime-link">查看详情 →</a>
    </div>
  </div>
  <!-- 动画卡片 4 -->
  <div class="anime-card" data-genre="comedy,action" data-status="completed" data-rating="8.8">
    <div class="anime-poster">
      <img src="https://via.placeholder.com/200x280/96CEB4/FFFFFF?text=间谍过家家" alt="间谍过家家">
      <div class="anime-overlay">
        <div class="anime-rating">8.8</div>
        <div class="anime-status completed">已完成</div>
      </div>
    </div>
    <div class="anime-info">
      <h3 class="anime-title">间谍过家家</h3>
      <p class="anime-genres">喜剧 · 动作 · 家庭</p>
      <p class="anime-year">2022年</p>
      <p class="anime-episodes">25集</p>
      <div class="anime-description">
        间谍、杀手和超能力者组成的伪装家庭的温馨日常...
      </div>
      <a href="/Anime/animation/spy-family.html" class="anime-link">查看详情 →</a>
    </div>
  </div>
  <!-- 动画卡片 5 -->
  <div class="anime-card" data-genre="fantasy,adventure" data-status="watching" data-rating="8.5">
    <div class="anime-poster">
      <img src="https://via.placeholder.com/200x280/FFEAA7/333333?text=转生史莱姆" alt="转生史莱姆">
      <div class="anime-overlay">
        <div class="anime-rating">8.5</div>
        <div class="anime-status watching">观看中</div>
      </div>
    </div>
    <div class="anime-info">
      <h3 class="anime-title">关于我转生变成史莱姆这档事 第三季</h3>
      <p class="anime-genres">奇幻 · 冒险 · 异世界</p>
      <p class="anime-year">2024年</p>
      <p class="anime-episodes">8/24集</p>
      <div class="anime-description">
        利姆鲁在异世界建立魔物国家的冒险故事...
      </div>
      <a href="/Anime/animation/slime.html" class="anime-link">查看详情 →</a>
    </div>
  </div>
  <!-- 动画卡片 6 -->
  <div class="anime-card" data-genre="action,drama" data-status="planned" data-rating="0">
    <div class="anime-poster">
      <img src="https://via.placeholder.com/200x280/DDA0DD/FFFFFF?text=鬼灭之刃" alt="鬼灭之刃">
      <div class="anime-overlay">
        <div class="anime-rating">-</div>
        <div class="anime-status planned">计划观看</div>
      </div>
    </div>
    <div class="anime-info">
      <h3 class="anime-title">鬼灭之刃 锻刀村篇</h3>
      <p class="anime-genres">动作 · 剧情 · 热血</p>
      <p class="anime-year">2023年</p>
      <p class="anime-episodes">11集</p>
      <div class="anime-description">
        炭治郎前往锻刀村修复日轮刀的故事...
      </div>
      <a href="/Anime/animation/demon-slayer.html" class="anime-link">查看详情 →</a>
    </div>
  </div>
</div>
</div></template>

<script type="module">
// 静态数据，用于构建时的兼容性
const staticAnimeData = [
  {
    id: 'frieren',
    title: '葬送的芙莉莲',
    titleEn: 'Sousou no Frieren',
    year: 2023,
    episodes: 28,
    currentEpisode: 28,
    rating: 9.8,
    watchStatus: '已完成',
    genres: ['奇幻', '冒险', '治愈'],
    coverImage: 'https://via.placeholder.com/200x280/FF6B6B/FFFFFF?text=芙莉莲',
    summary: '精灵魔法使芙莉莲在勇者死后开始理解人类的旅程。'
  },
  {
    id: 'kusuriya',
    title: '药屋少女的呢喃',
    titleEn: 'Kusuriya no Hitorigoto',
    year: 2023,
    episodes: 24,
    currentEpisode: 24,
    rating: 9.2,
    watchStatus: '已完成',
    genres: ['推理', '古风', '宫廷'],
    coverImage: 'https://via.placeholder.com/200x280/4ECDC4/FFFFFF?text=药屋少女',
    summary: '在后宫中工作的药师少女猫猫解决各种谜团的故事。'
  }
];

// 全局变量
let allAnimes = staticAnimeData;
let filteredAnimes = staticAnimeData;

// 页面加载完成后初始化
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', function() {
    loadAnimes();
    setupEventListeners();
  });
}

/**
 * 加载动画数据
 */
function loadAnimes() {
  try {
    showLoadingState();
    
    // 使用静态数据
    filteredAnimes = [...allAnimes];
    
    if (allAnimes.length === 0) {
      showEmptyState();
    } else {
      showContent();
      renderAnimes(filteredAnimes);
    }
  } catch (error) {
    console.error('加载动画数据失败:', error);
    showErrorState();
  }
}

/**
 * 显示加载状态
 */
function showLoadingState() {
  document.getElementById('loadingState').style.display = 'block';
  document.getElementById('errorState').style.display = 'none';
  document.getElementById('filtersContainer').style.display = 'none';
  document.getElementById('animeGrid').style.display = 'none';
  document.getElementById('emptyState').style.display = 'none';
}

/**
 * 显示错误状态
 */
function showErrorState() {
  document.getElementById('loadingState').style.display = 'none';
  document.getElementById('errorState').style.display = 'block';
  document.getElementById('filtersContainer').style.display = 'none';
  document.getElementById('animeGrid').style.display = 'none';
  document.getElementById('emptyState').style.display = 'none';
}

/**
 * 显示内容
 */
function showContent() {
  document.getElementById('loadingState').style.display = 'none';
  document.getElementById('errorState').style.display = 'none';
  document.getElementById('filtersContainer').style.display = 'block';
  document.getElementById('animeGrid').style.display = 'block';
  document.getElementById('emptyState').style.display = 'none';
}

/**
 * 显示空状态
 */
function showEmptyState() {
  document.getElementById('loadingState').style.display = 'none';
  document.getElementById('errorState').style.display = 'none';
  document.getElementById('filtersContainer').style.display = 'block';
  document.getElementById('animeGrid').style.display = 'none';
  document.getElementById('emptyState').style.display = 'block';
}

/**
 * 渲染动画卡片
 */
function renderAnimes(animes) {
  const grid = document.getElementById('animeGrid');
  
  if (animes.length === 0) {
    showEmptyState();
    return;
  }
  
  grid.innerHTML = animes.map(anime => createAnimeCard(anime)).join('');
  showContent();
}

/**
 * 创建动画卡片HTML
 */
function createAnimeCard(anime) {
  const statusClass = getStatusClass(anime.watchStatus || anime.status);
  const genres = anime.genres ? anime.genres.slice(0, 3).join(' · ') : '';
  
  return `
    <div class="anime-card" onclick="goToDetail('${anime.id}')">
      <div class="anime-cover">
        <img src="${anime.cover || 'https://via.placeholder.com/300x400/FF6B6B/FFFFFF?text=' + encodeURIComponent(anime.title)}" 
             alt="${anime.title}" 
             onerror="this.src='https://via.placeholder.com/300x400/FF6B6B/FFFFFF?text=' + encodeURIComponent('${anime.title}')">
        <div class="anime-overlay">
          <div class="anime-rating">⭐ ${anime.rating || 'N/A'}</div>
          <div class="anime-status ${statusClass}">${anime.watchStatus || anime.status || '未知'}</div>
        </div>
      </div>
      <div class="anime-info">
        <h3 class="anime-title">${anime.title}</h3>
        <p class="anime-subtitle">${anime.titleEn || anime.titleJp || ''}</p>
        <div class="anime-meta">
          <span class="anime-year">${anime.year || ''}</span>
          <span class="anime-episodes">${anime.episodes ? anime.episodes + '集' : ''}</span>
        </div>
        <div class="anime-genres">${genres}</div>
        <div class="anime-progress">
          ${anime.currentEpisode && anime.episodes ? 
            `<div class="progress-bar">
              <div class="progress-fill" style="width: ${(anime.currentEpisode / anime.episodes * 100)}%"></div>
            </div>
            <span class="progress-text">${anime.currentEpisode}/${anime.episodes}</span>` : 
            ''}
        </div>
      </div>
    </div>
  `;
}

/**
 * 获取状态样式类
 */
function getStatusClass(status) {
  const statusMap = {
    '正在观看': 'watching',
    '已完成': 'completed',
    '计划观看': 'planned',
    '暂停观看': 'paused',
    '已弃番': 'dropped'
  };
  return statusMap[status] || 'unknown';
}

/**
 * 跳转到详情页
 */
function goToDetail(animeId) {
  if (typeof window !== 'undefined') {
    window.location.href = `/Anime/animation/${animeId}.html`;
  }
}

/**
 * 设置事件监听器
 */
function setupEventListeners() {
  // 筛选器事件
  document.getElementById('genreFilter').addEventListener('change', applyFilters);
  document.getElementById('statusFilter').addEventListener('change', applyFilters);
  document.getElementById('ratingFilter').addEventListener('change', applyFilters);
  
  // 搜索事件
  const searchInput = document.getElementById('searchInput');
  searchInput.addEventListener('input', debounce(handleSearch, 300));
}

/**
 * 应用筛选器
 */
function applyFilters() {
  const genreFilter = document.getElementById('genreFilter').value;
  const statusFilter = document.getElementById('statusFilter').value;
  const ratingFilter = document.getElementById('ratingFilter').value;
  
  filteredAnimes = allAnimes.filter(anime => {
    // 类型筛选
    if (genreFilter && (!anime.genres || !anime.genres.includes(genreFilter))) {
      return false;
    }
    
    // 状态筛选
    if (statusFilter && anime.watchStatus !== statusFilter && anime.status !== statusFilter) {
      return false;
    }
    
    // 评分筛选
    if (ratingFilter && (!anime.rating || anime.rating < parseFloat(ratingFilter))) {
      return false;
    }
    
    return true;
  });
  
  renderAnimes(filteredAnimes);
}

/**
 * 处理搜索
 */
async function handleSearch() {
  const keyword = document.getElementById('searchInput').value.trim();
  
  if (keyword === '') {
    filteredAnimes = [...allAnimes];
    applyFilters();
    return;
  }
  
  try {
    // 使用Firebase搜索功能
    const searchResults = await animeService.searchAnimes(keyword);
    filteredAnimes = searchResults;
    renderAnimes(filteredAnimes);
  } catch (error) {
    console.error('搜索失败:', error);
    // 降级到本地搜索
    filteredAnimes = allAnimes.filter(anime => 
      anime.title.toLowerCase().includes(keyword.toLowerCase()) ||
      (anime.titleEn && anime.titleEn.toLowerCase().includes(keyword.toLowerCase()))
    );
    renderAnimes(filteredAnimes);
  }
}

/**
 * 防抖函数
 */
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// 将loadAnimes函数暴露到全局作用域，供重新加载按钮使用
if (typeof window !== 'undefined') {
  window.loadAnimes = loadAnimes;
}
</script>

<style>
.animation-zone {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

/* 加载状态样式 */
.loading-state {
  text-align: center;
  padding: 60px 20px;
}

.loading-spinner {
  width: 50px;
  height: 50px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #FF6B6B;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 20px;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.loading-state p {
  color: #666;
  font-size: 1.1em;
}

/* 错误状态样式 */
.error-state {
  text-align: center;
  padding: 60px 20px;
  color: #e74c3c;
}

.retry-button {
  background: #FF6B6B;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
  margin-top: 15px;
  transition: background 0.3s ease;
}

.retry-button:hover {
  background: #ff5252;
}

/* 空状态样式 */
.empty-state {
  text-align: center;
  padding: 60px 20px;
  color: #666;
  font-size: 1.2em;
}

/* 筛选器样式 */
.filters {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 30px;
  padding: 20px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.filter-group {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.filter-group label {
  font-weight: bold;
  color: #333;
  font-size: 0.9em;
}

.filter-group select,
.filter-group input {
  padding: 8px 12px;
  border: 2px solid #e0e0e0;
  border-radius: 5px;
  font-size: 0.9em;
  min-width: 150px;
  transition: border-color 0.3s ease;
}

.filter-group select:focus,
.filter-group input:focus {
  outline: none;
  border-color: #FF6B6B;
}

/* 动画网格样式 */
.anime-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 25px;
  margin-top: 20px;
}

/* 动画卡片样式 */
.anime-card {
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
}

.anime-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.15);
}

.anime-poster {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.anime-poster img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.anime-card:hover .anime-poster img {
  transform: scale(1.05);
}

.anime-cover {
  position: relative;
  width: 100%;
  height: 350px;
  overflow: hidden;
}

.anime-cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.anime-card:hover .anime-cover img {
  transform: scale(1.05);
}

.anime-overlay {
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.anime-rating {
  background: rgba(0,0,0,0.8);
  color: white;
  padding: 4px 8px;
  border-radius: 15px;
  font-size: 12px;
  font-weight: bold;
  text-align: center;
}

.anime-status {
  padding: 4px 8px;
  border-radius: 15px;
  font-size: 11px;
  font-weight: bold;
  text-align: center;
  color: white;
}

.anime-status.completed { background: #28a745; }
.anime-status.watching { background: #007bff; }
.anime-status.planned { background: #6c757d; }
.anime-status.dropped { background: #dc3545; }
.anime-status.paused { background: #9E9E9E; }
.anime-status.unknown { background: #607D8B; }

.anime-info {
  padding: 20px;
}

.anime-title {
  font-size: 1.2em;
  font-weight: bold;
  margin: 0 0 8px 0;
  color: #333;
  line-height: 1.3;
}

.anime-subtitle {
  font-size: 0.9em;
  color: #666;
  margin: 0 0 10px 0;
  line-height: 1.2;
}

.anime-meta {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  font-size: 0.85em;
  color: #888;
}

.anime-genres {
  color: #666;
  font-size: 0.9em;
  margin: 0 0 5px 0;
}

.anime-year, .anime-episodes {
  color: #888;
  font-size: 0.85em;
  margin: 0 0 3px 0;
}

.anime-description {
  color: #555;
  font-size: 0.9em;
  line-height: 1.4;
  margin: 10px 0 15px 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.anime-link {
  color: #007bff;
  text-decoration: none;
  font-weight: bold;
  font-size: 0.9em;
  transition: color 0.3s ease;
}

.anime-link:hover {
  color: #0056b3;
}

.anime-progress {
  display: flex;
  align-items: center;
  gap: 10px;
}

.progress-bar {
  flex: 1;
  height: 6px;
  background: #f0f0f0;
  border-radius: 3px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #FF6B6B, #4ECDC4);
  border-radius: 3px;
  transition: width 0.3s ease;
}

.progress-text {
  font-size: 0.8em;
  color: #666;
  font-weight: bold;
  min-width: 50px;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .animation-zone {
    padding: 15px;
  }
  
  .filters {
    flex-direction: column;
    gap: 15px;
  }
  
  .filter-group select,
  .filter-group input {
    min-width: 100%;
  }
  
  .anime-grid {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
  }
  
  .anime-cover {
    height: 300px;
  }
}

@media (max-width: 480px) {
  .anime-grid {
    grid-template-columns: 1fr;
  }
  
  .anime-cover {
    height: 280px;
  }
}
</style>