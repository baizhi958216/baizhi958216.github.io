export const MyIdeas = (): { text: string; link: string }[] => {
  return [
    { text: "关于Vue的传参", link: "vueprops" }
  ].map((obj) => {
    return {
      text: obj.text,
      link: `/AllDocs/MyIdeas/${obj.link}`,
    };
  });
};
