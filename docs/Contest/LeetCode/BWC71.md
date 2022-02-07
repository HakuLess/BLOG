# 第 71 场双周赛题解

## Q1 [5984. 拆分数位后四位数字的最小和](https://leetcode-cn.com/problems/minimum-sum-of-four-digit-number-after-splitting-digits/)

这拆分还允许变换顺序的... 浪费时间。

```kotlin
class SolutionA {
    fun minimumSum(num: Int): Int {
        val arr = ArrayList<Int>()
        for (i in num.toString()) {
            arr.add(i - '0')
        }
        arr.sort()
        return (arr[0] + arr[1]) * 10 + arr[2] + arr[3]
    }
}
```

## Q2 [5985. 根据给定数字划分数组](https://leetcode-cn.com/problems/partition-array-according-to-given-pivot/)

这才叫简单题，直接分组排序就好。

```kotlin
class SolutionB {
    fun pivotArray(nums: IntArray, pivot: Int): IntArray {
        val a = ArrayList<Int>()
        val b = ArrayList<Int>()
        val c = ArrayList<Int>()
        for (it in nums) {
            if (it < pivot) {
                a.add(it)
            } else if (it == pivot) {
                b.add(it)
            } else {
                c.add(it)
            }
        }
        val ans = ArrayList<Int>()
        ans.addAll(a)
        ans.addAll(b)
        ans.addAll(c)
        return ans.toIntArray()
    }
}
```

## Q3 [5986. 设置时间的最少代价](https://leetcode-cn.com/problems/minimum-cost-to-set-cooking-time/)

题意都理解错了，move的不是屏幕光标位置，而是改变当前输入的数字。每次Push后光标自动移动... 这搞文字游戏。

```kotlin
class SolutionC {
    fun minCostSetTime(startAt: Int, moveCost: Int, pushCost: Int, targetSeconds: Int): Int {
        var a = targetSeconds
        var m = 0
        var s = 0
        while (a >= 100) {
            a -= 60
            m++
        }
        s = targetSeconds - m * 60
        fun dfs(m: Int, s: Int): Int {
            var ans = 0
            var cur = startAt
            val target = m.toString().padStart(2, '0') + s.toString().padStart(2, '0')
            if (target.all { it == '0' }) return 0
            val nz = target.indexOfFirst { it != '0' }
            for (i in nz..3) {
                if (target[i] - '0' != cur) {
                    ans += moveCost
                    ans += pushCost
                    cur = target[i] - '0'
                } else {
                    ans += pushCost
                }
            }
            return ans
        }

        var ans = dfs(m, s)
        if (s >= 60 && m + 1 <= 99) {
            ans = minOf(ans, dfs(m + 1, s - 60))
        }
        return ans
    }
}
```

## Q4 [5987. 删除元素后和的最小差值](https://leetcode-cn.com/problems/minimum-difference-in-sums-after-removal-of-elements/)

被Q3搞的没时间了，Q4就是将左中右三部分元素分开，然后中间的元素一个个的归左面，求左面最小值，一个个的归右面，求右面的最大值。最后有$n/3$种结果，分别算最小差值即可。

```kotlin
class SolutionD {
    fun minimumDifference(nums: IntArray): Long {
        val left = PriorityQueue<Long>(compareBy { -it })
        val middle = ArrayList<Long>()
        val right = PriorityQueue<Long>()
        for (i in nums.indices) {
            if (i < nums.size / 3) {
                left.add(nums[i].toLong())
            } else if (i < nums.size / 3 * 2) {
                middle.add(nums[i].toLong())
            } else {
                right.add(nums[i].toLong())
            }
        }
        val a = LongArray(nums.size / 3 + 1)
        val b = LongArray(nums.size / 3 + 1)
        var leftSum = left.sum()
        a[0] = leftSum
        for (i in 0 until nums.size / 3) {
            leftSum += middle[i]
            left.offer(middle[i])
            leftSum -= left.poll()
            a[i + 1] = leftSum
        }
        var rightSum = right.sum()
        b[nums.size / 3] = rightSum
        for (i in nums.size / 3 - 1 downTo 0) {
            rightSum += middle[i]
            right.offer(middle[i])
            rightSum -= right.poll()
            b[i] = rightSum
        }
        var ans = Long.MAX_VALUE
        for (i in a.indices) {
            ans = minOf(ans, a[i] - b[i])
        }
        return ans
    }
}
```