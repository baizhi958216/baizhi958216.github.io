function sidebarFrontend(): Array<{ text: string; link: string }> {
  return [
    { text: "Frontend", link: "/AllDocs/Frontend/" },
    { text: "JS实现简易计算器", link: "/AllDocs/Frontend/calculator" },
    { text: "求多次prompt输入之和", link: "/AllDocs/Frontend/multiprompt" },
    { text: "数组去重", link: "/AllDocs/Frontend/uniquearray" },
    { text: "统计数组中元素出现的次数", link: "/AllDocs/Frontend/count" },
    {
      text: "Github Page部署VitePress",
      link: "/AllDocs/Frontend/VitePress/deploy",
    },
    { text: "TypeScript5正式发布", link: "/AllDocs/Frontend/ts5" },
    { text: "实现一个简易版的虚拟DOM", link: "/AllDocs/Frontend/virtualdom" },
  ];
}
export { sidebarFrontend };
