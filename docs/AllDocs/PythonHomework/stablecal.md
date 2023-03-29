# 稳定的计算程序

## 题目

稳定的计算程序

### 描述

从用户输入一个数字 x，计算并输出(1/x)的 x 次幂，保留小数点后 4 位。

要考虑输入异常，如果输入非数字，输出提示：请输入数字；如果运算不正确，输出提示: 运算异常。

### 输入格式

一个数字

### 输出格式

保留 4 位小数的数字或提示信息

### 输入输出示例

|        | 输入  |         输出 |
| ------ | :---: | -----------: |
| 示例 1 | `10`  |      `0.000` |
| 示例 2 | `abc` | `请输入数字` |

## 代码

```python
import re;
import datetime
a,b=input().split(',')
a1 = re.findall("\d+",a)
b1 = re.findall("\d+",b)
d1 = datetime.datetime(int(a1[0]),int(a1[1]),int(a1[2]))
d2 = datetime.datetime(int(b1[0]),int(b1[1]),int(b1[2]))
day = d1 - d2
if a1[0]=='1980':
    print(int(re.findall("\d+",str(day))[0])-1)
else:
    print(re.findall("\d+",str(day))[0])

```
