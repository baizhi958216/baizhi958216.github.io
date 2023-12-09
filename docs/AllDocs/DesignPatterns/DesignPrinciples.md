# 面向对象设计原则


面向对象设计原则是用于评价一个设计模式的使用效果的重要指标之一，每一个设计模式都符合一个或多个面向对象设计原则。

## 单一责任原则

单一责任原则指的是一个类应该只有一个引起变化的原因。换句话说，一个类应该只负责一种类型的任务，即一个类应该只有一个职责。这有助于提高代码的可维护性和可理解性，因为每个类都专注于特定的功能。

```ts
class FileManager {
  writeToFile(data: string) {}
}

class Logger {
  logMessage(message: string) {}
}
```

## 开闭原则

开闭原则规定软件实体（类、模块、函数等）应该对扩展开放，对修改关闭。这意味着在不修改现有代码的情况下，可以通过添加新功能来扩展系统。通过遵循开闭原则，可以降低代码的耦合性，提高系统的稳定性和可维护性。

```ts
abstract class Shape {
  abstract calculateArea(): number;
}

class Circle extends Shape {
  radius: number;

  constructor(radius: number) {
    super();
    this.radius = radius;
  }

  calculateArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    super();
    this.width = width;
    this.height = height;
  }

  calculateArea(): number {
    return this.width * this.height;
  }
}
```

## 里氏代换原则

里氏代换原则要求子类型必须能够替换其基类型，而不影响程序的正确性。简而言之，如果一个类是某个抽象类的子类，那么它应该能够替代该抽象类的任何地方，而不引起错误。

```ts
class Bird {
  fly() {
    console.log("起飞");
  }
}

class Penguin extends Bird {
  fly() {
    console.log("企鹅是不能飞的");
  }
}
```

## 依赖倒转原则

依赖倒转原则强调高层模块不应该依赖于低层模块，两者都应该依赖于抽象。抽象不应该依赖于细节，细节应该依赖于抽象。这有助于减少模块之间的直接耦合，提高系统的灵活性和可维护性。

```ts
interface ILogger {
  log(message: string): void;
}

class ConsoleLogger implements ILogger {
  log(message: string): void {
    console.log(message);
  }
}

class App {
  private logger: ILogger;

  constructor(logger: ILogger) {
    this.logger = logger;
  }

  start() {
    this.logger.log("应用已启动");
  }
}
```

## 接口隔离原则

接口隔离原则要求一个类不应该强迫它的客户端使用它们不需要的方法。换句话说，一个类应该只提供客户端需要的方法，而不强迫客户端实现不需要的方法。这有助于避免臃肿的接口，提高代码的可维护性。

```ts
interface Readable {
  read(): void;
}

interface Writable {
  write(data: string): void;
}

class FileReader implements Readable {
  read(): void {}
}

class DataWriter implements Writable {
  write(data: string): void {}
}
```

## 合成复用原则

合成复用原则强调通过组合（合成）和聚合（聚合）来实现代码的复用，而不是通过继承。这样可以避免继承带来的耦合问题，同时提高系统的灵活性。

```ts
class Engine {
  start() {}
}

class Car {
  private engine: Engine;

  constructor(engine: Engine) {
    this.engine = engine;
  }

  startCar() {
    this.engine.start();
  }
}
```

## 迪米特法则

迪米特法则要求**一个对象**应该对其他对象有最少的了解，即一个对象不应该直接与太多其他对象发生相互作用。这有助于减少系统中各个模块之间的依赖关系，提高模块的独立性，通过引入接口或抽象类来实现类之间的松耦合。

```ts
interface Notifier {
  notify(): void;
}

class Team {
  members: Notifier[] = [];

  addPlayer(player: Notifier) {
    this.members.push(player);
  }

  notifyPlayers() {
    for (const player of this.members) {
      player.notify();
    }
  }
}

class Player implements Notifier {
  notify() {}
}
```
