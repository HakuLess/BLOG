# 第 73 场双周赛题解

## Q1 [2190. 数组中紧跟 key 之后出现最频繁的数字](https://leetcode-cn.com/problems/most-frequent-number-following-key-in-an-array/)

模拟。

```kotlin
class SolutionA {
    fun mostFrequent(nums: IntArray, key: Int): Int {
        val map = HashMap<Int, Int>()
        for (i in 0 until nums.lastIndex) {
            if (nums[i] == key) {
                map[nums[i + 1]] = map.getOrDefault(nums[i + 1], 0) + 1
            }
        }
        return map.maxByOrNull { it.value }!!.key
    }
}
```

## Q2 [2191. 将杂乱无章的数字排序](https://leetcode-cn.com/problems/sort-the-jumbled-numbers/)

利用sortBy可以很容易的转化。

```kotlin
class SolutionB {
    fun sortJumbled(mapping: IntArray, nums: IntArray): IntArray {
        val list = nums.sortedBy {
            var ans = 0
            it.toString().forEach {
                ans *= 10
                ans += mapping[(it - '0')]
            }
            ans
        }
        return list.toIntArray()
    }
}
```

## Q3 [5300. 有向无环图中一个节点的所有祖先](https://leetcode-cn.com/problems/all-ancestors-of-a-node-in-a-directed-acyclic-graph/)

反向建图即可。再根据每个点的最短路径确定是否可达，输出结果即可。时间复杂度$O(n^2)$。

```kotlin
class SolutionC {
    fun getAncestors(n: Int, edges: Array<IntArray>): List<List<Int>> {
        val g = Graph(n)
        edges.forEach {
            g.addEdgeOri(it[1], it[0], 1)
        }
        val ans = ArrayList<ArrayList<Int>>()
        for (i in 0 until n) {
            val tmp = ArrayList<Int>()
            g.dijkstra(i).forEachIndexed { index, l ->
                if (l > 0 && l < Int.MAX_VALUE) {
                    tmp.add(index)
                }
            }
            ans.add(tmp)
        }
        return ans
    }
}
```

## Q4 [2193. 得到回文串的最少操作次数](https://leetcode-cn.com/problems/minimum-number-of-moves-to-make-palindrome/)

贪心的来处理，从左到右依次遍历，每遇到一个字母，需要从右侧对应位置，逆序找到对应的字母，然后距离就是需要增加的交换值。对于奇数（右侧一直找到左侧自己的Case），直接与后一个元素交换即可，这样可以一步步把当前元素移动到中间。

```kotlin
class SolutionD {
    fun minMovesToMakePalindrome(s: String): Int {
        val n = s.length
        var l = 0
        val sb = ArrayList<Char>()
        sb.addAll(s.toCharArray().toList())
        var ans = 0
        while (l < n / 2) {
            var r = s.lastIndex - l
            var tmp = 0
            while (sb[l] != sb[r]) {
                r--
                tmp++
            }
            if (l == r) {
                sb.swap(l, l + 1)
                ans++
            } else {
                sb.removeAt(r)
                sb.add(sb[l])
                ans += tmp
                l++
            }
        }
        return ans
    }
}
```