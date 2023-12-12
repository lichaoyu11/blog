export default {
    title: "Thinking in Domain Driven Design",
    description: "悟道领域驱动设计",
    base: "/",
    head: [
        ['link', {rel: 'icon', href: '/favicon.ico'}]
    ],
    themeConfig: {
        outline: 'deep',
        socialLinks: [
            {icon: "github", link: "https://github.com/feiniaojin/Thinking-in-DDD"},
        ],
        footer: {
            copyright: "京ICP备17012814号-1 Copyright © 2020-present Qin Yujie",
        },
        nav: [
            {
                text: "主页",
                link: "/0.0.md",
                activeMatch: "/",
            },
            {
                text: "开源项目",
                link: "https://doc.feiniaojin.com",
            }
        ],
        sidebar: [
            {
                items: [
                    {
                        text: "README",
                        link: "/0.0.md",
                    },
                ],
            },
            {
                text: "前言",
                collapsible: true,
                items: [
                    {
                        text: "作者简介",
                        link: "/author.md",
                    },
                    {
                        text: "学习交流",
                        link: "/0.1.md",
                    },
                    {
                        text: "知识答疑",
                        link: "/0.2.md",
                    }
                ],
            },
            {
                text: "附录",
                collapsible: true,
                items: [
                    {
                        text: "随书示例代码",
                        link: "/samples.md",
                    }
                ],
            },
        
        ],
    },
};
