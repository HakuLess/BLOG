import comp from "E:/WorkSpace/BLOG/docs/.vuepress/.temp/pages/Anime/animation/index.html.vue"
const data = JSON.parse("{\"path\":\"/Anime/animation/\",\"title\":\"🎞️ 动画专区\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"readingTime\":{\"minutes\":8.63,\"words\":2590},\"filePathRelative\":\"Anime/animation/README.md\"}")
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
