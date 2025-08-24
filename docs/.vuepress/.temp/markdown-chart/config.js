import { defineClientConfig } from "vuepress/client";
import ECharts from "D:/WorkSpace/BLOG/node_modules/@vuepress/plugin-markdown-chart/lib/client/components/ECharts.js";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("ECharts", ECharts);
  },
});
