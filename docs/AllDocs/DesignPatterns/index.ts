export const DesignPatterns = (): { text: string; link: string }[] => {
    return [
      { text: "设计模式", link: "" },
      { text: "面向对象设计原则", link: 'DesignPrinciples'},
      { text: "简单工厂模式", link: 'SimpleFactoryPattern'},
      { text: "工厂方法模式", link: 'FactoryMethodPattern'}
    ].map((obj) => {
      return {
        text: obj.text,
        link: `/AllDocs/DesignPatterns/${obj.link}`,
      };
    });
  };
  