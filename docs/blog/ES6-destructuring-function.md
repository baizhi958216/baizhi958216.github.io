# ES6 解构函数

## 从数组或对象中提取值，对变量进行赋值，称为解构（Destructuring）。

如果解构不成功, 则为 undefined

### 模式匹配

从数组中提取值，按照对应位置，对变量赋值。

```JavaScript
let user = {
    name:'baizhi958216',
    password:'123456'
}
// 允许赋予新的变量名 x:y, 最终变量名为 y
let {name:baizhiname,password} = user
// 输出baizhi958216 123456
console.log(baizhiname,password)
```

```JavaScript
let [a,b,c,d,e] = [1,2,3,4,5]
// 输出1
console.log(a)
```

```JavaScript
let [a,...b] = [1,2,3,4,5,6,7,8]
// 输出1
console.log(a);
// 输出[2,3,4,5,6,7,8] 数组
console.log(b);
```
