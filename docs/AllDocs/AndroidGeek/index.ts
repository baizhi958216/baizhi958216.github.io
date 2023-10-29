export const AndroidGeek = (): { text: string; link: string }[] => {
  return [
    { text: "第三方谷歌相机", link: "celsoazevedogcam" },
  ].map((obj) => {
    return {
      text: obj.text,
      link: `/AllDocs/AndroidGeek/${obj.link}`,
    };
  });
};
