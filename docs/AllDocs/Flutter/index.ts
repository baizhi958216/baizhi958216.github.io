export const Flutter = (): { text: string; link: string }[] => {
  return [
    { text: "Flutter", link: "" },
  ].map((obj) => {
    return {
      text: obj.text,
      link: `/AllDocs/Flutter/${obj.link}`,
    };
  });
};
