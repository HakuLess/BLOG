# 第 68 场双周赛题解

## Q1 [5946. 句子中的最多单词数](https://leetcode-cn.com/problems/maximum-number-of-words-found-in-sentences/)

签到。

```kotlin
class SolutionA {
    fun mostWordsFound(sentences: Array<String>): Int {
        return sentences.map { it.split(" ").size }.maxOrNull()!!
    }
}
```

## Q2 [5947. 从给定原材料中找到所有可以做出的菜](https://leetcode-cn.com/problems/find-all-possible-recipes-from-given-supplies/)

可以使用拓扑排序，本题数据范围较小，直接暴力即可。每次有原料变化，则进行下一轮筛选，直至没有新的菜可以做出来。

```kotlin
class SolutionB {
    fun findAllRecipes(recipes: Array<String>, ingredients: List<List<String>>, supplies: Array<String>): List<String> {

        val sup = HashSet<String>()
        sup.addAll(supplies)

        val ans = HashSet<String>()
        var changed = false
        val add = BooleanArray(recipes.size) { false }
        do {
            changed = false
            for (i in ingredients.indices) {
                if (add[i]) continue
                if (ingredients[i].all { it in sup }) {
                    ans.add(recipes[i])
                    sup.add(recipes[i])
                    changed = true
                    add[i] = true
                }
            }
        } while (changed)

        return ans.toList()
    }
}
```

## Q3 [5948. 判断一个括号字符串是否有效](https://leetcode-cn.com/problems/check-if-a-parentheses-string-can-be-valid/)

左右各遍历一次即可。当前优先匹配已锁的位置，若无法匹配则返回false。

```kotlin
class SolutionC {
    fun canBeValid(s: String, locked: String): Boolean {
        if (s.length % 2 != 0) return false
        var l = 0
        var r = 0
        var a = 0
        for (i in s.indices) {
            if (locked[i] == '1') {
                if (s[i] == '(') {
                    l++
                } else {
                    r++
                    if (l > 0) l--
                    else if (a > 0) a--
                    else return false
                }
            } else {
                a++
            }
        }
        l = 0
        r = 0
        a = 0
        for (i in s.indices.reversed()) {
            if (locked[i] == '1') {
                if (s[i] == '(') {
                    l++
                    if (r > 0) r--
                    else if (a > 0) a--
                    else return false
                } else {
                    r++
                }
            } else {
                a++
            }
        }
        return true
    }
}
```

## Q4 [5949. 一个区间内所有数乘积的缩写](https://leetcode-cn.com/problems/abbreviating-the-product-of-a-range/)

恶心吐了... 后缀0可以通过2和5的数量计算，后5位每次保留后5位乘积即可。前5位，需要多保留... 保留12位，其实仍有Case有异常，不过AC了。应该用Double来处理下。

```kotlin
class SolutionD {
    fun abbreviateProduct(left: Int, right: Int): String {

        var c0 = 0L
        var cur = 1L
        for (i in left..right) {
            cur *= i
            while (cur != 0L && cur % 10 == 0L) {
                cur /= 10L
                c0++
            }
            if (cur.toString().length > 16) {
                cur = 0L
                break
            }
        }

        if (cur != 0L) {
            val ans = cur.toString()
            for (i in ans.indices.reversed()) {
                if (ans[i] == '0') c0++
                else {
                    if (i < 10) {
                        return "${ans.substring(0, i + 1)}e${c0}"
                    } else {
                        return "${ans.substring(0, 5)}...${ans.substring(ans.length - 5, ans.length)}e${c0}"
                    }
                }
            }
        }

        var l5 = 1L
        var r5 = 1L
        var c2 = 0
        var c5 = 0
        var c10 = 0

        for (i in left..right) {
            l5 *= i
            if (l5.toString().length > 12)
                l5 = l5.toString().substring(0, 12).toLong()

            r5 *= i
            while (r5 % 10 == 0L) {
                r5 /= 10
            }
            if (r5.toString().length > 7)
                r5 = r5.toString().substring(r5.toString().length - 7, r5.toString().length).toLong()

            var cur = i
            while (cur % 10 == 0) {
                c10++
                cur /= 10
            }
            while (cur % 2 == 0) {
                c2++
                cur /= 2
            }
            while (cur % 5 == 0) {
                c5++
                cur /= 5
            }
        }

        return "${l5.toString().substring(0, 5)}...${
            r5.toString().substring(r5.toString().length - 5)
        }e${c10 + minOf(c2, c5)}"
    }
}
```