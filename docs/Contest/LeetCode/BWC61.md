# 第 61 场双周赛题解

## Q1 [2006. 差的绝对值为 K 的数对数目](https://leetcode-cn.com/problems/count-number-of-pairs-with-absolute-difference-k/)

签到。

```kotlin
class Solution5859 {
    fun countKDifference(nums: IntArray, k: Int): Int {
        var ans = 0
        for (i in 0 until nums.size - 1) {
            for (j in i + 1 until nums.size) {
                if (nums[i] - nums[j] == k || nums[i] - nums[j] == -k)
                    ans++
            }
        }
        return ans
    }
}
```

## Q2 [2007. 从双倍数组中还原原数组](https://leetcode-cn.com/problems/find-original-array-from-doubled-array/)

由于数组都是正数，因此只需要每次拿出最小值，同时再拿出这个最小值的二倍，直到最后拿光or拿不动。

```kotlin
class Solution5860 {
    fun findOriginalArray(changed: IntArray): IntArray {
        if (changed.size % 2 != 0) return intArrayOf()
        val n = changed.size / 2
        val multiSet = MultiSet<Int>()
        changed.forEach {
            multiSet.add(it)
        }
        val ans = arrayListOf<Int>()
        for (i in 0 until n) {
            val l = multiSet.popLeft()
            ans.add(l)
            if (!multiSet.remove(l * 2)) return intArrayOf()
        }
        return ans.toIntArray()
    }
}
```

## Q3 [2008. 出租车的最大盈利](https://leetcode-cn.com/problems/maximum-earnings-from-taxi/)

$n$的范围较小，直接按终点排序DP即可。

```kotlin
class Solution5861 {
    fun maxTaxiEarnings(n: Int, rides: Array<IntArray>): Long {
        val sorted = rides.sortedWith(compareBy { it[1] })
        val dp = LongArray(n + 1)
        var index = 0
        for (i in 1..n) {
            dp[i] = dp[i - 1]
            while (index in sorted.indices && sorted[index][1] == i) {
                dp[i] = maxOf(dp[i], dp[sorted[index][0]] + sorted[index][2] + sorted[index][1] - sorted[index][0])
                index++
            }
        }
        return dp.last()
    }
}
```

## Q4 [2009. 使数组连续的最少操作数](https://leetcode-cn.com/problems/minimum-number-of-operations-to-make-array-continuous/)

滑动窗口，排序后查询$nums[i]..nums[i] + n - 1$总共有多少个值已被覆盖即可。覆盖可以使用$SegmentTree$处理。需要注意的是$update$只把值变成1，而非+1。防止重复的值影响结果判断。

也可以去重后用普通的双指针计算值。

```kotlin
class Solution5862 {
    fun minOperations(nums: IntArray): Int {
        val n = nums.size
        val min = nums.minOrNull()!!
//        val min = nums.min()!!
        val max = nums.maxOrNull()!!
//        val max = nums.max()!!
        val root = SegmentTree<Int>(start = min, end = max, value = 0) { a, b ->
            a + b
        }
        nums.sort()
        nums.forEach {
            root.update(root, it, 1)
        }
        var res = n
        nums.forEach {
            val ans = root.query(root, it, it + n - 1)
            res = minOf(res, n - ans)
        }
        return res
    }
}
```

