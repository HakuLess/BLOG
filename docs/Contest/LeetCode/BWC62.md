# 第 62 场双周赛题解

## Q1 [2022. 将一维数组转变成二维数组](https://leetcode-cn.com/problems/convert-1d-array-into-2d-array/)

签到。

```kotlin
class Solution5871 {
    fun construct2DArray(original: IntArray, m: Int, n: Int): Array<IntArray> {
        if (original.size != m * n) return emptyArray()
        val ans = Array<IntArray>(m) { IntArray(n) }
        for (i in original.indices) {
            ans[i / n][i % n] = original[i]
        }
        return ans
    }
}
```

## Q2 [2023. 连接后等于目标字符串的字符串对](https://leetcode-cn.com/problems/number-of-pairs-of-strings-with-concatenation-equal-to-target/)

继续签到。注意$(i,j)$与$(j,i)$是不同的组合，需要计算两次。

```kotlin
class Solution5872 {
    fun numOfPairs(nums: Array<String>, target: String): Int {
        var ans = 0
        for (i in nums.indices) {
            for (j in nums.indices) {
                if (i != j && nums[i] + nums[j] == target)
                    ans++
            }
        }
        return ans
    }
}
```

## Q3 [2024. 考试的最大困扰度](https://leetcode-cn.com/problems/maximize-the-confusion-of-an-exam/)

可改变值的最长连续子数组，'T'和'F'分别计算一次即可。

```kotlin
class Solution5873 {
    fun maxConsecutiveAnswers(answerKey: String, k: Int): Int {
        fun dfs(c: Char): Int {
            val l = ArrayList<Int>()
            var left = 0
            var ans = 0
            for (i in answerKey.indices) {
                if (answerKey[i] != c) {
                    l.add(i)
                    if (l.size > k) {
                        left = l.removeAt(0) + 1
                    }
                }
                ans = maxOf(ans, i - left)
            }
            return ans
        }
        return maxOf(dfs('T'), dfs('F')) + 1
    }
}
```

## Q4 [2025. 分割数组的最多方案数](https://leetcode-cn.com/problems/maximum-number-of-ways-to-partition-an-array/)

前缀和与后缀和。首先考虑无法改变元素的情况，前缀和等于总和的一半时，可以视为一次成功分割。

当可以改变当前元素时，则当前总和会增加$k - nums[i]$。判断这个时候左侧和右侧共有多少和等于当前的$sum$的一半即可。

```kotlin
class Solution5874 {
    fun waysToPartition(nums: IntArray, k: Int): Int {
        val leftMap = HashMap<Int, Int>()
        val sum = nums.sum()
        var pre = 0
        var ans = 0
        for (i in 0 until nums.lastIndex) {
            pre += nums[i]
            leftMap[pre] = leftMap.getOrDefault(pre, 0) + 1
            if (sum % 2 == 0 && pre == sum / 2) {
                ans++
            }
        }

        val rightMap = HashMap<Int, Int>()
        var suf = 0
        for (i in nums.indices.reversed()) {
            suf += nums[i]
            // 将nums[i]变为k
            val nSum = sum - nums[i] + k
            if (i != nums.lastIndex) {
                leftMap[pre] = leftMap.getOrDefault(pre, 0) - 1
                pre -= nums[i]
            }
            if (nSum % 2 == 0) {
                val right = rightMap.getOrDefault(nSum / 2, 0)
                val left = leftMap.getOrDefault(nSum / 2, 0)
                ans = maxOf(ans, right + left)
            }
            rightMap[suf] = rightMap.getOrDefault(suf, 0) + 1
        }
        return ans
    }
}
```

