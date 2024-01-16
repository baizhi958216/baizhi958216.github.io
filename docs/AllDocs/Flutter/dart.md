# Dart语言基础

Dart 是一种面向对象的语言，支持类、继承、接口和 mixin 等概念。

- 支持静态类型检查和类型推断
- 提供内置的异步编程支持
- 提供即时编译（JIT）和预编译（AOT）模式
- 可以用 flutter 写前端，也可以基于 dart 写后端
- 提供涵盖文件和网络操作、并发编程、数据序列化和解析等标准库

## Hello World

新建`helloworld.dart`:

```dart
void main() {
  print('HelloWorld');
}
```

终端执行`dart helloworld.dart`

## 变量

使用`var`,`const`,`final`来声明变量。

- var: 使用`var`声明变量时，dart会进行自动推导变量类型

- const: 声明一个常量，赋值后无法更改

- final: 在第一次使用时赋值，赋值后无法更改

```dart
void main()
{
    var name = "John";
    print(name);
}
```

## 字符串插值

使用`$variable`或者`${variable}`的形式嵌入任何表达式或变量的值：

```dart
void main(){
  var firstName = "John";
  var lastName = "Doe";
  print("Full name is $firstName ${lastName}");
}
```

## 数据类型

- int 整数类型

```dart
int age = 23;

int temperature = -10;
```

- double 浮点数类型

```dart
double pi = 3.141;

double gravity = 9.8;
```

- bool 布尔类型

```dart
bool isRaining = false;

bool isLogin = true;
```

- String 字符串类型

```dart
String name = "John";

// 多行字符串
String message = 
'''
Hello World
1
2
3
4
5
6
''';

// 允许输出原始字符串
String rawMessage = r'C:\Program Files\$flutter'
```

- List 列表类型，表示有序的元素集合，列表中的元素可以是任意类型

```dart
List<int> numbers = [1,2,3,4,5];

List<String> members = ['xiaoman', 'dodo', 'fufu'];
```

- Map 映射类型，表示键值对的集合，键和值可以是任意类型

```dart
Map<String, int> testResult = {
    'xiaoman': 100,
    'dodo': 100,
    'fufu': 100
};
```

- Set 集合类型，表示唯一值的无序集合，集合中的元素可以是任意类型

```dart
Set<int> uniqueNumbers = { 1, 2, 3, 4, 5};

Set<String> uniqueNames = {'xiaoman', 'dodo', 'fufu'};
```

- dynamic 动态类型，表示可以在运行时改变其类型的变量。

```dart
Map<String, dynamic> person = {
  'name': 'John',
  'age': 25,
  'isStudent': true
};
```

- Object 所有类的基类，它是一个通用的、最顶层的类型。

```dart
Object obj1 = 10;
Object obj2 = 'Hello';
Object obj3 = [1, 2, 3];
```

- num 是`int`和`double`的基类。

```dart
List<num> numbers = [1.1, 2.2, 3.3, 4, 5];
```

- Runes 表示Unicode字符序列的对象。

```dart
Runes runes = Runes('\u{1F600}');
// 使用String.fromCharCodes()函数将Runes对象转换为字符串
print(String.fromCharCodes(runes));
```

- Null 表示空或者缺失的对象

使用null来表示变量的空值或缺失值，可以避免使用未初始化的变量或空引用导致的错误。

```dart
String name = null; // 将变量赋值为null

if (name == null) {
  print('Name is null'); // 输出: Name is null
}

int age;
print(age); // 输出: null
```

除了以上常用的数据类型，还有 `Records`,`Symbols`,`Enum`,`Future`,`Stream`,`void`等。

https://dart.dev/language/built-in-types

## 运算符

加减乘除：

```dart
void main() {
  int num1 = 10;
  int num2 = 20;
  int a = num1 + num2;
  int b = num1 - num2;
  int c = num1 * num2;
  // 除法运算是浮点型，需要使用`double`。
  double d = num1 / num2;
  print('${a} ${b} ${c} ${d}');
}
```

整除运算符： `~/` 只返回整数部分

```dart
int a = 10;
int b = 3;
int c = a ~/ b; // c的值为3
```

## 类型转换

`int`转换成`String`:

```dart
  int a = 10;
  String a_s = a.toString();
```

`double`转换成`int`:

```dart
  double d = 10.1;
  int d_i = d.toInt();
```

`String`转换成`int`/`double`:

```dart
  String s = "1";
  int s_i = int.parse(s);
  double s_d = double.parse(s);
```

## 类型检查

使用`runtimeType`和`is`进行类型检查：

```dart
var variable = 3.14;

if (variable is int) {
  print('variable是一个整数。');
} else {
  print('variable不是一个整数。');
}

if (variable.runtimeType == double) {
  print('variable是一个双精度浮点数。');
}
```