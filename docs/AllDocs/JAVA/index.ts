export const JAVA = (): { text: string; link: string }[] => {
  return [{ text: "一些基础练习", link: "base" }].map((obj) => {
    return {
      text: obj.text,
      link: `/AllDocs/JAVA/${obj.link}`,
    };
  });
};
