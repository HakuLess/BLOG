# 动画详情

<div id="loading-state" class="loading-state">
  <div class="loading-spinner"></div>
  <p>正在加载动画详情...</p>
</div>

<div id="error-state" class="error-state" style="display: none;">
  <h3>😔 加载失败</h3>
  <p>无法获取动画详情，请检查网络连接或稍后重试</p>
  <button class="retry-button" onclick="loadAnimeDetail()">重新加载</button>
</div>

<div id="anime-content" style="display: none;">
  <div class="anime-header">
    <div class="anime-poster-large">
      <img id="anime-poster" src="" alt="">
    </div>
    
    <div class="anime-details">
      <h1 id="anime-title"></h1>
      <p id="anime-subtitle" class="anime-subtitle"></p>
      
      <div class="anime-meta" id="anime-meta">
        <!-- 元数据将通过JavaScript动态生成 -->
      </div>
    </div>
  </div>

  <div id="anime-summary" class="content-section">
    <h2>📖 剧情简介</h2>
    <div id="summary-content"></div>
  </div>

  <div id="anime-characters" class="content-section">
    <h2>🎭 主要角色</h2>
    <div id="characters-grid" class="character-grid">
      <!-- 角色信息将通过JavaScript动态生成 -->
    </div>
  </div>

  <div id="anime-impressions" class="content-section">
    <h2>💭 观看感想</h2>
    <div id="impressions-content"></div>
  </div>

  <div id="anime-episodes" class="content-section">
    <h2>📺 分集评价</h2>
    <div id="episodes-content"></div>
  </div>

  <div id="anime-awards" class="content-section">
    <h2>🏆 获奖记录</h2>
    <div id="awards-content"></div>
  </div>

  <div id="anime-links" class="content-section">
    <h2>🔗 相关链接</h2>
    <div id="links-content"></div>
  </div>

  <div id="anime-records" class="content-section">
    <h2>📊 观看记录</h2>
    <div id="records-content"></div>
  </div>
</div>
  <div class="character-card">
    <div class="character-avatar">
      <img src="https://via.placeholder.com/120x120/FF6B6B/FFFFFF?text=芙莉莲" alt="芙莉莲">
    </div>
    <h4>芙莉莲</h4>
    <p>精灵魔法使，活了1000多年。曾是勇者队伍的一员，在辛美尔死后开始理解人类的旅程。</p>
  </div>
  
  <div class="character-card">
    <div class="character-avatar">
      <img src="https://via.placeholder.com/120x120/4ECDC4/FFFFFF?text=费伦" alt="费伦">
    </div>
    <h4>费伦</h4>
    <p>人类魔法使，芙莉莲的弟子。认真努力，梦想成为一流的魔法使。</p>
  </div>
  
  <div class="character-card">
    <div class="character-avatar">
      <img src="https://via.placeholder.com/120x120/45B7D1/FFFFFF?text=修塔尔克" alt="修塔尔克">
    </div>
    <h4>修塔尔克</h4>
    <p>人类战士，艾森的弟子。虽然胆小但内心善良，梦想成为勇者。</p>
  </div>
  
  <div class="character-card">
    <div class="character-avatar">
      <img src="https://via.placeholder.com/120x120/96CEB4/FFFFFF?text=辛美尔" alt="辛美尔">
    </div>
    <h4>辛美尔</h4>
    <p>已故的勇者，芙莉莲的重要伙伴。他的死让芙莉莲开始思考人类的意义。</p>
  </div>
</div>

## 💭 观看感想

### 🌟 亮点
- **情感深度**：对时间、生命和友情的深刻思考令人动容
- **画面精美**：MADHOUSE的制作水准一如既往的优秀
- **音乐动人**：配乐完美契合剧情氛围
- **角色塑造**：每个角色都有鲜明的个性和成长轨迹

### 📝 详细评价

这部作品真的是近年来最治愈的动画之一。芙莉莲作为精灵的时间观念与人类的短暂生命形成强烈对比，每一个回忆都让人泪目。特别是与辛美尔的回忆片段，展现了友情的珍贵和时间的无情。

动画在节奏把控上非常出色，既有温馨的日常，也有紧张的战斗。费伦和修塔尔克的加入为故事注入了新的活力，他们与芙莉莲的互动既有师徒情深，也有朋友间的温暖。

## 📊 分集评价

<div class="episode-ratings">
  <div class="episode-group">
    <h4>第一季 (1-16集)</h4>
    <div class="episode-list">
      <div class="episode-item">
        <span class="episode-number">EP01</span>
        <span class="episode-title">冒险的结束</span>
        <span class="episode-rating">⭐⭐⭐⭐⭐</span>
      </div>
      <div class="episode-item">
        <span class="episode-number">EP02</span>
        <span class="episode-title">不应该存在的魔法</span>
        <span class="episode-rating">⭐⭐⭐⭐</span>
      </div>
      <div class="episode-item">
        <span class="episode-number">EP03</span>
        <span class="episode-title">蓝月草</span>
        <span class="episode-rating">⭐⭐⭐⭐⭐</span>
      </div>
      <!-- 更多集数... -->
    </div>
  </div>
  
  <div class="episode-group">
    <h4>第二季 (17-28集)</h4>
    <div class="episode-list">
      <div class="episode-item">
        <span class="episode-number">EP17</span>
        <span class="episode-title">一级魔法使选拔试验</span>
        <span class="episode-rating">⭐⭐⭐⭐⭐</span>
      </div>
      <div class="episode-item">
        <span class="episode-number">EP28</span>
        <span class="episode-title">与你一起的冒险</span>
        <span class="episode-rating">⭐⭐⭐⭐⭐</span>
      </div>
      <!-- 更多集数... -->
    </div>
  </div>
</div>

## 🏆 获奖记录

- **2024年 Crunchyroll动画大奖** - 年度最佳动画
- **2024年 东京动画大奖** - 优秀作品奖
- **2024年 日本动画协会奖** - 最佳导演奖

## 🔗 相关链接

- [官方网站](https://frieren-anime.jp/)
- [Bilibili观看](https://www.bilibili.com/bangumi/play/ss45576)
- [MyAnimeList](https://myanimelist.net/anime/52991)

## 📅 观看记录

- **开始观看**：2023年9月29日
- **完成观看**：2024年3月22日
- **重看次数**：2次
- **推荐指数**：⭐⭐⭐⭐⭐

---

<div class="navigation-buttons">
  <a href="/Anime/animation/" class="nav-button">← 返回动画专区</a>
  <a href="/Anime/animation/kusuriya.html" class="nav-button">下一部：药屋少女的呢喃 →</a>
</div>

<style>
.anime-header {
  display: flex;
  gap: 30px;
  margin: 30px 0;
  padding: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 15px;
  color: white;
}

.anime-poster-large img {
  width: 300px;
  height: 420px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 8px 25px rgba(0,0,0,0.3);
}

.anime-details {
  flex: 1;
}

.anime-details h1 {
  font-size: 2.5em;
  margin: 0 0 10px 0;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

.anime-subtitle {
  font-size: 1.2em;
  opacity: 0.9;
  margin: 0 0 20px 0;
}

.anime-meta {
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

.meta-value.status.completed {
  background: #28a745;
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

.episode-ratings {
  margin: 20px 0;
}

.episode-group {
  margin: 20px 0;
}

.episode-group h4 {
  color: #333;
  border-bottom: 2px solid #667eea;
  padding-bottom: 5px;
}

.episode-list {
  display: grid;
  gap: 8px;
  margin: 15px 0;
}

.episode-item {
  display: grid;
  grid-template-columns: 60px 1fr auto;
  gap: 15px;
  align-items: center;
  padding: 10px;
  background: #f8f9fa;
  border-radius: 5px;
}

.episode-number {
  font-weight: bold;
  color: #667eea;
}

.episode-title {
  color: #333;
}

.episode-rating {
  color: #ffc107;
}

.navigation-buttons {
  display: flex;
  justify-content: space-between;
  margin: 40px 0 20px 0;
  gap: 20px;
}

.nav-button {
  background: #667eea;
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
  background: #5a6fd8;
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .anime-header {
    flex-direction: column;
    text-align: center;
  }
  
  .anime-poster-large img {
    width: 250px;
    height: 350px;
  }
  
  .character-grid {
    grid-template-columns: 1fr;
  }
  
  .navigation-buttons {
    flex-direction: column;
  }
}
</style>

<script>
// 导入Firebase服务
import { AnimeService } from '../../.vuepress/services/animeService.js';

// 全局变量
let animeService;
let currentAnimeId;

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', async function() {
  try {
    animeService = new AnimeService();
    
    // 从URL获取动画ID，如果没有则使用默认ID
    currentAnimeId = getAnimeIdFromUrl() || 'frieren';
    
    await loadAnimeDetail();
  } catch (error) {
    console.error('初始化失败:', error);
    showErrorState();
  }
});

// 从URL获取动画ID
function getAnimeIdFromUrl() {
  const path = window.location.pathname;
  const matches = path.match(/\/animation\/([^\/]+)\.html?$/);
  return matches ? matches[1] : null;
}

// 加载动画详情
async function loadAnimeDetail() {
  try {
    showLoadingState();
    
    // 从Firebase获取动画详情
    const anime = await animeService.getAnimeById(currentAnimeId);
    
    if (!anime) {
      showErrorState();
      return;
    }
    
    // 渲染动画详情
    renderAnimeDetail(anime);
    
    // 显示内容并隐藏加载状态
    hideLoadingState();
    showContent();
    
  } catch (error) {
    console.error('加载动画详情失败:', error);
    showErrorState();
  }
}

// 显示加载状态
function showLoadingState() {
  document.getElementById('loading-state').style.display = 'block';
  document.getElementById('error-state').style.display = 'none';
  document.getElementById('anime-content').style.display = 'none';
}

// 显示错误状态
function showErrorState() {
  document.getElementById('loading-state').style.display = 'none';
  document.getElementById('error-state').style.display = 'block';
  document.getElementById('anime-content').style.display = 'none';
}

// 隐藏加载状态并显示内容
function hideLoadingState() {
  document.getElementById('loading-state').style.display = 'none';
  document.getElementById('error-state').style.display = 'none';
}

// 显示内容
function showContent() {
  document.getElementById('anime-content').style.display = 'block';
}

// 渲染动画详情
function renderAnimeDetail(anime) {
  // 更新页面标题
  document.title = anime.title + ' - 动画详情';
  
  // 更新基本信息
  document.getElementById('anime-title').textContent = anime.title;
  document.getElementById('anime-subtitle').textContent = anime.subtitle || '';
  
  const poster = document.getElementById('anime-poster');
  poster.src = anime.coverImage || `https://via.placeholder.com/300x420/FF6B6B/FFFFFF?text=${encodeURIComponent(anime.title)}`;
  poster.alt = anime.title;
  
  // 渲染元数据
  renderAnimeMeta(anime);
  
  // 渲染各个内容区域
  renderSummary(anime.summary);
  renderCharacters(anime.characters);
  renderImpressions(anime.impressions);
  renderEpisodes(anime.episodes);
  renderAwards(anime.awards);
  renderLinks(anime.links);
  renderRecords(anime.records);
}

// 渲染元数据
function renderAnimeMeta(anime) {
  const metaContainer = document.getElementById('anime-meta');
  
  const metaItems = [
    { label: '类型', value: (anime.genres || []).join(' · ') },
    { label: '制作公司', value: anime.studio },
    { label: '播出时间', value: anime.airDate },
    { label: '集数', value: `${anime.totalEpisodes}集` },
    { label: '我的评分', value: `⭐⭐⭐⭐⭐ ${anime.rating}/10`, class: 'rating' },
    { label: '观看状态', value: getStatusText(anime.status), class: `status ${anime.status}` }
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

// 渲染观看感想
function renderImpressions(impressions) {
  const container = document.getElementById('impressions-content');
  
  if (!impressions || impressions.length === 0) {
    container.innerHTML = '<p>暂无观看感想</p>';
    return;
  }
  
  container.innerHTML = impressions.map(impression => `
    <div class="impression-item">
      <h4>${impression.title}</h4>
      <p>${impression.content}</p>
    </div>
  `).join('');
}

// 渲染分集评价
function renderEpisodes(episodes) {
  const container = document.getElementById('episodes-content');
  
  if (!episodes || episodes.length === 0) {
    container.innerHTML = '<p>暂无分集评价</p>';
    return;
  }
  
  container.innerHTML = `
    <div class="episodes-grid">
      ${episodes.map(episode => `
        <div class="episode-card">
          <div class="episode-header">
            <span class="episode-number">第${episode.number}集</span>
            <span class="episode-rating">⭐ ${episode.rating}/10</span>
          </div>
          <h4 class="episode-title">${episode.title}</h4>
          <p class="episode-comment">${episode.comment || ''}</p>
        </div>
      `).join('')}
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

// 渲染观看记录
function renderRecords(records) {
  const container = document.getElementById('records-content');
  
  if (!records || records.length === 0) {
    container.innerHTML = '<p>暂无观看记录</p>';
    return;
  }
  
  container.innerHTML = `
    <div class="records-timeline">
      ${records.map(record => `
        <div class="record-item">
          <div class="record-date">${record.date}</div>
          <div class="record-content">
            <h4>${record.title}</h4>
            <p>${record.description}</p>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

// 获取状态文本
function getStatusText(status) {
  const statusMap = {
    'watching': '正在观看',
    'completed': '已完成',
    'planned': '计划观看',
    'paused': '暂停',
    'dropped': '已弃坑'
  };
  return statusMap[status] || '未知状态';
}

// 全局函数，供重新加载按钮调用
window.loadAnimeDetail = loadAnimeDetail;
</script>