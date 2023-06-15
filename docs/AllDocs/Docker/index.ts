export const Docker = (): { text: string; link: string }[] => {
  return [
    { text: "Docker", link: "" },
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
