# 第 54 场双周赛题解

## Q1 [1893. 检查是否区域内所有整数都被覆盖](https://leetcode-cn.com/problems/check-if-all-the-integers-in-a-range-are-covered/)

懒人解法，直接用题意给定数字范围来判断，是否每个值都会涵盖在某一$range$内。

```kotlin
class Solution1893 {
    fun isCovered(ranges: Array<IntArray>, left: Int, right: Int): Boolean {
        return (left..right).all { v ->
            ranges.any {
                v in it[0]..it[1]
            }
        }
    }
}
```

## Q2 [1894. 找到需要补充粉笔的学生编号](https://leetcode-cn.com/problems/find-the-student-that-will-replace-the-chalk/)

普通贪心做即可。被$Long$的长度$WA$了一次，不能直接用$sum$函数... 以后要注意，不是第一次吃亏了。

时间复杂度：$O(n)$

```kotlin
class Solution1894 {
    fun chalkReplacer(chalk: IntArray, k: Int): Int {
        var sum = 0L
        chalk.forEach {
            sum += it
        }
        var t = k % sum
        for (i in chalk.indices) {
            t -= chalk[i]
            if (t < 0)
                return i
        }
        return -1
    }
}
```

## Q3 [1895. 最大的幻方](https://leetcode-cn.com/problems/largest-magic-square/)

麻烦的操作，优化$Matrix$工具类，比赛的时候能够快速的写出核心代码。

```kotlin
class Solution1895 {
    fun largestMagicSquare(grid: Array<IntArray>): Int {
        var ans = 0
        val m = grid.size
        val n = grid[0].size
        val matrix = grid.toMatrix()
        fun cal(i: Int, j: Int, k: Int) {
            val sum = matrix.sum(from = Pair(i, j), to = Pair(i + k, j))
            for (c in 0..k) {
                if (sum != matrix.sum(from = Pair(i, j + c), to = Pair(i + k, j + c))) return
                if (sum != matrix.sum(from = Pair(i + c, j), to = Pair(i + c, j + k))) return
            }
            if (sum != matrix.sum(from = Pair(i, j), to = Pair(i + k, j + k))) return
            if (sum != matrix.sum(from = Pair(i + k, j), to = Pair(i, j + k))) return
            ans = maxOf(ans, k)
        }

        for (i in grid.indices) {
            for (j in grid[0].indices) {
                for (k in 0 until maxOf(n, m)) {
                    if (i + k in grid.indices && j + k in grid[0].indices) {
                        cal(i, j, k)
                    } else break
                }
            }
        }
        return ans + 1
    }
}
```

## Q4 [1896. 反转表达式值的最少操作次数](https://leetcode-cn.com/problems/minimum-cost-to-change-the-final-value-of-expression/)

有意思也有复杂度的一道题。首先要想到，将操作符和数字分开入栈。并且入栈的内容分别是当前值为$0$需要的操作次数和当前值为$1$的操作次数。最终结果则是栈中最后一个元素的最大值。

$ops$栈保存$(|\&$三个操作符，$states$栈保存当前选取$0、1$所需的最少操作次数。下一个状态可由上一个状态及新遍历到的数字和栈顶的操作符推理而来。非常巧妙的题目，有意思。

```kotlin
class Solution5770 {
    // 操作符 && 栈
    fun minOperationsToFlip(expression: String): Int {
        val states = Stack<Pair<Int, Int>>()
        val ops = Stack<Char>()
        for (c in expression) {
            if (c in "01)") {
                when (c) {
                    '0' -> states.push(Pair(0, 1))
                    '1' -> states.push(Pair(1, 0))
                    else -> ops.pop()
                }
                if (ops.isNotEmpty() && ops.peek() != '(') {
                    val op = ops.pop()
                    val (p0, p1) = states.pop()
                    val (q0, q1) = states.pop()
                    if (op == '&')
                    // and 操作
                    // 状态变化成0，取两边为0中的较小值
                    // 状态变化成1，取两位均为1 or 一边为1+改变操作符
                        states.push(Pair(minOf(q0, p0), minOf(q1 + p1, 1 + minOf(q1, p1))))
                    else
                    // or 操作
                    // 状态变化成0，取两边均为0 or 一边为0+改变操作符
                    // 状态变化成1，取两边为1中的较小值
                        states.push(Pair(minOf(q0 + p0, 1 + minOf(q0, p0)), minOf(q1, p1)))
                }
            } else {
                ops.push(c)
            }
        }
        return states.peek().let { maxOf(it.first, it.second) }
    }
}
```

