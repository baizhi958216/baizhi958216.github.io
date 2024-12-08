export const Emotion = (): { text: string; link: string }[] => {
    return [
      { text: "不用怀疑，当你遇到了真爱，才会有这5种感觉", link: "truelovesigns" },
    ].map((obj) => {
      return {
        text: obj.text,
        link: `/AllDocs/Emotion/${obj.link}`,
      };
    });
  };
  