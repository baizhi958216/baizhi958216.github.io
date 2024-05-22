# 一些基础练习

## 水仙花数

3 位数各个位的 3 次方相加的和是自身就是水仙花数。

取模可以求得个位数，因此个位直接取模，十位先除10把原来的个位去掉再取模，百位除100把原来的个位十位去掉即可：

```java
for(int i = 1;i<1000;i++){
    int a = i%10;
    int b = i/10%10;
    int c = i/100;
    if(a*a*a + b*b*b + c*c*c == i){
        System.out.println(i);
    }
}
```

## 九九乘法表

放两个循环即可，主要是在内层循环把外层的数过滤掉，用println换行打印出直角三角形。

`-2d`意思是左对齐，有些只有一位的数很难看:

```java
for(int i = 1; i <= 9; i++){
    for(int j = 1; j <= 9; j++){
        if(j>i)continue;
        System.out.printf("%d × %d = %-2d ",j,i,i*j);
    }
    System.out.println();
}
```

## 斐波那契数列具体位的值

从第三位开始，值是前两位之和，放个变量存起来，然后往前移就可以计算下一位。

因为斐波那契数列非常大，有时候取千位可以有上百位数，使用BigInteger:

```java
int position = 6666;
BigInteger x = BigInteger.ZERO ;
BigInteger y = BigInteger.ONE;
for (int i = 2; i <= position; i++){
    BigInteger tmp = x.add(y);
    x = y;
    y = tmp;
}
System.out.println(y);
```