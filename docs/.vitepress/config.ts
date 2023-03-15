import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "zh-cn",
  title: "纸儿",
  description: "baizhi958216 互联网开发笔记",
  themeConfig: {
    nav: [{ text: "首页", link: "/" }],

    socialLinks: [{ icon: "github", link: "https://github.com/baizhi958216" }],
  },
});
