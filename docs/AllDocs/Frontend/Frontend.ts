function sidebarFrontend(): Array<{ text: string; link: string }> {
  return [
    {
      text: "Github Page部署VitePress",
      link: "/AllDocs/Frontend/VitePress/deploy",
    },
    { text: "TypeScript5正式发布", link: "/AllDocs/Frontend/ts5" },
    { text: "实现一个简易版的虚拟DOM", link: "/AllDocs/Frontend/virtualdom" },
    { text: "让对象也可以解构", link: "/AllDocs/Frontend/objiterator" },
  ];
}
export { sidebarFrontend };
