import comp from "E:/WorkSpace/BLOG/docs/.vuepress/.temp/pages/Anime/manga/spy-family.html.vue"
const data = JSON.parse("{\"path\":\"/Anime/manga/spy-family.html\",\"title\":\"间谍过家家\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"readingTime\":{\"minutes\":9.82,\"words\":2945},\"filePathRelative\":\"Anime/manga/spy-family.md\"}")
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
