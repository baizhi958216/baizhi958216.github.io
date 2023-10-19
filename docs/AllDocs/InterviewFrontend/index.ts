export const InterviewFrontend = (): { text: string; link: string }[] => {
  return [
    { text: "九悦", link: "jiuyue" },
    { text: "好智", link: "haozhi" },
    { text: "腾讯凯博", link: "tencentcombo"}
  ].map((obj) => {
    return {
      text: obj.text,
      link: `/AllDocs/InterviewFrontend/${obj.link}`,
    };
  });
};
