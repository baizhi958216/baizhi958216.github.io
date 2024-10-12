export const Frontend = (): { text: string; link: string }[] => {
  return [
    { text: "ECMAScript", link: "ecmascript" },
    { text: "ES5", link: "es5" },
    { text: "ES6", link: "es6" },
    { text: "ES2016", link: "es2016" },
    { text: "ES2017", link: "es2017" },
    { text: "ES2018", link: "es2018" },
    { text: "ES2019", link: "es2019" },
    { text: "ES2020", link: "es2020" },
    { text: "ES2021", link: "es2021" },
    { text: "ES2022", link: "es2022" },
    { text: "ES2023", link: "es2023" },
    { text: "ES2024", link: "es2024" },
    { text: "对象冒充", link: "ObjectImpersonation" },
    { text: "Lodash", link: "lodash" },
    {
      text: "Github Page部署VitePress",
      link: "VitePress/deploy",
    },
    { text: "实现一个简易版的虚拟DOM", link: "virtualdom" },
    { text: "让对象也可以解构", link: "objiterator" },
    { text: "实现HashMap", link: "hashmap" },
    {
      text: "浅尝跨平台开发框架Ionic",
      link: "ionicstarter",
    },
    {
      text: "使用和配置ESLint",
      link: "eslintinit",
    },
    { text: "AJAX", link: "AJAX" },
    { text: "监听AJAX请求进度", link: "AJAXprogress" },
    { text: "Promise", link: "Promise" },
    { text: "Vue开发必须知道的36个技巧", link: "somethingvue" },
    {
      text: "通过WebSocket搭建一个简易的即时聊天平台",
      link: "websocket",
    },
    {
      text: "通过 SSE 实现消息推送",
      link: "sse",
    },
    {
      text: "DNS解析优化",
      link: "dnsoptimize",
    },
    {
      text: "3D旋转木马",
      link: "carouselable",
    },
    {
      text: "使用shadcn-ui进行开发",
      link: "shadcnui",
    },
    {
      text: "手写顶部导航栏",
      link: "nav",
    },
    {
      text: "发送桌面通知",
      link: "Notificationapi"
    }
  ].map((obj) => {
    return {
      text: obj.text,
      link: `/AllDocs/Frontend/${obj.link}`,
    };
  });
};
