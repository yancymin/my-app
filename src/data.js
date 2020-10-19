import card_1 from "./assets/cards/1.png";
import card_2 from "./assets/cards/2.png";
import card_3 from "./assets/cards/3.png";
import card_4 from "./assets/cards/4.png";
import designPr_1 from "./assets/designPr/1.png";
import designPr_2 from "./assets/designPr/2.png";
import designPr_3 from "./assets/designPr/3.png";
import designPr_4 from "./assets/designPr/4.png";
import designer from "./assets/getStarted/designer.png";
import engineer from "./assets/getStarted/engineer.png";
import blog_pic_1 from "./assets/blog/pic-1.png";
import blog_pic_2 from "./assets/blog/pic-2.png";
import blog_pic_3 from "./assets/blog/pic-3.png";
import blog_pic_4 from "./assets/blog/pic-4.png";
import blog_pic_5 from "./assets/blog/pic-5.png";
import { featureIcon_1, featureIcon_2, featureIcon_3, featureIcon_4 } from "../src/assets/svg";

export const data_nav = ["设计", "组件", "主题", "资源", "团队"];
export const sectionTitles = [
    ["设计与开发", "开始使用 Arco Design"],
    [
        "设计原则",
        "浪漫与务实",
        "务实是同理心，浪漫是想象力。务实是通过 Arco Design 去解决大部分需求，最大程度提升效率。让设计师与开发者能去做更「浪漫」的发挥想象力事情。",
    ],
    ["组件系统", "灵活全面的组件库", "Arco Design 目前支持 React、Vue、Flutter 三种前端框架，设计系统中每个组件都满足特定的交互与UI 需求，是创造极致用户体验的基础。"],
    ["快速上手", "你是 <strong>设计师</strong> or <strong>工程师</strong>？"],
    ["工具与资源", "完备的生态", "包含设计资源、图标库等在内的完善生态，让极致体验触及产品中的每一处细节。"],
    ["最新文章", "我们的博客"]
];
export const data_start = [
    {
        title: "组件系统",
        des:
            "Arco Design 包含了众多精心设计的组件，覆盖主流前端框架，让各路开发者都能得心应手。",
        btn: ["快速上手", "React.js", "Flutter Web", "Vue.js"],
        img: card_1,
    },
    {
        title: "完备的生态",
        des:
            "包含设计资源、图标库等在内的完善生态，让极致体验触及产品中的每一处细节。",
        btn: "了解更多",
        img: card_2,
    },
    {
        title: "设计指南",
        des:
            "了解 Arco Design 的设计思想以及我们如何将其应用于整个设计系统，这里有包括全局色、文字、图标和布局的指南。",
        btn: "了解更多",
        img: card_3,
    },
    {
        title: "社区与贡献",
        des: "Arco Design System 即将开源，如果你有任何意见请随时与我们联系。",
        btn: "了解更多",
        img: card_4,
    },
];

export const data_designPr = [
    {
        title: "一致 Agreement",
        des: "一致的设计产生品牌信赖感",
        img: designPr_2,
    },
    {
        title: "韵律 Rhythm",
        des: "跳动的韵律构建字节的美感",
        img: designPr_3,
    },
    {
        title: "清晰 Clear",
        des: "清晰的指向亦是效率的提升",
        img: designPr_1,
    },
    {
        title: "开放 Open",
        des: "开放包容是解决问题的思路",
        img: designPr_4,
    },
];

export const data_getStarted = [
    {
        title: "设计师",
        des: "使用 Arco UI 套件进行界面设计",
        img: designer,
    },
    {
        title: "工程师",
        des: "开始使用 Arco 组件库构建你的项目",
        img: engineer
    }
];

export const data_tools = [
    {
        title: "Arco Theme Lab",
        des: "主题实验室",
        tag: "主题",
    },
    {
        title: "Arco Charts Library",
        des: "开箱即用的 React 图表库",
        tag: "图表",
    },
    {
        title: "Arco Design Pro",
        des: "通用页面的最佳实践",
        tag: "模版",
    },
    {
        title: "Arco Motion",
        des: "组件动效库及规范",
        tag: "动效",
    },
    {
        title: "Arco Font Library",
        des: "字体配置平台",
        tag: "字体",
    },
    {
        title: "Arco Illustration Library",
        des: "平台插画库",
        tag: "插画",
    },
]

export const data_blog = [
    {
        img: blog_pic_1,
        title: "Arco 设计语言",
        des: "设计系统和音乐谱曲一样有着韵律之美,对每个信息模信息模块的排版的考量块的排版的对元素之间重复与对比等规律的潜在...",
    },
    {
        img: blog_pic_2,
        title: "数据可视化探索",
        des: "目前以图形化设计资产的形式和大家见面，使用 ETCG 的思路设计（ETCG 分别是 案例 example ，模板template..",
    },
    {
        img: blog_pic_3,
        title: "写给设计师的栅格指南",
        des: "常见的栅格系统通常被划分为 12 栅格或 24 栅格，划分的格子越多，承载的内容越精细。通常，在信息繁杂的中...",
    },
    {
        img: blog_pic_4,
        title: "用户故事地图浅析",
        des: "中后台产品大多通过产品化工具来给用户提效，随着用户的应用场景开始延伸到线上线下各个角落，设计师也开始...",
    },
    {
        img: blog_pic_5,
        title: "情感化设计",
        des: "之前跟用户聊天，他说用某个产品经常有种想离职的冲动，但每天却不得不继续使用，于是我们想探究造成...",
    },
]

export const data_footer = {
    main: [
        {
            title: "设计",
            links: ["设计语言", "设计原则"]
        },
        {
            title: "组件",
            links: ["技术文档", "用法示例", "最佳实践", "动效规范"]
        },
        {
            title: "资源",
            links: ["图标库", "图表库", "插画库", "字体库"]
        },
        {
            title: "社区",
            links: ["知乎专栏", "Awesome Arco Design", "常见问题"]
        },
        {
            title: "关于 Arco",
            links: ["团队介绍", "加入我们"]
        },
    ],
    input: {
        feedback: {
            title: "反馈",
            des: "我们期待看到你的反馈，交流让 Arco 更好。",
            btn: "意见反馈"
        },
        newsletter: {
            title: "邮件订阅",
            des: "欢迎订阅我们的邮件推送。",
            btn: "订阅",
            placeholder: "输入邮箱订阅"
        }
    },
    other: "2020 Ⓡ ByteDance Co., Ltd. All rights reserved."
}

export const data_feature = [
    {
        title: "支持主流前端框架",
        des: "覆盖 React、Vue、Flutter 三种前端框架，满足项目的技术栈需求。",
        img: featureIcon_1
    },
    {
        title: "丰富的组件类型",
        des: "几十种企业级业务常用组件，深入业务场景的每个细节。",
        img: featureIcon_2
    },
    {
        title: "Figma 设计资源库",
        des: "设计资源库和前端代码无缝对齐，设计师快速上手无压力。",
        img: featureIcon_3
    },
    {
        title: "支持主题定制",
        des: "使用 Arco Theme Lab 主题实验室，让 Arco UI 更贴合你的品牌。",
        img: featureIcon_4
    },
]