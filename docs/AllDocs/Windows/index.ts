export const Windows = (): { text: string; link: string }[] => {
  return [
    {
      text: "解决 PowerShell 提示在此系统上禁止运行脚本",
      link: "ps1executionpolicies",
    },
    {
      text: "Windows安装安卓子系统",
      link: "subsystemforandroid",
    },
    {
      text: "美化 Windows Terminal(终端)",
      link: "beautiterminal",
    },
    {
      text: "VSCode美化以及个人使用配置",
      link: "vscodesettings",
    },
    {
      text: "官网 U 盘引导安装 Windows 11 专业版",
      link: "installwindows11",
    },
    {
      text: "通过数字激活 Windows 11 专业版",
      link: "activewindows"
    },
  ].map((obj) => {
    return { text: obj.text, link: `/AllDocs/Windows/${obj.link}` };
  });
};
