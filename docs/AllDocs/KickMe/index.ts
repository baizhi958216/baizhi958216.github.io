export const kickme = (): { text: string; link: string }[] => {
    return [
      { text: "指指点点", link: "" },
      { text: "2023DevOps和云计算学习", link: "2023devopsandcloud" },
      {
        text: "毕业设计",
        link: "graduation_design",
      },
      {
        text: "小染to签",
        link: "firsttosticket",
      },
      {
        text: "时姐to签",
        link: "ninesticket",
      },
      {
        text: "2024年总结",
        link: "2024report"
      }
    ].map((obj) => {
      return {
        text: obj.text,
        link: `/AllDocs/KickMe/${obj.link}`,
      };
    });
  };
  