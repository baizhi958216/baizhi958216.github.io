# 鸡兔同笼

## 题目

鸡兔同笼

类型：`流程控制`

### 描述

大约在 1500 年前，《孙子算经》中记载一个有趣的问题：今有雉兔同笼，上有三十五头，下有九十四足，问雉兔各几何？

大概的意思是：有若干只鸡兔同在一个笼子里，从上面数，有 35 个头，从下面数，有 94 只脚，问笼中各有多少只鸡和兔？

请编一个程序，用户在同一行内输入两个整数，代表头和脚的数量，编程计算笼中各有多少只鸡和兔（假设鸡和兔都正常，无残疾）。如无解则输出“Data Error”

### 参考下面的示例代码，从同一行读入两个数

a, b = input().split() # 将输入的以空格分隔的两个数命名为 a 和 b
a, b = map(int,input().split(',')) # 将输入的以逗号分隔的两个值，转换为整数后命名为 a 和 b

### 输入格式

输入为一行，以空格分隔的两个整数 h f，分别代表鸡兔的总头数和总脚数。

### 输出格式

使用输入值进行计算，如有解，则输出：有 m 只鸡，n 只兔；如无解则输出 Data Error!

:::tip 示例 1
输入：35 94  
输出：有 23 只鸡，12 只兔
:::

:::tip 示例 2
输入：-24 12  
输出：Data Error!
:::

:::tip 示例 3
输入：12 35  
输出：Data Error!
:::

## 代码

```python
h, f = map(int, input().split(' '))
r = int((f - h * 2) / 2)
c = h - r
if (f - h * 2) % 2 != 0 or r<0 or c<0:
    print("Data Error!")
else:
    print("有{}只鸡，{}只兔".format(c, r))
```
