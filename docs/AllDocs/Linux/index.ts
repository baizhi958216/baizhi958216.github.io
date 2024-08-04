export const Linux = (): { text: string; link: string }[] => {
  return [
    { text: "Linux", link: "" },
    { text: "腾讯云搭建 httpd 服务", link: "tencentcloud" },
    { text: "配置中文输入", link: "archfcitx5" },
    { text: "配置bash环境变量", link: "bashenv" },
    { text: "Linux与Windows时间不一致研究", link: "rtctime" },
    { text: "让GCC变得可爱", link: "kawaiigcc" },
    { text: "GNOME的屏幕非整数缩放", link: "hidpiscal" },
    { text: "Wine的一些坑", link: "winecfg" }
  ].map((obj) => {
    return {
      text: obj.text,
      link: `/AllDocs/Linux/${obj.link}`,
    };
  });
};
