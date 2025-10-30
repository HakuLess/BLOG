import comp from "E:/WorkSpace/BLOG/docs/.vuepress/.temp/pages/Anime/reviews.html.vue"
const data = JSON.parse("{\"path\":\"/Anime/reviews.html\",\"title\":\"🎭 动漫评测\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"readingTime\":{\"minutes\":3.37,\"words\":1010},\"filePathRelative\":\"Anime/reviews.md\"}")
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
