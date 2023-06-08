# 修改历史 commit 记录

## 修改刚提交的 commit

```bash
git commit --amend -s -S -m "新的提交信息"
```

## 修改之前的 commits

最近 2 条 commits:

```bash
git rebase -i HEAD~2
```

将要修改的 commit 设置 edit 标记(可用简写`e`)

```bash
edit 3bb5468 定制elementplus主题色 //[!code focus]
pick 8829593 feat: axios基础封装和测试

# Rebase 33608d8..8829593 onto 33608d8 (2 commands)
#
# Commands:
# p, pick <commit> = use commit
# r, reword <commit> = use commit, but edit the commit message
# e, edit <commit> = use commit, but stop for amending
# s, squash <commit> = use commit, but meld into previous commit
# f, fixup [-C | -c] <commit> = like "squash" but keep only the previous
#                    commit's log message, unless -C is used, in which case
#                    keep only this commit's message; -c is same as -C but
#                    opens the editor
# x, exec <command> = run command (the rest of the line) using shell
# b, break = stop here (continue rebase later with 'git rebase --continue')
# d, drop <commit> = remove commit
# l, label <label> = label current HEAD with a name
# t, reset <label> = reset HEAD to a label
# m, merge [-C <commit> | -c <commit>] <label> [# <oneline>]
#         create a merge commit using the original merge commit's
#         message (or the oneline, if no original merge commit was
#         specified); use -c <commit> to reword the commit message
# u, update-ref <ref> = track a placeholder for the <ref> to be updated
#                       to this position in the new commits. The <ref> is
#                       updated at the end of the rebase
#
# These lines can be re-ordered; they are executed from top to bottom.
#
# If you remove a line here THAT COMMIT WILL BE LOST.
#
# However, if you remove everything, the rebase will be aborted.
#
```

:::tip 正常情况下会有`amend`, `continue`提示

```bash
Stopped at 3bb5468...  定制elementplus主题色
You can amend the commit now, with

  git commit --amend

Once you are satisfied with your changes, run

  git rebase --continue

```

:::

修改提交记录

```bash
git commit --amend -s -S -m "feat: 定制elementplus主题色"
```

继续 rebase

```bash
git rebase --continue
```

:::tip rebase 成功提示

```bash
Successfully rebased and updated refs/heads/master
```

:::
