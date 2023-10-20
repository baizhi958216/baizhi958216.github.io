export const NestJS = (): { text: string; link: string }[] => {
  return [
    { text: "NestJS项目结构", link: "nestjsdirs" },
    {
      text: "NestJS Swagger 接口设置 Deprecated(过期)标签",
      link: "setdeprecated",
    },
    {
      text: "NestJS环境变量使用",
      link: "nestconfigurate",
    },
    {
      text: "通过WebSocket搭建一个简易的即时聊天平台",
      link: "websocket"
    }
  ].map((obj) => {
    return {
      text: obj.text,
      link: `/AllDocs/NestJS/${obj.link}`,
    };
  });
};
