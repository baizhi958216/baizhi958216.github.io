# Int 类型溢出问题

小张酷爱篮球，他很想去现场观看 2023 年 NBA 总决赛，可是需要资金 10 万元。

他打算从今天起开始存钱，假如第一天存 1 元钱，第二天存 2 元钱，第三天存 4 元钱，

以后每一天都存比前一天多一倍的钱，请问 10 天后他能攒下多少钱？

不过他发现过了十几天后他就无能为力了，这又是为什么呢？多少天才能存够 10 万？

```c
#include <stdio.h>

int main() {
    int days = 10; // 攒钱的天数
    int totalMoney = 0;

    for (int i = 0; i < days; ++i) {
        totalMoney += 1 << i;
    }

    printf("10天后，小张攒下的钱为：%d元\n", totalMoney);

    return 0;
}

```

当存储的金额超过int类型的范围时，就会溢出，导致不准确的结果，因此过了十几天后他就无能为力。