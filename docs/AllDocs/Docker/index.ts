export const Docker = (): { text: string; link: string }[] => {
  return [
    { text: "Docker", link: "" },
    {
      text: "配置Docker镜像加速",
      link: "dockermirror",
    },
    {
      text: "Dockerfile创建MySQL容器",
      link: "dockerfilemysql",
    },
  ].map((obj) => {
    return {
      text: obj.text,
      link: `/AllDocs/Docker/${obj.link}`,
    };
  });
};
