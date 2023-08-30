export const TypeScript = (): { text: string; link: string }[] => {
    return [
        { text: "TypeScript5.0正式发布", link: "ts5.0" },
        { text: "TypeScript5.1正式发布", link: "ts5.1" },
        { text: "TypeScript5.2正式发布", link: "ts5.2" },
    ].map((obj) => {
      return {
        text: obj.text,
        link: `/AllDocs/TypeScript/${obj.link}`,
      };
    });
  };
  