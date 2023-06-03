# ECMAScript 6

## 特性一览

- [模板字符串](#模板字符串)
- [对象相关扩展](#对象相关扩展)
- [2 进制和 8 进制的字面量语法](#_2-进制和-8-进制的字面量语法)
- [let 关键字](#let-关键字)
- [const 关键字](#const-关键字)
- [Symbol](#symbol)
- [箭头函数](#箭头函数)
- [函数参数默认值](#函数参数默认值)
- [函数剩余参数](#函数剩余参数)
- [生成器和迭代器](#生成器和迭代器)
- [For...of 循环](#for-of-循环)
- [模块化](#模块化)
- [解构赋值](#解构赋值)
- [Map 对象](#map-对象)
- [Set 对象](#set-对象)
- [类](#类)
- [Promises](#promises)
- [Proxy](#proxy)
- [Reflection](#reflection)
- [新的全局方法](#新的全局方法)
- [新的字符串相关方法](#新的字符串相关方法)
- [新的数组相关方法](#新的数组相关方法)
- [新的 Math 相关方法](#新的-math-相关方法)
- [新的 Number 相关属性和方法](#新的-number-相关属性和方法)

## 模板字符串

通过反引号（``）来创建字符串

```js
const a = "Hello";
const b = `${a} World`;
```

多行字符串

```javascript
const poem = `Roses are red,
Violets are blue,
I love coding,
And so do you.`;
```

## 对象相关扩展

- 属性值的简写

ES6 允许在对象字面量中使用属性值的简写。如果属性名和属性值的变量名相同，则可以省略属性值的变量名。

```javascript
const name = "John";
const age = 30;

const person = {
  name,
  age,
};

console.log(person); // {name: "John", age: 30}
```

- 方法的简写

ES6 允许在对象字面量中使用方法的简写。如果方法名和函数名相同，则可以省略函数名和 function 关键字。

```javascript
const person = {
  name: "John",
  age: 30,
  sayHello() {
    console.log(`Hello, my name is ${this.name}`);
  },
};

person.sayHello(); // Hello, my name is John
```

- 计算属性名

ES6 允许在对象字面量中使用计算属性名，即使用变量或表达式作为属性名。

```javascript
const prefix = "user_";

const user = {
  [prefix + "id"]: 123,
  [prefix + "name"]: "John",
};

console.log(user); // {user_id: 123, user_name: "John"}
```

- Object.assign()

ES6 提供了 Object.assign()方法，可以将多个对象合并成一个对象，并返回合并后的对象。如果多个对象有相同的属性名，则后面的对象的属性值会覆盖前面的对象的属性值。

```javascript
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const obj3 = { c: 5, d: 6 };

const result = Object.assign({}, obj1, obj2, obj3);

console.log(result); // {a: 1, b: 3, c: 5, d: 6}
```

## 2 进制和 8 进制的字面量语法

- 2 进制字面量

在 ES6 之前，二进制字面量无法直接表示，需要使用`parseInt()`方法将其转化成十进制。例如`parseInt('1010', 2)`表示的十进制数为`10`。

ES6 引入了前缀`0b`表示二进制字面量，将二进制数直接表示为相应的十进制数。

```javascript
const binary = 0b1010;
console.log(binary); // 10
```

- 8 进制字面量

在 ES6 之前，八进制字面量可以通过前缀`0`或`0o`表示，例如`0710`或`0o710`表示的十进制数为`456`。

但是，在 ES6 中引入了严格模式，使用八进制字面量的代码会被视为语法错误。为了支持八进制字面量，ES6 引入了前缀`0o`表示八进制字面量，并且在严格模式下也是合法的。

```javascript
const octal = 0o710;
console.log(octal); // 456
```

## let 关键字

声明一个块级作用域变量。

- 只能在该作用域内使用
- 不可重复声明
- 不会进行变量提升
- 必须在声明之后才可使用

```js
let x = 10; //[!code focus]
if (true) {
  let x = 20; //[!code focus]
}
```

## const 关键字

声明一个块级作用域常量

```js
const x = 10; //[!code focus]
if (true) {
  const x = 20; //[!code focus]
}
```

:::warning 注意

1. 在声明时必须进行初始化，不能先声明，再赋值，否则会抛出错误。
2. 一旦声明了常量，其值就不能被改变，试图改变常量的值会抛出错误。
3. 如果常量是一个对象，则可以修改该对象的属性，但不能给该对象赋值为另一个对象。

:::

## Symbol

symbol 是一种基本数据类型。Symbol() 函数会返回 symbol 类型的值。

每个从 Symbol() 返回的 symbol 值都是唯一的。

```js
const symbol1 = Symbol(123);
const symbol2 = Symbol(123);
const symbol3 = Symbol("foo");

console.log(typeof symbol1); //"symbol"

console.log(symbol1 === symbol2); //false

console.log(symbol3.toString()); //Symbol(foo)
```

一个 symbol 值能作为对象属性的标识符，它表示一个唯一的“隐藏”标识符，一般情况下迭代器无法访问该标识符。

```js
const person = {
  name: "baizhi958216",
};

let age = Symbol("age");
person[age] = 22;
// person[age] 22
// person.age undefined
for (key in person) {
  // name
  console.log(key);
}
```

:::tip 等同

```js
const person = {
  name: "baizhi958216",
  [age]: 22,
};
// person[age] 22
// person.age undefined
```

:::

## 箭头函数

ES6 的箭头函数是一种更简洁的函数定义方式，可以避免 this 指向错误，且更易于阅读和编写。

:::tip 语法: `(parameters)=>{statements}`

- parameters: 函数的形式参数，可以是多个参数，用逗号分隔
- statements: 函数体，可以包含一条或多条语句。如果函数只有一条语句，则可以省略花括号和 return 关键字。

:::

```js
let sum = (a, b) => a + b; //[!code focus]
sum(1, 2);
```

:::tip 与传统函数相比

1. 箭头函数没有自己的 this 值，函数体内的 this 指向的是函数定义时所在的作用域中的 this。而传统函数的 this 指向的是函数的调用者。这个特性可以避免 this 指向错误，但也可能导致一些意外的结果。

2. 箭头函数不支持 arguments 对象。箭头函数的参数只能通过函数参数列表传递，而不能像传统函数那样使用 arguments 对象获取所有参数。

3. 箭头函数不能被用作构造函数。箭头函数没有自己的原型对象，所以不能用 new 关键字调用。

4. 箭头函数没有自己的 arguments、super、new.target 和 prototype 属性。

5. 箭头函数不能使用 yield 关键字。

6. 箭头函数的返回值隐式地使用了 return 语句，所以不需要显示地使用 return 关键字返回值。当箭头函数只有一条语句时，可以省略花括号和 return 关键字。

7. 箭头函数语法更简洁直观，更易于理解。箭头函数可以在很多场景中替换传统函数，使代码更加简洁。

:::

## 函数参数默认值

支持在给函数参数赋予默认值。

```js
const add = (x, y = 1) => x + y;
add(1); //2
```

## 函数剩余参数

rest 参数(...)允许函数将不确定数量的参数视为数组。

```js
const sum = (...args) => {
  let sum = 0;
  for (let arg of args) sum += arg;
  return sum;
};

sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); // 55
```

## 生成器和迭代器

- yield

yield 语句用于中断 Generator 函数并返回一个值，并将当前状态保存下来，下次再调用 next()方法时可以从上次中断的地方继续执行。

yield 语句可以接收一个参数，表示这是迭代器返回的值。

- 迭代器 Iterators

ES6 中引入了可迭代对象（Iterable），可迭代对象是指实现了 `Symbol.iterator` 方法的对象。

该方法返回一个迭代器对象（Iterator），迭代器对象具有 `next()`方法，每次调用 `next()`方法会返回一个包含 `value` 和 `done` 属性的对象

`value`: 表示当前元素的值。

`done`: 表示是否迭代结束。

```javascript
let myIterable = {
  *[Symbol.iterator]() {
    yield 1;
    yield 2;
    yield 3;
  },
};

for (let value of myIterable) {
  console.log(value);
}
// 输出：1 2 3
```

该例子创建了一个可迭代对象 myIterable，实现了 Symbol.iterator 方法并返回一个 Generator 对象，每次迭代返回 1、2、3。

- 生成器 Generators

```javascript
function* fibonacci() {
  let prev = 0,
    curr = 1;
  while (true) {
    yield curr;
    [prev, curr] = [curr, prev + curr];
  }
}

let iterator = fibonacci();
for (let i = 0; i < 10; i++) {
  console.log(iterator.next().value);
}
// 输出：1 1 2 3 5 8 13 21 34 55
```

这是一个返回斐波那契数列的 Generator 函数 fibonacci，通过 yield 语句在每次迭代返回当前值，同时使用 es6 的解构赋值来更新 prev 和 curr 的值，控制了 Generator 函数的执行过程。在 for 循环中使用 next()方法来依次获取迭代器的值，并输出前 10 个数。

## For...of 循环

在[可迭代对象](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols)（包括 Array，Map，Set，String，TypedArray，arguments 对象等等）上创建一个迭代循环，调用自定义迭代钩子，并为每个不同属性的值执行语句

```js
const arr = ["a", "b", "c"];

for (const el of arr) {
  console.log(el);
}
```

:::tip `for...in`, `for...of`, `for`区别

for...in 适用于遍历对象中的可枚举属性（包括继承而来的属性），循环变量是属性名，因此，遍历对象时的顺序是不确定的

for...of 适用于遍历可迭代对象（例如数组、Map、Set、字符串等），循环变量是元素值。

for 循环适用于遍历数组等可迭代对象，循环变量可以是下标或元素值。可以使用 break 跳出循环，也可以使用 continue 跳过本次循环。

:::

## 模块化

ES6 的模块化可以让 JavaScript 代码分割成独立的、可重复使用的组件。

ES6 模块化可以让开发者按逻辑组织代码，并且在不同的文件之间共享代码，避免了全局变量的污染和重复定义的问题。

- 模块 1，导出一个函数

```js
export function sayHello(name) {
  console.log(`Hello, ${name}!`);
}
```

- 模块 2，导入模块 1 中的函数并使用

```js
import { sayHello } from "./module1.js";
sayHello("Alice");
```

## 解构赋值

从数组和对象中提取值和对变量进行赋值。

- 数组的解构赋值

```js
const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];

const year = [...q1, ...q2, ...q3, ...q4];
```

```js
// a = 1 , b = 2 , c = 3
const [a, b, c] = [1, 2, 3];
// d = 3
const [, , d] = [1, 2, 3];
// e = [2, 3]
const [, ...e] = [1, 2, 3];
```

## Map 对象

`Map` 对象是键值对的集合。

`Map` 中的一个键只能出现一次，它在 Map 的集合中是独一无二的。

`Map` 对象保存键值对，并且能够记住键的原始插入顺序。任何值（对象或者基本类型）都可以作为一个键或一个值。

```js
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200],
]);
fruits.get("apples");
const m = new Map();
m.set("a", 1);
m.set("b", 2);
m.set("c", 3);
m.get("a");
```

`Map` 对象按键值对迭代——一个 for...of 循环在每次迭代后会返回一个形式为 [key，value] 的数组。迭代按插入顺序进行，即键值对按 set() 方法首次插入到集合中的顺序（也就是说，当调用 set() 时，map 中没有具有相同值的键）进行迭代。

```js
const myMap = new Map();
myMap.set("foo", "bar");
myMap.set(1, 2);
myMap.set({}, {});

// 'foo' 'bar'
// 1 2
// {} {}
for (const [key, value] of myMap) {
  console.log(key, value);
}
```

- set(key, value)

向 Map 对象中添加新的键值对。

```js
let map = new Map();
map.set("name", "Tom");
map.set("age", 18);
```

- delete(key)

删除 Map 中指定的元素。

```js
let map = new Map();
map.set("name", "Tom");
map.set("age", 18);
map.delete("name");
```

- has(key)

判断 Map 中是否包含指定的键。

```js
let map = new Map();
map.set("name", "Tom");
map.set("age", 18);
map.has("name");
```

- get(key)

获取 Map 中指定键的值。

```js
let map = new Map();
map.set("name", "Tom");
map.set("age", 18);
map.get("name");
```

- clear()

清空整个 Map 对象。

```js
let map = new Map();
map.set("name", "Tom");
map.set("age", 18);
map.clear();
```

- size

返回 Map 对象中元素的个数。

```js
let map = new Map();
map.set("name", "Tom");
map.set("age", 18);
map.size;
```

- forEach(callback, thisArg)

使用指定的回调函数遍历 Map 对象中的键值对，其中 thisArg 为可选参数，表示回调函数中 this 的值。

```js
let map = new Map();
map.set("name", "Tom");
map.set("age", 18);
map.forEach((value, key) => {
  console.log(key + " is " + value);
});
```

- entries()

返回一个包含 Map 对象中所有键值对的迭代器对象。

```js
let map = new Map();
map.set("name", "Tom");
map.set("age", 18);
// name Tom
// age 18
for (let [key, value] of map.entries()) {
  console.log(key, value);
}
```

- keys()

返回一个包含 Map 对象中所有键的迭代器对象。

```js
let map = new Map();
map.set("name", "Tom");
map.set("age", 18);
// name
// age
for (let key of map.keys()) {
  console.log(key);
}
```

- values()

返回一个包含 Map 对象中所有值的迭代器对象。

```js
let map = new Map();
map.set("name", "Tom");
map.set("age", 18);
// Tom
// 18
for (let value of map.values()) {
  console.log(value);
}
```

## Set 对象

`Set` 对象是值的集合，你可以按照插入的顺序迭代它的元素。Set 中的元素只会出现一次，即 Set 中的元素是唯一的。

```js
const letters = new Set();
letters.add("a");
letters.add("b");
letters.add("c");
const lettersArr = [...letters];
const lettersArr2 = Array.from(letters);
```

- add(value)

向 Set 对象添加一个值，返回 Set 对象本身。

```js
const set = new Set();
set.add(1); // 向Set对象中添加数字1
set.add("hello"); // 向Set对象中添加字符串'hello'
set.add(true); // 向Set对象中添加布尔值true
```

- clear()

清除 Set 对象中的所有值。

```javascript
const set = new Set([1, 2, 3]);
set.clear(); // 清除Set对象中的所有值
```

- delete(value)

从 Set 对象中删除指定的值，返回一个布尔值，表示是否删除成功。

```javascript
const set = new Set(["apple", "banana", "orange"]);
set.delete("banana"); // 从Set对象中删除字符串'banana'
```

- has(value)

判断 Set 对象中是否存在指定的值，返回一个布尔值。

```javascript
const set = new Set(["red", "green", "blue"]);
set.has("green"); // true，Set对象中包含字符串'green'
set.has("yellow"); // false，Set对象中不包含字符串'yellow'
```

- entries()

返回一个迭代器对象，可以用来遍历 Set 对象中的所有键值对。

```javascript
const set = new Set(["apple", "banana", "orange"]);
const entries = set.entries();
// apple apple
// banana banana
// orange orange
for (let [key, value] of entries) {
  console.log(key + " " + value);
}
```

- forEach(callbackFn[, thisArg])

遍历 Set 对象中的所有值，并对每一个值执行回调函数 callbackFn。

```javascript
const set = new Set([7, 8, 9]);
// 7 7
// true
// 8 8
// true
// 9 9
// true
set.forEach((value, key, ownerSet) => {
  console.log(key + " " + value);
  console.log(ownerSet === set);
});
```

- keys()

返回一个迭代器对象，可以用来遍历 Set 对象中的所有键。

```javascript
const set = new Set(["apple", "banana", "orange"]);
const keys = set.keys();
// apple
// banana
// orange
for (let key of keys) {
  console.log(key);
}
```

- size

返回 Set 对象中存储的值的数量。

```javascript
const set = new Set([1, 2, 3]);
set.size; // 3
```

- values()

```javascript
const set = new Set(["apple", "banana", "orange"]);
const values = set.values();
// apple
// banana
// orange
for (let value of values) {
  console.log(value);
}
```

返回一个迭代器对象，可以用于遍历 Set 对象中的所有值。

:::tip ES6 中的 Set 和 Map 区别。

1. Set 是一种无重复元素的列表，可以存储任何类型的数据。Set 不允许原型链上的重复元素，即对象之间的引用不能重复，但不同对象的属性值可以相同。而 Map 是一种键值对的集合，也可以存储任意类型的数据。Map 中的键值对是一一对应的，并且不允许重复的键值对存在。

2. Set 的迭代器是按照插入顺序排序的，Map 的迭代器则按照键的顺序排序。

3. Set 和 Map 都有自己的迭代器，可以使用 for...of 循环遍历，也可以使用 forEach 方法遍历。但是 Map 的迭代器默认遍历的是键值对组成的数组，需要使用 entries()方法获取这个数组，而 Set 的迭代器默认就是迭代 Set 中的元素。

:::

## 类

类是一个用于定义对象的蓝图，它具有属性和方法的声明，但只有在创建类的实例时才会变成真正的对象。

```js
class Polygon {
  constructor(height, width) {
    this.area = height * width;
  }
}

const area = new Polygon(4, 3).area;
```

- constructor()

类似于普通函数的构造函数，用于创建和初始化类的新实例。

```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const person1 = new Person("Alice", 25);
const person2 = new Person("Bob", 30);
```

- static

关键字，用于为类定义静态方法。

```javascript
class MathHelper {
  static multiply(a, b) {
    return a * b;
  }
}

MathHelper.multiply(2, 3); // 6
```

- extends 和 super

extends 关键字，用于创建一个类作为另一个类的子类。

super 关键字，用于调用父类的构造函数和方法。

```javascript
class Parent {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name}.`);
  }
}

class Child extends Parent {
  constructor(name, age) {
    super(name); // 调用父类构造函数
    this.age = age;
  }

  sayHello() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

const child1 = new Child("Alice", 10);
child1.sayHello(); // Hello, my name is Alice and I am 10 years old.
```

- getter/setter

关键字，用于为类提供读写器，使类的属性可以被访问和修改。

```javascript
class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  get age() {
    console.log("Getting age");
    return this._age;
  }

  set age(value) {
    console.log("Setting age");
    if (value < 0 || value > 150) {
      throw new Error("Invalid age");
    }
    this._age = value;
  }
}

const person1 = new Person("Alice", 25);

console.log(person1.age); // Getting age 25
person1.age = 20; // Setting age
console.log(person1.age); // Getting age 20
person1.age = 200; // Setting age Uncaught Error: Invalid age
```

- method()

用于定义类的方法。

```javascript
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  drive() {
    console.log(`Driving the ${this.name} car.`);
  }
}

const car1 = new Car("BMW", 2023);
const car2 = new Car("Toyota", 2024);

car1.drive(); // Driving the BMW car.
car2.drive(); // Driving the Toyota car.
```

- Object.setPrototypeOf()

用于设置对象的原型（类继承）。

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  eat() {
    console.log(`${this.name} is eating.`);
  }
}

class Dog extends Animal {
  bark() {
    console.log("Woof!");
  }
}

const animal = {
  name: "Tiger",
  play() {
    console.log("Tiger is playing.");
  },
};

Object.setPrototypeOf(animal, new Dog("Max"));

animal.bark(); // Woof!
animal.play(); // Tiger is playing.
```

## Promises

[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)

Promise 是异步编程的一种解决方案，Promise 对象代表异步操作，有三种状态:

- `pending`: 默认状态初始状态
- `fullfilled`: 操作成功(resolve)
- `rejected`: 操作失败(reject)

只有异步操作的结果可以决定当前是哪一种状态，任何其他操作都无法改变这个状态。

ES6 规定 Promise 对象是一个构造函数, 用来生成 Promise 实例，返回一个 Promise 对象

```js
new Promise((resolve, reject) => {
  // ...
  if ("成功") {
    resolve("异步操作成功");
  } else {
    reject("异步操作失败");
  }
});
```

![promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/promises.png)

:::tip Promise 对象的三个方法

- then: Promise 的成功和失败情况的回调函数。
- catch: Promise 被拒绝时的回调函数。
- finally (ES2018): Promise 结束时，无论结果是 fulfilled 或者是 rejected，都会执行指定的回调函数。

:::

- then

:::tip 语法

then(onFulfilled)

then(onFulfilled, onRejected)

:::

```js
new Promise((resolve, reject) => {
  resolve("Success!");
}).then((value) => {
  console.log(value); //"Success!"
});
```

- catch

:::tip 语法

p.catch(onRejected)

:::

```js
new Promise((resolve, reject) => {
  throw new Error("Uh-oh!");
}).catch((error) => {
  console.error(error); // Error: Uh-oh!
});
```

## Proxy

ES6 中的 Proxy 是一种用于拦截并自定义对象属性访问的机制。

Proxy 对象包括一个`目标对象`和一个`处理程序对象`，在`处理程序对象`中定义了各种拦截操作，如 get、set、has、delete、apply 等，可以在`目标对象`上进行代理操作。

使用 Proxy 的好处在于，可以将针对对象的拦截操作集中在一个单独的地方进行定义，避免了代码中分散的、重复的、易错的判断逻辑，从而提高了代码的简洁性、可读性和可维护性。

```javascript
const obj = new Proxy(
  {},
  {
    get: function (target, key) {
      console.log(`Getting ${key}`);
      return target[key];
    },
    set: function (target, key, value) {
      console.log(`Setting ${key} to ${value}`);
      target[key] = value;
    },
  }
);

obj.foo = "bar";
console.log(obj.foo); // "Getting foo" "bar"
```

在上述代码中，我们定义了一个空的对象，使用 Proxy 代理该对象，并为其定义了 get 和 set 方法，拦截对对象属性的读写操作，当该对象的属性被读取或者设置时，控制台会输出相应的信息。

## Reflection

Reflection 是 ES6 中引入的一种新的特性，它允许我们在运行时访问和修改对象的属性和方法。

- 设置对象的属性值

```javascript
const obj = { name: "Alice", age: 25 };
Reflect.set(obj, "age", 26);
console.log(obj); // {name: "Alice", age: 26}
```

## 新的全局方法

- isFinite()

用来判断一个数值是否有限（finite），即非 NaN、非正无穷大、非负无穷小的数值。

它返回一个布尔值，如果参数是一个有限的数值，则返回 true，否则返回 false。

```js
isFinite(10); // true
isFinite(NaN); // false
isFinite(Infinity); // false
```

它能够识别字符串和其他类型的值，并且将它们转换成数值以进行判断。如果参数不是数值类型，则会先调用 Number()方法将其转换成数值类型。例如：

```js
isFinite("10"); // true
isFinite("abc"); // false
```

- isNaN()

用于检测一个值是否是 NaN（Not a Number）。如果接受的参数不能转换为数字或者本身就是 NaN，返回 true，否则返回 false。

```js
function milliseconds(x) {
  if (isNaN(x)) {
    return "Not a Number!";
  }
  return x * 1000;
}
milliseconds("100F"); //Not a Number!
milliseconds("0.0314E+2"); //3140
```

## 新的字符串相关方法

- String.includes()

如果字符串包含指定值，`includes()`方法返回 `true`，否则返回 `false`。

```js
let text = "Hello world, welcome to the universe.";
text.includes("world"); // [!code focus]
```

- String.startsWith()

如果字符串以指定值开头，则`startsWith()`方法返回`true`，否则返回`false`。

```js
let text = "Hello world, welcome to the universe.";
text.startsWith("Hello"); // [!code focus]
```

- String.endsWith()

如果字符串以指定值结尾，`endsWith()`方法将返回`true`，否则返回`false`。

```js
let text = "Hello World";
text.endsWith("World"); // [!code focus]
```

## 新的数组相关方法

- Array.from()

从可迭代或类数组对象创建一个新的浅拷贝的数组实例。

```js
Array.from("foo");
```

- Array.keys()

返回一个新的数组迭代器对象，其中包含数组中每个索引的键。

```js
const array1 = ["a", "b", "c"];
const iterator = array1.keys();
//0 1 2
for (const key of iterator) {
  console.log(key);
}
```

- Array.find()

返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined。

```js
const array1 = [5, 12, 8, 130, 44];
const found = array1.find((element) => element > 10); // [!code focus]
```

- Array.findIndex()

返回数组中满足提供的测试函数的第一个元素的索引。若没有找到对应元素则返回 -1。

```js
const array1 = [5, 12, 8, 130, 44];
const isLargeNumber = (element) => element > 13;
array1.findIndex(isLargeNumber); // [!code focus]
```

## 新的 Math 相关方法

- Math.cbrt()

返回任意数字的立方根。

```js
Math.cbrt(2); // 1.2599210498948732
```

- Math.log2()

返回一个数字以 2 为底的对数。

```js
Math.log2("1024"); // 10
```

- Math.log10()

返回一个数字以 10 为底的对数。

```js
Math.log10("100"); // 2
```

- Math.sign()

此函数共有 5 种返回值，分别是 1, -1, 0, -0, NaN. 代表的各是正数，负数，正零，负零，NaN。

```js
Math.sign("foo"); // NaN
```

- Math.trunc()

将数字的小数部分去掉，只保留整数部分。

```js
Math.trunc("-1.123"); // -1
```

## 新的 Number 相关属性和方法

- EPSILON

ES6 的 EPSILON 是一个数值常量，表示 JavaScript 中能表示的最小精度值。

主要是在需要精确计算数值的场景中，使用它可以帮助我们判断两个浮点数是否相等，从而避免由于浮点数计算中的精度误差而导致的错误。

```js
function calcAddition(a, b) {
  const result = a + b;
  if (Math.abs(result - (a + b)) < Number.EPSILON) {
    console.log("calculation result is accurate.");
  } else {
    console.log("calculation result may not be accurate.");
  }
  return result;
}
```

- MIN_SAFE_INTEGER

它表示 JavaScript 中最小的安全整数（-9007199254740991），即比最小整数值（-Infinity）稍大一点，但是可以安全地进行数学计算，不会出现精度问题。

在进行数学计算时，可以使用 MIN_SAFE_INTEGER 作为边界条件，避免出现溢出或其他错误。

```js
let x = Number.EPSILON;
```

- MAX_SAFE_INTEGER

它表示 JavaScript 中最大的安全整数（9007199254740991）。它的作用是在处理大型整数时提供一个安全的最大值，避免在数值计算中产生误差。

```js
let x = Number.MIN_SAFE_INTEGER;
```

- Number.isInteger()

判断给定的参数是否为整数。

```js
function fits(x, y) {
  if (Number.isInteger(y / x)) {
    return "Fits!";
  }
  return "Does NOT fit!";
}
fits(5, 10);
```

- Number.isSafeInteger()

用来判断传入的参数值是否是一个“安全整数”（safe integer）。

```js
Number.isSafeInteger(Math.pow(2, 53)); // false
Number.isSafeInteger(Math.pow(2, 53) - 1); // true
```
