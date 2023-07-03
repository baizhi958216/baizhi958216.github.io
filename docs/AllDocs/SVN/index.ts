export const SVN = (): { text: string; link: string }[] => {
    return [
      {
        text: "SVN从安装到入门",
        link: "install",
      },
    ].map((obj) => {
      return { text: obj.text, link: `/AllDocs/SVN/${obj.link}` };
    });
  };
  