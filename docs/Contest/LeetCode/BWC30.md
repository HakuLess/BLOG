# 第 30 场双周赛题解

## Q1 [1507. 转变日期格式](https://leetcode-cn.com/problems/reformat-date/)

需要一些麻烦的字符串操作，主要是对于$0$的补位。这里使用$Kotlin$的$padStart$方法。

```kotlin
class Solution1507 {
    fun reformatDate(date: String): String {
        val m = arrayOf("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec")
        return "${date.takeLast(4)}-${
            (m.indexOf(date.split(" ")[1]) + 1).toString().padStart(2, '0')
        }-${date.takeWhile { it in '0'..'9' }.padStart(2, '0')}"
    }
}
```

## Q2 [1508. 子数组和排序后的区间和](https://leetcode-cn.com/problems/range-sum-of-sorted-subarray-sums/)

直接模拟。由于数组长度是$10^3$的范围，因此$O(n^2)$的算出所有子数组的和是可行的。之后将它们排序再计算区间和即可。

```kotlin
class Solution1508 {
    fun rangeSum(nums: IntArray, n: Int, left: Int, right: Int): Int {
        val mod = 1000000007L
        val sum = arrayListOf<Long>()
        for (i in nums.indices) {
            sum.add(nums[i].toLong())
            var cur = nums[i]
            for (j in i + 1..nums.lastIndex) {
                cur += nums[j]
                sum.add(cur.toLong())
            }
        }
        sum.sort()
        var ans = 0L
        for (i in left - 1 until right) {
            ans = (ans + sum[i]) % mod
        }
        return ans.toInt()
    }
}
```

## Q3 [1509. 三次操作后最大值与最小值的最小差](https://leetcode-cn.com/problems/minimum-difference-between-largest-and-smallest-value-in-three-moves/)

先将数组排序，改变值可以转化为扔掉当前的最大值or最小值。

```kotlin
class Solution1509 {
    fun minDifference(nums: IntArray): Int {
        if (nums.size <= 4) return 0
        nums.sort()
        val n = nums.size
        var ans = Int.MAX_VALUE
        for (i in 0 until 4) {
            ans = minOf(ans, nums[n - 4 + i] - nums[i])
        }
        return ans
    }
}
```

## Q4 [1510. 石子游戏 IV](https://leetcode-cn.com/problems/stone-game-iv/)

$DP$，Alice先手，设$DP[n]$为当前剩余$n$个石子时，Alice是否能赢。若$dp[i]$为必败，则$dp[i + k^2]$为必胜。由题意可知，$dp[0]$为必败态，则可以逐渐向后遍历，之前只要有一个$k$可以满足$dp[i - k^2]$是必败态，则可以认为$dp[i]$为必胜。

```kotlin
class Solution1510 {
    fun winnerSquareGame(n: Int): Boolean {
        val sq = arrayListOf<Int>()
        for (i in 1 until 350) {
            sq.add(i * i)
        }
        val dp = BooleanArray(n + 1) { false }
        for (i in 1..n) {
            sq.forEach {
                if (it <= i) {
                    if (!dp[i - it]) {
                        dp[i] = true
                        return@forEach
                    }
                } else {
                    return@forEach
                }
            }
        }
        return dp[n]
    }
}
```

