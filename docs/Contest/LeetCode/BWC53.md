# 第 53 场双周赛题解

## Q1 [1876. 长度为三且各字符不同的子字符串](https://leetcode-cn.com/problems/substrings-of-size-three-with-distinct-characters/)

直接硬暴力遍历。

时间复杂度：$O(n)$

```kotlin
class Solution1876 {
    fun countGoodSubstrings(s: String): Int {
        var ans = 0
        for (i in 0 until s.length - 2) {
            if (s[i] != s[i + 1] && s[i + 1] != s[i + 2] && s[i] != s[i + 2])
                ans++
        }
        return ans
    }
}
```

## Q2 [1877. 数组中最大数对和的最小值](https://leetcode-cn.com/problems/minimize-maximum-pair-sum-in-array/)

可以贪心的做，每次匹对取一个最大值和一个最小值。

时间复杂度：$O(n)$

```kotlin
class Solution1877 {
    fun minPairSum(nums: IntArray): Int {
        nums.sort()
        var ans = 0
        for (i in nums.indices) {
            ans = maxOf(ans, nums[i] + nums[nums.lastIndex - i])
        }
        return ans
    }
}
```

## Q3 [1878. 矩阵中最大的三个菱形和](https://leetcode-cn.com/problems/get-biggest-three-rhombus-sums-in-a-grid/)

本题还算简单，就是写起来很麻烦...理解时还以为只算四个角的和，怒吃一个WA才发现不对了...

直接枚举所有情况，然后把和入到一个$TreeSet$或其他排序方案即可。

时间复杂度：$O(n * m * maxOf(n, m))$

```kotlin
class Solution1878 {
    fun getBiggestThree(grid: Array<IntArray>): IntArray {
        val m = grid.size
        val n = grid[0].size
        fun valid(z: Pair<Int, Int>): Boolean {
            return z.first in 0 until m && z.second in 0 until n
        }

        val ts = TreeSet<Int>()

        fun cal(x1: Pair<Int, Int>, k: Int) {
            val set = HashSet<Pair<Int, Int>>()
            set.add(x1)
            for (i in 0..k) {
                set.add(Pair(x1.first + i, x1.second + i))
                set.add(Pair(x1.first + i, x1.second - i))
                set.add(Pair(x1.first + i + k, x1.second - k + i))
                set.add(Pair(x1.first + i + k, x1.second + k - i))
            }
            var t = 0
            set.forEach {
                t += grid[it.first][it.second]
            }
            ts.add(t)
        }

        for (i in 0 until m) {
            for (j in 0 until n) {
                for (k in 0 until maxOf(m, n)) {
                    val x1 = Pair(i, j)
                    val x2 = Pair(i + k, j + k)
                    val x3 = Pair(i + k, j - k)
                    val x4 = Pair(i + 2 * k, j)
                    if (valid(x1) && valid(x2) && valid(x3) && valid(x4)) {
                        cal(x1, k)
                    }
                }
            }
        }

        val ans = ArrayList<Int>()
        while (ans.size != 3 && ts.isNotEmpty()) {
            ans.add(ts.pollLast())
        }
        return ans.toIntArray()
    }
}
```

## Q4 [1879. 两个数组最小的异或值之和](https://leetcode-cn.com/problems/minimum-xor-sum-of-two-arrays/)

这道题看到异或值直接想偏了，用字典树处理想着如何贪心判断，最后发现不对...

数组长度$n <= 14$，则可以向$2^{14}$的复杂度考虑。使用状态压缩 + 动态规划求出所有可能的最优解。类似于题目[1723. 完成所有工作的最短时间](https://leetcode-cn.com/problems/find-minimum-time-to-finish-all-jobs/)，将第一个数组看做工人，第二个数组看做工作，而其工作时间使用的是异或操作。

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