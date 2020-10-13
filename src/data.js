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
    ["工具与资源", "完备的生态", "包含设计资源、图标库等在内的完善生态，让极致体验触及产品中的每一处细节。"]
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
        title: "清晰",
        des: "清晰的指向亦是效率的提升",
        img: designPr_1,
    },
    {
        title: "一致",
        des: "一致的设计产生品牌信赖感",
        img: designPr_2,
    },
    {
        title: "韵律",
        des: "跳动的韵律构建字节的美感",
        img: designPr_3,
    },
    {
        title: "开放",
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
]

