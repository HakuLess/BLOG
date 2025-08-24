import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";
import { viteBundler } from "@vuepress/bundler-vite";

export default defineUserConfig({
  lang: "zh-CN",
  title: "HaKu's Blog",
  description: "Just playing around",
  base: "/",

  bundler: viteBundler(),

  // VuePress 2.x URL配置
  locales: {
    "/": {
      lang: "zh-CN",
      title: "HaKu's Blog",
      description: "Just playing around",
    },
  },

  theme: hopeTheme({
    // 启用ECharts支持
    plugins: {
      mdEnhance: {
        echarts: true,
      },
    },

    // 导航栏配置
    navbar: [
      { text: "Home", link: "/" },
      {
        text: "Contest",
        children: [
          { text: "LeetCode", link: "/Contest/LeetCode/" },
          { text: "AtCoder", link: "/Contest/AtCoder/" },
          { text: "CodeForces", link: "/Contest/CodeForces/" },
        ],
      },
      {
        text: "Study",
        children: [
          {
            text: "ACM",
            children: [
              { text: "Algorithm", link: "/Study/Algorithm/" },
              { text: "Union-Find-Set", link: "/Study/DataStructure/" },
            ],
          },
          {
            text: "Tech",
            children: [
              { text: "Android", link: "/Study/Android/" },
            ],
          },
        ],
      },
      {
        text: "Life",
        children: [
          { text: "Money", link: "/Life/Money/" },
          { text: "Play", link: "/Life/Play/" },
        ],
      },
    ],

    // 侧边栏配置
    sidebar: {
      "/Contest/LeetCode/": [
        {
          text: "周赛",
          collapsible: true,
          children: [
            { text: "第 283 场周赛", link: "/Contest/LeetCode/WC283.md" },
            { text: "第 282 场周赛", link: "/Contest/LeetCode/WC282.md" },
            { text: "第 281 场周赛", link: "/Contest/LeetCode/WC281.md" },
            { text: "第 280 场周赛", link: "/Contest/LeetCode/WC280.md" },
            { text: "第 279 场周赛", link: "/Contest/LeetCode/WC279.md" },
            { text: "第 278 场周赛", link: "/Contest/LeetCode/WC278.md" },
            { text: "第 277 场周赛", link: "/Contest/LeetCode/WC277.md" },
            { text: "第 276 场周赛", link: "/Contest/LeetCode/WC276.md" },
            { text: "第 275 场周赛", link: "/Contest/LeetCode/WC275.md" },
            { text: "第 274 场周赛", link: "/Contest/LeetCode/WC274.md" },
            { text: "第 273 场周赛", link: "/Contest/LeetCode/WC273.md" },
            { text: "第 272 场周赛", link: "/Contest/LeetCode/WC272.md" },
            { text: "第 271 场周赛", link: "/Contest/LeetCode/WC271.md" },
            { text: "第 270 场周赛", link: "/Contest/LeetCode/WC270.md" },
            { text: "第 269 场周赛", link: "/Contest/LeetCode/WC269.md" },
            { text: "第 268 场周赛", link: "/Contest/LeetCode/WC268.md" },
            { text: "第 267 场周赛", link: "/Contest/LeetCode/WC267.md" },
            { text: "第 266 场周赛", link: "/Contest/LeetCode/WC266.md" },
            { text: "第 265 场周赛", link: "/Contest/LeetCode/WC265.md" },
            { text: "第 264 场周赛", link: "/Contest/LeetCode/WC264.md" },
            { text: "第 263 场周赛", link: "/Contest/LeetCode/WC263.md" },
            { text: "第 262 场周赛", link: "/Contest/LeetCode/WC262.md" },
            { text: "第 261 场周赛", link: "/Contest/LeetCode/WC261.md" },
            { text: "第 260 场周赛", link: "/Contest/LeetCode/WC260.md" },
            { text: "第 259 场周赛", link: "/Contest/LeetCode/WC259.md" },
            { text: "第 258 场周赛", link: "/Contest/LeetCode/WC258.md" },
            { text: "第 257 场周赛", link: "/Contest/LeetCode/WC257.md" },
            { text: "第 256 场周赛", link: "/Contest/LeetCode/WC256.md" },
            { text: "第 255 场周赛", link: "/Contest/LeetCode/WC255.md" },
            { text: "第 254 场周赛", link: "/Contest/LeetCode/WC254.md" },
            { text: "第 253 场周赛", link: "/Contest/LeetCode/WC253.md" },
            { text: "第 252 场周赛", link: "/Contest/LeetCode/WC252.md" },
            { text: "第 250 场周赛", link: "/Contest/LeetCode/WC250.md" },
            { text: "第 249 场周赛", link: "/Contest/LeetCode/WC249.md" },
            { text: "第 246 场周赛", link: "/Contest/LeetCode/WC246.md" },
            { text: "第 245 场周赛", link: "/Contest/LeetCode/WC245.md" },
            { text: "第 244 场周赛", link: "/Contest/LeetCode/WC244.md" },
            { text: "第 243 场周赛", link: "/Contest/LeetCode/WC243.md" },
            { text: "第 242 场周赛", link: "/Contest/LeetCode/WC242.md" },
            { text: "第 241 场周赛", link: "/Contest/LeetCode/WC241.md" },
            { text: "第 240 场周赛", link: "/Contest/LeetCode/WC240.md" },
            { text: "第 239 场周赛", link: "/Contest/LeetCode/WC239.md" },
            { text: "第 238 场周赛", link: "/Contest/LeetCode/WC238.md" },
            { text: "第 237 场周赛", link: "/Contest/LeetCode/WC237.md" },
            { text: "第 236 场周赛", link: "/Contest/LeetCode/WC236.md" },
            { text: "第 235 场周赛", link: "/Contest/LeetCode/WC235.md" },
            { text: "第 234 场周赛", link: "/Contest/LeetCode/WC234.md" },
            { text: "第 233 场周赛", link: "/Contest/LeetCode/WC233.md" },
            { text: "第 232 场周赛", link: "/Contest/LeetCode/WC232.md" },
            { text: "第 231 场周赛", link: "/Contest/LeetCode/WC231.md" },
            { text: "第 230 场周赛", link: "/Contest/LeetCode/WC230.md" },
            { text: "第 229 场周赛", link: "/Contest/LeetCode/WC229.md" },
            { text: "第 228 场周赛", link: "/Contest/LeetCode/WC228.md" },
            { text: "第 227 场周赛", link: "/Contest/LeetCode/WC227.md" },
            { text: "第 226 场周赛", link: "/Contest/LeetCode/WC226.md" },
            { text: "第 225 场周赛", link: "/Contest/LeetCode/WC225.md" },
            { text: "第 224 场周赛", link: "/Contest/LeetCode/WC224.md" },
            { text: "第 223 场周赛", link: "/Contest/LeetCode/WC223.md" },
            { text: "第 222 场周赛", link: "/Contest/LeetCode/WC222.md" },
            { text: "第 221 场周赛", link: "/Contest/LeetCode/WC221.md" },
          ],
        },
        {
          text: "双周赛",
          collapsible: true,
          children: [
            { text: "第 73 场双周赛", link: "/Contest/LeetCode/BWC73.md" },
            { text: "第 72 场双周赛", link: "/Contest/LeetCode/BWC72.md" },
            { text: "第 71 场双周赛", link: "/Contest/LeetCode/BWC71.md" },
            { text: "第 70 场双周赛", link: "/Contest/LeetCode/BWC70.md" },
            { text: "第 69 场双周赛", link: "/Contest/LeetCode/BWC69.md" },
            { text: "第 68 场双周赛", link: "/Contest/LeetCode/BWC68.md" },
            { text: "第 67 场双周赛", link: "/Contest/LeetCode/BWC67.md" },
            { text: "第 66 场双周赛", link: "/Contest/LeetCode/BWC66.md" },
            { text: "第 65 场双周赛", link: "/Contest/LeetCode/BWC65.md" },
            { text: "第 64 场双周赛", link: "/Contest/LeetCode/BWC64.md" },
            { text: "第 63 场双周赛", link: "/Contest/LeetCode/BWC63.md" },
            { text: "第 62 场双周赛", link: "/Contest/LeetCode/BWC62.md" },
            { text: "第 61 场双周赛", link: "/Contest/LeetCode/BWC61.md" },
            { text: "第 60 场双周赛", link: "/Contest/LeetCode/BWC60.md" },
            { text: "第 58 场双周赛", link: "/Contest/LeetCode/BWC58.md" },
            { text: "第 57 场双周赛", link: "/Contest/LeetCode/BWC57.md" },
            { text: "第 56 场双周赛", link: "/Contest/LeetCode/BWC56.md" },
            { text: "第 54 场双周赛", link: "/Contest/LeetCode/BWC54.md" },
            { text: "第 53 场双周赛", link: "/Contest/LeetCode/BWC53.md" },
            { text: "第 51 场双周赛", link: "/Contest/LeetCode/BWC51.md" },
            { text: "第 49 场双周赛", link: "/Contest/LeetCode/BWC49.md" },
            { text: "第 48 场双周赛", link: "/Contest/LeetCode/BWC48.md" },
            { text: "第 47 场双周赛", link: "/Contest/LeetCode/BWC47.md" },
            { text: "第 46 场双周赛", link: "/Contest/LeetCode/BWC46.md" },
            { text: "第 45 场双周赛", link: "/Contest/LeetCode/BWC45.md" },
            { text: "第 44 场双周赛", link: "/Contest/LeetCode/BWC44.md" },
            { text: "第 43 场双周赛", link: "/Contest/LeetCode/BWC43.md" },
            { text: "第 42 场双周赛", link: "/Contest/LeetCode/BWC42.md" },
            { text: "第 41 场双周赛", link: "/Contest/LeetCode/BWC41.md" },
            { text: "第 30 场双周赛", link: "/Contest/LeetCode/BWC30.md" },
          ],
        },
      ],
      "/Contest/CodeForces/": [
        {
          text: "Round",
          collapsible: true,
          children: [
            { text: "CodeForces Round 764", link: "/Contest/CodeForces/CR764.md" },
          ],
        },
      ],
      "/Life/Money/": [
        {
          text: "资产分析",
          collapsible: true,
          children: [
            { text: "资产总览", link: "/Life/Money/资产总览.md" },
            { text: "资产分析2025", link: "/Life/Money/资产分析2025.md" },
            { text: "资产分析2024", link: "/Life/Money/资产分析2024.md" },
            { text: "资产分析2022", link: "/Life/Money/资产分析2022.md" },
            { text: "资产分析2021", link: "/Life/Money/资产分析2021.md" },
            { text: "资产分析2020", link: "/Life/Money/资产分析2020.md" },
          ],
        },
      ],
    },
  }),
});
