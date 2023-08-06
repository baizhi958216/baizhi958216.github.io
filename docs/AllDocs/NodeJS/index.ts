export const NodeJS = (): { text: string; link: string }[] => {
  return [
    {
      text:'NodeJS v17的OpenSSL更新',
      link:'cryptochange'
    },
    {
      text:'NPM 镜像站',
      link:'npmmirror'
    },
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
    {
      text: "大文件分片上传",
      link: 'chunkfileupload'
    }
  ].map((obj) => {
    return {
      text: obj.text,
      link: `/AllDocs/NodeJS/${obj.link}`,
    };
  });
};
