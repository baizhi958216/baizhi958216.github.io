# 字符串检查

键盘输入一个字符串,分别统计该字符串中字母、数字和其他字符的个数。

例如输入:A123##b456*,则输出字母2个,数字6个,其他字符3个。

```c
#include <stdio.h>

int main() {
    char input_str[100];
    int letter_count = 0, digit_count = 0, other_count = 0;

    printf("请输入一串字符串:");
    scanf("%s", input_str);

    for (int i = 0; input_str[i] != '\0'; i++) {
        if ((input_str[i] >= 'a' && input_str[i] <= 'z') || (input_str[i] >= 'A' && input_str[i] <= 'Z'))
            letter_count++;
        else if (input_str[i] >= '0' && input_str[i] <= '9')
            digit_count++;
        else
            other_count++;
    }

    printf("字母%d个, 数字%d个, 其它字符%d个\n", letter_count, digit_count, other_count);

    return 0;
}
```
