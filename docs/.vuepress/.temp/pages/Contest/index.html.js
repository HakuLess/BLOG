import comp from "E:/WorkSpace/BLOG/docs/.vuepress/.temp/pages/Contest/index.html.vue"
const data = JSON.parse("{\"path\":\"/Contest/\",\"title\":\"Contest\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Contest\",\"article\":false,\"feed\":false,\"sitemap\":false},\"readingTime\":{\"minutes\":0,\"words\":1},\"filePathRelative\":null}")
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
