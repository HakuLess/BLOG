import comp from "D:/WorkSpace/BLOG/docs/.vuepress/.temp/pages/Life/index.html.vue"
const data = JSON.parse("{\"path\":\"/Life/\",\"title\":\"Life\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Life\",\"article\":false,\"feed\":false,\"sitemap\":false},\"readingTime\":{\"minutes\":0,\"words\":1},\"filePathRelative\":null}")
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
