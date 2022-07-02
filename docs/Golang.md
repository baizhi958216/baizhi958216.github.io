#

# 可能是 Go 的第一步

## 安装依赖

```bash
sudo pacman -S go go-tools
```

`go` 是 golang 的标准编译器，还有一种是 gcc-go，但是还是建议用 go，纵使 gcc-go 有玄学优化，原生至上！  
`go-tools` 包含了像`godex, goimports, gorename...`这些东西，详情请移步[AUR](https://archlinux.org/packages/community/x86_64/go-tools/)

## 你的项目

下载安装`go.mod`里面的项目依赖

```bash
go mod tidy;go mod download
```

默认情况下，$GOPATH 是在用户目录的`~/go`文件夹里面，里面有编译 golang 所需工具以及各种依赖包，比如`go.mod`里面的

```mod
require (
	github.com/dustin/go-humanize v1.0.0
	github.com/golang/protobuf v1.4.2
	github.com/spencercw/go-xz v0.0.0-20181128201811-c82a2123b492
	github.com/vbauerster/mpb/v5 v5.3.0
	google.golang.org/protobuf v1.25.0
)
```

建议项目源码放在`~/go/src/`，当然没作强制要求就是了。  
`go env` 来查看 Go 所有变量

## 跑起来

```bash
CGO_ENABLE=0 go build -trimpath -o ./hellogolang .
```

## 交叉编译

[Go 官方文档](https://go.dev/doc/install/source#environment)  
`go tool dist list`可查看支持的平台/架构

```bash
[baizhi958216@TianXuan ~]$ go tool dist list
aix/ppc64
android/386
android/amd64
android/arm
android/arm64
darwin/amd64
darwin/arm64
dragonfly/amd64
freebsd/386
freebsd/amd64
freebsd/arm
freebsd/arm64
illumos/amd64
ios/amd64
ios/arm64
js/wasm
linux/386
linux/amd64
linux/arm
linux/arm64
linux/mips
linux/mips64
linux/mips64le
linux/mipsle
linux/ppc64
linux/ppc64le
linux/riscv64
linux/s390x
netbsd/386
netbsd/amd64
netbsd/arm
netbsd/arm64
openbsd/386
openbsd/amd64
openbsd/arm
openbsd/arm64
openbsd/mips64
plan9/386
plan9/amd64
plan9/arm
solaris/amd64
windows/386
windows/amd64
windows/arm
windows/arm64
[baizhi958216@TianXuan ~]$
```

#### 如果项目用到`cgo`(c/go 语言之间互相沟通)，还需要安装`aarch64-linux-gnu-gcc`

编译

```bash
env GOOS=平台 GOARCH=架构 go build -o hellogo_arm64
```

## 运行一下

```bash
chmod +x hellogolang;./hellogolang
```
