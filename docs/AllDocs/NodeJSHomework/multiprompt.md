# 求多次 prompt 输入之和

- <span @click="test" style="cursor:pointer;color:#6f8ac9">测试</span>

## 题目

实现可以多次弹出输入框(prompt)，让用户输入成绩，如果输入值大于 100，弹出警告框提示输入有误，请重新输入，当输入-1 时结束输入，返回前面几次正确输入值之和。要求用循环实现；

## 代码

```js
let achieve = 0;
while (true) {
  const tmp = parseFloat(prompt("输入成绩:"));
  if (tmp == -1) {
    break;
  } else if (tmp > 100) {
    alert("输入有误, 请重新输入");
    continue;
  } else {
    achieve += tmp;
  }
}
alert(achieve);
```

<script setup>
const test=()=>{
    let achieve = 0
    while(true)
    {
        const tmp = parseFloat(prompt('输入成绩:'))
        if(tmp==-1)
        {
            break
        }else if(tmp>100)
        {
            alert('输入有误, 请重新输入')
            continue
        }else
        {
            achieve+=tmp
        }
    }
    alert(achieve)
}
</script>
