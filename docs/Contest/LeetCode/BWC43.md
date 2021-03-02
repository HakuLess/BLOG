# 第 43 场双周赛题解

## Q1 [1716. 计算力扣银行的钱](https://leetcode-cn.com/problems/calculate-money-in-leetcode-bank/)

先把$n$分解为$w$周余$d$天。前$w$周为起始为$28$、差值为$7$的等差数列。而后$d$天则是起始为$w + 1$，差值为$1$的等差数列。使用公式求解即可。

```kotlin
class Solution1716 {
    fun totalMoney(n: Int): Int {
        val w = n / 7
        val d = n % 7
        var ans = (28 + (w - 1) * 7 + 28) * w / 2
        ans += (w + 1 + w + 1 + d - 1) * d / 2
        return ans
    }
}
```

## Q2 [1717. 删除子字符串的最大得分](https://leetcode-cn.com/problems/maximum-score-from-removing-substrings/)

首先贪心删除价值大的字符串，然后再删除小的。

证明：对于非'a'、'b'的字符，会将原字符串分割成多个子字符串，且该字符串仅包含'a'、'b'。对于每个子字符串无论用什么顺序删除"ab" or "ba"，最终剩余的部分一定是相同的。因此先删除价值大的一定会使总体的价值变大。

```kotlin
class Solution1717 {
    fun maximumGain(s: String, x: Int, y: Int): Int {
        var ans = 0
        fun dfs(s: String, a: Char, b: Char, v: Int): String {
            val st = Stack<Char>()
            s.forEach {
                if (it == a && st.isNotEmpty() && st.peek() == b) {
                    st.pop()
                    ans += v
                } else {
                    st.add(it)
                }
            }
            return st.joinToString("")
        }
        val (a, b) = if (x >= y) Pair('a', 'b') else Pair('b', 'a')
        val (big, small) = if (x >= y) Pair(x, y) else Pair(y, x)
        val next = dfs(s, b, a, big)
        dfs(next, a, b, small)
        return ans
    }
}
```

## Q3 [1718. 构建字典序最大的可行序列](https://leetcode-cn.com/problems/construct-the-lexicographically-largest-valid-sequence/)

标准的回溯算法，不过代码写起来还挺麻烦...

对于1和非1要分两种情况处理，并且使用逆序贪心递归，找到第一个符合要求的即可return掉。

```kotlin
class Solution1718 {
    fun constructDistancedSequence(n: Int): IntArray {
        val res = IntArray(n * 2 - 1)
        val visited = BooleanArray(n + 1)
        fun dfs(pos: Int): Boolean {
            if (pos >= n * 2 - 1) {
                return true
            } else if (res[pos] > 0) {
                return dfs(pos + 1)
            }
            for (num in n downTo 1) {
                if (!visited[num]) {
                    if (num == 1) {
                        res[pos] = 1
                        visited[1] = true
                        if (dfs(pos + 1)) {
                            return true
                        }
                        visited[1] = false
                        res[pos] = 0
                    } else {
                        if (pos + num in res.indices && res[pos + num] == 0) {
                            res[pos] = num
                            res[pos + num] = num
                            visited[num] = true
                            if (dfs(pos + 1)) {
                                return true
                            }
                            visited[num] = false
                            res[pos] = 0
                            res[pos + num] = 0
                        }
                    }
                }
            }
            return false
        }
        dfs(0)
        return res
    }
}
```

## Q4 [1719. 重构一棵树的方案数](https://leetcode-cn.com/problems/number-of-ways-to-reconstruct-a-tree/)

该题已经降低了一些难度，给出的结果只需要$0、1、2$，而不需要具体的方案数。

通过给出的祖先关系，可以判定每个节点与其他节点的关系数。使用关系数逆序排序，然后顺序遍历构建树结构，只要没有冲突，那么结果为$1$ or $2$，否则为$0$。冲突指的是，子孙节点包含的关系节点并不在祖先节点的包含关系中。

若对于子节点与父节点拥有相同的关系数，那么代表这两个节点可以任意更换位置，则结果为$2$。

```kotlin
class Solution1719 {
    fun checkWays(pairs: Array<IntArray>): Int {
        val map = hashMapOf<Int, HashSet<Int>>()
        val matrix = Array<BooleanArray>(501) { BooleanArray(501) { false } }
        pairs.forEach {
            map[it[0]] = map.getOrDefault(it[0], HashSet())
            map[it[0]]!!.add(it[1])
            map[it[1]] = map.getOrDefault(it[1], HashSet())
            map[it[1]]!!.add(it[0])
            matrix[it[0]][it[1]] = true
            matrix[it[1]][it[0]] = true
        }
        val nodes = arrayListOf<Int>()
        nodes.addAll(map.keys)
        nodes.sortByDescending { map[it]!!.size }

        val n = map.keys.size
        if (map[nodes[0]]!!.size != n - 1) return 0
        var ans = 1
        for (i in 0 until n) {
            val k = map[nodes[i]]!!.size
            for (node in map[nodes[i]]!!) {
                if (map[node]!!.size == k) {
                    ans = 2
                }
                map[node]!!.remove(nodes[i])
                for (it in map[node]!!) {
                    if (!matrix[it][nodes[i]])
                        return 0
                }
            }
        }
        return ans
    }
}
```

