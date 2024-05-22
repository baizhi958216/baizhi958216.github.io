export const BarChart = (): { text: string; link: string }[] => {
    return [
        { text: "饼图", link: "bar" }
    ].map(
      (obj) => {
        return {
          text: obj.text,
          link: `/ECharts/BarChart/${obj.link}`,
        };
      }
    );
  };
  