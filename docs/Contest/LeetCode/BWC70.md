# 第 70 场双周赛题解

## Q1 [2144. 打折购买糖果的最小开销](https://leetcode-cn.com/problems/minimum-cost-of-buying-candies-with-discount/)

贪心着搞，逆序排序，拿两个可以跳过一个。

```kotlin
class SolutionA {
    fun minimumCost(cost: IntArray): Int {
        cost.sortDescending()
        var ans = 0
        for (i in cost.indices) {
            if (i % 3 == 0 || i % 3 == 1) {
                ans += cost[i]
            }
        }
        return ans
    }
}
```

## Q2 [2145. 统计隐藏数组数目](https://leetcode-cn.com/problems/count-the-hidden-sequences/)

计算内部的最大最小值的差，然后看与上限相比的余量。

```kotlin
class SolutionB {
    fun numberOfArrays(differences: IntArray, lower: Int, upper: Int): Int {
        var min = 0L
        var max = 0L
        var cur = 0L
        for (i in differences.indices) {
            cur += differences[i]
            min = minOf(min, cur)
            max = maxOf(max, cur)
        }
        return maxOf(0, 1 + (upper - lower) - (max - min)).toInt()
    }
}
```

## Q3 [2146. 价格范围内最高排名的 K 样物品](https://leetcode-cn.com/problems/k-highest-ranked-items-within-a-price-range/)

硬$BFS$，注意到最后要排序取前$k$个，还要删除一部分。

```kotlin
class SolutionC {
    fun highestRankedKItems(grid: Array<IntArray>, pricing: IntArray, start: IntArray, k: Int): List<List<Int>> {
        // x,y,step
        val ans = ArrayList<Triple<Int, Int, Int>>()
        val queue: Queue<Pair<Int, Int>> = LinkedList<Pair<Int, Int>>()
        queue.offer(Pair(start[0], start[1]))
        var step = 0
        val seen = HashSet<Pair<Int, Int>>()
        seen.add(Pair(start[0], start[1]))
        while (queue.isNotEmpty() && ans.size < k) {
            step++
            val size = queue.size
            for (i in 0 until size) {
                val item = queue.poll()
                if (item.first !in grid.indices || item.second !in grid[0].indices || grid[item.first][item.second] == 0)
                    continue
                if (grid[item.first][item.second] in pricing[0]..pricing[1]) {
                    ans.add(Triple(item.first, item.second, step))
                }
                dir4.forEach {
                    val next = Pair(item.first + it[0], item.second + it[1])
                    if (next !in seen) {
                        queue.offer(next)
                        seen.add(next)
                    }
                }
            }
        }
        ans.sortWith(compareBy({ it.third }, { grid[it.first][it.second] }, { it.first }, { it.second }))
        return ans.take(k).map {
            listOf(it.first, it.second)
        }
    }
}
```

## Q4 [2147. 分隔长廊的方案数](https://leetcode-cn.com/problems/number-of-ways-to-divide-a-long-corridor/)

计算每两个椅子中间的花的数量，可摆放位置是花数量+1，再连乘即可。

```kotlin
class SolutionD {
    fun numberOfWays(corridor: String): Int {
        val a = corridor.trimEnd('P')
        if (a.count { it == 'S' } % 2 != 0) return 0
        if (a.count { it == 'S' } == 0) return 0
        if (a.count { it == 'S' } == 2) return 1
        val mod = 1000000007L
        var ans = 1L
        var curS = 0
        var curP = 0
        for (i in a.indices) {
            if (a[i] == 'S') {
                curS++
            } else {
                if (curS == 2) {
                    curP++
                }
            }
            if (curS == 2 && (i + 1 !in a.indices || a[i + 1] == 'S')) {
                ans *= (curP + 1)
                ans %= mod
                curS = 0
                curP = 0
            }
        }
        return ans.toInt()
    }
}
```