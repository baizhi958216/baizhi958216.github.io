export const Vue3Notes = (): { text: string; link: string }[] => {
  return [
    {
      text: "Vue3生命周期(组合式API)",
      link: "lifecyclevue3",
    },
    { text: "使用Pinia", link: "usepinia" },
    {
      text: "ElementPlus组件按需导入",
      link: "elementplusondemand",
    },
    {
      text: "使用ElementPlus实现无限滚动",
      link: "elementinfinityscroll",
    },
    {
      text: "更新带参路由",
      link: "fixroutercache",
    },
    {
      text: "模板语法 && vue指令",
      link: "p5",
    },
    {
      text: "虚拟dom和diff算法",
      link: "p6",
    },
    {
      text: "Ref 全家桶 & 源码解析",
      link: "p7",
    },
  ].map((obj) => {
    return { text: obj.text, link: `/AllDocs/Vue3Notes/${obj.link}` };
  });
};
