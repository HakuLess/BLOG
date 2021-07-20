# 第 41 场双周赛题解

## Q1 [1684. 统计一致字符串的数目](https://leetcode-cn.com/problems/count-the-number-of-consistent-strings/)

模拟。

```kotlin
class Solution1684 {
    fun countConsistentStrings(allowed: String, words: Array<String>): Int {
        return words.count { it.all { it in allowed } }
    }
}
```

## Q2 [1685. 有序数组中差绝对值之和](https://leetcode-cn.com/problems/sum-of-absolute-differences-in-a-sorted-array/)

数学。每前进一步，右侧部分减少差值，左侧部分增加差值。

```kotlin
class Solution1685 {
    fun getSumAbsoluteDifferences(nums: IntArray): IntArray {
        val n = nums.size
        var cur = nums.sum()
        cur -= n * nums[0]
        val ans = arrayListOf<Int>()
        for (i in nums.indices) {
            if (i > 0) {
                cur += (2 * i - n) * (nums[i] - nums[i - 1])
            }
            ans.add(cur)
        }
        return ans.toIntArray()
    }
}
```

## Q3 [1686. 石子游戏 VI](https://leetcode-cn.com/problems/stone-game-vi/)

石头的总价值是A的价值+B的价值，逆序排序后依次拿当前最高价值的。注意最后计算时比较的不是算总价值的和。

```kotlin
class Solution1686 {
    fun stoneGameVI(aliceValues: IntArray, bobValues: IntArray): Int {
        val c = ArrayList<Pair<Int, Int>>()
        for (i in aliceValues.indices) {
            c.add(Pair(i, aliceValues[i] + bobValues[i]))
        }
        var a = 0
        var b = 0
        c.sortedByDescending { it.second }.forEachIndexed { index, i ->
            if (index % 2 == 0) {
                a += aliceValues[i.first]
            } else {
                b += bobValues[i.first]
            }
        }
        return if (a == b) 0 else if (a > b) 1 else -1
    }
}
```

## Q4 [1687. 从仓库到码头运输箱子](https://leetcode-cn.com/problems/delivering-boxes-from-storage-to-ports/)

```kotlin

```

