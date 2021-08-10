# 第 58 场双周赛题解

## Q1 [1957. 删除字符使字符串变好](https://leetcode-cn.com/problems/delete-characters-to-make-fancy-string/)

正常遍历，第三个重复的就要删掉。

```kotlin
class Solution5193 {
    fun makeFancyString(s: String): String {
        val ans = StringBuilder()
        s.forEach {
            if (ans.length < 2)
                ans.append(it)
            else if (ans[ans.length - 1] != it || ans[ans.length - 2] != it) {
                ans.append(it)
            }
        }
        return ans.toString()
    }
}
```

## Q2 [1958. 检查操作是否合法](https://leetcode-cn.com/problems/check-if-move-is-legal/)

麻烦的题目，正常按题意模拟即可。

```kotlin
class Solution5827 {
    fun checkMove(board: Array<CharArray>, rMove: Int, cMove: Int, color: Char): Boolean {
        val dir8 = arrayOf(
            intArrayOf(0, 1),
            intArrayOf(1, 1),
            intArrayOf(-1, 1),
            intArrayOf(0, -1),
            intArrayOf(1, -1),
            intArrayOf(-1, -1),
            intArrayOf(1, 0),
            intArrayOf(-1, 0)
        )

        fun dfs(it: Int): Boolean {
            val ori = dir8[it]
            var r = rMove
            var c = cMove
            var seen = false
            while (r + ori[0] in 0..7 && c + ori[1] in 0..7) {
                r += ori[0]
                c += ori[1]
//                println("$r $c")
                when (board[r][c]) {
                    '.' -> return false
                    color -> return seen
                    else -> seen = true
                }
            }
            return false
        }

        repeat(8) {
            if (dfs(it)) return true
        }
        return false
    }
}
```

## Q3 [1959. K 次调整数组大小浪费的最小总空间](https://leetcode-cn.com/problems/minimum-total-space-wasted-with-k-resizing-operations/)

相当可以的$DP$题目，这题是标准的$Hard$啊，给个$Medium$就离谱！

首先求出$i..j$范围内的浪费值，即范围内的最大值与$count$的乘积减去真实的$sum$。下面就可以用$DP$进行处理了。

设$DP[i][j]$为第$j$次调整后，前$i$​​位的浪费值：

$dp[i][j] = \min\limits_{0 <= l <=j}\{{dp[l - 1][j - 1]} + cost[l][i]\}$

```kotlin
class Solution5828 {
    fun minSpaceWastedKResizing(nums: IntArray, k: Int): Int {
        val n = nums.size
        // 获取[i..j]范围内 最大值*count 减去 sum 的二维数组
        val cost = Array<IntArray>(nums.size) { IntArray(nums.size) }
        for (i in nums.indices) {
            var cur = nums[i]
            var sum = nums[i]
            for (j in i + 1 until nums.size) {
                cur = maxOf(cur, nums[j])
                sum += nums[j]
                cost[i][j] = cur * (j - i + 1) - sum
            }
        }
        val dp = Array<IntArray>(n) { IntArray(k + 2) { Int.MAX_VALUE / 2 } }
        for (j in 1..k + 1) {
            for (i in 0 until n) {
                // 第l位开始转移的最小值
                for (l in 0..i) {
                    // 第j次转移，前i个值的浪费最小值
                    dp[i][j] = minOf(dp[i][j], (if (l == 0) 0 else dp[l - 1][j - 1]) + cost[l][i])
                }
            }
        }
        return dp[n - 1][k + 1]
    }
}
```

## Q4 [1960. 两个回文子字符串长度的最大乘积](https://leetcode-cn.com/problems/maximum-product-of-the-length-of-two-palindromic-substrings/)

首先，通过$Manacher$算法将中心扩展的最长回文半径求出来。

之后，将以$1..n-1$​为右边界和$0..n-2$为左边界的最长回文长度求出来，利用前缀数组即可。

以$i$为分割点，求出最大值$max(left[i]*right[i+1])$。第一个回文串右边界$i$，第二个回文串左边界从$i+1$，不会有交集。

```kotlin
class Solution5220 {
    // 回文字符串
    // 马拉车算法
    fun maxProduct(s: String): Long {
        val n = s.length
        val len = manacher(s)
        val left = LongArray(n) { 1 }
        var p = 0
        for (i in 1 until n) {
            // 以i为右边界的最长回文长度
            while (p + len[p] < i) p++
            left[i] = maxOf(left[i - 1], 1L + 2L * (i - p))
        }
        val right = LongArray(n) { 1 }
        p = n - 1
        for (i in n - 2 downTo 0) {
            // 以i为左边界的最长回文长度
            while (p - len[p] > i) p--
            right[i] = maxOf(right[i + 1], 1L + 2L * (p - i))
        }
        var ans = 1L
        for (i in 0 until n - 1) {
            ans = maxOf(ans, left[i] * right[i + 1])
        }
        return ans
    }
}
```

