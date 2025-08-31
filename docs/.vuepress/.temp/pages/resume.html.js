import comp from "D:/WorkSpace/BLOG/docs/.vuepress/.temp/pages/resume.html.vue"
const data = JSON.parse("{\"path\":\"/resume.html\",\"title\":\"马双飞 - Android开发工程师\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"马双飞 - Android开发工程师\",\"description\":\"专业的Android开发工程师，拥有9年开发经验，熟练掌握Kotlin、跨平台开发等技术\",\"head\":[[\"meta\",{\"name\":\"description\",\"content\":\"马双飞 - Android开发工程师简历，9年开发经验，美团点评核心开发者\"}],[\"meta\",{\"name\":\"keywords\",\"content\":\"Android开发,Kotlin,移动开发,美团点评,简历\"}]],\"sidebar\":false,\"navbar\":true},\"readingTime\":{\"minutes\":3.98,\"words\":1194},\"filePathRelative\":\"resume.md\"}")
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
