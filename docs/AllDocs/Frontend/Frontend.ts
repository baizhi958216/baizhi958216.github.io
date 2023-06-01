function sidebarFrontend(): Array<{ text: string; link: string }> {
  return [
    { text: "ECMAScript", link: "/AllDocs/Frontend/ecmascript" },
    { text: "ES5", link: "/AllDocs/Frontend/es5" },
    { text: "ES6", link: "/AllDocs/Frontend/es6" },
    { text: "ES2016", link: "/AllDocs/Frontend/es2016" },
    { text: "ES2017", link: "/AllDocs/Frontend/es2017" },
    { text: "ES2018", link: "/AllDocs/Frontend/es2018" },
    { text: "ES2019", link: "/AllDocs/Frontend/es2019" },
    { text: "ES2020", link: "/AllDocs/Frontend/es2020" },
    { text: "ES2021", link: "/AllDocs/Frontend/es2021" },
    { text: "ES2022", link: "/AllDocs/Frontend/es2022" },
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
