# 第 46 场双周赛题解

## Q1 [5668. 最长的美好子字符串](https://leetcode-cn.com/problems/longest-nice-substring/)

直接暴力，把所有可能的子字符串都截取出来，然后取符合要求的最大值。

时间复杂度：$O(n^2)$

```kotlin
class Solution5668 {
    fun longestNiceSubstring(s: String): String {
        var ans = ""
        fun check(str: String): Boolean {
            return str.all {
                it.toUpperCase() in str && it.toLowerCase() in str
            }
        }
        for (i in s.indices) {
            for (j in i until s.length) {
                val item = s.substring(i, j + 1)
                if (check(item) && item.length > ans.length)
                    ans = item
            }
        }
        return ans
    }
}
```

## Q2 [5669. 通过连接另一个数组的子数组得到一个数组](https://leetcode-cn.com/problems/form-array-by-concatenating-subarrays-of-another-array/)

可以贪心来做，每次从左找到第一个符合条件的index，然后这部分数字移除。再继续寻找下一个item，直至所有item都寻找完，此时返回**true**。或某一次找不到，indexOf函数返回-1，这时返回**false**。

```kotlin
class Solution5669 {
    fun canChoose(groups: Array<IntArray>, nums: IntArray): Boolean {
        var cur = nums.joinToString(",")
        groups.forEach {
            val next = cur.indexOf(it.joinToString(","))
            if (next == -1) return false
            cur = cur.substring(next + it.joinToString(",").length)
        }
        return true
    }
}
```

## Q3 [5671. 地图中的最高点](https://leetcode-cn.com/problems/map-of-highest-peak/)

没有任何难度，标准的BFS题目。只是初始的点并不是一个点，而是所有的水域。在遍历的过程中，需要注意对于已经赋值过得位置提前**continue**，不再继续遍历下去。

```kotlin
class Solution5671 {
    fun highestPeak(isWater: Array<IntArray>): Array<IntArray> {
        val n = isWater.size
        val m = isWater[0].size
        val ans = Array<IntArray>(n) { IntArray(m) { -1 } }
        val dirs = arrayListOf(Pair(0, 1), Pair(-1, 0), Pair(0, -1), Pair(1, 0))
        val queue: Queue<Pair<Int, Int>> = LinkedList<Pair<Int, Int>>()
        for (i in 0 until n) {
            for (j in 0 until m) {
                if (isWater[i][j] == 1) {
                    queue.add(Pair(i, j))
                }
            }
        }
        var step = -1
        while (queue.isNotEmpty()) {
            val size = queue.size
            step++
            for (i in 0 until size) {
                val item = queue.poll()
                if (ans[item.first][item.second] != -1) continue
                ans[item.first][item.second] = step
                for (dir in dirs) {
                    val next = Pair(item.first + dir.first, item.second + dir.second)
                    if (next.first in 0 until n && next.second in 0 until m) {
                        queue.offer(next)
                    }
                }
            }
        }
        return ans
    }
}
```

## Q4 [Solution5670. 互质树](https://leetcode-cn.com/problems/tree-of-coprimes/)

非常恶心的题目，通过这道题就可以看出LeetCode的出题风格。题意本身很清晰，可以用DFS向下传递所有的祖先节点，然后每个儿子更新这个祖先列表 && 同时计算出离自己的互质祖先是几。这种方式需要遍历所有的祖先，树的高度越大，则复杂度越高，最终可以到达$O(n^2)$，而$n$的取值范围是$[1..10^5]$，因此使用这种方式会超时。

优化方案是依赖题目给出的提示，$1 <= nums[i] <= 50$，这样我们祖先列表就不用给出完整的，而是只更新$1..50$之间的值即可。题目本身更多的是通过给出的数据范围给出算法，而不仅依赖题目中的主体内容。以后要多吸取教训。

```kotlin
class Solution5670 {
    fun getCoprimes(nums: IntArray, edges: Array<IntArray>): IntArray {
        val n = edges.size + 1
        val map = HashMap<Int, ArrayList<Int>>()
        edges.forEach {
            map[it[0]] = map.getOrDefault(it[0], arrayListOf())
            map[it[0]]!!.add(it[1])
            map[it[1]] = map.getOrDefault(it[1], arrayListOf())
            map[it[1]]!!.add(it[0])
        }
        val seen = HashSet<Int>()
        val ans = IntArray(n) { -1 }
        fun dfs(cur: Int, step: Int, preList: Array<Pair<Int, Int>>) {
            if (cur in seen) return
            seen.add(cur)
            var max = -1
            for (i in 1..50) {
                if (gcd(i, nums[cur]) == 1) {
                    if (preList[i].second > max) {
                        ans[cur] = preList[i].first
                        max = preList[i].second
                    }
                }
            }
            map[cur]?.forEach {
                val next = preList.clone()
                next[nums[cur]] = Pair(cur, step)
                dfs(it, step + 1, next)
            }
        }
        dfs(0, 0, Array(51) { Pair(-1, -1) })
        return ans
    }
}

fun gcd(a: Int, b: Int): Int {
    return if (b == 0) a else gcd(b, a % b)
}
```

