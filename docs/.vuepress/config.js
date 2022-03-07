module.exports = {
    title: 'HaKu’s Blog',
    description: 'Just playing around',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            {
                text: 'Contest', items: [
                    { text: 'LeetCode', link: '/Contest/LeetCode/' },
                    { text: 'AtCoder', link: '/Contest/AtCoder/' },
                    { text: 'CodeForces', link: '/Contest/CodeForces/' },
                ]
            },
            {
                text: 'Study', items: [
                    {
                        text: 'ACM', items: [
                            { text: 'Algorithm', link: '/Study/Algorithm/' },
                            { text: 'Union-Find-Set', link: '/Study/DataStructure/' },
                        ]
                    },
                    {
                        text: 'Tech', items: [
                            { text: 'Android', link: '/Study/Android/' },
                        ]
                    },
                ]
            },
            {
                text: 'Life', items: [
                    { text: 'Money', link: '/Life/Money/' },
                    { text: 'Play', link: '/Life/Play/' },
                ]
            },
        ],
        sidebar: {
            '/Contest/LeetCode/': [
                {
                    title: '周赛',
                    collapsable: true,
                    children: [
                        { title: '第 283 场周赛', path: '/Contest/LeetCode/WC283.md' },
                        { title: '第 282 场周赛', path: '/Contest/LeetCode/WC282.md' },
                        { title: '第 281 场周赛', path: '/Contest/LeetCode/WC281.md' },
                        { title: '第 280 场周赛', path: '/Contest/LeetCode/WC280.md' },
                        { title: '第 279 场周赛', path: '/Contest/LeetCode/WC279.md' },
                        { title: '第 278 场周赛', path: '/Contest/LeetCode/WC278.md' },
                        { title: '第 277 场周赛', path: '/Contest/LeetCode/WC277.md' },
                        { title: '第 276 场周赛', path: '/Contest/LeetCode/WC276.md' },
                        { title: '第 275 场周赛', path: '/Contest/LeetCode/WC275.md' },
                        { title: '第 274 场周赛', path: '/Contest/LeetCode/WC274.md' },
                        { title: '第 273 场周赛', path: '/Contest/LeetCode/WC273.md' },
                        { title: '第 272 场周赛', path: '/Contest/LeetCode/WC272.md' },
                        { title: '第 271 场周赛', path: '/Contest/LeetCode/WC271.md' },
                        { title: '第 270 场周赛', path: '/Contest/LeetCode/WC270.md' },
                        { title: '第 269 场周赛', path: '/Contest/LeetCode/WC269.md' },
                        { title: '第 268 场周赛', path: '/Contest/LeetCode/WC268.md' },
                        { title: '第 267 场周赛', path: '/Contest/LeetCode/WC267.md' },
                        { title: '第 266 场周赛', path: '/Contest/LeetCode/WC266.md' },
                        { title: '第 265 场周赛', path: '/Contest/LeetCode/WC265.md' },
                        { title: '第 264 场周赛', path: '/Contest/LeetCode/WC264.md' },
                        { title: '第 263 场周赛', path: '/Contest/LeetCode/WC263.md' },
                        { title: '第 262 场周赛', path: '/Contest/LeetCode/WC262.md' },
                        { title: '第 261 场周赛', path: '/Contest/LeetCode/WC261.md' },
                        { title: '第 260 场周赛', path: '/Contest/LeetCode/WC260.md' },
                        { title: '第 259 场周赛', path: '/Contest/LeetCode/WC259.md' },
                        { title: '第 258 场周赛', path: '/Contest/LeetCode/WC258.md' },
                        { title: '第 257 场周赛', path: '/Contest/LeetCode/WC257.md' },
                        { title: '第 256 场周赛', path: '/Contest/LeetCode/WC256.md' },
                        { title: '第 255 场周赛', path: '/Contest/LeetCode/WC255.md' },
                        { title: '第 254 场周赛', path: '/Contest/LeetCode/WC254.md' },
                        { title: '第 253 场周赛', path: '/Contest/LeetCode/WC253.md' },
                        { title: '第 252 场周赛', path: '/Contest/LeetCode/WC252.md' },
                        { title: '第 250 场周赛', path: '/Contest/LeetCode/WC250.md' },
                        { title: '第 249 场周赛', path: '/Contest/LeetCode/WC249.md' },
                        { title: '第 246 场周赛', path: '/Contest/LeetCode/WC246.md' },
                        { title: '第 245 场周赛', path: '/Contest/LeetCode/WC245.md' },
                        { title: '第 244 场周赛', path: '/Contest/LeetCode/WC244.md' },
                        { title: '第 243 场周赛', path: '/Contest/LeetCode/WC243.md' },
                        { title: '第 242 场周赛', path: '/Contest/LeetCode/WC242.md' },
                        { title: '第 241 场周赛', path: '/Contest/LeetCode/WC241.md' },
                        { title: '第 240 场周赛', path: '/Contest/LeetCode/WC240.md' },
                        { title: '第 239 场周赛', path: '/Contest/LeetCode/WC239.md' },
                        { title: '第 238 场周赛', path: '/Contest/LeetCode/WC238.md' },
                        { title: '第 237 场周赛', path: '/Contest/LeetCode/WC237.md' },
                        { title: '第 236 场周赛', path: '/Contest/LeetCode/WC236.md' },
                        { title: '第 235 场周赛', path: '/Contest/LeetCode/WC235.md' },
                        { title: '第 234 场周赛', path: '/Contest/LeetCode/WC234.md' },
                        { title: '第 233 场周赛', path: '/Contest/LeetCode/WC233.md' },
                        { title: '第 232 场周赛', path: '/Contest/LeetCode/WC232.md' },
                        { title: '第 231 场周赛', path: '/Contest/LeetCode/WC231.md' },
                        { title: '第 230 场周赛', path: '/Contest/LeetCode/WC230.md' },
                        { title: '第 229 场周赛', path: '/Contest/LeetCode/WC229.md' },
                        { title: '第 228 场周赛', path: '/Contest/LeetCode/WC228.md' },
                        { title: '第 227 场周赛', path: '/Contest/LeetCode/WC227.md' },
                        { title: '第 226 场周赛', path: '/Contest/LeetCode/WC226.md' },
                        { title: '第 225 场周赛', path: '/Contest/LeetCode/WC225.md' },
                        { title: '第 224 场周赛', path: '/Contest/LeetCode/WC224.md' },
                        { title: '第 223 场周赛', path: '/Contest/LeetCode/WC223.md' },
                        { title: '第 222 场周赛', path: '/Contest/LeetCode/WC222.md' },
                        { title: '第 221 场周赛', path: '/Contest/LeetCode/WC221.md' },
                    ]
                },
                {
                    title: '双周赛',
                    collapsable: true,
                    children: [
                        { title: '第 73 场双周赛', path: '/Contest/LeetCode/BWC73.md' },
                        { title: '第 72 场双周赛', path: '/Contest/LeetCode/BWC72.md' },
                        { title: '第 71 场双周赛', path: '/Contest/LeetCode/BWC71.md' },
                        { title: '第 70 场双周赛', path: '/Contest/LeetCode/BWC70.md' },
                        { title: '第 69 场双周赛', path: '/Contest/LeetCode/BWC69.md' },
                        { title: '第 68 场双周赛', path: '/Contest/LeetCode/BWC68.md' },
                        { title: '第 67 场双周赛', path: '/Contest/LeetCode/BWC67.md' },
                        { title: '第 66 场双周赛', path: '/Contest/LeetCode/BWC66.md' },
                        { title: '第 65 场双周赛', path: '/Contest/LeetCode/BWC65.md' },
                        { title: '第 64 场双周赛', path: '/Contest/LeetCode/BWC64.md' },
                        { title: '第 63 场双周赛', path: '/Contest/LeetCode/BWC63.md' },
                        { title: '第 62 场双周赛', path: '/Contest/LeetCode/BWC62.md' },
                        { title: '第 61 场双周赛', path: '/Contest/LeetCode/BWC61.md' },
                        { title: '第 60 场双周赛', path: '/Contest/LeetCode/BWC60.md' },
                        { title: '第 58 场双周赛', path: '/Contest/LeetCode/BWC58.md' },
                        { title: '第 57 场双周赛', path: '/Contest/LeetCode/BWC57.md' },
                        { title: '第 56 场双周赛', path: '/Contest/LeetCode/BWC56.md' },
                        { title: '第 54 场双周赛', path: '/Contest/LeetCode/BWC54.md' },
                        { title: '第 53 场双周赛', path: '/Contest/LeetCode/BWC53.md' },
                        { title: '第 51 场双周赛', path: '/Contest/LeetCode/BWC51.md' },
                        { title: '第 49 场双周赛', path: '/Contest/LeetCode/BWC49.md' },
                        { title: '第 48 场双周赛', path: '/Contest/LeetCode/BWC48.md' },
                        { title: '第 47 场双周赛', path: '/Contest/LeetCode/BWC47.md' },
                        { title: '第 46 场双周赛', path: '/Contest/LeetCode/BWC46.md' },
                        { title: '第 45 场双周赛', path: '/Contest/LeetCode/BWC45.md' },
                        { title: '第 44 场双周赛', path: '/Contest/LeetCode/BWC44.md' },
                        { title: '第 43 场双周赛', path: '/Contest/LeetCode/BWC43.md' },
                        { title: '第 42 场双周赛', path: '/Contest/LeetCode/BWC42.md' },
                        { title: '第 41 场双周赛', path: '/Contest/LeetCode/BWC41.md' },
                        { title: '第 30 场双周赛', path: '/Contest/LeetCode/BWC30.md' },
                    ]
                }
            ],
            '/Contest/CodeForces/': [
                {
                    title: 'Round',
                    collapsable: true,
                    children: [
                        { title: 'CodeForces Round 764', path: '/Contest/CodeForces/CR764.md' },
                    ]
                }
            ],
        }
    },
    markdown: {
        lineNumbers: true,
        extendMarkdown: md => {
            md.use(require('@iktakahiro/markdown-it-katex'));
        },
    },
    head: [
        [
            'link',
            {
                rel: 'stylesheet',
                href:
                    'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.11.1/katex.min.css',
            },
        ],
        [
            'link',
            {
                rel: 'stylesheet',
                href:
                    'https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/4.0.0/github-markdown.min.css',
            },
        ],
    ],
}