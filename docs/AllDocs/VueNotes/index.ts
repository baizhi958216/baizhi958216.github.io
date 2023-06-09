export const VueNotes = (): { text: string; link: string }[] => {
  return [
    { text: "目录", link: "/AllDocs/VueNotes/" },
    { text: "Vue2生命周期", link: "/AllDocs/VueNotes/lifecyclevue2" },
    {
      text: "Vue3生命周期(组合式API)",
      link: "/AllDocs/VueNotes/lifecyclevue3",
    },
    { text: "使用Pinia", link: "/AllDocs/VueNotes/usepinia" },
    {
      text: "ElementPlus组件按需导入",
      link: "/AllDocs/VueNotes/elementplusondemand",
    },
    {
      text:"更新带参路由",
      link:"/AllDocs/VueNotes/fixroutercache"
    },
    {
      text: "模板语法 && vue指令",
      link: "/AllDocs/VueNotes/p5",
    },
    {
      text: "虚拟dom和diff算法",
      link: "/AllDocs/VueNotes/p6",
    },
    {
      text: "Ref 全家桶 & 源码解析",
      link: "/AllDocs/VueNotes/p7",
    },
  ];
};
