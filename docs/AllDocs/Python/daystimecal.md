# 时间差之天数计算

## 题目

时间差之天数计算

### 描述

获得用户输入的两个与时间相关的字符串，两个时间用逗号分隔，每个时间字符串格式示例如下：2018 年 08 月 01 日 17 点 21 分 21 秒。

计算两个时间差的绝对值，输出相差的完整天数。

### 输入格式

一个包含两段时间的字符串。

### 输出格式

时间相差的天数

### 输入输出示例

|        |                                     输入                                      | 输出 |
| ------ | :---------------------------------------------------------------------------: | ---: |
| 示例 1 | `2018 年 10 月 10 日 17 点 18 分 20 秒,2018 年 10 月 11 日 16 点 18 分 20 秒` |  `1` |

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
