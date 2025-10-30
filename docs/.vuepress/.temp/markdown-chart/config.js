import { defineClientConfig } from "vuepress/client";
import ChartJS from "E:/WorkSpace/BLOG/node_modules/@vuepress/plugin-markdown-chart/lib/client/components/ChartJS.js";
import ECharts from "E:/WorkSpace/BLOG/node_modules/@vuepress/plugin-markdown-chart/lib/client/components/ECharts.js";
import FlowChart from "E:/WorkSpace/BLOG/node_modules/@vuepress/plugin-markdown-chart/lib/client/components/FlowChart.js";
import Mermaid from "E:/WorkSpace/BLOG/node_modules/@vuepress/plugin-markdown-chart/lib/client/components/Mermaid.js";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("ChartJS", ChartJS)
    app.component("ECharts", ECharts);
    app.component("FlowChart", FlowChart);
    app.component("Mermaid", Mermaid);
  },
});
