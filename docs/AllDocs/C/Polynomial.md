# 求多项式值

设计一个函数 fun(), 在主函数中输入一个正整数 n，

用 fun()函数求出下列多项式的值：s=1+1/1!+1/2!+3/3!+……+1/n!，

然后返回给主函数将结果输出。

```c
#include <stdio.h>

double fun(int n);

int main() {
    int n;
    printf("输入一个正整数（n）：");
    scanf("%d", &n);

    double result = fun(n);

    printf("结果：%lf\n", result);

    return 0;
}

double fun(int n) {
    double s = 1.0;  // 将s初始化为级数的第一项

    double factorial = 1.0;

    for (int i = 1; i <= n; ++i) {
        factorial *= i;  // 更新当前项的阶乘
        s += 1.0 / factorial;  // 将当前项添加到总和中
    }

    return s;
}

```
