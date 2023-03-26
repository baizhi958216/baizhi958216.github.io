# 让对象也支持数组的解构/for of

已知:

- 数组解构的底层调用的是 Symbol.iterator
- 生成器 next()返回`{value,done}`

可以手动给对象实现一个

## 给对象加个 Symbol.iterator

```ts
let obj = {
  counter: 0,
  max: 5,
  [Symbol.iterator]() {
    return {
      max: this.max,
      current: this.current,
      next() {
        if (this.current == this.max) {
          return {
            value: undefined,
            done: true,
          };
        } else {
          return {
            value: this.current++,
            done: false,
          };
        }
      },
    };
  },
};
```

## 试一试

```ts
let x = [...obj];
console.log(x);
```

<span @click="test" style="cursor:pointer;color:#6f8ac9">测试</span>

<script setup>
const test = () => {
  let obj = {
    counter: 0,
    max: 5,
    [Symbol.iterator]() {
      return {
        max: this.max,
        counter: this.counter,
        next() {
          if (this.counter == this.max) {
            return {
              value: undefined,
              done: true,
            };
          } else {
            return {
              value: this.counter++,
              done: false,
            };
          }
        },
      };
    },
  };
  let x = [...obj];
  alert(x)
};
</script>
