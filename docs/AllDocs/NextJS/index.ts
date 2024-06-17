export const NextJS = (): { text: string; link: string }[] => {
    return [
      {
        text:'NextJS入门案例',
        link:'dashboardapp'
      },
    ].map((obj) => {
      return {
        text: obj.text,
        link: `/AllDocs/NextJS/${obj.link}`,
      };
    });
  };
  