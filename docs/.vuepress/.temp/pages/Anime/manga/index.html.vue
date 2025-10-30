<template><div><h1 id="📚-漫画专区" tabindex="-1"><a class="header-anchor" href="#📚-漫画专区"><span>📚 漫画专区</span></a></h1>
<div class="manga-zone">
  <!-- 加载状态 -->
  <div id="loading-state" class="loading-state">
    <div class="loading-spinner"></div>
    <p>正在加载漫画数据...</p>
  </div>
  <!-- 错误状态 -->
  <div id="error-state" class="error-state" style="display: none;">
    <h3>😔 加载失败</h3>
    <p>无法连接到数据库，请检查网络连接或稍后重试</p>
    <button class="retry-button" onclick="loadMangaData()">重新加载</button>
  </div>
  <!-- 空状态 -->
  <div id="empty-state" class="empty-state" style="display: none;">
    <h3>📚 暂无漫画数据</h3>
    <p>数据库中还没有漫画信息，请稍后再来查看</p>
  </div>
  <!-- 筛选器 -->
  <div id="filters" class="filters" style="display: none;">
    <div class="filter-group">
      <label for="genre-filter">类型筛选</label>
      <select id="genre-filter">
        <option value="">全部类型</option>
      </select>
    </div>
<pre><code>&lt;div class=&quot;filter-group&quot;&gt;
  &lt;label for=&quot;status-filter&quot;&gt;状态筛选&lt;/label&gt;
  &lt;select id=&quot;status-filter&quot;&gt;
    &lt;option value=&quot;&quot;&gt;全部状态&lt;/option&gt;
    &lt;option value=&quot;reading&quot;&gt;正在阅读&lt;/option&gt;
    &lt;option value=&quot;completed&quot;&gt;已完成&lt;/option&gt;
    &lt;option value=&quot;planned&quot;&gt;计划阅读&lt;/option&gt;
    &lt;option value=&quot;paused&quot;&gt;暂停&lt;/option&gt;
    &lt;option value=&quot;dropped&quot;&gt;已弃坑&lt;/option&gt;
  &lt;/select&gt;
&lt;/div&gt;

&lt;div class=&quot;filter-group&quot;&gt;
  &lt;label for=&quot;rating-filter&quot;&gt;评分筛选&lt;/label&gt;
  &lt;select id=&quot;rating-filter&quot;&gt;
    &lt;option value=&quot;&quot;&gt;全部评分&lt;/option&gt;
    &lt;option value=&quot;9&quot;&gt;9分以上&lt;/option&gt;
    &lt;option value=&quot;8&quot;&gt;8分以上&lt;/option&gt;
    &lt;option value=&quot;7&quot;&gt;7分以上&lt;/option&gt;
    &lt;option value=&quot;6&quot;&gt;6分以上&lt;/option&gt;
  &lt;/select&gt;
&lt;/div&gt;

&lt;div class=&quot;filter-group&quot;&gt;
  &lt;label for=&quot;search-input&quot;&gt;搜索漫画&lt;/label&gt;
  &lt;input type=&quot;text&quot; id=&quot;search-input&quot; placeholder=&quot;输入漫画名称...&quot;&gt;
&lt;/div&gt;
</code></pre>
  </div>
  <!-- 漫画网格 -->
  <div id="manga-grid" class="manga-grid" style="display: none;">
    <!-- 漫画卡片将通过JavaScript动态生成 -->
  </div>
  <!-- AI助手浮动按钮 -->
  <div class="ai-assistant-fab" id="aiAssistantFab" title="AI漫画助手">
    <span class="ai-fab-icon">🤖</span>
    <span class="ai-fab-text">AI助手</span>
  </div>
</div>
<div class="manga-grid">
  <!-- 漫画卡片 1 -->
  <div class="manga-card" data-genre="comedy,action,slice-of-life" data-status="reading" data-rating="9.3">
    <div class="manga-cover">
      <img src="https://via.placeholder.com/200x280/FF6B6B/FFFFFF?text=间谍过家家" alt="间谍过家家">
      <div class="manga-overlay">
        <div class="manga-rating">9.3</div>
        <div class="manga-status reading">连载中</div>
      </div>
    </div>
    <div class="manga-info">
      <h3 class="manga-title">间谍过家家</h3>
      <p class="manga-genres">喜剧 · 动作 · 家庭</p>
      <p class="manga-author">远藤达哉</p>
      <p class="manga-progress">第95话 / 连载中</p>
      <div class="manga-description">
        间谍黄昏为了任务组建伪装家庭，与杀手约儿和超能力少女阿尼亚的温馨搞笑日常...
      </div>
      <a href="/Anime/manga/spy-family.html" class="manga-link">查看详情 →</a>
    </div>
  </div>
  <!-- 漫画卡片 2 -->
  <div class="manga-card" data-genre="action,fantasy" data-status="reading" data-rating="9.1">
    <div class="manga-cover">
      <img src="https://via.placeholder.com/200x280/4ECDC4/FFFFFF?text=咒术回战" alt="咒术回战">
      <div class="manga-overlay">
        <div class="manga-rating">9.1</div>
        <div class="manga-status reading">连载中</div>
      </div>
    </div>
    <div class="manga-info">
      <h3 class="manga-title">咒术回战</h3>
      <p class="manga-genres">动作 · 奇幻 · 热血</p>
      <p class="manga-author">芥见下下</p>
      <p class="manga-progress">第248话 / 连载中</p>
      <div class="manga-description">
        虎杖悠仁意外吞下咒物手指，卷入咒术师与咒灵的战斗世界...
      </div>
      <a href="/Anime/manga/jujutsu-kaisen.html" class="manga-link">查看详情 →</a>
    </div>
  </div>
  <!-- 漫画卡片 3 -->
  <div class="manga-card" data-genre="action,drama" data-status="completed" data-rating="9.5">
    <div class="manga-cover">
      <img src="https://via.placeholder.com/200x280/45B7D1/FFFFFF?text=鬼灭之刃" alt="鬼灭之刃">
      <div class="manga-overlay">
        <div class="manga-rating">9.5</div>
        <div class="manga-status completed">已完结</div>
      </div>
    </div>
    <div class="manga-info">
      <h3 class="manga-title">鬼灭之刃</h3>
      <p class="manga-genres">动作 · 剧情 · 热血</p>
      <p class="manga-author">吾峠呼世晴</p>
      <p class="manga-progress">205话 / 已完结</p>
      <div class="manga-description">
        炭治郎为了拯救变成鬼的妹妹祢豆子，踏上成为鬼杀队剑士的道路...
      </div>
      <a href="/Anime/manga/demon-slayer.html" class="manga-link">查看详情 →</a>
    </div>
  </div>
  <!-- 漫画卡片 4 -->
  <div class="manga-card" data-genre="action,drama" data-status="completed" data-rating="9.8">
    <div class="manga-cover">
      <img src="https://via.placeholder.com/200x280/96CEB4/FFFFFF?text=进击的巨人" alt="进击的巨人">
      <div class="manga-overlay">
        <div class="manga-rating">9.8</div>
        <div class="manga-status completed">已完结</div>
      </div>
    </div>
    <div class="manga-info">
      <h3 class="manga-title">进击的巨人</h3>
      <p class="manga-genres">动作 · 剧情 · 悬疑</p>
      <p class="manga-author">谏山创</p>
      <p class="manga-progress">139话 / 已完结</p>
      <div class="manga-description">
        人类与巨人的生存战争，隐藏在高墙后的真相逐渐揭开...
      </div>
      <a href="/Anime/manga/attack-on-titan.html" class="manga-link">查看详情 →</a>
    </div>
  </div>
  <!-- 漫画卡片 5 -->
  <div class="manga-card" data-genre="romance,comedy,slice-of-life" data-status="completed" data-rating="8.7">
    <div class="manga-cover">
      <img src="https://via.placeholder.com/200x280/FFEAA7/333333?text=辉夜大小姐" alt="辉夜大小姐">
      <div class="manga-overlay">
        <div class="manga-rating">8.7</div>
        <div class="manga-status completed">已完结</div>
      </div>
    </div>
    <div class="manga-info">
      <h3 class="manga-title">辉夜大小姐想让我告白</h3>
      <p class="manga-genres">恋爱 · 喜剧 · 校园</p>
      <p class="manga-author">赤坂明</p>
      <p class="manga-progress">281话 / 已完结</p>
      <div class="manga-description">
        学生会长白银与副会长辉夜的恋爱头脑战，谁先告白谁就输了...
      </div>
      <a href="/Anime/manga/kaguya-sama.html" class="manga-link">查看详情 →</a>
    </div>
  </div>
  <!-- 漫画卡片 6 -->
  <div class="manga-card" data-genre="adventure,comedy" data-status="planned" data-rating="0">
    <div class="manga-cover">
      <img src="https://via.placeholder.com/200x280/DDA0DD/FFFFFF?text=海贼王" alt="海贼王">
      <div class="manga-overlay">
        <div class="manga-rating">-</div>
        <div class="manga-status planned">计划阅读</div>
      </div>
    </div>
    <div class="manga-info">
      <h3 class="manga-title">海贼王</h3>
      <p class="manga-genres">冒险 · 喜剧 · 热血</p>
      <p class="manga-author">尾田荣一郎</p>
      <p class="manga-progress">1100+话 / 连载中</p>
      <div class="manga-description">
        路飞和伙伴们寻找传说中的大秘宝ONE PIECE的冒险故事...
      </div>
      <a href="/Anime/manga/one-piece.html" class="manga-link">查看详情 →</a>
    </div>
  </div>
  <!-- 漫画卡片 7 -->
  <div class="manga-card" data-genre="mystery,drama" data-status="completed" data-rating="8.9">
    <div class="manga-cover">
      <img src="https://via.placeholder.com/200x280/FF9FF3/FFFFFF?text=约定的梦幻岛" alt="约定的梦幻岛">
      <div class="manga-overlay">
        <div class="manga-rating">8.9</div>
        <div class="manga-status completed">已完结</div>
      </div>
    </div>
    <div class="manga-info">
      <h3 class="manga-title">约定的梦幻岛</h3>
      <p class="manga-genres">推理 · 剧情 · 悬疑</p>
      <p class="manga-author">白井カイウ</p>
      <p class="manga-progress">181话 / 已完结</p>
      <div class="manga-description">
        孤儿院的孩子们发现自己被当作食物饲养，策划逃脱计划...
      </div>
      <a href="/Anime/manga/promised-neverland.html" class="manga-link">查看详情 →</a>
    </div>
  </div>
  <!-- 漫画卡片 8 -->
  <div class="manga-card" data-genre="slice-of-life,comedy" data-status="reading" data-rating="8.4">
    <div class="manga-cover">
      <img src="https://via.placeholder.com/200x280/74B9FF/FFFFFF?text=古见同学" alt="古见同学">
      <div class="manga-overlay">
        <div class="manga-rating">8.4</div>
        <div class="manga-status reading">连载中</div>
      </div>
    </div>
    <div class="manga-info">
      <h3 class="manga-title">古见同学有交流障碍症</h3>
      <p class="manga-genres">日常 · 喜剧 · 校园</p>
      <p class="manga-author">オダトモヒト</p>
      <p class="manga-progress">第420话 / 连载中</p>
      <div class="manga-description">
        患有交流障碍的古见同学想要交到100个朋友的温馨校园故事...
      </div>
      <a href="/Anime/manga/komi-san.html" class="manga-link">查看详情 →</a>
    </div>
  </div>
</div>
</div></template>

<script>
// 静态数据，用于构建时的兼容性
const staticMangaData = [
  {
    id: 'spy-family',
    title: '间谍过家家',
    subtitle: 'SPY×FAMILY',
    author: '远藤达哉',
    status: 'ongoing',
    rating: 9.5,
    genres: ['喜剧', '动作', '家庭'],
    year: 2019,
    coverImage: 'https://via.placeholder.com/200x280/FF6B6B/FFFFFF?text=间谍过家家',
    summary: '为了完成任务，间谍黄昏需要组建一个家庭。'
  },
  {
    id: 'frieren',
    title: '葬送的芙莉莲',
    subtitle: 'Sousou no Frieren',
    author: '山田钟人',
    status: 'ongoing',
    rating: 9.8,
    genres: ['奇幻', '剧情', '冒险'],
    year: 2020,
    coverImage: 'https://via.placeholder.com/200x280/4ECDC4/FFFFFF?text=芙莉莲',
    summary: '精灵魔法使芙莉莲在勇者死后开始理解人类的旅程。'
  }
];

// 全局变量
let allMangas = staticMangaData;
let filteredMangas = staticMangaData;

// 防抖函数
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

// 页面加载完成后初始化
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', function() {
    try {
      loadMangaData();
      setupEventListeners();
    } catch (error) {
      console.error('初始化失败:', error);
      showErrorState();
    }
  });
}

// 加载漫画数据
function loadMangaData() {
  try {
    showLoadingState();
    
    // 使用静态数据
    if (allMangas.length === 0) {
      showEmptyState();
      return;
    }
    
    filteredMangas = [...allMangas];
    
    // 显示内容并隐藏加载状态
    hideLoadingState();
    showContent();
    
    // 渲染漫画列表
    renderMangaGrid();
    
    // 填充筛选器选项
    populateGenreFilter();
    
  } catch (error) {
    console.error('加载漫画数据失败:', error);
    showErrorState();
  }
}

// 显示加载状态
function showLoadingState() {
  document.getElementById('loading-state').style.display = 'block';
  document.getElementById('error-state').style.display = 'none';
  document.getElementById('empty-state').style.display = 'none';
  document.getElementById('filters').style.display = 'none';
  document.getElementById('manga-grid').style.display = 'none';
}

// 显示错误状态
function showErrorState() {
  document.getElementById('loading-state').style.display = 'none';
  document.getElementById('error-state').style.display = 'block';
  document.getElementById('empty-state').style.display = 'none';
  document.getElementById('filters').style.display = 'none';
  document.getElementById('manga-grid').style.display = 'none';
}

// 显示空状态
function showEmptyState() {
  document.getElementById('loading-state').style.display = 'none';
  document.getElementById('error-state').style.display = 'none';
  document.getElementById('empty-state').style.display = 'block';
  document.getElementById('filters').style.display = 'none';
  document.getElementById('manga-grid').style.display = 'none';
}

// 隐藏加载状态并显示内容
function hideLoadingState() {
  document.getElementById('loading-state').style.display = 'none';
  document.getElementById('error-state').style.display = 'none';
  document.getElementById('empty-state').style.display = 'none';
}

// 显示内容
function showContent() {
  document.getElementById('filters').style.display = 'flex';
  document.getElementById('manga-grid').style.display = 'grid';
}

// 渲染漫画网格
function renderMangaGrid() {
  const container = document.getElementById('manga-grid');
  
  if (filteredMangas.length === 0) {
    container.innerHTML = '<div class="empty-state"><p>没有找到符合条件的漫画</p></div>';
    return;
  }
  
  container.innerHTML = filteredMangas.map(manga => createMangaCard(manga)).join('');
}

// 创建漫画卡片HTML
function createMangaCard(manga) {
  const progressPercentage = manga.totalChapters > 0 ? 
    Math.round((manga.currentChapter / manga.totalChapters) * 100) : 0;
  
  const statusClass = getStatusClass(manga.status);
  const statusText = getStatusText(manga.status);
  
  return `
    <div class="manga-card" onclick="goToMangaDetail('${manga.id}')">
      <div class="manga-cover">
        <img src="${manga.coverImage || 'https://via.placeholder.com/280x400/FF6B6B/FFFFFF?text=' + encodeURIComponent(manga.title)}" 
             alt="${manga.title}" 
             onerror="this.src='https://via.placeholder.com/280x400/FF6B6B/FFFFFF?text=' + encodeURIComponent('${manga.title}')">
        <div class="manga-overlay">
          <div class="manga-rating">${manga.rating || 'N/A'}</div>
          <div class="manga-status ${statusClass}">${statusText}</div>
        </div>
      </div>
      <div class="manga-info">
        <h3 class="manga-title">${manga.title}</h3>
        ${manga.subtitle ? `<div class="manga-subtitle">${manga.subtitle}</div>` : ''}
        <div class="manga-meta">
          <span>${manga.author || '未知作者'}</span>
          <span>${manga.year || '未知年份'}</span>
        </div>
        <div class="manga-genres">${(manga.genres || []).join(' · ')}</div>
        <div class="manga-progress">
          <div class="progress-bar">
            <div class="progress-fill" style="width: ${progressPercentage}%"></div>
          </div>
          <span class="progress-text">${manga.currentChapter || 0}/${manga.totalChapters || '?'}</span>
        </div>
      </div>
    </div>
  `;
}

// 获取状态样式类
function getStatusClass(status) {
  const statusMap = {
    'reading': 'reading',
    'completed': 'completed',
    'planned': 'planned',
    'paused': 'paused',
    'dropped': 'dropped'
  };
  return statusMap[status] || 'unknown';
}

// 获取状态文本
function getStatusText(status) {
  const statusMap = {
    'reading': '正在阅读',
    'completed': '已完成',
    'planned': '计划阅读',
    'paused': '暂停',
    'dropped': '已弃坑'
  };
  return statusMap[status] || '未知状态';
}

// 填充类型筛选器
function populateGenreFilter() {
  const genreSelect = document.getElementById('genre-filter');
  const allGenres = new Set();
  
  allMangas.forEach(manga => {
    if (manga.genres) {
      manga.genres.forEach(genre => allGenres.add(genre));
    }
  });
  
  // 清空现有选项（保留"全部类型"）
  genreSelect.innerHTML = '<option value="">全部类型</option>';
  
  // 添加类型选项
  Array.from(allGenres).sort().forEach(genre => {
    const option = document.createElement('option');
    option.value = genre;
    option.textContent = genre;
    genreSelect.appendChild(option);
  });
}

// 设置事件监听器
function setupEventListeners() {
  // 筛选器事件
  document.getElementById('genre-filter').addEventListener('change', applyFilters);
  document.getElementById('status-filter').addEventListener('change', applyFilters);
  document.getElementById('rating-filter').addEventListener('change', applyFilters);
  
  // 搜索事件（使用防抖）
  const searchInput = document.getElementById('search-input');
  searchInput.addEventListener('input', debounce(applyFilters, 300));
  
  // AI助手按钮事件
  const aiAssistantFab = document.getElementById('aiAssistantFab');
  if (aiAssistantFab) {
    aiAssistantFab.addEventListener('click', openAIAssistant);
  }
}

// 应用筛选器
function applyFilters() {
  const genreFilter = document.getElementById('genre-filter').value;
  const statusFilter = document.getElementById('status-filter').value;
  const ratingFilter = document.getElementById('rating-filter').value;
  const searchQuery = document.getElementById('search-input').value.toLowerCase().trim();
  
  filteredMangas = allMangas.filter(manga => {
    // 类型筛选
    if (genreFilter && (!manga.genres || !manga.genres.includes(genreFilter))) {
      return false;
    }
    
    // 状态筛选
    if (statusFilter && manga.status !== statusFilter) {
      return false;
    }
    
    // 评分筛选
    if (ratingFilter) {
      const minRating = parseFloat(ratingFilter);
      const mangaRating = parseFloat(manga.rating) || 0;
      if (mangaRating < minRating) {
        return false;
      }
    }
    
    // 搜索筛选
    if (searchQuery) {
      const titleMatch = manga.title.toLowerCase().includes(searchQuery);
      const subtitleMatch = manga.subtitle && manga.subtitle.toLowerCase().includes(searchQuery);
      const authorMatch = manga.author && manga.author.toLowerCase().includes(searchQuery);
      
      if (!titleMatch && !subtitleMatch && !authorMatch) {
        return false;
      }
    }
    
    return true;
  });
  
  renderMangaGrid();
}

// 跳转到漫画详情页
function goToMangaDetail(mangaId) {
  // 这里可以跳转到具体的漫画详情页
  if (typeof window !== 'undefined') {
    window.location.href = `/Anime/manga/${mangaId}.html`;
  }
}

// 全局函数，供重新加载按钮调用
if (typeof window !== 'undefined') {
  window.loadMangaData = loadMangaData;
}

// AI助手相关功能
let aiDialog = null;

async function openAIAssistant() {
  try {
    if (!aiDialog) {
      // 动态导入AI对话框组件
      const { AIDialog } = await import('/.vuepress/components/AIDialog.js');
      aiDialog = new AIDialog();
      
      // 设置漫画页面上下文
      aiDialog.setContext('manga', {
        currentPage: 'manga',
        totalMangas: staticMangaData.length,
        availableGenres: ['动作', '冒险', '喜剧', '剧情', '奇幻', '恐怖', '浪漫', '科幻', '运动', '超自然', '惊悚'],
        availableStatuses: ['reading', 'completed', 'on-hold', 'dropped', 'plan-to-read']
      });
    }
    
    // 获取当前漫画数据并打开对话框
    const currentMangas = getCurrentMangaData();
    aiDialog.open(currentMangas, staticMangaData.length);
  } catch (error) {
    console.error('打开AI助手失败:', error);
    alert('AI助手暂时不可用，请稍后再试。');
  }
}

function getCurrentMangaData() {
  // 获取当前显示的漫画数据
  const mangaCards = document.querySelectorAll('.manga-card:not([style*="display: none"])');
  return Array.from(mangaCards).map(card => ({
    title: card.querySelector('.manga-title')?.textContent || '',
    genre: card.dataset.genre || '',
    status: card.dataset.status || '',
    rating: card.dataset.rating || ''
  }));
}

// 延迟初始化AI助手，确保DOM完全加载
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
      // 预加载AI助手组件（可选）
      // 这样可以减少首次点击时的加载时间
    }, 2000);
  });
}
</script>

<style>
.manga-zone {
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

/* 漫画网格样式 */
.manga-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 25px;
  margin-top: 20px;
}

/* 漫画卡片样式 */
.manga-card {
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
}

.manga-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.15);
}

.manga-cover {
  position: relative;
  width: 100%;
  height: 350px;
  overflow: hidden;
}

.manga-cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.manga-card:hover .manga-cover img {
  transform: scale(1.05);
}

.manga-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, transparent 30%, transparent 70%, rgba(0,0,0,0.7) 100%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px;
}

.manga-rating {
  background: rgba(255, 107, 107, 0.9);
  color: white;
  padding: 5px 10px;
  border-radius: 15px;
  font-size: 0.9em;
  font-weight: bold;
  align-self: flex-start;
}

.manga-status {
  padding: 5px 10px;
  border-radius: 15px;
  font-size: 0.8em;
  font-weight: bold;
  align-self: flex-end;
}

.manga-status.reading {
  background: #4CAF50;
  color: white;
}

.manga-status.completed {
  background: #2196F3;
  color: white;
}

.manga-status.planned {
  background: #FF9800;
  color: white;
}

.manga-status.paused {
  background: #9E9E9E;
  color: white;
}

.manga-status.dropped {
  background: #F44336;
  color: white;
}

.manga-status.unknown {
  background: #607D8B;
  color: white;
}

.manga-info {
  padding: 20px;
}

.manga-title {
  font-size: 1.2em;
  font-weight: bold;
  margin: 0 0 5px 0;
  color: #333;
  line-height: 1.3;
}

.manga-subtitle {
  font-size: 0.9em;
  color: #666;
  margin: 0 0 10px 0;
  line-height: 1.2;
}

.manga-meta {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  font-size: 0.85em;
  color: #888;
}

.manga-genres {
  font-size: 0.85em;
  color: #FF6B6B;
  margin-bottom: 15px;
  font-weight: 500;
}

.manga-progress {
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

.manga-author, .manga-progress {
  color: #888;
  font-size: 0.85em;
  margin: 0 0 3px 0;
}

.manga-description {
  color: #555;
  font-size: 0.9em;
  line-height: 1.4;
  margin: 10px 0 15px 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.manga-link {
  color: #007bff;
  text-decoration: none;
  font-weight: bold;
  font-size: 0.9em;
  transition: color 0.3s ease;
}

.manga-link:hover {
  color: #0056b3;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .manga-zone {
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
  
  .manga-grid {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
  }
  
  .manga-cover {
    height: 300px;
  }
}

@media (max-width: 480px) {
  .manga-grid {
    grid-template-columns: 1fr;
  }
  
  .manga-cover {
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