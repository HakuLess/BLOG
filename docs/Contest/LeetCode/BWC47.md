# 第 47 场双周赛题解

## Q1 [1779. 找到最近的有相同 X 或 Y 坐标的点](https://leetcode-cn.com/problems/find-nearest-point-that-has-the-same-x-or-y-coordinate/)

模拟即可。多个相同时，返回下标最小，即从小到大遍历，比较当前值时用$<$而不是$<=$即可。

时间复杂度：$O(n)$

```kotlin
class Solution1779 {
    fun nearestValidPoint(x: Int, y: Int, points: Array<IntArray>): Int {
        var ans = -1
        var cur = Int.MAX_VALUE
        for (i in points.indices) {
            if (points[i][0] == x || points[i][1] == y) {
                if (cur > abs(points[i][0] - x) + abs(points[i][1] - y)) {
                    ans = i
                    cur = abs(points[i][0] - x) + abs(points[i][1] - y)
                }
            }
        }
        return ans
    }
}
```

## Q2 [1780. 判断一个数字是否可以表示成三的幂的和](https://leetcode-cn.com/problems/check-if-number-is-a-sum-of-powers-of-three/)

由于数字不大，比赛时直接暴力把所有组合求出来了...

```kotlin
class Solution1780 {
    fun checkPowersOfThree(n: Int): Boolean {
        val cur = arrayListOf<Int>()
        var c = 1
        for (i in 0 until 14) {
            cur.add(c)
            c *= 3
        }
        return n in cur.toIntArray().toAllSubSet()
    }
}

/**
 * 获取所有subSet的可能的和
 * */
fun IntArray.toAllSubSet(): HashSet<Int> {
    val set = hashSetOf<Int>()
    val n = this.size
    for (i in 0..(1 shl n)) {
        var tmp = 0
        for (j in 0 until n) {
            if (i and (1 shl j) != 0) tmp += this[j]
        }
        set.add(tmp)
    }
    return set
}
```

不过实际上，可以把原数字转换为三进制，然后只允许出现$0、1$即可，若有2出现，则证明其中某一个3的幂需要使用两次。

```kotlin
class Solution1780 {
    fun checkPowersOfThree(n: Int): Boolean {
        return "2" !in n.toString(3)
    }
}
```

## Q3 [1781. 所有子字符串美丽值之和](https://leetcode-cn.com/problems/sum-of-beauty-of-all-substrings/)

数据范围$1 <= s.length <= 500$，直接暴力$O(n^2)$没有压力。只是需要注意，没有的字符不参与最大最小的比较，因此每次计算时需要$filter$一次$count$为$0$的字符。

```kotlin
class Solution1781 {
    fun beautySum(s: String): Int {
        var ans = 0
        for (i in s.indices) {
            val cur = IntArray(26)
            for (j in i until s.length) {
                cur[s[j] - 'a']++
                ans += cur.filter { it != 0 }.max()!! - cur.filter { it != 0 }.min()!!
            }
        }
        return ans
    }
}
```

## Q4 [1782. 统计点对的数目](https://leetcode-cn.com/problems/count-pairs-of-nodes/)

$edges$中与任意一个点相连的数目，可以记为$deg[i]$，则与两个点相连的数目应为$deg[i] + deg[j] - edge[i][j]$。

1. 先将每个点的连接线都计算出来，充实$deg$数组
2. 将边记录起来，用于后续减去不满足的
3. 根据$queries$遍历，双指针+二分快速查找$i、j$总和满足要求的$count$（可以提前按照出入度排序，降低复杂度）
4. 然后通过之前记录的边，把总和满足但减去重复$edge$后不满足的结果减去

时间复杂度$O(n\lg(n))$

```kotlin
class Solution1782 {
    fun countPairs(n: Int, edges: Array<IntArray>, queries: IntArray): IntArray {
        val deg = HashMap<Int, Int>()
        val edge = HashMap<Int, Int>()
        edges.forEach {
            it.sort()
            deg[it[0]] = deg.getOrDefault(it[0], 0) + 1
            deg[it[1]] = deg.getOrDefault(it[1], 0) + 1
            val key = it[0] * (n + 1) + it[1]
            edge[key] = edge.getOrDefault(key, 0) + 1
        }

        val ans = IntArray(queries.size)
        val s = ArrayList(deg.values.sorted())
        while (s.size != n)
            s.add(0, 0)

        queries.forEachIndexed { i, it ->
            for (j in 0 until n) {
                var left = j + 1
                var right = n - 1
                while (left <= right) {
                    val mid = (left + right) / 2
                    if (s[j] + s[mid] > it) {
                        right = mid - 1
                    } else {
                        left = mid + 1
                    }
                }
                ans[i] += n - left
            }

            for ((key, value) in edge) {
                val u = key / (n + 1)
                val v = key % (n + 1)
                if (deg[u]!! + deg[v]!! > it && deg[u]!! + deg[v]!! - value <= it) {
                    ans[i]--
                }
            }
        }
        return ans
    }
}
```
