# 第 69 场双周赛题解

## Q1 [2129. 将标题首字母大写](https://leetcode-cn.com/problems/capitalize-the-title/)

模拟。

```kotlin
class SolutionA {
    fun capitalizeTitle(title: String): String {
        return title.split(' ').map {
            val tmp = StringBuilder()
            tmp.append(it.toLowerCase())
            if (it.length > 2) {
                tmp[0] = tmp[0].toUpperCase()
            }
            tmp.toString()
        }.joinToString(" ")
    }
}
```

## Q2 [2130. 链表最大孪生和](https://leetcode-cn.com/problems/maximum-twin-sum-of-a-linked-list/)

直接转数组。

```kotlin
class SolutionB {
    fun pairSum(head: ListNode?): Int {
        val arr = head.toIntArray()
        val n = arr.size
        var ans = Int.MIN_VALUE
        for (i in arr.indices) {
            ans = maxOf(ans, arr[i] + arr[n - i - 1])
        }
        return ans
    }
}
```

## Q3 [5962. 连接两字母单词得到的最长回文串](https://leetcode-cn.com/problems/longest-palindrome-by-concatenating-two-letter-words/)

对称的部分直接算到总长度中，最后看剩余部分是否有"aa"的组合，可以在最中间塞一个。

```kotlin
class SolutionC {
    fun longestPalindrome(words: Array<String>): Int {
        val map = HashMap<String, Int>()
        var ans = 0
        for (i in words.indices) {
            if (words[i].reversed() in map.keys) {
                ans += 4
                map[words[i].reversed()] = map.getOrDefault(words[i].reversed(), 0) - 1
                if (map[words[i].reversed()] == 0)
                    map.remove(words[i].reversed())
            } else {
                map[words[i]] = map.getOrDefault(words[i], 0) + 1
            }
        }
        val set = map.keys
        if (set.any { it[0] == it[1] }) {
            ans += 2
        }
        return ans
    }
}
```

## Q4 [5931. 用邮票贴满网格图](https://leetcode-cn.com/problems/stamping-the-grid/)

能贴邮票的地方都给贴上，然后检测每个空白格是否可被邮票覆盖到。

通过矩阵的预计算，快速处理子矩阵的和。

```kotlin
class SolutionD {
    fun possibleToStamp(grid: Array<IntArray>, stampHeight: Int, stampWidth: Int): Boolean {

        val matrix = grid.toMatrix()
        matrix.preSum()

        fun fill(x0: Int, y0: Int, x1: Int, y1: Int): Boolean {
            if (x0 !in grid.indices || x1 !in grid.indices || y0 !in grid[0].indices || y1 !in grid[0].indices) return false
            if (matrix.subMatrixSum(x0, y0, x1, y1) == 0)
                return true
            return false
        }

        val paint = Array<IntArray>(grid.size) { IntArray(grid[0].size) }

        for (i in grid.indices) {
            for (j in grid[0].indices) {
                if (grid[i][j] != 0) continue
                // 左上
                if (fill(i, j, i + stampHeight - 1, j + stampWidth - 1))
                    paint[i][j] = 1
            }
        }

        val pMatrix = paint.toMatrix()
        pMatrix.preSum()

        for (i in grid.indices) {
            for (j in grid[0].indices) {
                if (grid[i][j] == 1) continue
                val top = maxOf(0, i - stampHeight + 1)
                val left = maxOf(0, j - stampWidth + 1)
                if (pMatrix.subMatrixSum(top, left, i, j) == 0) return false
            }
        }
        return true
    }
}
```