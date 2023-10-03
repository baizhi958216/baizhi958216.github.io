# 处理仓库远端与本地提交时间冲突

今天新建了一个项目，一开始在本地先把项目初始化，再到github上面开仓库。

如果什么都不做，是可以推送上去的，但是我在建仓库的时候选择了开源协议。

于是git会打一条初始协议的commit，这就导致了标题所示的情况。

使用`git pull`拉取远端代码时提示:
```ps1
git pull origin main
From github.com:baizhi958216/next-cosermage
 * branch            main       -> FETCH_HEAD
fatal: refusing to merge unrelated histories
```

## 解决

使用`git pull origin main --allow-unrelated-histories`将远端提交merge到本地仓库(并作为最新的提交)。

```ps1
git pull origin main --allow-unrelated-histories
From github.com:baizhi958216/next-cosermage
 * branch            main       -> FETCH_HEAD
Merge made by the 'ort' strategy.
 LICENSE | 339 ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 1 file changed, 339 insertions(+)
 create mode 100644 LICENSE
```

## 设置跟踪仓库

这是个题外话

```ps1
git push --set-upstream origin main
```