# git merge 使用总结

::: tip
`merge`是`Git`中用于合并分支的操作， `git merge <branch>`是我们常用的一种合并方式，其实`Merge`的策略还有很多种。
:::

**常用参数**

- `git merge --abort`

当合并分支出现冲突时，可以使用该命令取消本次合并回到之前的状态。但是当合并时存在未 `commit` 的文件，`git merge --abort`可能无法回退
到合并前的状态

:::warning
使用`git merge`时尽量确保没有未`commit`的文件，可以使用`git stash`将未 commit 文件暂存起来，解决完冲突后使用`git stash pop`把
未 commit 文件还原出来
:::

- `git merge [-n] [--stat] [--no-commit] [--squash] [--[no-]edit] [-s <strategy>] [-X <strategy-option>] [-S[<keyid>]] [--[no-]rerere-autoupdate] [-m <msg>] [<commit>...]`

  - `git merge -n | --stat | --no-stat`

  `--stat`命令会在合并结果之后显示文件差异状态，文件差异状态也可以在`git`配置文件的`merge.stat`配置。`-n`和`--no-stat`则不显示文件差异

  - `git merge --commit | --no-commit`

  `--commit`参数将会在合并后产生一个合并结果的`commit`节点，而`--no-commit`参数在合并后不会自动提交，可以在查看和修改合并结果后手动提交

  - `-s <strategy> | --strategy=<strategy>`

  这两个参数用于指定合并策略 `[resolve | recursive | octopus | ours | subtree]`
    
   **resolve**  
   使用三路合并算法，普通的三路合并算法会存在发现多个共同祖先的问题。此策略会“仔细地”寻找其中一个共同祖先。
  由于不需要递归合并出虚拟节点，所以此方法合并时会比较快速，但也可能会带来更多冲突。不敢说带来更多冲突是好事还是坏事，
  因为自动合并成功并不一定意味着在代码含义上也算是正确的合并。所以如果自动合并总是成功但代码含义上会失败，可以考虑此合并策略，
  这将让更多的冲突变成手工合并而不是自动合并

  **recursive**  
   如果不指定合并策略默认使用该策略。这将使用递归三路合并算法进行合并

  **octopus**  
   此策略允许合并多个`git`分支。如果出现需要手动解决的冲突，那么此策略将不会执行。

  **ours**  
   在合并的时候，无论有多少个合并分支，当前分支就直接是最终的合并结果。无论其他人有多少修改，在此次合并之后，都将不存在。
  如果你准备重新在你的仓库中进行开发，那么当你的修改与旧分支合并时，采用此合并策略就非常有用，你新的重构代码将完全不会被
  旧分支的改动所影响。

  :::warning
  这里要注意的是 `recursive`策略中也有 `ours` 参数，这是不同的两个参数
  :::

  **subtree**  
   此策略使用的是修改后的递归三路合并算法。与 `recursive` 不同的是，此策略会将合并的两个分支的其中一个视为另一个的子树，
  就像 `git subtree` 中使用的子树一样。

  - `-X<strategy option>`

  Git 可以通过添加`-s`参数来指定合并的策略。一些合并策略甚至含有自己的参数选项，通过  
   `-X<option>`设置这些合并策略的参数选项。

        git merge -m 'xxxxxxxx' -s recursive -X theirs origin/branch

  > 合并可以在 git merge 和 git pull 命令中发生，因此该合并策略同样适用于 git pull
