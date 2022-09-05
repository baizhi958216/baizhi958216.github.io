export default {
  title: '我的文档',
  description: 'Just playing around.',
  themeConfig: {
    logo: '/baizhi958216.jpg',
    editLink: {
      pattern: 'https://github.com/baizhi958216/baizhi958216/blob/vitepress/docs/:path',
      text: '编辑这个文档'
    },
    // sidebar可见的情况下不显示footer
    /* footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022 baizhi958216'
    }, */
    nav: [
      {
        text: '搜索引擎',
        items: [
          { text: '谷歌', link: 'https://www.google.com' },
          { text: '必应', link: 'https://www.bing.com' },
          { text: '百度', link: 'https://www.baidu.com' }
        ]
      },
      { text: 'Github', link: 'https://github.com/baizhi958216' },
    ],
    sidebar: [
      {
        text: 'Android',
        collapsed: true,
        collapsible: true,
        items: [
          { text: '安卓简介', link: '/Android/' },
        ]
      },
      {
        text: 'CPP',
        collapsed: true,
        collapsible: true,
        items: [
          { text: 'C++简介', link: '/CPP/' },
        ]
      },
      {
        text: 'Linux',
        collapsed: true,
        collapsible: true,
        items: [
          { text: 'Linux简介', link: '/Linux/' },
          { text: 'ArchLinux人脸认证', link: '/Linux/archlinux-face-verify' },
        ]
      },
      {
        text: '虚幻引擎',
        collapsed: true,
        collapsible: true,
        items: [
          { text: '虚幻引擎简介', link: '/UnrealEngine/' },
        ]
      },
      {
        text: 'Windows',
        collapsed: true,
        collapsible: true,
        items: [
          { text: 'Windows简介', link: '/Windows/' },
        ]
      },
      {
        text: '错乱',
        collapsed: true,
        collapsible: true,
        items: [
          { text: '???', link: '/MISC/' },
        ]
      }
    ]
  }
}