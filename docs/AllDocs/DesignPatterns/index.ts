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
      { text: "组合模式", link: "CompositePattern" },
      { text: "装饰模式", link: "DecoratorPattern" },
      { text: "外观模式", link: "FacadePattern" },
      { text: "享元模式", link: "FlyweightPattern" },
      { text: "代理模式", link: "ProxyPattern" },
      { text: "职责链模式", link: "ChainOfResponsibilityPattern" },
    ].map((obj) => {
      return {
        text: obj.text,
        link: `/AllDocs/DesignPatterns/${obj.link}`,
      };
    });
  };
  