module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around',
    repo: 'https://github.com/TaoXuSheng/mt-blog', // 添加 github 链接
    themeConfig: {
        // 假定 GitHub。也可以是一个完整的 GitLab 网址
        repo: 'dacaba/dacaba.github.io',
        // 如果你的文档不在仓库的根部
        docsDir: 'docs',
        // 可选，默认为 master
        docsBranch: 'master',
        // 默认为 true，设置为 false 来禁用
        editLinks: true,
        // 导航链接(navbar links)
        nav: [{
                text: 'Home',
                link: '/'
            },
            {
                text: 'foo',
                link: '/foo/'
            },
            {
                text: 'bar',
                link: '/bar/'
            },
            {
                text: 'External',
                link: 'http://www.baidu.com'
            },
        ],
        //侧边栏
        sidebar: {
            // 侧边栏在 /foo/ 上
            '/foo/': [
                '',
                'three',
                'four'
            ],
            // 侧边栏在 /bar/ 上
            '/bar/': [
                '',
                'one',
                'two'
            ],
            // 默认页面
            "/": ["/", "/config"],
        }
    }

}