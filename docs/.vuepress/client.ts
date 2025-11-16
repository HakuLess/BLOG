import { defineClientConfig } from 'vuepress/client'
import AuthBar from './components/AuthBar.vue'
import AnimeList from './components/AnimeList.vue'
import MangaList from './components/MangaList.vue'

export default defineClientConfig({
  enhance({ app }) {
    app.component('AuthBar', AuthBar)
    app.component('AnimeList', AnimeList)
    app.component('MangaList', MangaList)
  },
})