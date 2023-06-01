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

- 消除Javascript语法的一些不合理、不严谨之处，减少一些怪异行为;
- 消除代码运行的一些不安全之处，保证代码运行的安全；
- 提高编译器效率，增加运行速度；
- 为未来新版本的Javascript做好铺垫。 

:::

同样的代码，在"严格模式"中，可能会有不一样的运行结果；一些在"正常模式"下可以运行的语句，在"严格模式"下将不能运行。

- 使用严格模式

```js
"use strict"
```

## 字符串属性(下标)访问

在 ES5 以前使用`charAt()`访问字符串中指定下标的字符。

```js
const str = 'abcdefg'
str.chartAt(0) // [!code focus]
```

ES5 允许直接访问字符串中指定下标的字符。
```js
const str = 'abcdefg'
str[0] // [!code focus]
```

## 多行字符串字面量

ES5 允许使用反斜杠转义`\`多行字符串文字

```js
const str = "Hello \
World"
```

## 去除字符串两端的空白

ES5 为String新增的`trim()`方法

```js
str = "       Hello World!        "
str.trim() // [!code focus]
```

## 数组相关属性和方法

- `Array.isArray()`

判断一个对象是否为数组
```js
const fruits = ["banana","apple","Orange","Mango"]
Array.isArray(fruits) // [!code focus]
```

- `forEach()`

为数组中的每一个元素调用一次方法，不改变原数组也不返回新数组
```js
function add(value){
    value+'0'
}
const fruits = ["banana","apple","Orange","Mango"]
fruits.forEach(add) // [!code focus]
```

- `map()`

按顺序为数组中的每一个元素调用一次方法，不改变原数组，返回新数组
```js
function add(value){
    value+'0'
}
const fruits = ["banana","apple","Orange","Mango"]
const fruits1 = fruits.map(add) // [!code focus]
```

- `filter()`

创建一个新的符合条件的数组
```js
function filterlarge(value){
    return value > 18
}
const age = [9,10,23,32,18,11,2]
const large = age.filter(filterlarge) // [!code focus]
```

- `reduce()`

对数组中的每个元素按序执行一个提供的 reducer 函数，每一次运行 reducer 会将先前元素的计算结果作为参数传入，最后将其结果汇总为单个返回值。

迭代器会从数组中第一个元素开始执行回调函数，可以自定义初始元素，该元素会作为数组第一个元素插入到数组中。

```js
const array1 = [1, 2, 3, 4];
function reducer(accnmulator, currentValue){
    return accnmulator + currentValue
}
// 0 + 1 + 2 + 3 + 4
const initialValue = 0
const sumWithInitial = array1.reduce(reducer,initialValue) // [!code focus]
```

- `reduceRight()`

对数组中的每个元素按序执行一个提供的 reducer 函数，每一次运行 reducer 会将先前元素的计算结果作为参数传入，最后将其结果汇总为单个返回值。

迭代器会从数组中最后一个元素开始执行回调函数，可以自定义初始元素，该元素会作为数组最后一个元素插入到数组中。

```js
const array1 = [1, 2, 3, 4];
function reducer(accnmulator, currentValue){
    return accnmulator + currentValue
}
// 0 + 4 + 3 + 2 + 1
const initialValue = 0
const sumWithInitial = array1.reduceRight(reducer,initialValue) // [!code focus]
```

- `every()`

测试数组中是否`全部`元素都通过了由提供的函数实现的测试，全部为真才返回`true`
```js
function isBelowThreshold(currentValue){
    return currentValue < 40
}
const array1 = [1, 30, 39, 29, 10, 13];
array1.every(isBelowThreshold) // [!code focus]
```

- `some()`

测试数组中是否`至少有一个`元素通过了由提供的函数实现的测试，一个为真就返回`true`
```js
function even(element){
    return element % 2 === 0
}
const array = [1, 2, 3, 4, 5]
array.some(even) // [!code focus]
```

- `indexOf()`

返回数组中给定元素第一次出现的索引，如果不存在则返回 `-1`，默认从第一个元素开始查找
```js
const fruits = ["banana","apple","Orange","Orange"]
fruits.indexOf("Orange") // [!code focus]
```

指定开始搜索的索引
```js
const fruits = ["banana","apple","Orange","Orange"]
fruits.indexOf("Orange",3) // [!code focus]
```

- `lastIndexOf()`

返回数组中给定元素最后一次出现的索引，如果不存在则返回 -1，默认从第一个元素开始查找
```js
const fruits = ["banana","apple","Orange","Orange"]
fruits.lastIndexOf("Orange") // [!code focus]
```

指定开始搜索的索引(反向)
```js
const fruits = ["banana","apple","Orange","Orange"]
fruits.lastIndexOf("Orange",-2) // [!code focus]
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
const obj = {name:"Baizhi958216", age:22, city:"Guang Dong"}
const myJSON = JSON.stringify(obj) // [!code focus]
```

- `JSON.parse()`

返回与指定值对应的 JSON 字符串，可以通过额外的参数，控制仅包含某些属性，或者以自定义方法来替换某些 key 对应的属性值。

```js
const str = '{name:"Baizhi958216", age:22, city:"Guang Dong"}'
const obj = JSON.parse(str) // [!code focus]
```

## 日期相关属性和方法

- `Date.now()`

返回自 1970 年 1 月 1 日 00:00:00 (UTC) 到当前时间的毫秒数。
```js
Date.now()
```

- `toISOString()`

方法返回一个 ISO（[ISO 8601 Extended Format](http://en.wikipedia.org/wiki/ISO_8601)）格式的字符串： YYYY-MM-DDTHH:mm:ss.sssZ(UTC时区后加Z)。
```js
const today = new Date("01 June 2023 23:06 UTC")
today.toISOString() // [!code focus]
```

- `toJSON()`

返回 Date 对象的字符串形式，常用于 JSON序列化Date对象。
```js
const today = new Date("01 June 2023 23:06 UTC")
today.toJSON() // [!code focus]
```

## 属性的 Getter 和 Setter

- `get`

将对象属性绑定到查询该属性时将被调用的函数。
```js
const obj = {
  log: ['a', 'b', 'c'],
  get latest() {
    return this.log[this.log.length - 1]
  }
}
obj.latest // [!code focus]
```

- `set`

当尝试设置属性时，set 语法将对象属性绑定到要调用的函数。
```js
const language = {
  set current(name) {
    this.log.push(name)
  },
  log: []
}
language.current = 'CN' // [!code focus]
```

## 保留字可用作属性名

ES5 允许将保留字用作属性名

```js
const obj = {
    const: 1,
    var: 2,
    new: 3
}
obj.new
```

## 对象相关属性和方法

```js
// 添加或更改对象属性
Object.defineProperty(object, property, descriptor)

// 添加或更改多个对象属性
Object.defineProperties(object, descriptors)

// 访问属性
Object.getOwnPropertyDescriptor(object, property)

// 将所有属性作为数组返回
Object.getOwnPropertyNames(object)

// 将可枚举属性作为数组返回
Object.keys(object)

// 访问原型
Object.getPrototypeOf(object)

// 防止向对象添加属性
Object.preventExtensions(object)

// 如果可以将属性添加到对象，则返回 true
Object.isExtensible(object)

// 防止更改对象属性（而不是值）
Object.seal(object)

// 如果对象被密封，则返回 true
Object.isSealed(object)

// 防止对对象进行任何更改
Object.freeze(object)

// 如果对象被冻结，则返回 true
Object.isFrozen(object)
```

## 函数的 bind 方法

创建一个新的函数，在 bind() 被调用时，这个新函数的 this 被指定为 bind() 的第一个参数，而其余参数将作为新函数的参数，供调用时使用。
```js
const obj = {
    name: "baizhi958216",
    getName: function(){
        return this.name
    }
}

const boundGetName = obj.getName.bind(obj)
```

## 数组和对象字面量中的尾随逗号

即对象和数组中最后一个元素允许加逗号

```js
const person = {Name: "baizhi958216", age: 22,}
const points = [1,2,3,4,5,]
```

:::danger JSON中不允许使用尾随逗号
const person = {Name: "baizhi958216", age: 22,}  
JSON.parse(person)
:::