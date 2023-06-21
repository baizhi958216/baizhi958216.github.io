export const Git = (): { text: string; link: string }[] => {
  return [
    { text: "修改历史commit记录", link: "historycommit" },
    {
      text: "git安装和配置",
      link: "setup",
    },
    {
      text: "为git提交记录签名",
      link: "gitsign",
    },
  ].map((obj) => {
    return {
      text: obj.text,
      link: `/AllDocs/Git/${obj.link}`,
    };
  });
};
