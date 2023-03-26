# 数组去重

## 题目

对数组 arr（['a','b','d','d','c','d','d']）进行去重，至少采用三种不同的方式。

## 代码

```js
const arr = ["a", "b", "d", "d", "c", "d", "d"];
```

### 第一种:

遍历`arr`, 若`arr1`不存在该元素则将元素追加

- [includes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)

```js
const arr1 = [];
for (let i = 0; i < arr.length; i++) {
  if (!arr1.includes(arr[i])) {
    arr1.push(arr[i]);
  }
}
alert(arr1);
```

<span @click="test1" style="cursor:pointer;color:#6f8ac9">测试</span>

### 第二种:

- [Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/Set)

创建元素唯一的集合, 将其解构至`arr1`

```js
const arr1 = [...new Set(arr)];
alert(arr1);
```

<span @click="test2" style="cursor:pointer;color:#6f8ac9">测试</span>

### 第三种

- [hasOwnProperty](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty)

利用对象属性唯一的特性, 对象不存在该属性时追加并设置属性且值为`true`

```js
const obj = {};
const arr1 = arr.filter((item) =>
  obj.hasOwnProperty(item) ? false : (obj[item] = true)
);
alert(arr1);
```

<span @click="test3" style="cursor:pointer;color:#6f8ac9">测试</span>

### 第四种

- [indexOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)

寻找元素的索引, 若`filter`正在处理的元素位置等于该元素索引时进行追加

```js
const arr1 = arr.filter((item, position) => arr.indexOf(item) == position);
alert(arr1);
```

<span @click="test4" style="cursor:pointer;color:#6f8ac9">测试</span>

## 参考资料

- [Remove duplicate values from JS array](https://stackoverflow.com/questions/9229645/remove-duplicate-values-from-js-array)
- [Get all non-unique values (i.e.: duplicate/more than one occurrence) in an array](https://stackoverflow.com/questions/840781/get-all-non-unique-values-i-e-duplicate-more-than-one-occurrence-in-an-array)

<script setup>
const arr = ['a','b','d','d','c','d','d']
const test1 = () => {
  const arr1 = [];
  for (let i = 0; i < arr.length; i++) {
    if (!arr1.includes(arr[i])) {
      arr1.push(arr[i]);
    }
  }
  alert(arr1);
};
const test2 = () => {
  const arr1 = [...new Set(arr)];
  alert(arr1);
};
const test3 = () => {
  const obj = {};
  const arr1 = arr.filter((item) =>
    obj.hasOwnProperty(item) ? false : (obj[item] = true)
  );
  alert(arr1);
};
const test4 = () => {
  const arr1 = arr.filter((item, position) => arr.indexOf(item) == position);
  alert(arr1);
};
</script>
