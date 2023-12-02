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
    {
      text:'VUE 3.3新特性',
      link:'vue33'
    },{
      text: '封装一个供编程式使用的消息提示组件',
      link: 'popmessage'
    },
    {
      text: '图片资源翻页效果',
      link: 'flipbook'
    }
  ].map((obj) => {
    return { text: obj.text, link: `/AllDocs/Vue3Notes/${obj.link}` };
  });
};
