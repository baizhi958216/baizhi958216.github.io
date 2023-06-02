# 使用哈希表实现 Map

:::tip ES6 规范要求 Map 实现“平均访问时间与集合中的元素数量呈次线性关系”

因此，它可以在内部表示为哈希表（使用 O(1) 查找）、搜索树（使用 O(log(N)) 查找）或任何其他数据结构，只要复杂度小于 O(N)。

实现 `Map` 对象的方式很多，最常见的就是使用哈希表。哈希表是一种基于键值对的数据结构，它可以快速地进行查找、插入和删除操作，时间复杂度通常为 O(1)。在哈希表中，每个键值对都会被映射到一个唯一的桶（bucket）中，可以使用哈希函数将键映射为桶的索引。在查询元素时，先使用哈希函数找到元素所在的桶，然后在桶中查找对应的元素。

除了哈希表，还有一种常见的实现 `Map` 对象的方式是使用平衡搜索树（例如红黑树或 AVL 树）。平衡搜索树的优点在于，可以保证元素按照键的顺序排列，这对于一些必须要有序访问的场景非常有用。平衡搜索树中查找、插入和删除操作的时间复杂度为 O(log(N))，比哈希表略慢，但适用于一些特殊的场景。

除了哈希表和平衡搜索树，实现 `Map` 对象的方式还有很多种，例如使用跳表、B+ 树等高级数据结构。无论采用哪种方式，都需要保证访问 `Map` 对象的时间复杂度小于线性的 O(N)。

:::

:::tip 实现 `Map` 最常见的就是使用哈希表

谷歌浏览器的 JavaScript 引擎 V8 中的 Map 实现默认采用哈希表。

从 V8 的源码中采用了“链式哈希”的方式来解决哈希冲突。

V8 使用“区间哈希”算法来计算哈希值，以便更好地利用哈希表的空间，并提高哈希表的查找效率。

:::

哈希表是一种基于键值对的数据结构，它可以快速地进行查找、插入和删除操作，时间复杂度通常为 `O(1)`。

在哈希表中，每个键值对都会被映射到一个唯一的`桶（bucket）`中，可以使用哈希函数将键映射为桶的索引。

在查询元素时，先使用哈希函数找到元素所在的桶，然后在桶中查找对应的元素。

## 代码实现

`HashMap` 类使用一个名为 `_buckets` 的数组来存储元素。每个元素通过一个哈希函数 `_hash` 来计算它在 `_buckets` 数组中的索引，具有相同索引的元素会被存储在同一个桶中。每个桶是一个数组，用于存储键值对。

```js
class HashMap {
  constructor() {
    this._buckets = []; // 储存元素的桶
  }

  // 添加键值对
  set(key, value) {
    const hash = this._hash(key); // 计算哈希值
    if (!this._buckets[hash]) {
      this._buckets[hash] = []; // 桶不存在则创建
    }
    // 查找桶中是否已经存在相同的键
    const bucket = this._buckets[hash];
    for (let i = 0; i < bucket.length; i++) {
      const pair = bucket[i];
      if (pair[0] === key) {
        pair[1] = value; // 已存在相同的键，则更新值
        return;
      }
    }
    // 没有相同的键，则添加新的键值对
    bucket.push([key, value]);
  }

  // 获取值
  get(key) {
    const hash = this._hash(key);
    const bucket = this._buckets[hash];
    if (!bucket) {
      return undefined;
    }
    // 在桶中查找相同的键
    for (let i = 0; i < bucket.length; i++) {
      const pair = bucket[i];
      if (pair[0] === key) {
        return pair[1]; // 返回对应的值
      }
    }
    return undefined; // 没有找到对应的键，则返回 undefined
  }

  // 删除键值对
  delete(key) {
    const hash = this._hash(key);
    const bucket = this._buckets[hash];
    if (!bucket) {
      return false;
    }
    // 在桶中查找相同的键
    for (let i = 0; i < bucket.length; i++) {
      const pair = bucket[i];
      if (pair[0] === key) {
        bucket.splice(i, 1); // 删除这个键值对
        return true;
      }
    }
    return false; // 没有找到对应的键，则无法删除
  }

  // 判断是否存在键
  has(key) {
    const hash = this._hash(key);
    const bucket = this._buckets[hash];
    if (!bucket) {
      return false;
    }
    // 在桶中查找相同的键
    for (let i = 0; i < bucket.length; i++) {
      const pair = bucket[i];
      if (pair[0] === key) {
        return true;
      }
    }
    return false; // 没有找到对应的键
  }

  // 计算哈希值
  _hash(key) {
    let hash = 0;
    for (const char of key.toString()) {
      hash = (hash + char.charCodeAt(0)) % 1000000; // 使用简单的字符串哈希
    }
    return hash;
  }
}
```

## 使用

```js
// 创建一个 Map 对象
const myMap = new HashMap();

// 添加键值对
myMap.set("foo", "bar");
myMap.set(1, 2);
myMap.set({}, {});

// 获取值
console.log(myMap.get("foo")); // Output: 'bar'
console.log(myMap.get(1)); // Output: 2
console.log(myMap.get({})); // Output: undefined

// 删除键值对
myMap.delete(1);
console.log(myMap.get(1)); // Output: undefined

// 判断是否存在键
console.log(myMap.has("foo")); // Output: true
console.log(myMap.has(1)); // Output: false
```

添加、获取、删除和判断是否存在键的操作都是基于哈希表的操作，时间复杂度通常为 O(1)。如果哈希函数计算出现冲突，即不同的键计算出相同的哈希值（至少我没见过），那么效率可能会降低。
