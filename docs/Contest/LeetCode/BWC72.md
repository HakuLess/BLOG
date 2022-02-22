# 第 72 场双周赛题解

## Q1 [2176. 统计数组中相等且可以被整除的数对](https://leetcode-cn.com/problems/count-equal-and-divisible-pairs-in-an-array/)

模拟，刚开始还以为是$nums[i] * nums[j]$可以被$k$整除...

```kotlin
class SolutionA {
    fun countPairs(nums: IntArray, k: Int): Int {
        var ans = 0
        for (i in nums.indices) {
            for (j in i + 1 until nums.size) {
                if (nums[i] == nums[j] && ((i * j) % k == 0)) {
                    ans++
                }
            }
        }
        return ans
    }
}
```

## Q2 [2177. 找到和为给定整数的三个连续整数](https://leetcode-cn.com/problems/find-three-consecutive-integers-that-sum-to-a-given-number/)

这...

```kotlin
class SolutionB {
    fun sumOfThree(num: Long): LongArray {
        if (num % 3 == 0L) {
            return longArrayOf(num / 3 - 1, num / 3, num / 3 + 1)
        }
        return longArrayOf()
    }
}
```

## Q3 [2178. 拆分成最多数目的偶整数之和](https://leetcode-cn.com/problems/maximum-split-of-positive-even-integers/)

贪心着拆，从小到大塞偶数，不够了就剩下的塞到最后一个元素里。

```kotlin
class SolutionC {
    fun maximumEvenSplit(finalSum: Long): List<Long> {
        if (finalSum % 2L != 0L) return emptyList()
        var cur = finalSum
        var step = 2L
        val ans = ArrayList<Long>()
        while (cur >= step) {
            ans.add(step)
            cur -= step
            step += 2L
        }
        val lst = ans.removeAt(ans.lastIndex)
        ans.add(lst + cur)
        return ans
    }
}
```

## Q4 [2179. 统计数组中好三元组数目](https://leetcode-cn.com/problems/count-good-triplets-in-an-array/)

比赛中用的二分插入做的，感觉使用线段树更简洁。

```kotlin
class SolutionD {
    fun goodTriplets(nums1: IntArray, nums2: IntArray): Long {
        val keys = HashMap<Int, Int>()
        var tmp = 0
        nums2.forEach {
            keys[it] = tmp
            tmp++
        }
        val n = nums1.size
        val root = SegmentTree<Int>(start = 0, end = n - 1, value = 0) { a, b -> a + b }
        var ans = 0L
        for (i in nums1.indices) {
            val cur = keys[nums1[i]]!!
            // 一共 1~n-1，左侧小于当前值left，大于当前值right
            // 一共大于当前值n-cur-1个
            val left = root.query(root, 0, cur)
            val right = root.query(root, cur, n - 1)
            root.update(root, cur, 1)
            ans += 1L * left * (n - 1 - cur - right)
        }
        return ans
    }
}
```