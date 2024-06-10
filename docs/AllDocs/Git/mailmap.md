# 修改历史作者

试想一下，当你不小心用工作的用户名和邮箱把代码提交了几十个commit，git的history会变得非常尴尬(你也不想你的工作单位被发现吧)

## mailmap

filter-repo是用于修改commit历史工具，有个mailmap参数，可以帮助我们一次性把指定作者的提交邮箱记录进行修改。

在父级新建一个`.mailmap`文件，内容如下

```txt
xiaoming <xiaoming@linux.org> zhangsan <zhangsan@qq.com>
```
意思是将`zhangsan <zhangsan@qq.com>`的提交记录变更为`xiaoming <xiaoming@linux.org>`的。

最后，在工作区执行`git filter-repo --mailmap ../.mailmap`