# 第 53 场双周赛题解

## Q1 [1859. 将句子排序](https://leetcode-cn.com/problems/sorting-the-sentence/)

简单的字符串操作，可以看下$Kotlin$的舒服写法，非常简洁。

```kotlin
class Solution1859 {
    fun sortSentence(s: String): String {
        return s.split(" ").sortedBy { it.last() }.map {
            it.take(it.length - 1)
        }.joinToString(" ")
    }
}
```

## Q2 [1860. 增长的内存泄露](https://leetcode-cn.com/problems/incremental-memory-leak/)

正常模拟即可。

```kotlin
class Solution1860 {
    fun memLeak(memory1: Int, memory2: Int): IntArray {
        var m1 = memory1
        var m2 = memory2
        var cur = 1
        while (m1 >= cur || m2 >= cur) {
            if (m1 >= m2) {
                m1 -= cur
            } else {
                m2 -= cur
            }
            cur++
        }
        return intArrayOf(cur, m1, m2)
    }
}
```

## Q3 [1861. 旋转盒子](https://leetcode-cn.com/problems/rotating-the-box/)

假装重力方向不向下而是向右，之后从右至左将石头填满，遇到障碍物则将可用的空位置清空。

最后将矩阵旋转一次即可。

```kotlin
class Solution1861 {
    fun rotateTheBox(box: Array<CharArray>): Array<CharArray> {
        val n = box.size
        val m = box[0].size

        for (i in 0 until n) {
            val tmp = arrayListOf<Int>()
            for (j in m - 1 downTo 0) {
                if (box[i][j] == '.') {
                    tmp.add(j)
                } else if (box[i][j] == '*') {
                    tmp.clear()
                } else if (box[i][j] == '#') {
                    if (tmp.isNotEmpty()) {
                        box[i][tmp.first()] = '#'
                        box[i][j] = '.'
                        tmp.add(j)
                        tmp.removeAt(0)
                    }
                }
            }
        }

        val ans = Array<CharArray>(m) { CharArray(n) }
        for (i in 0 until n) {
            for (j in 0 until m) {
                ans[j][i] = box[i][j]
            }
        }

        return ans.map { it.reversed().toCharArray() }.toTypedArray()
    }
}
```

## Q4 [1862. 向下取整数对和](https://leetcode-cn.com/problems/sum-of-floored-pairs/)



```kotlin
// 二进制 状态压缩
class Solution5756 {
    fun minimumXORSum(nums1: IntArray, nums2: IntArray): Int {
        val n = nums1.size
        val dp = Array<IntArray>(n + 1) { IntArray(1 shl n) { Int.MAX_VALUE } }
        dp[0][0] = 0
        for (i in 1..n) {
            for (j in 1..(1 shl n)) {
                for (k in 0 until n) {
                    if (j and (1 shl k) != 0) {
                        // j xor (1 shl k) 回退到nums2未选择k的状态
                        dp[i][j] = minOf(dp[i][j], dp[i - 1][j xor (1 shl k)] + (nums2[k] xor nums1[i - 1]))
                    }
                }
            }
        }
        return dp[n][(1 shl n) - 1]
    }
}
```

