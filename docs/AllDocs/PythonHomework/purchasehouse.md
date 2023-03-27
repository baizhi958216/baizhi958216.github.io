# 存款买房（C）

## 题目

存款买房（C）

类型：`流程控制`

### 描述

你刚刚大学毕业，在北京找到了一份很好的工作，决定开始存钱买房。由于北京的房价很高，你要攒几年钱才能付得起房子的首付。

现根据以下假定来计算你需要多长时间才能攒够首付款：

1.将你想购买的房子的总价称为 total_cost。

2.将首付款占总房价的比例称为 portion_down_payment。为简单起见，假设 portion_down_payment = 0.30（30%）。

3.将存款金额称为 current_savings。你的存款从 0 元开始。

4.假设你的年薪是 annual_salary，按 12 个月平均发放，单位是元。

5.假设你每个月都要拿出一定百分比的工资来存首付。称为 portion_saved，此值为一个表示百分比的整数，例如 50 表示 50%。

6.假定你每 6 个月加一次工资，每半年加薪比例 semi_annual_raise 是一个表示百分比的整数，例如 7 表示 7%，即第 7、13、19、25... 个月月初涨一次工资，工资涨幅为 7%。

7. 假设你每个月都是月初发工资，同时会收到上一个月的存款利息，存款年利率 interest_rate 固定为 2.25%。

写一个程序来计算你需要多少个月才能攒够钱付定金，不足一个月按一个月计算。

要求使用下面的输入输出代码，填充完整并通过测试用例。

### 输入格式

输入为四行，每行一个浮点数，分别表示房价、年薪、月存储工资百分数、半年工资涨幅百分数。

### 输出格式

输出为若干行，第一行为首付款，最后一行为存够首付的月数 n，中间行是每年年底已存工资款总数。具体格式见示例。

:::tip 示例 1
输入：  
6800000  
240000  
70  
7

输出：  
首付 2040000.0  
第 12 个月月末有 175,651 元存款  
第 24 个月月末有 380,747 元存款  
第 36 个月月末有 619,645 元存款  
第 48 个月月末有 897,337 元存款  
第 60 个月月末有 1,219,538 元存款  
第 72 个月月末有 1,592,794 元存款  
第 84 个月月末有 2,024,604 元存款  
需要 85 个月可以存够首付
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

total_cost = float(input())         # total_cost为当前房价
annual_salary = float(input())        # 年薪
portion_saved = float(input()) / 100  # 月存款比例，输入30转为30%
semi_annual_raise = float(input()) /100     # 输入每半年加薪比例，输入7转化为7%

portion_down_payment = 0.3      # 首付比例，浮点数
down_payment = portion_down_payment * total_cost   # 首付款
print('首付',down_payment)

current_savings = 0                                # 存款金额，从0开始
number_of_months = 1

monthly_salary = annual_salary / 12
# 月工资
monthly_deposit = monthly_salary * portion_saved  # 月存款

while True:
    current_savings += 2.25 * 0.01 * current_savings / 12 #上个月的利息
    current_savings = current_savings + monthly_deposit  # 存款

    if number_of_months % 12 == 0:
        print("第{}个月月末有{:,.0f}元存款".format(number_of_months, current_savings))  # 每12个月输出一次存款，保留0位小数，使用千分符

    if current_savings >= down_payment:
        break

    if number_of_months % 6 == 0:
        monthly_deposit = monthly_deposit * (1 + semi_annual_raise)  # 加薪
    number_of_months = number_of_months + 1
print(f'需要{number_of_months}个月可以存够首付')

```
