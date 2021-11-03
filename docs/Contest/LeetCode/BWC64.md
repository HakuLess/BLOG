# 第 64 场双周赛题解

## Q1 [2053. 数组中第 K 个独一无二的字符串](https://leetcode-cn.com/problems/kth-distinct-string-in-an-array/)

签到。

```kotlin
class Solution2053 {
    fun kthDistinct(arr: Array<String>, k: Int): String {
        var cur = 0
        for (i in arr.indices) {
            if (arr.count { it == arr[i] } == 1) {
                cur++
            }
            if (cur == k) {
                return arr[i]
            }
        }
        return ""
    }
}
```

## Q2 [2054. 两个最好的不重叠活动](https://leetcode-cn.com/problems/two-best-non-overlapping-events/)

两个不重叠的活动，先将出入分别标识入列表，然后根据时间排序（由于相同的值也算重叠，因此相等情况入队在前）。每次有新元素入队时，可以判断之前最大的出队与当前值之和。

```kotlin
class Solution2054 {
    fun maxTwoEvents(events: Array<IntArray>): Int {
        // 按照时间进行排序
        val arr = ArrayList<IntArray>()
        events.forEach {
            arr.add(intArrayOf(1, it[0], it[2]))
            arr.add(intArrayOf(-1, it[1], it[2]))
        }
        arr.sortWith(compareBy({ it[1] }, { -it[0] }))

        var preMax = 0
        var ans = 0
        arr.forEach {
            if (it[0] == 1) {
                ans = maxOf(ans, it[2] + preMax)
            } else {
                preMax = maxOf(preMax, it[2])
            }
        }
        return ans
    }
}
```

## Q3 [2055. 蜡烛之间的盘子](https://leetcode-cn.com/problems/plates-between-candles/)

线段树罗列逻辑即可。线段树的Triple分别代表最左侧蜡烛Index和最右侧蜡烛Index，由于可能不存在，使用-1代表缺省值。而后Merge策略更新左右的最小、最大值（记得排除-1的Case），并更新总蜡烛数。

初始化参数，需要在$O(n)$时间初始化n个结点。剩下的就是直接query，然后将结果添加到列表中。

```kotlin
class Solution2055 {
    fun platesBetweenCandles(s: String, queries: Array<IntArray>): IntArray {
        // 蜡烛最左侧index 蜡烛最右侧index 总蜡烛数
        val root = SegmentTree<Triple<Int, Int, Int>>(start = 0, end = s.length) { a, b ->
            Triple(
                if (a.first == -1) b.first else if (b.first == -1) a.first else minOf(a.first, b.first),
                if (a.second == -1) b.second else if (b.second == -1) a.second else maxOf(a.second, b.second),
                a.third + b.third
            )
        }
        for (i in s.indices) {
            root.update(root, i, if (s[i] == '|') Triple(i, i, 1) else Triple(-1, -1, 0))
        }
        val ans = ArrayList<Int>()
        queries.forEach {
            ans.add(
                root.query(root, it[0], it[1]).let { item ->
                    if (item.first == -1 || item.second == -1) 0
                    else item.second - item.first - item.third + 1
                }
            )
        }
        return ans.toIntArray()
    }
}
```

## Q4 [2056. 棋盘上有效移动组合的数目](https://leetcode-cn.com/problems/number-of-valid-move-combinations-on-chessboard/)

无聊的题目，搞文字游戏。从0时刻开始，每个棋子到目的地为止，每秒移动1步，然后有重叠时，算作为无效。

```kotlin
class Solution2056 {
    fun countCombinations(pieces: Array<String>, positions: Array<IntArray>): Int {

        // 获取方向值
        fun getOri(start: Int, end: Int): Int {
            if (start == end) return 0
            if (start > end) return -1
            return 1
        }

        fun check(targets: ArrayList<Int>): Boolean {
            val ori = ArrayList<Int>()
            for (i in targets.indices) {
                ori.add((getOri(positions[i][0], targets[i] % 10) + getOri(positions[i][1], targets[i] / 10) * 10))
            }
            val pos = arrayListOf<Int>()
            positions.forEach {
                pos.add(it[0] + it[1] * 10)
            }
            repeat(8) {
                if (pos.size != pos.toHashSet().size) return false
                for (i in pos.indices) {
                    if (pos[i] != targets[i]) pos[i] += ori[i]
                }
            }
            if (pos.size != pos.toHashSet().size) return false
            return true
        }

        fun dfs(index: Int, targets: ArrayList<Int>): Int {
            if (index !in pieces.indices) return if (check(targets)) 1 else 0
            val pos = positions[index]
            val type = pieces[index]

            var ans = 0
            for (i in 1..8) {
                for (j in 1..8) {
                    val key = i + j * 10
                    if (key in targets) continue
                    when (type) {
                        "rook" -> {
                            if (i == pos[0] || j == pos[1]) {
                                targets.add(key)
                                ans += dfs(index + 1, targets)
                                targets.remove(key)
                            }
                        }
                        "bishop" -> {
                            if (abs(i - pos[0]) == abs(j - pos[1])) {
                                targets.add(key)
                                ans += dfs(index + 1, targets)
                                targets.remove(key)
                            }
                        }
                        "queen" -> {
                            if (i == pos[0] || j == pos[1] || abs(i - pos[0]) == abs(j - pos[1])) {
                                targets.add(key)
                                ans += dfs(index + 1, targets)
                                targets.remove(key)
                            }
                        }
                    }
                }
            }
            return ans
        }

        return dfs(0, arrayListOf())
    }
}
```

