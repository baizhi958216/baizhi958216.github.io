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
    {
      text: "Docker运行并配置ArchLinux",
      link: "dockerarchlinux",
    },
    {
      text: "制作Docker镜像然后推送到Docker Hub",
      link: "dockerpushhub",
    },
  ].map((obj) => {
    return {
      text: obj.text,
      link: `/AllDocs/Docker/${obj.link}`,
    };
  });
};
