# 第 65 场双周赛题解

## Q1 [2068. 检查两个字符串是否几乎相等](https://leetcode-cn.com/problems/check-whether-two-strings-are-almost-equivalent/)

签到。

```kotlin
class Solution2068 {
    fun checkAlmostEquivalent(word1: String, word2: String): Boolean {
        return ('a'..'z').all { c ->
            abs(word1.count { it == c } - word2.count { it == c}) <= 3
        }
    }
}
```

## Q2 [2069. 模拟行走机器人 II](https://leetcode-cn.com/problems/walking-robot-simulation-ii/)

这SB题目无语了，初始点走过之后再回到这里方向会不一样。玩这无聊的，有意思么？

```kotlin
class Robot(val width: Int, val height: Int) {

    var index = 0
    val arr = ArrayList<Triple<Int, Int, String>>()
    init {
        for (i in 0 until width) {
            arr.add(Triple(i, 0, "East"))
        }
        for (i in 1 until height) {
            arr.add(Triple(width - 1, i, "North"))
        }
        for (i in width - 2 downTo 0) {
            arr.add(Triple(i, height - 1, "West"))
        }
        for (i in height - 2 downTo 1) {
            arr.add(Triple(0, i, "South"))
        }
    }

    fun move(num: Int) {
        index += num
    }

    fun getPos(): IntArray {
        return arr[index % arr.size].let {
            intArrayOf(it.first, it.second)
        }
    }

    fun getDir(): String {
        if (index != 0 && getPos().sum() == 0) return "South"
        return arr[index % arr.size].third
    }

}
```

## Q3 [2070. 每一个查询的最大美丽值](https://leetcode-cn.com/problems/most-beautiful-item-for-each-query/)

简单的离线算法，时刻更新最大值即可。

```kotlin
class SolutionC {
    fun maximumBeauty(items: Array<IntArray>, queries: IntArray): IntArray {
        items.sortBy { it[0] }
        var index = 0
        val map = HashMap<Int, Int>()
        var max = 0
        queries.sorted().forEach {
            while (index in items.indices && items[index][0] <= it) {
                max = maxOf(max, items[index][1])
                index++
            }
            map[it] = max
        }
        return queries.map { map[it]!! }.toIntArray()
    }
}
```

## Q4 [2071. 你可以安排的最多任务数目](https://leetcode-cn.com/problems/maximum-number-of-tasks-you-can-assign/)

正向处理比较困难，但是可以二分判定一个值是否符合要求，求出最大值即可。

```kotlin
class SolutionD {
    // 二分，算isValid
    fun maxTaskAssign(tasks: IntArray, workers: IntArray, pills: Int, strength: Int): Int {
        tasks.sort()
        workers.sortDescending()

        fun check(mid: Int): Boolean {
            // 取出工作量最小的 及 最能干的工人 各mid个
            val tm = TreeMap<Int, Int>()
            for (i in 0 until mid) {
                tm[workers[i]] = tm.getOrDefault(workers[i], 0) + 1
            }
            var p = 0
            for (i in mid - 1 downTo 0) {
                val it = tasks[i]
                if (tm.ceilingKey(it) != null) {
                    val key = tm.ceilingKey(it)
                    tm[key] = tm.getOrDefault(key, 0) - 1
                    if (tm[key] == 0) tm.remove(key)
                } else if (tm.ceilingKey(it - strength) != null && p < pills) {
                    p++
                    val key = tm.ceilingKey(it - strength)
                    tm[key] = tm.getOrDefault(key, 0) - 1
                    if (tm[key] == 0) tm.remove(key)
                } else {
                    return false
                }
            }
            return true
        }

        var left = 0
        var right = minOf(tasks.size, workers.size)
        while (left + 1 < right) {
            val mid = (left + right).ushr(1)
            when {
                check(mid) -> left = mid
                else -> right = mid
            }
        }
        return when {
            check(right) -> right
            check(left) -> left
            else -> -1
        }
    }
}
```

