# 凯撒密码——加密

## 题目

凯撒密码——加密

类型：`字符串`

### 描述

在密码学中，凯撒密码是一种最简单且最广为人知的加密技术。“恺撒密码”据传是古罗马恺撒大帝用来保护重要军情的加密系统。它是一种替换加密的技术，明文中的所有字母都在字母表上向后（或向前）按照一个固定数目进行偏移后被替换成密文。例如，当偏移量是 3 的时候，所有的字母 A 将被替换成 D，B 变成 E，以此类推，小写字母和数字也一样处理，其他字符不作任何改变。

例如这样一条指令：'All roads lead to Rome.' 用恺撒密码加密后就成为：‘Doo urdgv ohdg wr Urph.’

```python
import string

lowers = string.ascii_lowercase #lowers是全部的小写英文字母
uppers = string.ascii_uppercase #uppers是全部的大写英文字母
digits = string.digits #digits是全部的数字字符

table = ''.maketrans('opqrstuvwxyz' ,'rstuvwxyzabc') # 建立'o' -> 'r', 'p' ->  's' ..的映射关系，存储在table里
place = 'zoo'.translate(table)      #使用table里的映射关系对'zoo'加密，得到密文'crr'
print(place)  # crr
```

研究上面的代码，掌握 string 库、maketrans() 函数、translate()函数的用法后，编写一个程序实现凯撒加密：输入一个字符串，对字符串中的字母和数字进行加密（规定加密偏移量为 3，即后移三位），并输出加密后的字符串。

### 输入格式

输入为一行，是一个字符串 s1。

### 输出格式

输出为一行，对 s1 进行加密后的字符串。

### 示例

输入：Open Box PassWord:2021

输出：Rshq Era SdvvZrug:5354

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

def caesar_cipher(text):
    """接收一个字符串为参数，采用字母表和数字中后面第3个字符代替当前字符的方法
    对字符串中的字母和数字进行替换，实现加密效果，返回值为加密的字符串。
    例如：2019 abc 替换为5342 def """
    res = ''
    lowers = 'abcdefghijklmnopqrstuvwxyzabc'  # lowers是全部的小写英文字母
    uppers = 'ABCDEFGHIJKLMNOPQRSTUVWXYZABC'  # uppers是全部的大写英文字母
    digits = '0123456789012'  # digits是全部的数字字符
    for i in text:
        if i in lowers:
            res += lowers[ord(i) - ord('a') + 3]
        elif i in uppers:
            res += uppers[ord(i) - ord('A') + 3]
        elif i in digits:
            res += digits[ord(i) - ord('0') + 3]
        else:
            res += i
    return res

if __name__ == '__main__':
    plaintext = input()
    print(caesar_cipher(plaintext))
```
