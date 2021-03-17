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
                        { title: '第 47 场双周赛', path: '/Contest/LeetCode/BWC47.md' },
                        { title: '第 46 场双周赛', path: '/Contest/LeetCode/BWC46.md' },
                        { title: '第 45 场双周赛', path: '/Contest/LeetCode/BWC45.md' },
                        { title: '第 44 场双周赛', path: '/Contest/LeetCode/BWC44.md' },
                        { title: '第 43 场双周赛', path: '/Contest/LeetCode/BWC43.md' },
                        { title: '第 42 场双周赛', path: '/Contest/LeetCode/BWC42.md' },
                    ]
                }
            ]
        },
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