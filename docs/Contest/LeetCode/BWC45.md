# 第 45 场双周赛题解

## Q1 [5657. 唯一元素的和](https://leetcode-cn.com/problems/sum-of-unique-elements/)

硬暴力即可，也可以用个Map来优化下。

```kotlin
class Solution5647 {
    fun sumOfUnique(nums: IntArray): Int {
        return nums.filter { cur ->
            nums.count { it == cur } == 1
        }.sum()
    }
}
```

## Q2 [5658. 任意子数组和的绝对值的最大值](https://leetcode-cn.com/problems/maximum-absolute-sum-of-any-subarray/)

其实就是求最大值&&最小值，然后再abs返回最大结果即可。

```kotlin
class Solution5658 {
    fun maxAbsoluteSum(nums: IntArray): Int {
        var max = 0
        var preMax = 0
        var min = 0
        var preMin = 0
        for (num in nums) {
            preMax = maxOf(preMax + num, 0)
            max = maxOf(max, preMax)
            preMin = minOf(preMin + num, 0)
            min = minOf(min, preMin)
        }
        return maxOf(max, -min)
    }
}
```

## Q3 [5659. 删除字符串两端相同字符后的最短长度](https://leetcode-cn.com/problems/minimum-length-of-string-after-deleting-similar-ends/)

理解题意后就会发现，每次删都是尽全力删，不会有保留可删的字符不删除的情况，因此直接双指针贪心删除即可。

需要注意的是，对于可以删除完成的字符串，j-i的值可能为负数，需要maxOf一下。

```kotlin
class Solution5659 {
    fun minimumLength(s: String): Int {
        var i = 0
        var j = s.lastIndex
        var ans = s.length
        while (i < j) {
            if (s[i] != s[j]) break
            val c = s[i]
            while (i < s.length && s[i] == c) {
                i++
            }
            while (j >= 0 && s[j] == c) {
                j--
            }
        }
        return maxOf(j - i + 1, 0)
    }
}
```

## Q4 [5660. 最多可以参加的会议数目 II](https://leetcode-cn.com/problems/maximum-number-of-events-that-can-be-attended-ii/)

比赛的时候方向跑偏了，按照value进行降序排序，然后使用贪心+dfs查找，时间复杂度过高。

通过提示 k * events.length >= 10^6，应该去考虑状态的总次数是这个。

首先，以仅参加一场会议考虑，那么直接应该选择value最大值。当参加第二场会议时，需要使用之前参加一场时的值，且第二场会议与上一场无冲突的和的最大值。

为了记录冲突关系，我们使用TreeMap用来记录上次参加会议的结果。其中Key值为以Key作为End时间点的最大值。这样在下一次查找可参加会议时，直接使用floorKey方法，即可查找出以该会议的End为时间结束点时，最大Value的值。

```kotlin
class Solution5660 {
    fun maxValue(events: Array<IntArray>, k: Int): Int {
        events.sortBy { it[1] }
        var cur = TreeMap<Int, Int>()
        cur[0] = 0
        for (L in 1..k) {
            val next = TreeMap<Int, Int>()
            next[0] = 0
            for ((start, end, v) in events) {
                val key = cur.floorKey(start - 1)
                next[end] = maxOf(cur[key]!! + v, next[next.floorKey(end)]!!)
            }
            cur = next
        }
        return cur.values.max()!!
    }
}
```

