# 🎞️ 动画专区

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
    
    <div class="filter-group">
      <label>状态筛选：</label>
      <select id="statusFilter">
        <option value="">全部状态</option>
        <option value="正在观看">正在观看</option>
        <option value="已完成">已完成</option>
        <option value="计划观看">计划观看</option>
        <option value="暂停观看">暂停观看</option>
      </select>
    </div>
    
    <div class="filter-group">
      <label>评分筛选：</label>
      <select id="ratingFilter">
        <option value="">全部评分</option>
        <option value="9">9分以上</option>
        <option value="8">8分以上</option>
        <option value="7">7分以上</option>
      </select>
    </div>
    
    <div class="filter-group">
      <label>搜索：</label>
      <input type="text" id="searchInput" placeholder="输入动画名称...">
    </div>
  </div>

  <!-- 动画卡片容器 -->
  <div class="anime-grid" id="animeGrid" style="display: none;">
    <!-- 动画卡片将通过JavaScript从Firebase动态生成 -->
  </div>

  <!-- 空状态 -->
  <div id="emptyState" class="empty-state" style="display: none;">
    <p>📺 暂无符合条件的动画</p>
  </div>

  <!-- AI助手浮动按钮 -->
  <div class="ai-assistant-fab" id="aiAssistantFab" title="AI动漫助手">
    <span class="ai-fab-icon">🤖</span>
    <span class="ai-fab-text">AI助手</span>
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

/* AI助手浮动按钮样式 */
.ai-assistant-fab {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(102, 126, 234, 0.4);
  transition: all 0.3s ease;
  z-index: 1000;
  overflow: hidden;
}

.ai-assistant-fab:hover {
  width: 140px;
  border-radius: 30px;
  transform: translateY(-2px);
  box-shadow: 0 6px 25px rgba(102, 126, 234, 0.5);
}

.ai-fab-icon {
  font-size: 24px;
  transition: all 0.3s ease;
}

.ai-fab-text {
  color: white;
  font-size: 14px;
  font-weight: 600;
  margin-left: 8px;
  opacity: 0;
  transform: translateX(-10px);
  transition: all 0.3s ease;
  white-space: nowrap;
}

.ai-assistant-fab:hover .ai-fab-text {
  opacity: 1;
  transform: translateX(0);
}

.ai-assistant-fab:hover .ai-fab-icon {
  transform: scale(0.9);
}

/* 响应式设计 - AI助手按钮 */
@media (max-width: 768px) {
  .ai-assistant-fab {
    bottom: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
  }
  
  .ai-assistant-fab:hover {
    width: 120px;
  }
  
  .ai-fab-icon {
    font-size: 20px;
  }
  
  .ai-fab-text {
    font-size: 12px;
  }
}
</style>

<script type="module">
// 基础JavaScript执行验证
console.log('=== JavaScript开始执行 ===');
console.log('页面URL:', window.location.href);
console.log('当前时间:', new Date().toLocaleString());
console.log('document.readyState:', document.readyState);

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
  console.log('=== 准备绑定DOMContentLoaded事件 ===');
  console.log('当前document.readyState:', document.readyState);
  
  function initializePage() {
    console.log('=== 开始页面初始化 ===');
    console.log('DOM已加载完成，开始初始化...');
    loadAnimes();
    setupEventListeners();
    console.log('=== 初始化完成 ===');
  }
  
  if (document.readyState === 'loading') {
    console.log('DOM正在加载中，绑定DOMContentLoaded事件');
    document.addEventListener('DOMContentLoaded', initializePage);
  } else {
    console.log('DOM已经加载完成，直接执行初始化');
    initializePage();
  }
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
  const loadingState = document.getElementById('loadingState');
  const errorState = document.getElementById('errorState');
  const filtersContainer = document.getElementById('filtersContainer');
  const animeGrid = document.getElementById('animeGrid');
  const emptyState = document.getElementById('emptyState');
  
  console.log('showLoadingState - 元素检查:', {
    loadingState: !!loadingState,
    errorState: !!errorState,
    filtersContainer: !!filtersContainer,
    animeGrid: !!animeGrid,
    emptyState: !!emptyState
  });
  
  if (loadingState) loadingState.style.display = 'block';
  if (errorState) errorState.style.display = 'none';
  if (filtersContainer) filtersContainer.style.display = 'none';
  if (animeGrid) animeGrid.style.display = 'none';
  if (emptyState) emptyState.style.display = 'none';
}

/**
 * 显示错误状态
 */
function showErrorState() {
  const loadingState = document.getElementById('loadingState');
  const errorState = document.getElementById('errorState');
  const filtersContainer = document.getElementById('filtersContainer');
  const animeGrid = document.getElementById('animeGrid');
  const emptyState = document.getElementById('emptyState');
  
  console.log('showErrorState - 元素检查:', {
    loadingState: !!loadingState,
    errorState: !!errorState,
    filtersContainer: !!filtersContainer,
    animeGrid: !!animeGrid,
    emptyState: !!emptyState
  });
  
  if (loadingState) loadingState.style.display = 'none';
  if (errorState) errorState.style.display = 'block';
  if (filtersContainer) filtersContainer.style.display = 'none';
  if (animeGrid) animeGrid.style.display = 'none';
  if (emptyState) emptyState.style.display = 'none';
}

/**
 * 显示内容
 */
function showContent() {
  const loadingState = document.getElementById('loadingState');
  const errorState = document.getElementById('errorState');
  const filtersContainer = document.getElementById('filtersContainer');
  const animeGrid = document.getElementById('animeGrid');
  const emptyState = document.getElementById('emptyState');
  
  if (loadingState) loadingState.style.display = 'none';
  if (errorState) errorState.style.display = 'none';
  if (filtersContainer) filtersContainer.style.display = 'block';
  if (animeGrid) animeGrid.style.display = 'block';
  if (emptyState) emptyState.style.display = 'none';
}

/**
 * 显示空状态
 */
function showEmptyState() {
  const loadingState = document.getElementById('loadingState');
  const errorState = document.getElementById('errorState');
  const filtersContainer = document.getElementById('filtersContainer');
  const animeGrid = document.getElementById('animeGrid');
  const emptyState = document.getElementById('emptyState');
  
  if (loadingState) loadingState.style.display = 'none';
  if (errorState) errorState.style.display = 'none';
  if (filtersContainer) filtersContainer.style.display = 'block';
  if (animeGrid) animeGrid.style.display = 'none';
  if (emptyState) emptyState.style.display = 'block';
}

/**
 * 渲染动画卡片
 */
function renderAnimes(animes) {
  const grid = document.getElementById('animeGrid');
  
  console.log('renderAnimes - animeGrid元素:', !!grid);
  
  if (!grid) {
    console.error('animeGrid元素未找到');
    return;
  }
  
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
  console.log('=== 开始设置事件监听器 ===');
  
  // 筛选器事件
  const genreFilter = document.getElementById('genreFilter');
  const statusFilter = document.getElementById('statusFilter');
  const ratingFilter = document.getElementById('ratingFilter');
  
  console.log('筛选器元素检查:', {
    genreFilter: !!genreFilter,
    statusFilter: !!statusFilter,
    ratingFilter: !!ratingFilter
  });
  
  if (genreFilter) genreFilter.addEventListener('change', applyFilters);
  if (statusFilter) statusFilter.addEventListener('change', applyFilters);
  if (ratingFilter) ratingFilter.addEventListener('change', applyFilters);
  
  // 搜索事件
  const searchInput = document.getElementById('searchInput');
  console.log('搜索输入框元素:', !!searchInput);
  
  if (searchInput) {
    searchInput.addEventListener('input', debounce(handleSearch, 300));
  }
  
  // AI助手按钮事件
  console.log('正在查找AI助手按钮...');
  const aiAssistantFab = document.getElementById('aiAssistantFab');
  console.log('AI助手按钮元素:', aiAssistantFab);
  console.log('AI助手按钮详细信息:', {
    element: aiAssistantFab,
    tagName: aiAssistantFab?.tagName,
    id: aiAssistantFab?.id,
    className: aiAssistantFab?.className,
    style: aiAssistantFab?.style?.display
  });
  
  if (aiAssistantFab) {
    console.log('找到AI助手按钮，正在绑定事件...');
    
    // 添加多种事件绑定方式
    aiAssistantFab.addEventListener('click', function(e) {
      console.log('AI助手按钮被点击 (addEventListener)');
      e.preventDefault();
      e.stopPropagation();
      openAIAssistant();
    });
    
    // 备用绑定方式
    aiAssistantFab.onclick = function(e) {
      console.log('AI助手按钮被点击 (onclick)');
      e.preventDefault();
      e.stopPropagation();
      openAIAssistant();
    };
    
    console.log('AI助手按钮事件绑定完成');
    
    // 测试按钮是否可点击
    setTimeout(() => {
      console.log('延迟检查AI按钮状态...');
      const button = document.getElementById('aiAssistantFab');
      console.log('延迟检查结果:', {
        exists: !!button,
        visible: button?.offsetParent !== null,
        display: button?.style?.display,
        computedStyle: button ? window.getComputedStyle(button).display : 'N/A'
      });
    }, 1000);
    
  } else {
    console.warn('AI助手按钮未找到');
    
    // 延迟重试查找按钮
    setTimeout(() => {
      console.log('延迟重试查找AI助手按钮...');
      const retryButton = document.getElementById('aiAssistantFab');
      if (retryButton) {
        console.log('延迟重试成功找到AI助手按钮，重新绑定事件...');
        retryButton.addEventListener('click', function(e) {
          console.log('AI助手按钮被点击 (延迟绑定)');
          e.preventDefault();
          e.stopPropagation();
          openAIAssistant();
        });
      } else {
        console.error('延迟重试仍未找到AI助手按钮');
      }
    }, 2000);
  }
  
  console.log('=== 事件监听器设置完成 ===');
  
  // 添加全局点击事件监听器用于调试
  document.addEventListener('click', function(e) {
    console.log('全局点击事件:', {
      target: e.target,
      tagName: e.target.tagName,
      id: e.target.id,
      className: e.target.className
    });
    
    // 检查是否点击了AI助手按钮
    if (e.target.id === 'aiAssistantFab' || e.target.closest('#aiAssistantFab')) {
      console.log('检测到AI助手按钮点击！');
      e.preventDefault();
      e.stopPropagation();
      openAIAssistant();
    }
  });
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

/**
 * AI助手相关功能
 */
let aiDialog = null;

/**
 * 初始化AI助手
 */
async function initAIAssistant() {
  console.log('开始初始化AI助手');
  try {
    // 创建简化版AI对话框
    aiDialog = {
      isOpen: false,
      
      open(context) {
        console.log('AI对话框open方法被调用，context:', context);
        if (this.isOpen) {
          console.log('对话框已经打开，忽略重复调用');
          return;
        }
        
        this.createDialog();
        this.setContext(context);
        this.isOpen = true;
        console.log('AI对话框已打开');
      },
      
      close() {
        console.log('AI对话框close方法被调用');
        const dialog = document.getElementById('ai-dialog');
        const overlay = document.getElementById('ai-dialog-overlay');
        
        if (dialog) {
          console.log('移除AI对话框元素');
          dialog.remove();
        }
        
        if (overlay) {
          console.log('移除AI对话框蒙层');
          overlay.remove();
        }
        
        this.isOpen = false;
        console.log('AI对话框已关闭');
      },
      
      createDialog() {
        // 移除已存在的对话框
        const existingDialog = document.getElementById('ai-dialog');
        if (existingDialog) {
          existingDialog.remove();
        }
        
        // 创建对话框HTML
        const dialogHTML = `
          <div id="ai-dialog" style="
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 600px;
            max-width: 90vw;
            height: 500px;
            max-height: 80vh;
            background: white;
            border-radius: 12px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.3);
            z-index: 10000;
            display: flex;
            flex-direction: column;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          ">
            <div style="
              padding: 20px;
              border-bottom: 1px solid #eee;
              display: flex;
              justify-content: space-between;
              align-items: center;
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
              color: white;
              border-radius: 12px 12px 0 0;
            ">
              <h3 style="margin: 0; font-size: 18px;">🤖 AI助手</h3>
              <button id="ai-dialog-close" style="
                background: none;
                border: none;
                color: white;
                font-size: 24px;
                cursor: pointer;
                padding: 0;
                width: 30px;
                height: 30px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: background-color 0.2s;
              " onmouseover="this.style.backgroundColor='rgba(255,255,255,0.2)'" onmouseout="this.style.backgroundColor='transparent'">×</button>
            </div>
            <div style="
              flex: 1;
              padding: 20px;
              overflow-y: auto;
              display: flex;
              flex-direction: column;
            ">
              <div id="ai-messages" style="
                flex: 1;
                margin-bottom: 15px;
                padding: 15px;
                background: #f8f9fa;
                border-radius: 8px;
                min-height: 200px;
                overflow-y: auto;
              ">
                <div style="
                  background: #e3f2fd;
                  padding: 12px;
                  border-radius: 8px;
                  border-left: 4px solid #2196f3;
                  margin-bottom: 10px;
                ">
                  <strong>🤖 AI助手：</strong>您好！我是动漫推荐助手，可以帮您：<br>
                  • 根据您的喜好推荐动漫<br>
                  • 解答动漫相关问题<br>
                  • 分析动漫特点和评价<br><br>
                  请告诉我您想了解什么？
                </div>
              </div>
              <div style="display: flex; gap: 10px;">
                <input type="text" id="ai-input" placeholder="输入您的问题..." style="
                  flex: 1;
                  padding: 12px;
                  border: 2px solid #ddd;
                  border-radius: 25px;
                  outline: none;
                  font-size: 14px;
                  transition: border-color 0.2s;
                " onfocus="this.style.borderColor='#667eea'" onblur="this.style.borderColor='#ddd'">
                <button id="ai-send" style="
                  padding: 12px 20px;
                  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                  color: white;
                  border: none;
                  border-radius: 25px;
                  cursor: pointer;
                  font-size: 14px;
                  font-weight: 500;
                  transition: transform 0.2s;
                " onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">发送</button>
              </div>
            </div>
          </div>
          <div id="ai-dialog-overlay" style="
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.5);
            z-index: 9999;
          "></div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', dialogHTML);
        
        // 绑定事件
        document.getElementById('ai-dialog-close').addEventListener('click', () => this.close());
        document.getElementById('ai-dialog-overlay').addEventListener('click', () => this.close());
        
        const input = document.getElementById('ai-input');
        const sendBtn = document.getElementById('ai-send');
        
        const sendMessage = () => {
          const message = input.value.trim();
          if (message) {
            this.addMessage('user', message);
            input.value = '';
            
            // 模拟AI回复
            setTimeout(() => {
              this.addMessage('ai', this.generateResponse(message));
            }, 1000);
          }
        };
        
        sendBtn.addEventListener('click', sendMessage);
        input.addEventListener('keypress', (e) => {
          if (e.key === 'Enter') {
            sendMessage();
          }
        });
        
        // 聚焦输入框
        setTimeout(() => input.focus(), 100);
      },
      
      addMessage(type, content) {
        const messagesContainer = document.getElementById('ai-messages');
        const messageDiv = document.createElement('div');
        
        if (type === 'user') {
          messageDiv.style.cssText = `
            background: #667eea;
            color: white;
            padding: 12px;
            border-radius: 18px 18px 4px 18px;
            margin: 8px 0 8px 50px;
            max-width: 80%;
            margin-left: auto;
            text-align: right;
          `;
          messageDiv.innerHTML = `<strong>您：</strong>${content}`;
        } else {
          messageDiv.style.cssText = `
            background: #e3f2fd;
            padding: 12px;
            border-radius: 18px 18px 18px 4px;
            margin: 8px 50px 8px 0;
            max-width: 80%;
            border-left: 4px solid #2196f3;
          `;
          messageDiv.innerHTML = `<strong>🤖 AI助手：</strong>${content}`;
        }
        
        messagesContainer.appendChild(messageDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
      },
      
      generateResponse(message) {
        const responses = [
          "根据您的问题，我推荐您可以尝试一些经典的动漫作品。",
          "这是一个很好的问题！让我为您分析一下相关的动漫特点。",
          "基于当前的动漫数据，我可以为您提供一些个性化的推荐。",
          "感谢您的提问！这类动漫通常具有很高的观赏价值。",
          "我理解您的需求，让我为您推荐一些符合您喜好的作品。"
        ];
        return responses[Math.floor(Math.random() * responses.length)];
      },
      
      setContext(context) {
        this.context = context;
      }
    };
    
    console.log('AI助手对象创建成功:', aiDialog);
    return true;
  } catch (error) {
    console.error('AI助手初始化失败:', error);
    return false;
  }
}

/**
 * 打开AI助手对话框
 */
function openAIAssistant() {
  console.log('openAIAssistant被调用');
  console.log('aiDialog状态:', aiDialog);
  
  if (aiDialog) {
    console.log('AI助手已初始化，正在打开对话框');
    aiDialog.open({
      page: 'anime',
      type: 'animation',
      currentData: filteredAnimes,
      totalData: allAnimes
    });
  } else {
    console.warn('AI助手未初始化，正在尝试初始化...');
    initAIAssistant().then((success) => {
      console.log('初始化结果:', success);
      console.log('初始化后aiDialog状态:', aiDialog);
      if (aiDialog && success) {
        console.log('初始化成功，正在打开对话框');
        aiDialog.open({
          page: 'anime',
          type: 'animation',
          currentData: filteredAnimes,
          totalData: allAnimes
        });
      } else {
        console.error('AI助手初始化失败，无法打开对话框');
        alert('AI助手暂时不可用，请刷新页面重试');
      }
    }).catch(error => {
      console.error('初始化Promise被拒绝:', error);
      alert('AI助手初始化失败，请刷新页面重试');
    });
  }
}

// 页面加载完成后初始化AI助手
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', function() {
    // 延迟初始化AI助手，避免阻塞页面加载
    setTimeout(() => {
      initAIAssistant();
    }, 1000);
  });
}

// 将loadAnimes函数暴露到全局作用域，供重新加载按钮使用
if (typeof window !== 'undefined') {
  window.loadAnimes = loadAnimes;
}
</script>