# fcitx5-rime 自定义配置

# 配置 fcitx5-rime

# 1.安装 fcitx5 以及 fcitx5 配置工具

```bash
sudo pacman -S fcitx5-im fcitx5-configtool
```

# 2.安装 rime

在 linux 的 rime 是叫`中州韻`

```bash
sudo pacman -S fcitx5-rime
```

# 3.配置环境变量

```bash
# /etc/environment 需要用超级用户编辑
sudo su
# echo 向 /etc/environment 追加内容
echo "GTK_IM_MODULE=fcitx
QT_IM_MODULE=fcitx
XMODIFIERS=@im=fcitx
INPUT_METHOD=fcitx
SDL_IM_MODULE=fcitx
GLFW_IM_MODULE=ibus" >> /etc/environment
```

完成之后重新登录一下就可以使用了

# 给 fcitx5 下的 rime 配置默认中文输出

路径: `~/.local/share/fcitx5/rime/`

```bash
# 创建luna_pinyin.custom.yaml文件
touch luna_pinyin.custom.yaml
```

编辑`luna_pinyin.custom.yaml`
参考 rime wiki  
https://github.com/rime/home/wiki/CustomizationGuide

```yaml
patch:
  switches: # 注意縮進
    - name: ascii_mode
      reset: 0 # reset 0 的作用是當從其他輸入方案切換到本方案時，
      states: [中文, 西文] # 重設爲指定的狀態，而不保留在前一個方案中設定的狀態。
    - name: full_shape # 選擇輸入方案後通常需要立即輸入中文，故重設 ascii_mode = 0；
      states: [半角, 全角] # 而全／半角則可沿用之前方案中的用法。
    - name: simplification
      reset: 1 # 增加這一行：默認啓用「繁→簡」轉換。
      states: [漢字, 汉字]
```

然后重新部署即可

```bash
touch ~/.config/ibus/rime/; ibus restart
```
