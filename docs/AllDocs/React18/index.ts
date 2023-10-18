export const React18 = (): { text: string; link: string }[] => {
    return [
      {
        text: "React 18",
        link: "react18",
      },
    ].map((obj) => {
      return { text: obj.text, link: `/AllDocs/React18/${obj.link}` };
    });
  };
  