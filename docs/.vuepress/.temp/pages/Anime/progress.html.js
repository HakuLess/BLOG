import comp from "E:/WorkSpace/BLOG/docs/.vuepress/.temp/pages/Anime/progress.html.vue"
const data = JSON.parse("{\"path\":\"/Anime/progress.html\",\"title\":\"📊 详细观看进度\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"readingTime\":{\"minutes\":2.37,\"words\":710},\"filePathRelative\":\"Anime/progress.md\"}")
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
