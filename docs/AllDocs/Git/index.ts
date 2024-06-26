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
    {
      text: "处理仓库远端与本地提交时间冲突",
      link: "fixunrelated",
    },
    {
      text: "大小写敏感问题",
      link: "casesensitive",
    },
    {
      text: "ssh服务端验证错误",
      link: "networkerror",
    },
    {
      text: "修改历史作者",
      link: "mailmap"
    }
  ].map((obj) => {
    return {
      text: obj.text,
      link: `/AllDocs/Git/${obj.link}`,
    };
  });
};
