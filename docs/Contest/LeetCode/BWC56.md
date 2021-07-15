# 第 56 场双周赛题解

## Q1 [1925. 统计平方和三元组的数目](https://leetcode-cn.com/problems/count-square-sum-triples/)

直接暴力来吧，不用优化啥的了。

```kotlin
class Solution1925 {
    fun countTriples(n: Int): Int {
        var ans = 0
        for (a in 1..n) {
            for (b in 1..n) {
                for (c in 1..n) {
                    if (a * a + b * b == c * c) ans++
                }
            }
        }
        return ans
    }
}
```

## Q2 [1926. 迷宫中离入口最近的出口](https://leetcode-cn.com/problems/nearest-exit-from-entrance-in-maze/)

普通$BFS$，注意$seen$的更新，首先把入口位置塞进去... 入口竟然不算出口...

```kotlin
class Solution1926 {
    fun nearestExit(maze: Array<CharArray>, entrance: IntArray): Int {
        val ori = arrayOf(
                intArrayOf(-1, 0),
                intArrayOf(0, -1),
                intArrayOf(0, 1),
                intArrayOf(1, 0)
        )
        val queue: Queue<Pair<Int, Int>> = LinkedList<Pair<Int, Int>>()
        queue.add(Pair(entrance[0], entrance[1]))
        var step = -1
        val seen = HashSet<Pair<Int, Int>>()
        seen.add(Pair(entrance[0], entrance[1]))
        while (queue.isNotEmpty()) {
            val size = queue.size
            step++
            for (i in 0 until size) {
                val item = queue.poll()
                if ((item.first == 0 || item.first == maze.lastIndex)
                        && !(item.first == entrance[0] && item.second == entrance[1])) return step
                if ((item.second == 0 || item.second == maze[0].lastIndex)
                        && !(item.first == entrance[0] && item.second == entrance[1])) return step
                ori.forEach {
                    val next = Pair(item.first + it[0], item.second + it[1])
                    if (next !in seen
                            && next.first in maze.indices
                            && next.second in maze[0].indices
                            && maze[next.first][next.second] == '.') {
                        queue.offer(next)
                        seen.add(next)
                    }
                }
            }
        }
        return -1
    }
}
```

## Q3 [1927. 求和游戏](https://leetcode-cn.com/problems/sum-game/)

非常蛋疼的题... 就是脑筋急转弯...

从$Bob$的角度出发，想要赢条件非常苛刻

1. 两边问号的相同部分（$minof$）都用相同的值
2. 问号在一边的部分，全部配置成和为$9$
3. 则原始的差值必须是 $9$ 乘以 问号差值的一半。
4. 若问号不是偶数，则直接不用玩了，最后$Alice$操作。

```kotlin
class Solution1927 {
    fun sumGame(num: String): Boolean {
        val n = num.length
        var x = 0
        var a = 0
        var b = 0
        for (i in 0 until n / 2) if (num[i] == '?') a++ else x += num[i] - '0'
        for (i in n / 2 until n) if (num[i] == '?') b++ else x -= num[i] - '0'
        return if ((a + b) % 2 == 1) true else (x != (b - a) / 2 * 9)
    }
}
```

## Q4 [1928. 规定时间内到达终点的最小花费](https://leetcode-cn.com/problems/minimum-cost-to-reach-destination-in-time/)

还是熟悉的$BFS$，只是队列不用普通的队列，而是使用优先级队列。按照时间入队，之后到达相同城市的，判断当前到该城市的最小花费，如果不能更新该最小值，则没有继续遍历下去的必要。

```kotlin
class Solution1928 {

    // BFS以Time作为优先级队列的Key
    fun minCost(maxTime: Int, edges: Array<IntArray>, passingFees: IntArray): Int {
        edges.sortByDescending { it[2] }
        val n = passingFees.size
        val g = Graph(n)
        edges.forEach {
            g.addEdge(it[0], it[1], it[2])
        }
        var ans = Int.MAX_VALUE / 2
        // pos, time, fee
        val queue: PriorityQueue<Triple<Int, Int, Int>> = PriorityQueue(compareBy { it.second })
        val minFee = IntArray(n) { Int.MAX_VALUE }
        minFee[0] = passingFees[0]
        queue.add(Triple(0, 0, passingFees[0]))
        while (queue.isNotEmpty()) {
            // 不需要按层遍历，以时间维度排序
            val (pos, time, fee) = queue.poll()
            if (time > maxTime) continue
            if (minFee[pos] < fee) continue
            if (pos == n - 1) {
                ans = minOf(ans, fee)
                continue
            }
            g.adj[pos].forEach {
                if (minFee[it] > fee + passingFees[it]) {
                    queue.offer(Triple(it, time + g.weight[pos]!![it]!!, fee + passingFees[it]))
                    minFee[pos] = fee
                }
            }
        }
        return if (ans != Int.MAX_VALUE / 2) ans else -1
    }
}
```

