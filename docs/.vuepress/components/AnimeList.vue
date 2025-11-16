<template>
  <div class="anime-manager">
    <div class="controls">
      <div class="control">
        <label>类型</label>
        <select v-model="filters.genre">
          <option value="">全部</option>
          <option v-for="g in genreOptions" :key="g" :value="g">{{ g }}</option>
        </select>
      </div>
      <div class="control">
        <label>状态</label>
        <select v-model="filters.status">
          <option value="">全部</option>
          <option value="planning">计划观看</option>
          <option value="watching">正在观看</option>
          <option value="completed">已完成</option>
          <option value="dropped">已弃番</option>
          <option value="on_hold">暂停</option>
        </select>
      </div>
      <div class="control">
        <label>评分≥</label>
        <select v-model="filters.rating">
          <option value="">不限</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
        </select>
      </div>
      <div class="control search">
        <input v-model="keyword" placeholder="搜索标题" @input="onSearch" />
      </div>
      <button class="primary" v-if="user" @click="openCreate">新增动画</button>
    </div>
    <div v-if="loading" class="state">加载中</div>
    <div v-else>
      <div v-if="items.length === 0" class="state">暂无数据</div>
      <div class="grid">
        <div class="card" v-for="it in items" :key="it.id">
          <div class="poster">
            <img :src="imageUrl(it)" :alt="it.title" @error="e=>e.target.src=placeholder(it.title)" />
            <div class="badge">{{ it.rating || 'N/A' }}</div>
          </div>
          <div class="info">
            <div class="title">{{ it.title }}</div>
            <div class="meta">
              <span>{{ it.year || '' }}</span>
              <span>{{ it.episodes ? it.episodes + '集' : '' }}</span>
            </div>
            <div class="genres">{{ (it.genres||[]).slice(0,3).join(' · ') }}</div>
            <div class="actions" v-if="user">
              <button @click="openEdit(it)">编辑</button>
              <button class="danger" @click="remove(it)">删除</button>
              <button @click="toggleProgress(it)">进度</button>
            </div>
            <div class="progress-editor" v-if="user && progressOpen[it.id]">
              <div class="row">
                <label>已看集数</label>
                <input type="number" v-model.number="progressMap[it.id].watchedEpisodes" />
              </div>
              <div class="row">
                <label>状态</label>
                <select v-model="progressMap[it.id].status">
                  <option value="planning">planning</option>
                  <option value="watching">watching</option>
                  <option value="completed">completed</option>
                  <option value="dropped">dropped</option>
                  <option value="on_hold">on_hold</option>
                </select>
              </div>
              <button class="primary" @click="saveProgress(it)">保存进度</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="showForm" class="modal">
      <div class="dialog">
        <div class="dialog-header">
          <div>{{ form.id ? '编辑动画' : '新增动画' }}</div>
          <button class="icon" @click="closeForm">×</button>
        </div>
        <div class="dialog-body">
          <div class="form-grid">
            <label>标题<input v-model="form.title" /></label>
            <label>英文标题<input v-model="form.titleEn" /></label>
            <label>年份<input v-model.number="form.year" type="number" /></label>
            <label>评分<input v-model.number="form.rating" type="number" step="0.1" /></label>
            <label>状态
              <select v-model="form.status">
                <option value="planning">planning</option>
                <option value="watching">watching</option>
                <option value="completed">completed</option>
                <option value="dropped">dropped</option>
                <option value="on_hold">on_hold</option>
              </select>
            </label>
            <label>集数<input v-model.number="form.episodes" type="number" /></label>
            <label>已看集数<input v-model.number="form.watchedEpisodes" type="number" /></label>
            <label>制作公司<input v-model="form.studio" /></label>
            <label>封面地址<input v-model="form.image" /></label>
            <label>类型<input v-model="genresInput" placeholder="以逗号分隔" /></label>
            <label>标签<input v-model="tagsInput" placeholder="以逗号分隔" /></label>
          </div>
          <div class="dialog-actions">
            <button class="primary" @click="submit">{{ form.id ? '更新' : '创建' }}</button>
            <button @click="closeForm">取消</button>
          </div>
          <div v-if="error" class="error">{{ error }}</div>
        </div>
      </div>
    </div>
    <div class="auth-bottom">
      <AuthBar />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import animeService from '../services/animeService.js'
import authService from '../services/authService.js'
import AuthBar from './AuthBar.vue'
import { analytics } from '../firebase.js'
import { logEvent } from 'firebase/analytics'

const items = ref([])
const loading = ref(false)
const filters = ref({ genre: '', status: '', rating: '' })
const keyword = ref('')
const genreOptions = ['奇幻','冒险','剧情','喜剧','动作','治愈','科幻','恋爱','悬疑']
const showForm = ref(false)
const error = ref('')
const form = ref({ id: '', title: '', titleEn: '', description: '', genres: [], rating: 0, status: 'planning', episodes: 0, watchedEpisodes: 0, year: new Date().getFullYear(), studio: '', image: '', tags: [] })
const genresInput = ref('')
const tagsInput = ref('')
const user = ref(null)
const isAdmin = ref(false)
let unsubscribe = null
const progressOpen = ref({})
const progressMap = ref({})

function placeholder(t){
  return `https://via.placeholder.com/300x400/FF6B6B/FFFFFF?text=${encodeURIComponent(t||'Anime')}`
}

function imageUrl(it){
  return it.image || it.cover || it.coverImage || placeholder(it.title)
}

async function fetchList(){
  loading.value = true
  try{
    const f = {}
    if(filters.value.genre) f.genre = filters.value.genre
    if(filters.value.status) f.status = filters.value.status
    if(filters.value.rating) f.rating = filters.value.rating
    if (unsubscribe) unsubscribe()
    unsubscribe = animeService.subscribeAnimes(f, (data)=>{
      items.value = data
      loading.value = false
    })
  }catch(e){
    items.value = []
    loading.value = false
  }
}

function onSearch(){
  if(!keyword.value){
    fetchList()
    return
  }
  loading.value = true
  if (unsubscribe) { unsubscribe(); unsubscribe = null }
  animeService.searchAnimes(keyword.value).then(r=>{items.value=r}).catch(()=>{}).finally(()=>{loading.value=false})
}

function openCreate(){
  form.value = { id: '', title: '', titleEn: '', description: '', genres: [], rating: 0, status: 'planning', episodes: 0, watchedEpisodes: 0, year: new Date().getFullYear(), studio: '', image: '', tags: [] }
  genresInput.value = ''
  tagsInput.value = ''
  error.value = ''
  showForm.value = true
}

function openEdit(it){
  form.value = { id: it.id, title: it.title||'', titleEn: it.titleEn||'', description: it.description||'', genres: it.genres||[], rating: it.rating||0, status: it.status||'planning', episodes: it.episodes||0, watchedEpisodes: it.watchedEpisodes||0, year: it.year||new Date().getFullYear(), studio: it.studio||'', image: it.image||'', tags: it.tags||[] }
  genresInput.value = (form.value.genres||[]).join(',')
  tagsInput.value = (form.value.tags||[]).join(',')
  error.value = ''
  showForm.value = true
}

function closeForm(){
  showForm.value = false
}

async function submit(){
  error.value = ''
  form.value.genres = genresInput.value ? genresInput.value.split(',').map(s=>s.trim()).filter(Boolean) : []
  form.value.tags = tagsInput.value ? tagsInput.value.split(',').map(s=>s.trim()).filter(Boolean) : []
  try{
    if(!form.value.title){ error.value='标题必填'; return }
    if(form.value.rating<0 || form.value.rating>10){ error.value='评分需在0-10'; return }
    if(form.value.episodes<0 || form.value.watchedEpisodes<0 || form.value.watchedEpisodes>form.value.episodes){ error.value='集数不合法'; return }
    if(form.value.id){
      const id = form.value.id
      const payload = { ...form.value }
      delete payload.id
      const r = await animeService.updateAnime(id, payload)
      if(r.success){
        showForm.value = false
        fetchList()
        if (analytics) logEvent(analytics, 'anime_update')
      }else{
        error.value = r.error || r.message
      }
    }else{
      const r = await animeService.addAnime({ ...form.value })
      if(r.success){
        showForm.value = false
        fetchList()
        if (analytics) logEvent(analytics, 'anime_create')
      }else{
        error.value = r.error || r.message
      }
    }
  }catch(e){
    error.value = e.message || '操作失败'
  }
}

async function remove(it){
  try{
    const r = await animeService.deleteAnime(it.id)
    if(r.success){
      fetchList()
      if (analytics) logEvent(analytics, 'anime_delete')
    }
  }catch(e){
  }
}

function toggleProgress(it){
  const id = it.id
  progressOpen.value[id] = !progressOpen.value[id]
  if (progressOpen.value[id]){
    const uid = user.value && user.value.uid
    if (!uid) return
    animeService.getAnimeProgress(uid, id).then(r=>{
      const d = r.data || { watchedEpisodes: it.watchedEpisodes || 0, status: it.status || 'planning' }
      progressMap.value[id] = d
    })
  }
}

async function saveProgress(it){
  const uid = user.value && user.value.uid
  if (!uid) return
  const d = progressMap.value[it.id] || {}
  const res = await animeService.upsertAnimeProgress(uid, it.id, d)
  if (res.success){ if (analytics) logEvent(analytics, 'anime_progress_save') }
}

onMounted(fetchList)
onUnmounted(()=>{ if (unsubscribe) unsubscribe() })

onMounted(()=>{
  authService.onUserChanged(async u=>{
    console.log('[AnimeList] onUserChanged user=', u)
    user.value = u
    isAdmin.value = await authService.isAdmin()
    console.log('[AnimeList] isAdmin=', isAdmin.value)
  })
})

async function login(){
  console.log('[AnimeList] login click')
  await authService.login()
  isAdmin.value = await authService.isAdmin()
}

async function logout(){
  console.log('[AnimeList] logout click')
  await authService.logout()
  user.value = null
  isAdmin.value = false
}
</script>

<style>
.anime-manager{max-width:1200px;margin:0 auto;padding:20px}
.controls{display:flex;flex-wrap:wrap;gap:12px;margin-bottom:16px}
.control{display:flex;flex-direction:column;gap:6px}
.control select,.control input{padding:8px 10px;border:1px solid #ddd;border-radius:6px}
.control.search{flex:1}
.primary{background:#3b82f6;color:#fff;border:none;border-radius:6px;padding:8px 12px;cursor:pointer}
.auth{display:flex;align-items:center;gap:8px}
.state{text-align:center;color:#666;padding:24px}
.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:16px}
.card{background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 2px 10px rgba(0,0,0,0.08);display:flex;flex-direction:column}
.poster{position:relative;height:180px;overflow:hidden}
.poster img{width:100%;height:100%;object-fit:cover}
.badge{position:absolute;top:10px;right:10px;background:rgba(0,0,0,0.7);color:#fff;padding:4px 8px;border-radius:12px;font-size:12px}
.info{padding:12px}
.title{font-weight:600;margin-bottom:6px}
.meta{display:flex;justify-content:space-between;color:#888;font-size:12px;margin-bottom:6px}
.genres{color:#666;font-size:12px;margin-bottom:8px}
.actions{display:flex;gap:8px}
.actions .danger{background:#ef4444;color:#fff;border:none;border-radius:6px;padding:6px 10px;cursor:pointer}
.progress-editor{display:flex;gap:12px;align-items:center;margin-top:10px}
.progress-editor .row{display:flex;gap:8px;align-items:center}
.modal{position:fixed;inset:0;background:rgba(0,0,0,0.5);display:flex;align-items:center;justify-content:center;z-index:1000}
.dialog{background:#fff;border-radius:12px;width:720px;max-width:95vw}
.dialog-header{display:flex;justify-content:space-between;align-items:center;padding:12px 16px;border-bottom:1px solid #eee}
.dialog-header .icon{background:none;border:none;font-size:20px;cursor:pointer}
.dialog-body{padding:16px}
.form-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.form-grid label{display:flex;flex-direction:column;gap:6px;font-size:12px;color:#444}
.form-grid input,.form-grid select{padding:8px 10px;border:1px solid #ddd;border-radius:6px}
.dialog-actions{margin-top:12px;display:flex;gap:10px}
.error{color:#ef4444;margin-top:8px}
@media (max-width:768px){.form-grid{grid-template-columns:1fr}.dialog{width:95vw}}
</style>
