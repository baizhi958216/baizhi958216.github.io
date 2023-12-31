import { defineConfig } from "vitepress";
import { SpringBoot } from "../AllDocs/SpringBoot";
import { Vue3Notes } from "../AllDocs/Vue3Notes";
import { NestJS } from "../AllDocs/NestJS";
import { Frontend } from "../AllDocs/Frontend";
import { InterviewFrontend } from "../AllDocs/InterviewFrontend";
import { Git } from "../AllDocs/Git";
import { Docker } from "../AllDocs/Docker";
import { Linux } from "../AllDocs/Linux";
import { NodeJS } from "../AllDocs/NodeJS";
import { Network } from "../AllDocs/Network";
import { Python } from "../AllDocs/Python";
import { Windows } from "../AllDocs/Windows";
import { Android } from "../AllDocs/Android";
import { Vue2Notes } from "../AllDocs/Vue2Notes";
import { SVN } from "../AllDocs/SVN";
import { TypeScript } from "../AllDocs/TypeScript";
import { MyIdeas } from "../AllDocs/MyIdeas";
import { React18 } from "../AllDocs/React18";
import { kickme } from "../AllDocs/KickMe";
import { Nuxt } from "../AllDocs/Nuxt";
import { AndroidGeek } from "../AllDocs/AndroidGeek";
import { DesignPatterns } from "../AllDocs/DesignPatterns";
import { C } from "../AllDocs/C";

export default defineConfig({
  base: "/",
  lang: "zh-CN",
  title: "纸儿",
  head: [
    [
      "link",
      {
        rel: "shortcut icon",
        href: "/favicon.ico",
      },
    ],
  ],
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
    search: {
      provider: 'local'
    }
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
    } /* 
    {
      text: "Yun振兴前端组件文档",
      link: "/YunBase/",
      activeMatch: "/YunBase/",
    },
    {
      text: "Yun振兴前端开发文档",
      link: "/YunDoc/",
      activeMatch: "/YunDoc/",
    }, */,
    // { text: "Chat", link: "/Chat/", activeMatch: "/Chat/" },
  ];
}

/* 
  文档页侧栏
*/
function sidebar() {
  return {
    "/AllDocs/": [
      {
        text: "我的指指点点",
        collapsed: true,
        items: kickme(),
      },
      {
        text: "安卓开发",
        collapsed: true,
        items: Android(),
      },
      {
        text: "Vue2 学习笔记",
        collapsed: true,
        items: Vue2Notes(),
      },
      {
        text: "Vue3 学习笔记",
        collapsed: true,
        items: Vue3Notes(),
      },
      {
        text: "NuxtJS",
        collapsed: true,
        items: Nuxt(),
      },
      {
        text: "React 18",
        collapsed: true,
        items: React18(),
      },
      {
        text: "前端",
        collapsed: true,
        items: Frontend(),
      },
      {
        text: "TypeScript",
        collapsed: true,
        items: TypeScript(),
      },
      {
        text: "设计模式",
        collapsed: true,
        items: DesignPatterns(),
      },
      {
        text: "前端面试笔试",
        collapsed: true,
        items: InterviewFrontend(),
      },
      {
        text: "Git",
        collapsed: true,
        items: Git(),
      },
      {
        text: "SVN",
        collapsed: true,
        items: SVN(),
      },
      {
        text: "SpringBoot",
        collapsed: true,
        items: SpringBoot(),
      },
      {
        text: "Docker",
        collapsed: true,
        items: Docker(),
      },
      {
        text: "Linux",
        collapsed: true,
        items: Linux(),
      },
      {
        text: "计算机网络",
        collapsed: true,
        items: Network(),
      },
      {
        text: "NodeJS",
        collapsed: true,
        items: NodeJS(),
      },
      {
        text: "NestJS",
        collapsed: true,
        items: NestJS(),
      },
      {
        text: "Python",
        collapsed: true,
        items: Python(),
      },
      {
        text: "C语言习题",
        collapsed: true,
        items: C()
      },
      {
        text: "Windows",
        collapsed: true,
        items: Windows(),
      },
      {
        text: "安卓玩机",
        collapsed: true,
        items: AndroidGeek()
      },
      {
        text: "一些思考",
        collapsed: true,
        items: MyIdeas(),
      },
    ],
    "/Chat/": [],
    /* "/YunBase/": [
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
    ], */
    /*  "/YunDoc/": [
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
    ], */
  };
}
