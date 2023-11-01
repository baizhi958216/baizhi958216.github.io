export const kickme = (): { text: string; link: string }[] => {
    return [
        { text: "指指点点", link: "" },
        { text: "2023DevOps和云计算学习", link: "2023devopsandcloud" },
        {
          text: "毕业设计",
          link: "graduation_design",
        }
    ].map((obj) => {
      return {
        text: obj.text,
        link: `/AllDocs/KickMe/${obj.link}`,
      };
    });
  };
  