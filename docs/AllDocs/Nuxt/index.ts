export const Nuxt = (): { text: string; link: string }[] => {
    return [
        { text: "为Nuxt加入TS支持", link: "nuxtwithts" }
    ].map((obj) => {
      return {
        text: obj.text,
        link: `/AllDocs/Nuxt/${obj.link}`,
      };
    });
  };
  