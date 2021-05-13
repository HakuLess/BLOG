# 第 51 场双周赛题解

## Q1 [1844. 将所有数字用字符替换](https://leetcode-cn.com/problems/replace-all-digits-with-characters/)

题目说不会超过$z$，那就直接模拟就可以，不用考虑取余之类的。

时间复杂度：$O(n)$

```kotlin
class Solution1844 {
    fun replaceDigits(s: String): String {
        val ans = StringBuilder()
        for (i in s.indices) {
            if (i % 2 == 0) {
                ans.append(s[i])
            } else {
                ans.append(s[i - 1] + (s[i] - '0'))
            }
        }
        return ans.toString()
    }
}
```

## Q2 [1845. 座位预约管理系统](https://leetcode-cn.com/problems/seat-reservation-manager/)

这时就用到了之前写的数据结构$MultiSet$了，用二分的方法插入数据，并可随时返回最大值、最小值。

```kotlin
class SeatManager(n: Int) {

    val set = MultiSet<Int>()

    init {
        for (i in 1..n) {
            set.add(i)
        }
    }

    fun reserve(): Int {
        return set.popLeft()
    }

    fun unreserve(seatNumber: Int) {
        set.add(seatNumber)
    }

}

class MultiSet<T : Comparable<T>>(private val sumBy: (T) -> Int = { 0 }) {

    private val valueList = ArrayList<T>()
    private val countMap = HashMap<T, Int>()
    var size = 0
    var sum = 0L
    val min: T
        get() = valueList.first()
    val max: T
        get() {
            return valueList.last()
        }

    fun add(value: T) {
        val index = valueList.binarySearch(value)
        if (index < 0) {
            valueList.add(-index - 1, value)
            countMap[value] = 1
        } else {
            countMap[value] = countMap[value]!! + 1
        }
        size++
        sum += sumBy(value)
    }

    fun remove(value: T): Boolean {
        if (value !in countMap.keys) return false
        val index = valueList.binarySearch(value)
        if (countMap[value] == 1) {
            countMap.remove(value)
            valueList.removeAt(index)
        } else {
            countMap[value] = countMap[value]!! - 1
        }
        size--
        sum -= sumBy(value)
        return true
    }

    fun popLeft(): T {
        return valueList.first().also {
            remove(it)
        }
    }

    fun popRight(): T {
        return valueList.last().also {
            remove(it)
        }
    }
}
```

## Q3 [1846. 减小和重新排列数组后的最大元素](https://leetcode-cn.com/problems/maximum-element-after-decreasing-and-rearranging/)

理解题意后就好写了。首先排序，我们的操作只能减小值，排序后遍历，尽量使当前值尽可能的大，最终就会得到可能的最大元素。想通后感觉是个$Easy$。

```kotlin
class Solution1846 {
    fun maximumElementAfterDecrementingAndRearranging(arr: IntArray): Int {
        arr.sort()
        arr[0] = 1
        for (i in 1 until arr.size) {
            arr[i] = minOf(arr[i], arr[i - 1] + 1)
        }
        return arr.last()
    }
}
```

## Q4 [1847. 最近的房间](https://leetcode-cn.com/problems/closest-room/)

排序后离线操作即可，使用$TreeSet$来存储房间号，最近的房间即$floor$和$ceil$的结果，注意这里可能为空。因此需要一些防空的判断。

```kotlin
class Solution1847 {
    fun closestRoom(rooms: Array<IntArray>, queries: Array<IntArray>): IntArray {
        val ts = TreeSet<Int>()
        var cur = 0
        val ans = HashMap<String, Int>()
        rooms.sortByDescending { it[1] }
        val st = queries.sortedByDescending { it[1] }
        st.forEach {
            while (cur in rooms.indices && rooms[cur][1] >= it[1]) {
                ts.add(rooms[cur][0])
                cur++
            }
            val key = it.joinToString(",")
            val a = ts.floor(it[0])
            val b = ts.ceiling(it[0])
            ans[key] = if (a == null && b == null) -1
            else if (a == null) b!!
            else if (b == null) a
            else if (abs(a - it[0]) <= abs(b - it[0])) a
            else b
        }
        return queries.map { ans[it.joinToString(",")]!! }.toIntArray()
    }
}
```