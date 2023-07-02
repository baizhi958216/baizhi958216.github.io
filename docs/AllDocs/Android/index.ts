export const Android = (): { text: string; link: string }[] => {
  return [{ text: "LineageOS 编译环境搭建", link: "synclineage" }].map(
    (obj) => {
      return {
        text: obj.text,
        link: `/AllDocs/Android/${obj.link}`,
      };
    }
  );
};
