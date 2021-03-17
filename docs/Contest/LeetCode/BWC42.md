# 第 42 场双周赛题解

## Q1 [1700. 无法吃午餐的学生数量](https://leetcode-cn.com/problems/number-of-students-unable-to-eat-lunch/)

有点意思的题目，可以无视学生的顺序，只要栈顶的三明治有学生能吃掉就可以吃，直到没有人能吃掉栈顶的三明治为止。

```kotlin
class Solution1700 {
    fun countStudents(students: IntArray, sandwiches: IntArray): Int {
        val cur = ArrayList(students.toList())
        sandwiches.forEach {
            if (it in cur) {
                cur.remove(it)
            } else {
                return cur.size
            }
        }
        return 0
    }
}
```

## Q2 [1701. 平均等待时间](https://leetcode-cn.com/problems/average-waiting-time/)

正常模拟即可。需要注意数值范围，刚开始用$Int$还$WA$了一次...

```kotlin
class Solution1701 {
    fun averageWaitingTime(customers: Array<IntArray>): Double {
        var cur = 0
        var ans = 0.0
        customers.forEach {
            cur = maxOf(cur, it[0])
            cur += it[1]
            ans += cur - it[0]
        }
        return ans / customers.size
    }
}
```

## Q3 [1702. 修改后的最大二进制字符串](https://leetcode-cn.com/problems/maximum-binary-string-after-change/)

先解读两种操作的逻辑：

1. 将$10$转换为$01$相当于让$1$值沉底，但不影响$0$和$1$的总数
2. 将$00$转换为$10$让顶部值变为$1$

观察数据后可知，最优解法是除最左侧连续的$1$以外，将所有的$1$沉底，其余位从左到右均设置为$1$，仅保留一位$0$。

```kotlin
class Solution1702 {
    fun maximumBinaryString(binary: String): String {
        if (binary.all { it == '1' }) return binary
        val n = binary.length
        var meet = false
        var r = 0
        for (i in binary.indices) {
            if (binary[i] == '0') {
                meet = true
            } else if (binary[i] == '1' && meet) {
                r++
            }
        }
        val ans = CharArray(n) { '1' }
        ans[n - r - 1] = '0'
        return ans.joinToString("")
    }
}
```

## Q4 [1703. 得到连续 K 个 1 的最少相邻交换次数](https://leetcode-cn.com/problems/minimum-adjacent-swaps-for-k-consecutive-ones/)

这道题需要理解**加油站中位数**解法。我们使用滑动窗口，保证窗口内有$k$个1存在。此时，若要将这$k$个$1$挨在一起需要转化为每个$1$距离当前中位数$1$的位置的距离。

对于奇数个$1$来说，如$101001$，移动到$011100$花费最小。比如若是$001110$为最终结果，则需要左侧两个$1$多移动一次，而右侧$1$少移动一次，得不偿失。

而对于偶数个$1$，则是无论以那个为中心不动，结果都是相同的。如$11001001$，最终结果可以为$11110000$也可以为$00111100$，它们的$cost$都是$6$。都是左侧若$+1$则右侧的都$-1$，总体的$cost$是稳定的。

时间复杂度：$O(n)$

```kotlin
class Solution5624 {
    fun minMoves(nums: IntArray, k: Int): Int {
        var ans = Int.MAX_VALUE
        val l = arrayListOf<Int>()
        var cur = 0
        for (i in nums.indices) {
            if (nums[i] != 1) {
                continue
            }
            if (l.size < k) {
                l.add(i)
                val mid = l[(l.size - 1) / 2]
                cur += (i - mid) - (l.size / 2)
            } else {
                ans = minOf(ans, cur)
                var mid = l[l.size / 2]
                l.add(i)
                cur += i - mid

                mid = l[l.size / 2]
                val j = l.removeAt(0)
                cur -= mid - j
            }
        }
        return minOf(ans, cur)
    }
}
```

