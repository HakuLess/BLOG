# 第 53 场双周赛题解

## Q1 [1876. 长度为三且各字符不同的子字符串](https://leetcode-cn.com/problems/substrings-of-size-three-with-distinct-characters/)

直接硬暴力遍历。

时间复杂度：$O(n)$

```kotlin
class Solution1876 {
    fun countGoodSubstrings(s: String): Int {
        var ans = 0
        for (i in 0 until s.length - 2) {
            if (s[i] != s[i + 1] && s[i + 1] != s[i + 2] && s[i] != s[i + 2])
                ans++
        }
        return ans
    }
}
```

## Q2 [1877. 数组中最大数对和的最小值](https://leetcode-cn.com/problems/minimize-maximum-pair-sum-in-array/)

可以贪心的做，每次匹对取一个最大值和一个最小值。

时间复杂度：$O(n)$

```kotlin
class Solution1877 {
    fun minPairSum(nums: IntArray): Int {
        nums.sort()
        var ans = 0
        for (i in nums.indices) {
            ans = maxOf(ans, nums[i] + nums[nums.lastIndex - i])
        }
        return ans
    }
}
```

## Q3 [1878. 矩阵中最大的三个菱形和](https://leetcode-cn.com/problems/get-biggest-three-rhombus-sums-in-a-grid/)

本题还算简单，就是写起来很麻烦...理解时还以为只算四个角的和，怒吃一个WA才发现不对了...

直接枚举所有情况，然后把和入到一个$TreeSet$或其他排序方案即可。

时间复杂度：$O(n * m * maxOf(n, m))$

```kotlin
class Solution1878 {
    fun getBiggestThree(grid: Array<IntArray>): IntArray {
        val m = grid.size
        val n = grid[0].size
        fun valid(z: Pair<Int, Int>): Boolean {
            return z.first in 0 until m && z.second in 0 until n
        }

        val ts = TreeSet<Int>()

        fun cal(x1: Pair<Int, Int>, k: Int) {
            val set = HashSet<Pair<Int, Int>>()
            set.add(x1)
            for (i in 0..k) {
                set.add(Pair(x1.first + i, x1.second + i))
                set.add(Pair(x1.first + i, x1.second - i))
                set.add(Pair(x1.first + i + k, x1.second - k + i))
                set.add(Pair(x1.first + i + k, x1.second + k - i))
            }
            var t = 0
            set.forEach {
                t += grid[it.first][it.second]
            }
            ts.add(t)
        }

        for (i in 0 until m) {
            for (j in 0 until n) {
                for (k in 0 until maxOf(m, n)) {
                    val x1 = Pair(i, j)
                    val x2 = Pair(i + k, j + k)
                    val x3 = Pair(i + k, j - k)
                    val x4 = Pair(i + 2 * k, j)
                    if (valid(x1) && valid(x2) && valid(x3) && valid(x4)) {
                        cal(x1, k)
                    }
                }
            }
        }

        val ans = ArrayList<Int>()
        while (ans.size != 3 && ts.isNotEmpty()) {
            ans.add(ts.pollLast())
        }
        return ans.toIntArray()
    }
}
```

## Q4 [1879. 两个数组最小的异或值之和](https://leetcode-cn.com/problems/minimum-xor-sum-of-two-arrays/)

这道题看到异或值直接想偏了，用字典树处理想着如何贪心判断，最后发现不对...

数组长度$n <= 14$，则可以向$2^{14}$的复杂度考虑。使用状态压缩 + 动态规划求出所有可能的最优解。类似于题目[1723. 完成所有工作的最短时间](https://leetcode-cn.com/problems/find-minimum-time-to-finish-all-jobs/)，将第一个数组看做工人，第二个数组看做工作，而其工作时间使用的是异或操作。

```kotlin
// 二进制 状态压缩
class Solution5756 {
    fun minimumXORSum(nums1: IntArray, nums2: IntArray): Int {
        val n = nums1.size
        val dp = Array<IntArray>(n + 1) { IntArray(1 shl n) { Int.MAX_VALUE } }
        dp[0][0] = 0
        for (i in 1..n) {
            for (j in 1..(1 shl n)) {
                for (k in 0 until n) {
                    if (j and (1 shl k) != 0) {
                        // j xor (1 shl k) 回退到nums2未选择k的状态
                        dp[i][j] = minOf(dp[i][j], dp[i - 1][j xor (1 shl k)] + (nums2[k] xor nums1[i - 1]))
                    }
                }
            }
        }
        return dp[n][(1 shl n) - 1]
    }
}
```

还看到大神们有其他的两种解法，学习一下。

### 二分图KM完美匹配

[OIWiki 二分图最大权匹配](https://oi-wiki.org/graph/graph-matching/bigraph-weight-match/)

[GeeksForGeeks Maximum Bipartite Matching](https://www.geeksforgeeks.org/maximum-bipartite-matching/)

首先学习几个定义：

1. 二分图：图中所有边的顶点可以分为两组，两组内无组内的边
2. 完美匹配：每一个顶点只有一条边并相连到另一组顶点中

这个算法可以将矩阵任务一对一的完美分配，如$N$个人完成$N$个任务，但每个人完成人的的耗时或效果不同等，可以求任意要求的最大最小值。

利用该算法，将图中边的权重设置为异或值的取负数，即可算得最小值。

```Kotlin
class Solution5756 {
    // 二分图 最大权匹配
    fun minimumXORSum(nums1: IntArray, nums2: IntArray): Int {
        val n = nums1.size
        val graph = Graph(2 * n)
        for (i in 0 until n) {
            for (j in 0 until n) {
                // Init Graph with weight
                graph.addEdge(i, n + j, -(nums1[i] xor nums2[j]))
            }
        }
        return -graph.km()
    }
}

class Graph(val n: Int) {

    // 图中边（可以有方向）
    var adj: Array<LinkedList<Int>> = Array(n) { LinkedList<Int>() }

    // 图中边的权重（可以有方向）
    val weight = HashMap<Int, HashMap<Int, Int>>()

    init {
        for (i in 0 until n) {
            weight[i] = hashMapOf()
        }
    }

    fun addEdgeOri(i: Int, j: Int, w: Int = 0) {
        adj[i].add(j)
        weight[i]!![j] = w
    }

    fun addEdge(i: Int, j: Int, w: Int = 0) {
        // Add w to v's list.
        adj[i].add(j)
        // Add v to w's list
        adj[j].add(i)
        weight[i]!![j] = w
        weight[j]!![i] = w
    }
}

/**
 * 参考资料
 * http://elmagnifico.tech/2018/01/24/BipartiteGraph-Max-Weight/
 * https://www.cnblogs.com/fzl194/p/8834847.html
 *
 * 二分图带权最大匹配
 * */
fun Graph.km(): Int {
    // n为总点数，m为两个分组的点的数量
    val m = n / 2

    val match = IntArray(m) { -1 }
    val lval = IntArray(m)
    val rval = IntArray(m)

    for (i in 0 until m) {
        // 使用右侧第一个点初始化左侧集合值）
        lval[i] = weight[i]!![m]!!
        for (j in m + 1 until n) {
            // 最大化可行顶标
            lval[i] = maxOf(lval[i], weight[i]!![j]!!)
        }
    }

    // 左右点集合访问状态
    val ls = BooleanArray(m)
    val rs = BooleanArray(m)

    fun dfs(u: Int): Boolean {
        ls[u] = true
        for (v in 0 until m) {
            if (!rs[v] && lval[u] + rval[v] == weight[u]!![v + m]) {
                rs[v] = true
                if (match[v] == -1 || dfs(match[v])) {
                    match[v] = u
                    return true
                }
            }
        }
        return false
    }

    // 遍历左顶点，寻找最大匹配
    for (u in 0 until m) {
        while (true) {
            // 清空之前的状态
            ls.fill(false)
            rs.fill(false)

            if (dfs(u)) break
            var d = Int.MAX_VALUE
            for (i in 0 until m)
                if (ls[i])
                    for (j in 0 until m)
                        if (!rs[j])
                            d = minOf(d, lval[i] + rval[j] - weight[i]!![m + j]!!)

            // 更新顶点权值，直到完美匹配
            for (i in 0 until m) {
                if (ls[i])
                    lval[i] -= d
                if (rs[i])
                    rval[i] += d
            }
        }
    }

    var res = 0
    for (i in 0 until m) {
        res += weight[match[i]]!![i + m]!!
    }
    return res
}
```

### 玄学退火算法(Simulated Annealing)

还有一种利用随机算法模拟最优解的玄学算法。针对总解数范围不大的题目可以尝试用该方案。经验大概可以支持到长度为$20$以下的数组随机排序。

[1815. 得到新鲜甜甜圈的最多组数](https://leetcode-cn.com/problems/maximum-number-of-groups-getting-fresh-donuts/) 该题也可以使用退火算法

```Kotlin
import kotlin.math.exp

class Solution5756 {
    // 模拟退火算法 玄学
    // Simulated annealing
    fun minimumXORSum(nums1: IntArray, nums2: IntArray): Int {
        val eps = 1e-5
        val delta = 0.98
        var ans = Int.MAX_VALUE
        val n = nums1.size

        fun getSum(): Int {
            var cur = 0
            for (i in nums1.indices) {
                cur += nums1[i] xor nums2[i]
            }
            ans = minOf(ans, cur)
            return cur
        }

        fun sa() {
            var t = 1e6
            while (t > eps) {
                val x: Int = (0 until n).random()
                val y: Int = (0 until n).random()
                val last: Int = getSum()
                nums2.swap(x, y)
                val now: Int = getSum()
                val diff = now - last
                // 取最小值
                if (diff > 0 && exp(-1.0 * diff / t) * n <= (0 until n).random()) {
                    // 还原操作
                    nums2.swap(x, y)
                }
                t *= delta
            }
        }
        repeat(20) {
            sa()
        }
        return ans
    }
}
```

