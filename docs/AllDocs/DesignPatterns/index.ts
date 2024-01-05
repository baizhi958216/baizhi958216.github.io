export const DesignPatterns = (): { text: string; link: string }[] => {
    return [
      { text: "设计模式", link: "" },
      { text: "面向对象设计原则", link: "DesignPrinciples" },
      { text: "简单工厂模式", link: "SimpleFactoryPattern" },
      { text: "工厂方法模式", link: "FactoryMethodPattern" },
      { text: "抽象工厂模式", link: "AbstractFactoryPattern" },
      { text: "建造者模式", link: "BuilderPattern" },
      { text: "原型模式", link: "PrototypePattern" },
      { text: "单例模式", link: "SingletonPattern" },
      { text: "适配器模式", link: "AdapterPattern" },
      { text: "桥接模式", link: "BridgePattern" },
    ].map((obj) => {
      return {
        text: obj.text,
        link: `/AllDocs/DesignPatterns/${obj.link}`,
      };
    });
  };
  