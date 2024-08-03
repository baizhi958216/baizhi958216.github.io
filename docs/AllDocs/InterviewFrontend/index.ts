export const InterviewFrontend = (): { text: string; link: string }[] => {
  return [
    { text: "九悦", link: "jiuyue" },
    { text: "好智", link: "haozhi" },
    { text: "腾讯凯博", link: "tencentcombo"},
    { text: "peropero", link: "peropero" },
    { text: "搜刮群友的", link: "others" },
  ].map((obj) => {
    return {
      text: obj.text,
      link: `/AllDocs/InterviewFrontend/${obj.link}`,
    };
  });
};
