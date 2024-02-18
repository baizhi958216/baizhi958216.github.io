export const React18 = (): { text: string; link: string }[] => {
    return [
      {
        text: "React 18",
        link: "react18",
      },
      {
        text: "手搓一个防抖函数",
        link: "debounce",
      },
      {
        text: "各种Hook",
        link: "hooks",
      },
      {
        text: "React函数钩子的用法",
        link: "lodashandhooks",
      },
    ].map((obj) => {
      return { text: obj.text, link: `/AllDocs/React18/${obj.link}` };
    });
  };
  