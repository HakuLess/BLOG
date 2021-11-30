# 第 66 场双周赛题解

## Q1 [2085. 统计出现过一次的公共字符串](https://leetcode-cn.com/problems/count-common-words-with-one-occurrence/)

签到。

```kotlin
class SolutionA {
    fun countWords(words1: Array<String>, words2: Array<String>): Int {
        var ans = 0
        words1.forEach { str ->
            if (words1.count { it == str } == 1 && words2.count { it == str } == 1) {
                ans++
            }
        }
        return ans
    }
}
```

## Q2 [2086. 从房屋收集雨水需要的最少水桶数](https://leetcode-cn.com/problems/minimum-number-of-buckets-required-to-collect-rainwater-from-houses/)

贪心，按顺序遍历房子，当前遇到房子时先判断是否左侧已有水桶，若没有则需要在右侧放一个。若右侧放不了，则在左侧放。若两侧都放不了，则失败。

```kotlin
class Solution2086 {
    fun minimumBuckets(street: String): Int {
        val ans = IntArray(street.length)
        for (i in street.indices) {
            if (street[i] == 'H') {
                if (i - 1 in street.indices && ans[i - 1] == 1) continue
                if (i + 1 in street.indices && street[i + 1] == '.') {
                    ans[i + 1] = 1
                    continue
                }
                if (i - 1 in street.indices && street[i - 1] == '.') {
                    ans[i - 1] = 1
                    continue
                }
                return -1
            }
        }
        return ans.count { it == 1 }
    }
}
```

## Q3 [2087. 网格图中机器人回家的最小代价](https://leetcode-cn.com/problems/minimum-cost-homecoming-of-a-robot-in-a-grid/)

被唬住了，机器人走法只要不特意绕个远，代价都是相同的，直接相加即可。

```kotlin
class Solution2087 {
    fun minCost(startPos: IntArray, homePos: IntArray, rowCosts: IntArray, colCosts: IntArray): Int {
        val arr = ArrayList<Int>()
        val boundX = intArrayOf(minOf(startPos[0], homePos[0]), maxOf(startPos[0], homePos[0]))
        val boundY = intArrayOf(minOf(startPos[1], homePos[1]), maxOf(startPos[1], homePos[1]))
        for (i in boundX[0]..boundX[1]) {
            if (i == startPos[0]) continue
            arr.add(rowCosts[i])
        }
        for (i in boundY[0]..boundY[1]) {
            if (i == startPos[1]) continue
            arr.add(colCosts[i])
        }
        return arr.sum()
    }
}
```

## Q4 [2088. 统计农场中肥沃金字塔的数目](https://leetcode-cn.com/problems/count-fertile-pyramids-in-a-land/)

前缀和，以当前点为金字塔的顶点，对于正金字塔，右下需要前缀和>=3（前方连续1，包含自己），再之后>=5，倒金字塔则左上，遇到不符合的直接break。

```kotlin
class Solution2088 {
    fun countPyramids(grid: Array<IntArray>): Int {
        val m = grid.size
        val n = grid[0].size
        val g = Array<IntArray>(m) { IntArray(n) }
        for (i in 0 until m) {
            for (j in 0 until n) {
                if (grid[i][j] == 1) {
                    if (j != 0)
                        g[i][j] = g[i][j - 1] + 1
                    else
                        g[i][j] = 1
                } else {
                    g[i][j] = 0
                }
            }
        }

        var ans = 0

        fun getPyramids(add: Int) {
            for (i in 0 until m) {
                for (j in 0 until n) {
                    if (grid[i][j] == 1) {
                        var nextI = i + add
                        var nextJ = j + 1
                        var step = 3
                        while (nextI in 0 until m && nextJ in 0 until n) {
                            if (g[nextI][nextJ] >= step) {
                                ans++
                            } else {
                                break
                            }
                            nextI += add
                            nextJ++
                            step += 2
                        }
                    }
                }
            }
        }

        getPyramids(1)
        getPyramids(-1)
        return ans
    }
}
```

