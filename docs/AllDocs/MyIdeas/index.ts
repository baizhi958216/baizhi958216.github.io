export const MyIdeas = (): { text: string; link: string }[] => {
  return [
    { text: "关于Vue的传参", link: "vueprops" },
    { text: "不要让某些网站强奸你(登录复制)", link: "fuckcsdn" },
  ].map((obj) => {
    return {
      text: obj.text,
      link: `/AllDocs/MyIdeas/${obj.link}`,
    };
  });
};
