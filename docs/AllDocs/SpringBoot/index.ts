export const SpringBoot = (): { text: string; link: string }[] => {
  return [
    { text: "SpringBoot", link: "" },
    {
      text: "SpringBoot项目子文件夹简介",
      link: "springbootdirs",
    },
    {
      text: "SpringBoot添加RESTful服务",
      link: "springbootrest",
    },
    {
      text: "配置国内 Maven 镜像源",
      link: "mavenrepository",
    },
    {
      text: "SpringBoot配置MyBatis-Plus",
      link: "springbootmybatisplus",
    },
  ].map((obj) => {
    return {
      text: obj.text,
      link: `/AllDocs/SpringBoot/${obj.link}`,
    };
  });;
};
