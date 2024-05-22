export const Jvav = (): { text: string; link: string }[] => {
  return [
    { text: "Java", link: "" },
    { text: "基础练习", link: "base" }
  ].map((obj) => {
    return {
      text: obj.text,
      link: `/AllDocs/Jvav/${obj.link}`,
    };
  });
};
