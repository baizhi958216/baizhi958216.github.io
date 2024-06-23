export const FFmpeg = (): { text: string; link: string }[] => {
  return [
    { text: "FFmpeg将MP4转GIF", link: "togif" },
  ].map((obj) => {
    return {
      text: obj.text,
      link: `/AllDocs/FFmpeg/${obj.link}`,
    };
  });
};
