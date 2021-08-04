# 第 57 场双周赛题解

## Q1 [1941. 检查是否所有字符出现次数相同](https://leetcode-cn.com/problems/check-if-all-characters-have-equal-number-of-occurrences/)

转换成Map，然后再将其Value转换到Set集合，看结果是不是1。

```kotlin
class Solution5804 {
    fun areOccurrencesEqual(s: String): Boolean {
        val map = HashMap<Char, Int>()
        s.forEach {
            map[it] = map.getOrDefault(it, 0) + 1
        }
        return map.values.toSet().size == 1
    }
}
```

## Q2 [1942. 最小未被占据椅子的编号](https://leetcode-cn.com/problems/the-number-of-the-smallest-unoccupied-chair/)

按照占据、离开时间进行排序，通过一个$TreeSet$记录当前未被占用的椅子，同时用一个$IntArray$匹配人占用椅子的编号。按时间进行遍历，占有 or 释放椅子即可。

```kotlin
class Solution5805 {
    fun smallestChair(times: Array<IntArray>, targetFriend: Int): Int {
        val n = times.size
        val pq = PriorityQueue<Triple<Int, Int, Int>>(compareBy({ it.first }, { it.second }))
        for (i in times.indices) {
            pq.offer(Triple(times[i][0], 1, i))
            pq.offer(Triple(times[i][1], -1, i))
        }
        val ts = TreeSet<Int>()
        val seat = IntArray(n) { -1 }
        for (i in 0..n) ts.add(i)
        while (pq.isNotEmpty()) {
            val item = pq.poll()
            if (item.second == 1) {
                seat[item.third] = ts.pollFirst()!!
                if (item.third == targetFriend) return seat[item.third]
            } else {
                ts.add(seat[item.third])
            }
        }
        return -1
    }
}
```

## Q3 [1943. 描述绘画结果](https://leetcode-cn.com/problems/describe-the-painting/)

差分数组，利用$TreeMap$对$Key$进行自动排序。与Q2类似，每个元素进出分别提供增值和减值两个$Item$。

$PS:$​需要注意0值不需要+，为此怒吃个$WA$。

```kotlin
class Solution5806 {
    fun splitPainting(segments: Array<IntArray>): List<List<Long>> {
        val map = TreeMap<Int, Long>()
        segments.forEach {
            map[it[0]] = map.getOrDefault(it[0], 0L) + it[2].toLong()
            map[it[1]] = map.getOrDefault(it[1], 0L) - it[2].toLong()
        }
        val ans = ArrayList<List<Long>>()
        var cur = 0L
        var lst = 1L
        map.forEach { i, i2 ->
            if (cur != 0L) {
                ans.add(listOf(lst, i.toLong(), cur))
            }
            cur += i2
            lst = i.toLong()
        }
        return ans
    }
}
```

## Q4 [1944. 队列中可以看到的人数](https://leetcode-cn.com/problems/number-of-visible-people-in-a-queue/)

简单的Q4，单调栈。从右向左+人，+的人比当前栈顶的人高，那么之后的人看不到当前栈顶的人。栈就可以一直$Pop$下去。感觉也就是个$Medium$级别。

```kotlin
class Solution5196 {
    fun canSeePersonsCount(heights: IntArray): IntArray {
        val ans = IntArray(heights.size)
        val st = Stack<Pair<Int, Int>>()
        for (i in heights.indices.reversed()) {
            val h = heights[i]
            var cur = 0
            while (st.isNotEmpty() && h > st.peek().second) {
                st.pop()
                cur++
            }
            if (st.isNotEmpty()) {
                cur++
            }
            st.push(Pair(i, h))
            ans[i] = cur
        }
        return ans
    }
}
```

