export const Windows = (): { text: string; link: string }[] => {
  return [
    {
      text: "解决 PowerShell 提示在此系统上禁止运行脚本",
      link: "ps1executionpolicies",
    },
  ].map((obj) => {
    return { text: obj.text, link: `/AllDocs/Windows/${obj.link}` };
  });
};
