# 鸡兔同笼

## 题目

中国古代数学问题——二鼠打洞

类型：`流程控制`

### 描述

《九章算术》的“盈不足篇”里有一个很有意思的老鼠打洞问题。原文是这么说的：今有垣厚十尺，两鼠对穿。大鼠日一尺，小鼠亦一尺。大鼠日自倍，小鼠日自半。问：何日相逢？各穿几何？

这道题的意思是：有一堵十尺厚的墙，两只老鼠从两边向中间打洞。大老鼠第一天打一尺，小老鼠也是一尺。大老鼠每天的打洞进度是前一天的一倍，小老鼠每天的进度是前一天的一半。问它们几天可以相逢，相逢时各打了多少。

请编程求此题的解，要求使用循环来完成，不允许使用幂运算。

### 输入格式

输入为 1 个整数 wall，代表墙的厚度，单位为尺。

### 输出格式

输出为两行，第一行输出 1 个整数，表示相遇时所需的天数。第二行输出 2 个浮点数，分别为小鼠和大鼠打洞的距离，单位为尺，保留小数点后 1 位数字。（提示：round(f,1)为浮点数 f 保留一位小数。）

:::tip 示例 1
输入：10  
输出：
4  
1.8 8.2
:::

:::tip 示例 2
输入：2  
输出：
1  
1 1
:::

## 代码

```python
n = int(input())
rat, mouse, day, time = 1, 1, 0, 1 #大老鼠进度，小老鼠进度，相遇时间，第一天时间
distance_of_rat, distance_of_mouse = 0, 0  # 大老鼠和小老鼠的打洞距离
while n > 0:
    if n - mouse - rat < 0: #第一天打洞完成
        time = n / (mouse + rat) #算出需要时间
    n = n - mouse - rat #剩余墙厚
    distance_of_mouse = distance_of_mouse + time * mouse
    distance_of_rat = distance_of_rat + time * rat
    rat = rat * 2 #大老鼠每天进度
    mouse = mouse / 2 #小老鼠每天进度
    day = day + 1 #时间过去一天
print(day)
print(round(distance_of_mouse, 1), round(distance_of_rat, 1))
```
