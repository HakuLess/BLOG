import comp from "D:/WorkSpace/BLOG/docs/.vuepress/.temp/pages/Life/Money/index.html.vue"
const data = JSON.parse("{\"path\":\"/Life/Money/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"feed\":false,\"seo\":false},\"readingTime\":{\"minutes\":0.23,\"words\":69},\"filePathRelative\":\"Life/Money/README.md\"}")
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
