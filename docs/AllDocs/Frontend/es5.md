# ECMAScript 5

## 特性一览

- [严格模式](#严格模式)
- [字符串属性(下标)访问](#字符串属性-下标-访问)
- [多行字符串字面量](#多行字符串字面量)
- [去除字符串两端的空白](#去除字符串两端的空白)
- [数组相关属性和方法](#数组相关属性和方法)
- [JSON 序列化和反序列化](#json-序列化和反序列化)
- [日期相关属性和方法](#日期相关属性和方法)
- [属性的 Getter 和 Setter](#属性的-getter-和-setter)
- [保留字可用作属性名](#保留字可用作属性名)
- [对象相关属性和方法](#对象相关属性和方法)
- [函数的 bind 方法](#函数的-bind-方法)
- [数组和对象字面量中的尾随逗号](#数组和对象字面量中的尾随逗号)

## 严格模式

:::tip 使用严格模式

- 消除 Javascript 语法的一些不合理、不严谨之处，减少一些怪异行为;
- 消除代码运行的一些不安全之处，保证代码运行的安全；
- 提高编译器效率，增加运行速度；
- 为未来新版本的 Javascript 做好铺垫。

:::

同样的代码，在"严格模式"中，可能会有不一样的运行结果；一些在"正常模式"下可以运行的语句，在"严格模式"下将不能运行。

- 使用严格模式

```js
"use strict";
```

## 字符串属性(下标)访问

在 ES5 以前使用`charAt()`访问字符串中指定下标的字符。

```js
const str = "abcdefg";
str.chartAt(0); // [!code focus]
```

ES5 允许直接访问字符串中指定下标的字符。

```js
const str = "abcdefg";
str[0]; // [!code focus]
```

## 多行字符串字面量

ES5 允许使用反斜杠转义`\`多行字符串文字

```js
const str =
  "Hello \
World";
```

## 去除字符串两端的空白

ES5 为 String 新增的`trim()`方法

```js
str = "       Hello World!        ";
str.trim(); // [!code focus]
```

## 数组相关属性和方法

- `Array.isArray()`

判断一个对象是否为数组

```js
const fruits = ["banana", "apple", "Orange", "Mango"];
Array.isArray(fruits); // [!code focus]
```

- `forEach()`

为数组中的每一个元素调用一次方法，不改变原数组也不返回新数组

```js
function add(value) {
  value + "0";
}
const fruits = ["banana", "apple", "Orange", "Mango"];
fruits.forEach(add); // [!code focus]
```

- `map()`

按顺序为数组中的每一个元素调用一次方法，不改变原数组，返回新数组

```js
function add(value) {
  value + "0";
}
const fruits = ["banana", "apple", "Orange", "Mango"];
const fruits1 = fruits.map(add); // [!code focus]
```

- `filter()`

创建一个新的符合条件的数组

```js
function filterlarge(value) {
  return value > 18;
}
const age = [9, 10, 23, 32, 18, 11, 2];
const large = age.filter(filterlarge); // [!code focus]
```

- `reduce()`

对数组中的每个元素按序执行一个提供的 reducer 函数，每一次运行 reducer 会将先前元素的计算结果作为参数传入，最后将其结果汇总为单个返回值。

迭代器会从数组中第一个元素开始执行回调函数，可以自定义初始元素，该元素会作为数组第一个元素插入到数组中。

```js
const array1 = [1, 2, 3, 4];
function reducer(accnmulator, currentValue) {
  return accnmulator + currentValue;
}
// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(reducer, initialValue); // [!code focus]
```

- `reduceRight()`

对数组中的每个元素按序执行一个提供的 reducer 函数，每一次运行 reducer 会将先前元素的计算结果作为参数传入，最后将其结果汇总为单个返回值。

迭代器会从数组中最后一个元素开始执行回调函数，可以自定义初始元素，该元素会作为数组最后一个元素插入到数组中。

```js
const array1 = [1, 2, 3, 4];
function reducer(accnmulator, currentValue) {
  return accnmulator + currentValue;
}
// 0 + 4 + 3 + 2 + 1
const initialValue = 0;
const sumWithInitial = array1.reduceRight(reducer, initialValue); // [!code focus]
```

- `every()`

测试数组中是否`全部`元素都通过了由提供的函数实现的测试，全部为真才返回`true`

```js
function isBelowThreshold(currentValue) {
  return currentValue < 40;
}
const array1 = [1, 30, 39, 29, 10, 13];
array1.every(isBelowThreshold); // [!code focus]
```

- `some()`

测试数组中是否`至少有一个`元素通过了由提供的函数实现的测试，一个为真就返回`true`

```js
function even(element) {
  return element % 2 === 0;
}
const array = [1, 2, 3, 4, 5];
array.some(even); // [!code focus]
```

- `indexOf()`

返回数组中给定元素第一次出现的索引，如果不存在则返回 `-1`，默认从第一个元素开始查找

```js
const fruits = ["banana", "apple", "Orange", "Orange"];
fruits.indexOf("Orange"); // [!code focus]
```

指定开始搜索的索引

```js
const fruits = ["banana", "apple", "Orange", "Orange"];
fruits.indexOf("Orange", 3); // [!code focus]
```

- `lastIndexOf()`

返回数组中给定元素最后一次出现的索引，如果不存在则返回 -1，默认从第一个元素开始查找

```js
const fruits = ["banana", "apple", "Orange", "Orange"];
fruits.lastIndexOf("Orange"); // [!code focus]
```

指定开始搜索的索引(反向)

```js
const fruits = ["banana", "apple", "Orange", "Orange"];
fruits.lastIndexOf("Orange", -2); // [!code focus]
```

## JSON 序列化和反序列化

:::tip ES5 新增 `JSON.stringfy()` 和 `JSON.parse()`
JSON 对象包含两个方法：

- 用于解析 JavaScript Object Notation（JSON）的 parse() 方法
- 将对象/值转换为 JSON 字符串的 stringify() 方法
  :::

- `JSON.stringfy()`

解析对象、数组等 JSON 格式，可以额外传入一个转换函数，用来将生成的值和其属性，在返回之前进行某些修改。

```js
const obj = { name: "Baizhi958216", age: 22, city: "Guang Dong" };
const myJSON = JSON.stringify(obj); // [!code focus]
```

- `JSON.parse()`

返回与指定值对应的 JSON 字符串，可以通过额外的参数，控制仅包含某些属性，或者以自定义方法来替换某些 key 对应的属性值。

```js
const str = '{name:"Baizhi958216", age:22, city:"Guang Dong"}';
const obj = JSON.parse(str); // [!code focus]
```

## 日期相关属性和方法

- `Date.now()`

返回自 1970 年 1 月 1 日 00:00:00 (UTC) 到当前时间的毫秒数。

```js
Date.now();
```

- `toISOString()`

方法返回一个 ISO（[ISO 8601 Extended Format](http://en.wikipedia.org/wiki/ISO_8601)）格式的字符串： YYYY-MM-DDTHH:mm:ss.sssZ(UTC 时区后加 Z)。

```js
const today = new Date("01 June 2023 23:06 UTC");
today.toISOString(); // [!code focus]
```

- `toJSON()`

返回 Date 对象的字符串形式，常用于 JSON 序列化 Date 对象。

```js
const today = new Date("01 June 2023 23:06 UTC");
today.toJSON(); // [!code focus]
```

## 属性的 Getter 和 Setter

- `get`

将对象属性绑定到查询该属性时将被调用的函数。

```js
const obj = {
  log: ["a", "b", "c"],
  get latest() {
    return this.log[this.log.length - 1];
  },
};
obj.latest; // [!code focus]
```

- `set`

当尝试设置属性时，set 语法将对象属性绑定到要调用的函数。

```js
const language = {
  set current(name) {
    this.log.push(name);
  },
  log: [],
};
language.current = "CN"; // [!code focus]
```

## 保留字可用作属性名

ES5 允许将保留字用作属性名

```js
const obj = {
  const: 1,
  var: 2,
  new: 3,
};
obj.new;
```

## 对象相关属性和方法

### 对象的管理方法（Managing Object）

- Object.create(parent, donor)

以一个现有对象作为原型，创建一个新对象。

```js
const person = {
  name: "baizhi958216",
  age: 22,
};
const me = Object.create(person); // [!code focus]
me.age; //[!code focus]
```

- Object.defineProperty(object, property, descriptor)

直接在一个对象上定义`一个`新属性，或修改其现有属性，并返回此对象。

```js
const person = {};
Object.defineProperty(person, "name", { value: "baizhi958216" }); // [!code focus]
person.name; //[!code focus]
```

:::tip descriptor

- value: 与属性相关联的值。可以是任何有效的 JavaScript 值（数字、对象、函数等）。默认值为 `undefined`。

- writable: 如果与属性相关联的值可以使用赋值运算符更改，则为 `true`。默认值为 `false`。

- configurable: 若为 `false`， 该属性的类型不能在数据属性和访问器属性之间更改，该属性不可被删除，其描述符的其他属性也不能被更改，默认值为 `false`

- enumerable: 当且仅当该属性在对应对象的属性枚举中出现时，值为 `true`。默认值为 `false`

:::

- Object.defineProperties(object, descriptors)

直接在一个对象上定义`一个或多个`新属性，或修改其现有属性，并返回此对象。

```js
const person = {};
Object.defineProperties(person, {
  name: {
    value: "baizhi958216",
  },
  age: {
    value: 22,
  },
});
person.name;
person.age;
```

- Object.getOwnPropertyDescriptor(object, property)

方法返回指定对象上一个自有属性对应的属性描述。（自有属性指的是直接赋予该对象的属性，不需要从原型链上进行查找的属性）

```js
const person = { name: "baizhi958216" };
const descriptor = Object.getOwnPropertyDescriptor(person, "name"); //[!code focus]
descriptor.value; //[!code focus]
descriptor.configurable; //[!code focus]
```

- Object.getOwnPropertyNames(object)

返回一个由对象属性名构成的数组

```js
const person = {
  name: "baizhi958216",
  age: 22,
  gender: man,
};
Object.getOwnPropertyNames(person); //[!code focus]
```

- Object.getPrototypeOf(object)

返回指定对象的原型（内部[[Prototype]]属性的值）。

```js
const person = {};
const person1 = Object.create(person);
Object.getPrototypeOf(person) === person1; //[!code focus]
```

- Object.keys(object)

返回一个由给定对象自身的可枚举的字符串键属性名组成的数组。

```js
const person = {
  name: "baizhi958216",
  age: 22,
};
Object.keys(person); //[!code focus]
```

:::tip Object.getOwnPropertyNames 和 Object.keys 的区别

1. `Object.getOwnPropertyNames`会获取对象所有的属性名（包括不可枚举属性），而`Object.keys`只会返回对象可枚举的属性名。

2. `Object.getOwnPropertyNames`可以获取对象的自有属性和原型属性的属性名，而`Object.keys`只会获取对象自身的属性名。

3. `Object.getOwnPropertyNames`会获取属性名的顺序与`for...in`循环的顺序一致，而`Object.keys`不保证属性名的顺序。

4. 在有些情况下，`Object.getOwnPropertyNames`会返回一些内置属性（如 constructor，prototype 等），而`Object.keys`不会返回这些属性。

综上所述，`Object.getOwnPropertyNames`比`Object.keys`更加全面，但是在日常开发中，如果只需要获取对象的可枚举属性名时，建议使用`Object.keys`。

:::

### 对象的保护方法（Protecting Object）

- Object.preventExtensions(object)

设置对象不可扩展，防止新属性被添加到对象中，防止对象的原型被重新指定。

```js
const person = {};
Object.preventExtensions(person); //[!code focus]
try {
  Object.defineProperty(person, "age", { value: 22 });
} catch (e) {}
```

- Object.isExtensible(object)

判断一个对象是否是可扩展的

```js
const person = {};
Object.isExtensible(person); //[!code focus]
Object.preventExtensions(person);
Object.isExtensible(person); //[!code focus]
```

- Object.seal(object)

密封一个对象（不能添加新属性、不能删除现有属性或更改其可枚举性和可配置性、不能重新分配其原型），但是可以修改属性值。

```js
const person = { age: 22 };
Object.seal(person); //[!code focus]
person.age = 18;
delete person.age;
person.age;
```

:::tip Object.preventExtensions 和 Object.seal 的区别

1. Object.preventExtensions 是用来阻止对象新增属性，但可以修改和删除已有属性配置，而 Object.seal 是既不能新增属性配置也不能删除和修改已有属性配置。

2. 在 Object.preventExtensions 下，可以使用 Object.defineProperty()方法修改已有属性的描述符，但在 Object.seal 下不行。

3. 如果一个对象被 Object.preventExtensions 调用后变为不能被扩展，那么使用 Object.seal 还可以将对象变为密封状态。但如果一个对象被 Object.seal 调用后密封了，那么使用 Object.preventExtensions 不能让其变为可扩展状态。

总之，Object.preventExtensions 是限制对象的属性新增操作，而 Object.seal 则是限制更多的修改和删除操作。
:::

- Object.isSealed(object)

判断一个对象是否被密封

```js
const person = { age: 22 };
Object.isSealed(person); //[!code focus]
Object.seal(person);
Object.isSealed(person); //[!code focus]
```

- Object.freeze(object)

使一个对象被冻结，冻结对象可以防止扩展，并使现有的属性不可写入和不可配置。被冻结的对象不能再被更改：不能添加新的属性，不能移除现有的属性，不能更改它们的可枚举性、可配置性、可写性或值，对象的原型也不能被重新指定。

```js
const person = { age: 22 };
Object.freeze(person); //[!code focus]
person.age = 18;
```

:::tip Object.preventExtensions, Object.seal, Object.freeze 区别
Object.preventExtensions 方法可以防止对象添加新的属性。但是对象已有的属性仍然可以被修改和删除。

Object.seal 方法除了防止对象添加新的属性之外，还将已有的属性设置为不可配置。这意味着已有属性的可写性和可枚举性都将被设置为 false，但已有的属性值仍然可以被修改。

Object.freeze 方法是最严格的控制方式。除了防止新属性的添加和已有属性的修改之外，该对象已有的属性也不能被删除。因此，一旦调用 Object.freeze 方法，该对象将变得不可变。
:::

- Object.isFrozen(object)

判断一个对象是否被冻结

```js
const person = { age: 22 };
Object.isFrozen(person); //[!code focus]
Object.freeze(person);
Object.isFrozen(person); //[!code focus]
```

## 函数的 bind 方法

创建一个新的函数，在 bind() 被调用时，这个新函数的 this 被指定为 bind() 的第一个参数，而其余参数将作为新函数的参数，供调用时使用。

```js
const obj = {
  name: "baizhi958216",
  getName: function () {
    return this.name;
  },
};

const boundGetName = obj.getName.bind(obj);
```

## 数组和对象字面量中的尾随逗号

即对象和数组中最后一个元素允许加逗号

```js
const person = { Name: "baizhi958216", age: 22 };
const points = [1, 2, 3, 4, 5];
```

:::danger JSON 中不允许使用尾随逗号
const person = {Name: "baizhi958216", age: 22,}  
JSON.parse(person)
:::
