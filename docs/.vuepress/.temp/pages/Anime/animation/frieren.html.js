import comp from "E:/WorkSpace/BLOG/docs/.vuepress/.temp/pages/Anime/animation/frieren.html.vue"
const data = JSON.parse("{\"path\":\"/Anime/animation/frieren.html\",\"title\":\"动画详情\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"readingTime\":{\"minutes\":7.76,\"words\":2329},\"filePathRelative\":\"Anime/animation/frieren.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
