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
      link: 'beautiterminal'
    },
    {
      text: "VS Code 美化以及个人使用的 VSCode 配置",
      link: 'vscodesettings'
    }
  ].map((obj) => {
    return { text: obj.text, link: `/AllDocs/Windows/${obj.link}` };
  });
};
