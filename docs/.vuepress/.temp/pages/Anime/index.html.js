import comp from "E:/WorkSpace/BLOG/docs/.vuepress/.temp/pages/Anime/index.html.vue"
const data = JSON.parse("{\"path\":\"/Anime/\",\"title\":\"📊 观看总结\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"readingTime\":{\"minutes\":2.68,\"words\":805},\"filePathRelative\":\"Anime/README.md\"}")
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
