export const Python = (): { text: string; link: string }[] => {
  return [
    { text: "温度转换 I", link: "tempcal" },
    { text: "货币转换 I", link: "currencycal" },
    {
      text: "垂直的世界，你好！",
      link: "verticalworld",
    },
    {
      text: "3位水仙花数计算",
      link: "daffodils",
    },
    {
      text: "鸡兔同笼",
      link: "crcage",
    },
    {
      text: "中国古代数学问题——二鼠打洞",
      link: "tworice",
    },
    {
      text: "存款买房（C）",
      link: "purchasehouse",
    },
    {
      text: "稳定的计算程序",
      link: "stablecal",
    },
    {
      text: "时间差之天数计算",
      link: "daystimecal",
    },
    {
      text: "凯撒密码——加密",
      link: "caesarcipher",
    },
    {
      text: "统计文件中的字符",
      link: "charcount",
    },
    {
      text: "CSV 绘制折线图",
      link: "matplotlib",
    },
  ].map((obj) => {
    return {
      text: obj.text,
      link: `/AllDocs/Python/${obj.link}`,
    };
  });;
};
