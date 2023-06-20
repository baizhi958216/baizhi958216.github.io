# 解决 PowerShell 提示在此系统上禁止运行脚本

## 问题描述

运行`pnpm`出现以下问题:

```ps
pnpm : 无法加载文件 C:\Program Files\nodejs\pnpm.ps1，因为在此系统上禁止运行脚本。有关详细信息，请参阅 https:/go.microsoft.com/fwlink/?LinkID=13
5170 中的 about_Execution_Policies。
所在位置 行:1 字符: 1
+ pnpm i
+ ~~~~
    + CategoryInfo          : SecurityError: (:) []，PSSecurityException
    + FullyQualifiedErrorId : UnauthorizedAccess
```

## 解决方法

管理员身份运行终端执行这个命令:

```ps
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned
```