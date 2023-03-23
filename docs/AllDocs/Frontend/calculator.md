# JS 实现简易计算器

- <span @click="test" style="cursor:pointer;color:#6f8ac9">测试</span>

## 题目

做一个简易计算器，实现以下功能

![calculaotr](./imgs/calculator.png)

## 代码

```js
/**
 * @param num1 第一位数字
 * @param num2 第二位数字
 * @param operator 运算选项
 * @param result 运算结果
 */
let num1, num2, operator, result;
while (true) {
  const input = parseInt(
    prompt(`
      欢迎使用简易计算器：
      1.加法运算;
      2.减法运算;
      3.乘法运算;
      4.除法运算;
      5.退出;
      请输入您的选项:
    `)
  );
  if (!input || input == 5) break;
  operator = input;
  num1 = parseFloat(prompt("请输入第一个数字："));
  num2 = parseFloat(prompt("请输入第二个数字："));
  switch (operator) {
    case 1:
      result = num1 + num2;
      break;
    case 2:
      result = num1 - num2;
      break;
    case 3:
      result = num1 * num2;
      break;
    case 4:
      if (num2 === 0) {
        alert("错误！除数不能为 0！");
        continue;
      }
      result = num1 / num2;
      break;
    default:
      alert("错误的选项！");
      continue;
  }
  const strOperator = ["+", "-", "x", "÷"];
  alert(`${num1}${strOperator[operator]}${num2}=${result}`);
}
alert("程序已退出！");
```

<script setup>
const test = () => {
  /**
   * @param num1 第一位数字
   * @param num2 第二位数字
   * @param operator 运算选项
   * @param result 运算结果
   */
  let num1, num2, operator, result;
  while (true) {
    const input = parseInt(
      prompt(`
            欢迎使用简易计算器：
            1.加法运算;
            2.减法运算;
            3.乘法运算;
            4.除法运算;
            5.退出;
            请输入您的选项:
          `)
    );
    if (!input || input == 5) break;
    operator = input;
    num1 = parseFloat(prompt("请输入第一个数字："));
    num2 = parseFloat(prompt("请输入第二个数字："));
    switch (operator) {
      case 1:
        result = num1 + num2;
        break;
      case 2:
        result = num1 - num2;
        break;
      case 3:
        result = num1 * num2;
        break;
      case 4:
        if (num2 === 0) {
          alert("错误！除数不能为 0！");
          continue;
        }
        result = num1 / num2;
        break;
      default:
        alert("错误的选项！");
        continue;
    }
    const strOperator = ["+", "-", "x", "÷"];
    alert(`${num1}${strOperator[operator - 1]}${num2}=${result}`);
  }
  alert("程序已退出！");
};
</script>
