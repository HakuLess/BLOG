import comp from "E:/WorkSpace/BLOG/docs/.vuepress/.temp/pages/Anime/manga/index.html.vue"
const data = JSON.parse("{\"path\":\"/Anime/manga/\",\"title\":\"📚 漫画专区\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"readingTime\":{\"minutes\":10.4,\"words\":3119},\"filePathRelative\":\"Anime/manga/README.md\"}")
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
