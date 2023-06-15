export const InterviewFrontend = (): { text: string; link: string }[] => {
  return [
    { text: "九悦", link: "jiuyue" },
    { text: "好智", link: "haozhi" },
  ].map((obj) => {
    return {
      text: obj.text,
      link: `/AllDocs/InterviewFrontend/${obj.link}`,
    };
  });
};
