import { defineConfig } from "vitepress";
import { sidebarBackend } from "../AllDocs/Backend/Backend";
import { sidebarDocker } from "../AllDocs/Docker/Docker";
import { sidebarFrontend } from "../AllDocs/Frontend/Frontend";
import { sidebarLinux } from "../AllDocs/Linux/Linux";

export default defineConfig({
  base: "/",
  lang: "zh-CN",
  title: "纸儿",
  lastUpdated: true,
  description: "baizhi958216 互联网开发笔记",
  themeConfig: {
    logo: "/baizhi958216.png",
    nav: nav(),
    sidebar: sidebar(),
    editLink: {
      pattern:
        "https://github.com/baizhi958216/baizhi958216/edit/vitepress/docs/:path",
      text: "在GitHub上编辑该文档",
    },
    socialLinks: [{ icon: "github", link: "https://github.com/baizhi958216" }],
  },
});

/* 
  导航栏项目 
*/

function nav() {
  return [
    { text: "首页", link: "/" },
    {
      text: "全部文档",
      link: "/AllDocs/",
      activeMatch: "/AllDocs/",
    },
    { text: "Chat", link: "/Chat/", activeMatch: "/Chat/" },
  ];
}

/* 
  文档页侧栏
*/
function sidebar() {
  return {
    "/AllDocs/": [
      {
        text: "后端",
        collapsed: true,
        items: sidebarBackend(),
      },
      {
        text: "前端",
        collapsed: true,
        items: sidebarFrontend(),
      },
      {
        text: "Docker",
        collapsed: true,
        items: sidebarDocker(),
      },
      {
        text: "Linux",
        collapsed: true,
        items: sidebarLinux(),
      },
    ],
    "/Chat/": [],
  };
}
