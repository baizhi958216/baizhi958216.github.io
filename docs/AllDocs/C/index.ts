export const C = (): { text: string; link: string }[] => {
  return [
    { text: "检查字符串", link: "CheckString" },
    { text: "求多项式值", link: "Polynomial" },
  ].map((obj) => {
    return {
      text: obj.text,
      link: `/AllDocs/C/${obj.link}`,
    };
  });
};
