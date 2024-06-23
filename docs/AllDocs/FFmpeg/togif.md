# FFmpeg将MP4转GIF

## 命令

```bash
ffmpeg -i demo.mp4 demo.gif
```

将文件夹内所有mp4转换成gif：

```bash
#!/bin/bash

for file in *.mp4; do
    filename=$(basename "$file")
    output_file="${filename%.*}.gif"
    ffmpeg -i "$file" "$output_file"
done
```

记得`chmod +x`给脚本加可执行权限。

一些可选参数：

- 循环次数：`-loop 0`默认无限循环