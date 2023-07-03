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
    { text: "Lodash", link: "lodash" },
    {
      text: "Github Page部署VitePress",
      link: "VitePress/deploy",
    },
    { text: "TypeScript5正式发布", link: "ts5" },
    { text: "实现一个简易版的虚拟DOM", link: "virtualdom" },
    { text: "让对象也可以解构", link: "objiterator" },
    { text: "实现HashMap", link: "hashmap" },
    { text: "解决nuxt项目初始化失败", link: "nuxtinitfailed" },
    {
      text: "浅尝跨平台开发框架Ionic",
      link: "ionicstarter",
    },
  ].map((obj) => {
    return {
      text: obj.text,
      link: `/AllDocs/Frontend/${obj.link}`,
    };
  });
};
