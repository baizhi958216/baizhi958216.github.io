import { defineConfig } from "vitepress";
import { sidebarBackend } from "../AllDocs/Backend/Backend";
import { sidebarDocker } from "../AllDocs/Docker/Docker";
import { sidebarFrontend } from "../AllDocs/Frontend/Frontend";
import { sidebarLinux } from "../AllDocs/Linux/Linux";
import { sidebarNodeJSHomework } from "../AllDocs/NodeJSHomework/NodeJSHomework";
import { sidebarPythonHomework } from "../AllDocs/PythonHomework/PythonHomework";
import { Header } from "../YunBase/Header";
import { Navbar } from "../YunBase/Navbar";
import { YBase } from "../YunBase/YBase";
import { Standard } from "../YunDoc/Standard";
import { Interface } from "../YunDoc/Interface";
import VueNotes from "../AllDocs/VueNotes";

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
        "https://github.com/baizhi958216/baizhi958216.github.io/edit/main/docs/:path",
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
    {
      text: "Yun振兴前端组件文档",
      link: "/YunBase/",
      activeMatch: "/YunBase/",
    },
    {
      text: "Yun振兴前端开发文档",
      link: "/YunDoc/",
      activeMatch: "/YunDoc/",
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
        text: "Vue3 学习笔记",
        collapsed: true,
        items: VueNotes,
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
      {
        text: "NodeJS 作业",
        collapsed: true,
        items: sidebarNodeJSHomework(),
      },
      {
        text: "Python 作业",
        collapsed: true,
        items: sidebarPythonHomework(),
      },
    ],
    "/Chat/": [],
    "/YunBase/": [
      {
        text: "顶部菜单 Header",
        collapsed: true,
        items: Header(),
      },
      {
        text: "基础组件",
        collapsed: false,
        items: YBase(),
      },
      {
        text: "底部导航 Navbar",
        collapsed: true,
        items: Navbar(),
      },
    ],
    "/YunDoc/": [
      {
        text: "概述",
        link: "/YunDoc/",
      },
      {
        text: "规范文档",
        collapsed: false,
        items: Standard(),
      },
      {
        text: "各页面接口文档",
        collapsed: false,
        items: Interface(),
      },
    ],
  };
}
