export const LineChart = (): { text: string; link: string }[] => {
    return [
        { text: "折线图", link: "line" }
    ].map(
      (obj) => {
        return {
          text: obj.text,
          link: `/ECharts/LineChart/${obj.link}`,
        };
      }
    );
  };
  