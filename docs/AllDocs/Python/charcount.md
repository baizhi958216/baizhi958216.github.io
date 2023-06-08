# 文本分析（1）——统计文件中的字符

## 题目

文本分析（1）——统计文件中的字符

类型：`字符串`

### 描述

`open(name[, mode[, buffering]])`函数可以打开诸如`txt`，`csv`等格式的文件。

如下定义 file_read()函数：

```python
def read_file(file):
    """接收文件名为参数，读取文件中的数据到字符串中，返回字符串"""
    with open(file, 'r', encoding='utf-8') as text:  # 创建文件对象
        txt =text.read()      # 读文件为字符串
    return txt     # 返回字符串
```

上面的函数`read_file(file)`可以读取名为`file`的文件内容，以字符串形式返回`txt`，请继续编程统计字符串 txt 中大写字母、小写字母、数字、空格和其它字符的数量。

:::tip 提示：

ch.isupper()函数判断字符 ch 是否为大写字母，返回 True/False。

ch.islower()函数判断字符 ch 是否为小写字母，返回 True/False。

ch.isdigit()函数判断字符 ch 是否为数字，返回 True/False。

ch.isspace()函数判断字符 ch 是否为空白字符，包括空格，制表符，换行符，回车符，垂直制表符等，返回 True/False。

判断空格可用是否为空格字符串' '

使用 upper，lower，digit，space，other 五个变量代表不同种类的字符个数，设定初值为 0，在循环过程中按照判断结果进行累加。

函数返回时使用 return upper, lower, digit, space, other 语句，返回值为元组类型。
:::

### 输入格式

输入为一行，是一个文本文件名，如 example1.txt。

### 输出格式

输出为一行，是对名为 example1.txt 文件的内容进行分类统计后的结果， 输出形如：“ 大写字母 m 个,小写字母 n 个,数字 o 个,空格 p 个,其他 q 个 ”，具体格式见示例。

:::tip 示例 1
输入：c.txt
输出：大写字母 6 个,小写字母 6 个,数字 6 个,空格 5 个,其他 5 个
:::

## 代码

```python
# --------      -------    --------
# @Author : 赵广辉
# @Contact: vasp@qq.com
# @Company: 武汉理工大学
# @Version: 1.0
# @Modify : 2022/06/13 11:33
# Python程序设计基础，赵广辉，高等教育出版社，2021
# Python程序设计基础实践教程，赵广辉，高等教育出版社，2021
# --------      -------    --------

import string

def read_file(file):
    """接收文件名为参数，读取文件中的数据到字符串中，返回这个字符串"""
    with open(file, 'r', encoding='utf-8') as f:
        return f.read()

def classify_char(txt):
    """接收字符串为参数，依序返回大写字母、小写字母、数字、空格、和其他字符数量"""
    upper, lower, digit, space, other = 0, 0, 0, 0, 0
    for char in txt:
        if char.isupper():
            upper+=1
        elif char.islower():
            lower+=1
        elif char.isdigit():
            digit+=1
        elif char==' ':
            space+=1
        else:
            other+=1
    return upper, lower, digit, space, other

if __name__ == '__main__':
    filename = input()              # 读入文件名
    text = read_file(filename)      # 调用函数读文件中的内容为字符串
    classify = classify_char(text)  # 调用函数分类统计字符数量
    print('大写字母{}个,小写字母{}个,数字{}个,空格{}个,其他{}个'.format(*classify))
```
