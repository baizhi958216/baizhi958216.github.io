export const Git = (): { text: string; link: string }[] => {
  return [{ text: "修改历史commit记录", link: "historycommit" }].map((obj) => {
    return {
      text: obj.text,
      link: `/AllDocs/Git/${obj.link}`,
    };
  });
};
