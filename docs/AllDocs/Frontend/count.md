# 统计数组中元素出现的次数

<span @click="test" style="cursor:pointer;color:#6f8ac9">测试</span>

## 题目

利用 indexOf()函数统计数组 arr（['a','b','d','d','c','d','d']）中元素 d 出现的次数，并同时返回其对应的所有索引下标。

## 代码

```js
const arr = ["a", "b", "d", "d", "c", "d", "d"];
let indexes = [];
arr.forEach((el, position) => {
  let index = arr.indexOf("d", position);
  if (index !== -1) {
    indexes.push(index);
  }
});
indexes = [...new Set(indexes)];
alert(`元素d出现了${indexes.length}次, 对应的所有索引下标是${indexes}`);
```

<script setup>
const test=()=>{
    const arr = ["a", "b", "d", "d", "c", "d", "d"];
    let indexes = [];
    arr.forEach((el, position) => {
      let index = arr.indexOf("d", position);
      if (index !== -1) {
        indexes.push(index);
      }
    });
    indexes = [...new Set(indexes)]
    alert(`元素d出现了${indexes.length}次, 对应的所有索引下标是${indexes}`)
}
</script>
