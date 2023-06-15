export const Linux = (): { text: string; link: string }[] => {
  return [
    { text: "Linux", link: "" },
    { text: "腾讯云搭建 httpd 服务", link: "tencentcloud" },
  ].map((obj) => {
    return {
      text: obj.text,
      link: `/AllDocs/Linux/${obj.link}`,
    };
  });
};
