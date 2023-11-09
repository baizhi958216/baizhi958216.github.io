export const Nuxt = (): { text: string; link: string }[] => {
    return [
        { text: "解决nuxt项目初始化失败", link: "nuxtinitfailed" },
        { text: "为Nuxt加入TS支持", link: "nuxtwithts" }
    ].map((obj) => {
      return {
        text: obj.text,
        link: `/AllDocs/Nuxt/${obj.link}`,
      };
    });
  };
  