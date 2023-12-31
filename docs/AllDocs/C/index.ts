export const C = (): { text: string; link: string }[] => {
  return [
    { text: "检查字符串", link: "CheckString" },
  ].map((obj) => {
    return {
      text: obj.text,
      link: `/AllDocs/C/${obj.link}`,
    };
  });
};
