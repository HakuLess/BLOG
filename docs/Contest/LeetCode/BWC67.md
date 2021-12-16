# 第 67 场双周赛题解

## Q1 [2099. 找到和最大的长度为 K 的子序列](https://leetcode-cn.com/problems/find-subsequence-of-length-k-with-the-largest-sum/)

最开始看成子数组了...写了一半才发现是子序列...直接生排序即可。

```kotlin
class SolutionA {
    fun maxSubsequence(nums: IntArray, k: Int): IntArray {
        val a = ArrayList<Pair<Int, Int>>()
        for (i in nums.indices) {
            a.add(Pair(i, nums[i]))
        }
        a.sortByDescending { it.second }
        val ans = ArrayList<Pair<Int, Int>>()
        for (i in 0 until k) {
            ans.add(a[i])
        }
        return ans.sortedBy { it.first }.map { it.second }.toIntArray()
    }
}
```

## Q2 [2100. 适合打劫银行的日子](https://leetcode-cn.com/problems/find-good-days-to-rob-the-bank/)

左右顺序预处理两个非递增数组，然后联合找其中相同Index都大于time的即可。

```kotlin
class SolutionB {
    fun goodDaysToRobBank(security: IntArray, time: Int): List<Int> {
        val left = IntArray(security.size)
        val right = IntArray(security.size)
        var cur = 0
        for (i in security.indices) {
            if (i == 0) continue
            if (security[i] > security[i - 1]) {
                cur = 0
            } else {
                cur++
            }
            left[i] = cur
        }
        cur = 0
        for (i in security.indices.reversed()) {
            if (i == security.lastIndex) continue
            if (security[i] > security[i + 1]) {
                cur = 0
            } else {
                cur++
            }
            right[i] = cur
        }
        val ans = ArrayList<Int>()
        for (i in security.indices) {
            if (left[i] >= time && right[i] >= time) {
                ans.add(i)
            }
        }
        return ans
    }
}
```

## Q3 [2101. 引爆最多的炸弹](https://leetcode-cn.com/problems/detonate-the-maximum-bombs/)

构造有向图，然后每一个炸弹引爆的数量BFS遍历即可。

```kotlin
class SolutionC {
    fun maximumDetonation(bombs: Array<IntArray>): Int {
        val g = Graph(bombs.size)
        for (i in bombs.indices) {
            for (j in i + 1 until bombs.size) {
                val a = bombs[i]
                val b = bombs[j]
                if ((a[0] - b[0]).toLong() * (a[0] - b[0]) + (a[1] - b[1]).toLong() * (a[1] - b[1]) <= a[2].toLong() * a[2]) {
                    g.addEdgeOri(i, j)
                }
                if ((a[0] - b[0]).toLong() * (a[0] - b[0]) + (a[1] - b[1]).toLong() * (a[1] - b[1]) <= b[2].toLong() * b[2]) {
                    g.addEdgeOri(j, i)
                }
            }
        }

        var ans = 0
        for (start in bombs.indices) {
            var cur = 0
            val seen = BooleanArray(bombs.size)
            val q: Queue<Int> = LinkedList<Int>()
            q.offer(start)
            while (q.isNotEmpty()) {
                val size = q.size
                for (i in 0 until size) {
                    val item = q.poll()
                    if (seen[item]) continue
                    seen[item] = true
                    cur++
                    g.adj[item].forEach {
                        q.offer(it)
                    }
                }
            }
            ans = maxOf(ans, cur)
        }
        return ans
    }
}
```

## Q4 [2102. 序列顺序查询](https://leetcode-cn.com/problems/sequentially-ordinal-rank-tracker/)

垃圾题目。

```kotlin
class SORTracker() {

    // 二分
    class Item(var name: String, var value: Int) : Comparable<Item> {
        override fun compareTo(other: Item): Int {
            if (value > other.value) return -1
            if (value < other.value) return 1
            if (name > other.name) return 1
            if (name < other.name) return -1
            return 0
        }
    }

    var t = -1

    private val multiSet = MultiSet<Item>()

    fun add(name: String, score: Int) {
        multiSet.add(Item(name, score))
    }

    fun get(): String {
        t++
        return multiSet.get(t).name
    }
}
```
