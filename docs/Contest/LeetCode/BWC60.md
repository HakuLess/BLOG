# 第 60 场双周赛题解

## Q1 [1991. 找到数组的中间位置](https://leetcode-cn.com/problems/find-the-middle-index-in-array/)

注意要排除当前位置，右侧先减，左侧后加，进行比较。

```kotlin
class Solution5846 {
    fun findMiddleIndex(nums: IntArray): Int {
        var left = 0
        var right = nums.sum()
        for (i in nums.indices) {
            right -= nums[i]
            if (left == right) return i
            left += nums[i]
        }
        return -1
    }
}
```

## Q2 [1992. 找到所有的农场组](https://leetcode-cn.com/problems/find-all-groups-of-farmland/)

题目已经给出**农场组**不会相邻，则仅有矩形的$1$，因此可以只判断两条边。

接下来可以用数组染色判断是否已添加过，或直接判断该位置上方或左方是否是$1$即可。

```kotlin
class Solution5847 {
    fun findFarmland(land: Array<IntArray>): Array<IntArray> {
        val n = land.size
        val m = land[0].size

        val ans = ArrayList<IntArray>()
        fun getEdge(i: Int, j: Int) {
            var curI = i
            var curJ = j
            while (curI in 0 until n && land[curI][curJ] == 1) {
                curI++
            }
            curI--
            while (curJ in 0 until m && land[curI][curJ] == 1) {
                curJ++
            }
            curJ--
            ans.add(intArrayOf(i, j, curI, curJ))
        }

        for (i in 0 until n) {
            for (j in 0 until m) {
                if (land[i][j] == 1) {
                    if (i > 0 && land[i - 1][j] == 1) continue
                    if (j > 0 && land[i][j - 1] == 1) continue
                    getEdge(i, j)
                }
            }
        }
        return ans.toTypedArray()
    }
}
```

## Q3 [1993. 树上的操作](https://leetcode-cn.com/problems/operations-on-tree/)

直接模拟。

```kotlin
class LockingTree(parent: IntArray) {

    val n = parent.size

    val nodeList = Array<NTreeNode>(n) { i -> NTreeNode(i) }

    init {
        for (i in parent.indices) {
            if (parent[i] != -1) {
                nodeList[parent[i]].children.add(nodeList[i])
                nodeList[i].parent = nodeList[parent[i]]
            }
        }
    }

    val lockedMap = HashMap<NTreeNode, Int>()

    fun lock(num: Int, user: Int): Boolean {
        if (lockedMap.getOrDefault(nodeList[num], -1) == -1) {
            lockedMap[nodeList[num]] = user
            return true
        }
        return false
    }

    fun unlock(num: Int, user: Int): Boolean {
        if (lockedMap.getOrDefault(nodeList[num], -1) == user) {
            lockedMap.remove(nodeList[num])
            return true
        }
        return false
    }

    fun upgrade(num: Int, user: Int): Boolean {
        val cur = nodeList[num]
        if (cur in lockedMap) return false
        var parent = cur.parent
        while (parent != null) {
            if (parent in lockedMap) return false
            parent = parent.parent
        }

        val unLock = ArrayList<NTreeNode>()
        val queue: Queue<NTreeNode> = LinkedList()
        queue.add(cur)
        while (queue.isNotEmpty()) {
            val size = queue.size
            for (i in 0 until size) {
                val node = queue.poll()
                node.children.forEach {
                    queue.offer(it)
                    if (it in lockedMap) {
                        unLock.add(it)
                    }
                }
            }
        }
        if (unLock.isEmpty()) return false
        lockedMap[cur] = user
        unLock.forEach {
            lockedMap.remove(it)
        }
        return true
    }

}

class NTreeNode(var `val`: Int = 0) {
    var parent: NTreeNode? = null
    var children: ArrayList<NTreeNode> = arrayListOf()
}

/**
 * Your LockingTree object will be instantiated and called as such:
 * var obj = LockingTree(parent)
 * var param_1 = obj.lock(num,user)
 * var param_2 = obj.unlock(num,user)
 * var param_3 = obj.upgrade(num,user)
 */
```

## Q4 [1994. 好子集的数目](https://leetcode-cn.com/problems/the-number-of-good-subsets/)

回溯+暴力把可能的状态都计算出来。

需要注意的是对$1$的处理，其余数字对结果的贡献都是$*$其$count$值，而$1$的提供则是乘以其$2^{count}$，并且最后还要把全$1$的Case减去... 比赛时就差个这个，难受。

```kotlin
class Solution {
    fun numberOfGoodSubsets(nums: IntArray): Int {
        val arr = IntArray(32)
        val mod = 1000000007L
        val black = intArrayOf(4, 8, 12, 16, 20, 24, 28, 9, 18, 27, 25)
        nums.forEach {
            if (it !in black)
                arr[it]++
        }
        val ans = HashSet<String>()
        fun select(cur: Int, list: ArrayList<Int> = arrayListOf()) {
            if (cur == 1) {
                ans.add(list.joinToString(" "))
                return
            }
            for (i in cur - 1 downTo 1) {
                if ((arr[i] != 0 || i == 1) && list.all { gcd(it, i) == 1 }) {
                    list.add(i)
                    select(i, list)
                    list.remove(i)
                }
            }
        }
        for (i in 30 downTo 1) {
            if (arr[i] != 0) {
                select(i, arrayListOf(i))
            }
        }
        var res = 0L
        ans.forEach {
            if (it.isNotEmpty()) {
                var temp = 1L
                it.split(" ").forEach {
                    temp = if (it == "1") {
                        (temp * (quickPower(2L, arr[1].toLong()))) % mod
                    } else {
                        (temp * arr[it.toInt()]) % mod
                    }
                }
                res += temp
            }
        }
        if (arr[1] != 0) {
            res -= quickPower(2L, arr[1].toLong())
        }
        res += mod
        return (res % mod).toInt()
    }
}

tailrec fun gcd(a: Int, b: Int): Int {
    return if (b == 0) a else gcd(b, a % b)
}

fun quickPower(base: Long, pow: Long, m: Long = 1000000007L): Long {
    var res = 1L
    var a = base
    var b = pow
    while (b > 0) {
        if (b and 1L != 0L)
            res = res * a % m
        a = a * a % m
        b = b shr 1
    }
    return res
}
```

