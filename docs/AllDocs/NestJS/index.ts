export const NestJS = (): { text: string; link: string }[] => {
  return [
    { text: "NestJS项目结构", link: "nestjsdirs" },
    {
      text: "NestJS Swagger 接口设置 Deprecated(过期)标签",
      link: "setdeprecated",
    },
  ].map((obj) => {
    return {
      text: obj.text,
      link: `/AllDocs/NestJS/${obj.link}`,
    };
  });
};
