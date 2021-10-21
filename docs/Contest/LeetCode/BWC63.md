# 第 63 场双周赛题解

## Q1 [2037. 使每位学生都有座位的最少移动次数](https://leetcode-cn.com/problems/minimum-number-of-moves-to-seat-everyone/)

签到。

```kotlin
class Solution5885 {
    fun minMovesToSeat(seats: IntArray, students: IntArray): Int {
        seats.sort()
        students.sort()
        var ans = 0
        for (i in seats.indices) {
            ans += abs(seats[i] - students[i])
        }
        return ans
    }
}
```

## Q2 [2038. 如果相邻两个颜色均相同则删除当前颜色](https://leetcode-cn.com/problems/remove-colored-pieces-if-both-neighbors-are-the-same-color/)

直接计算有多少可删的即可。

```kotlin
class Solution5886 {
    fun winnerOfGame(colors: String): Boolean {
        var a = 0
        var b = 0
        for (i in colors.indices) {
            if (colors[i] == 'A' &&
                colors.getOrElse(i + 1) { ' ' } == 'A' &&
                colors.getOrElse(i - 1) { ' ' } == 'A'
            ) a++
            if (colors[i] == 'B' &&
                colors.getOrElse(i + 1) { ' ' } == 'B' &&
                colors.getOrElse(i - 1) { ' ' } == 'B'
            ) b++
        }
        if (a > b) return true
        return false
    }
}
```

## Q3 [2039. 网络空闲的时刻](https://leetcode-cn.com/problems/the-time-when-the-network-becomes-idle/)

就是单源最短路径，恶心在边界条件最后一次发射时间刚好消息回来的时候，这个时候不用发射... 继续WA。

```kotlin
class Solution5888 {
    fun networkBecomesIdle(edges: Array<IntArray>, patience: IntArray): Int {
        val n = patience.size
        val g = Graph(n)
        edges.forEach {
            g.addEdge(it[0], it[1], 1)
        }
        val dis = g.dijkstra(0)
        var ans = 0L
        for (i in 1 until n) {
            if (dis[i] * 2 > patience[i]) {
                // 最后一次发射时间
                var cur = (dis[i] * 2 / patience[i]) * patience[i]
                if (dis[i] * 2 % patience[i] == 0L) {
                    cur -= patience[i].toLong()
                }
                ans = maxOf(ans, cur + dis[i] * 2 + 1)
            } else {
                ans = maxOf(ans, dis[i] * 2 + 1)
            }
        }
        return ans.toInt()
    }
}
```

## Q4 [2040. 两个有序数组的第 K 小乘积](https://leetcode-cn.com/problems/kth-smallest-product-of-two-sorted-arrays/)

直接用二分套二分... 这个方法是没想出来的.. 还打算分四个象限快筛，最后发现过滤不动...

```kotlin
class Solution5887 {
    fun kthSmallestProduct(nums1: IntArray, nums2: IntArray, k: Long): Long {

        val arr1 = if (nums1.size < nums2.size) nums1 else nums2
        val arr2 = if (nums1.size >= nums2.size) nums1 else nums2

        val reversed = arr2.reversed().toIntArray()

        // 计算比 <= mid的值有多少个，刚好为K个的mid即所求
        fun count(mid: Long): Long {
            var c = 0L
            arr1.forEach { n1 ->
                if (n1 >= 0) {
                    c += arr2.biLastIndexOf { n2 ->
                        n1.toLong() * n2.toLong() <= mid
                    } + 1
                } else {
                    c += reversed.biLastIndexOf { n2 ->
                        n1.toLong() * n2.toLong() <= mid
                    } + 1
                }
            }
            return c
        }

        val edges = arrayOf(
            arr1.first().toLong() * arr2.first(),
            arr1.last().toLong() * arr2.first(),
            arr1.first().toLong() * arr2.last(),
            arr1.last().toLong() * arr2.last(),
        )
        var left = edges.minOrNull()!! - 1
        var right = edges.maxOrNull()!! + 1

        while (left + 1 < right) {
            val mid = (left + right) / 2
            when {
                count(mid) >= k -> right = mid
                else -> left = mid
            }
        }
        return when {
            count(left) == k -> left
            count(right) == k -> right
            else -> right
        }
    }
}
```

