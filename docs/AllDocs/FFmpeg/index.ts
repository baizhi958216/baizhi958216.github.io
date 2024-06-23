export const FFmpeg = (): { text: string; link: string }[] => {
  return [
    { text: "FFmpeg", link: "togif" },
  ].map((obj) => {
    return {
      text: obj.text,
      link: `/AllDocs/FFmpeg/${obj.link}`,
    };
  });
};
