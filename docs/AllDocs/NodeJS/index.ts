export const NodeJS = (): { text: string; link: string }[] => {
  return [
    {
      text: "爬取豆瓣电影TOP250",
      link: "doubantop250",
    },
    { text: "JS实现简易计算器", link: "calculator" },
    {
      text: "求多次prompt输入之和",
      link: "multiprompt",
    },
    { text: "数组去重", link: "uniquearray" },
    { text: "统计数组中元素出现的次数", link: "count" },
    {
      text: "商城网站购物车实现",
      link: "shoppingcart",
    },
    {
      text: "MySQL实战演练",
      link: "mysql",
    },
  ].map((obj) => {
    return {
      text: obj.text,
      link: `/AllDocs/NodeJS/${obj.link}`,
    };
  });
};
