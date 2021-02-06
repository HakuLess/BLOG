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
                        { title: '第 226 场周赛', path: '/Contest/LeetCode/WC226.md' },
                        { title: '第 225 场周赛', path: '/Contest/LeetCode/WC225.md' },
                    ]
                },
                {
                    title: '双周赛',
                    collapsable: true,
                    children: [
                        { title: '第 45 场双周赛', path: '/Contest/LeetCode/BWC45.md' },
                        { title: '第 44 场双周赛', path: '/Contest/LeetCode/BWC44.md' },
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