export const Emotion = (): { text: string; link: string }[] => {
    return [
      { text: "不用怀疑，当你遇到了真爱，才会有这5种感觉", link: "truelovesigns" },
      { text:"女人彻底爱上了你，才会流露出这4个真心表现，不爱装不出来！",link:"lovebehaviors" }
    ].map((obj) => {
      return {
        text: obj.text,
        link: `/AllDocs/Emotion/${obj.link}`,
      };
    });
  };
  