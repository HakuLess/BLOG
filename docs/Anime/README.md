# 📊 观看总结

欢迎来到我的动漫世界！这里记录了我的动漫观看历程和心得体会。

## 🎯 快速导航

<div class="navigation-cards">
  <div class="nav-card">
    <h3>🎞️ 动画专区</h3>
    <p>探索精彩的动画世界</p>
    <a href="/Anime/animation/" class="nav-link">进入动画专区 →</a>
  </div>
  
  <div class="nav-card">
    <h3>📚 漫画专区</h3>
    <p>沉浸在漫画的海洋中</p>
    <a href="/Anime/manga/" class="nav-link">进入漫画专区 →</a>
  </div>
</div>

## 📈 2024年度统计

### 观看数据概览
- **动画完成数量**: 42部
- **漫画完成数量**: 28部
- **总观看时长**: 约520小时
- **平均评分**: 8.2/10

### 月度观看趋势

```echarts
{
  "xAxis": {
    "type": "category",
    "data": ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"]
  },
  "yAxis": {
    "type": "value"
  },
  "series": [
    {
      "name": "动画",
      "data": [3, 5, 4, 6, 3, 2, 4, 5, 3, 4, 6, 7],
      "type": "line",
      "smooth": true,
      "itemStyle": {
        "color": "#FF6B6B"
      },
      "areaStyle": {
        "color": "rgba(255, 107, 107, 0.1)"
      }
    },
    {
      "name": "漫画",
      "data": [2, 3, 2, 4, 3, 1, 2, 3, 2, 2, 3, 4],
      "type": "line",
      "smooth": true,
      "itemStyle": {
        "color": "#4ECDC4"
      },
      "areaStyle": {
        "color": "rgba(78, 205, 196, 0.1)"
      }
    }
  ],
  "title": {
    "text": "2024年月度观看统计"
  },
  "tooltip": {
    "trigger": "axis"
  },
  "legend": {
    "data": ["动画", "漫画"]
  }
}
```

## 🏆 年度最佳

### 🥇 最佳动画
1. **葬送的芙莉莲** - 9.5/10
   - 治愈系奇幻冒险，情感深度令人动容
2. **药屋少女的呢喃** - 9.2/10
   - 古风推理，女主角智慧与美貌并存
3. **咒术回战 第二季** - 9.0/10
   - 战斗场面精彩，剧情紧张刺激

### 🥇 最佳漫画
1. **间谍过家家** - 9.3/10
   - 温馨搞笑的伪装家庭日常
2. **鬼灭之刃** - 9.1/10
   - 热血战斗与兄妹情深
3. **进击的巨人** - 9.0/10
   - 史诗级剧情，震撼结局

## 🎨 类型偏好分析

<div class="genre-stats">
  <div class="genre-item">
    <span class="genre-name">奇幻冒险</span>
    <div class="progress-bar">
      <div class="progress" style="width: 85%"></div>
    </div>
    <span class="percentage">85%</span>
  </div>
  
  <div class="genre-item">
    <span class="genre-name">日常治愈</span>
    <div class="progress-bar">
      <div class="progress" style="width: 72%"></div>
    </div>
    <span class="percentage">72%</span>
  </div>
  
  <div class="genre-item">
    <span class="genre-name">热血战斗</span>
    <div class="progress-bar">
      <div class="progress" style="width: 68%"></div>
    </div>
    <span class="percentage">68%</span>
  </div>
  
  <div class="genre-item">
    <span class="genre-name">推理悬疑</span>
    <div class="progress-bar">
      <div class="progress" style="width: 45%"></div>
    </div>
    <span class="percentage">45%</span>
  </div>
</div>

## 🎯 当前状态

### 正在追番 (3部)
- **葬送的芙莉莲** - 第28集/28集 (已完结)
- **药屋少女的呢喃** - 第24集/24集 (已完结)  
- **关于我转生变成史莱姆这档事 第三季** - 第8集/24集

### 正在阅读 (2部)
- **间谍过家家** - 第95话 (连载中)
- **咒术回战** - 第248话 (连载中)

<style>
.navigation-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: 30px 0;
}

.nav-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 25px;
  border-radius: 15px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.nav-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0,0,0,0.2);
}

.nav-card h3 {
  margin: 0 0 10px 0;
  font-size: 1.5em;
}

.nav-card p {
  margin: 0 0 15px 0;
  opacity: 0.9;
}

.nav-link {
  color: white;
  text-decoration: none;
  font-weight: bold;
  border: 2px solid white;
  padding: 8px 16px;
  border-radius: 25px;
  display: inline-block;
  transition: all 0.3s ease;
}

.nav-link:hover {
  background: white;
  color: #667eea;
}

.genre-stats {
  margin: 20px 0;
}

.genre-item {
  display: flex;
  align-items: center;
  margin: 15px 0;
  gap: 15px;
}

.genre-name {
  min-width: 100px;
  font-weight: bold;
}

.progress-bar {
  flex: 1;
  height: 20px;
  background: #f0f0f0;
  border-radius: 10px;
  overflow: hidden;
}

.progress {
  height: 100%;
  background: linear-gradient(90deg, #FF6B6B, #4ECDC4);
  border-radius: 10px;
  transition: width 0.3s ease;
}

.percentage {
  min-width: 40px;
  text-align: right;
  font-weight: bold;
  color: #666;
}
</style>