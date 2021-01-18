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
                }, 
                {
                    title: '双周赛',
                    collapsable: true,
                    children: [
                        { title: 'BiWeekly 43', path:'/Contest/LeetCode/WC222.md'},
                    ]
                }
            ]
        },
    },
    markdown: {
        lineNumbers: true
    }
}