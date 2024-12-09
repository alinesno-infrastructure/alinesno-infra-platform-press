<template>
    <div class="sulution-page-product-container">

        <div class="sulution-page-panel">
            <div class="sulution-page-items-panel" v-for="item in solutionList" :key="item.id">
                <div class="sulution-page-box">{{ item.model }}</div>
                <div class="sulution-page-box-desc">评估、规划、实施和衡量软件实践与功能，从而对贵组织的业务应用组合进行现代化改造和简化。</div>
                <div class="item-list-box">
                    <ul>
                        <li class="sulution-page-item" v-for="i in item.services" :key="i.id">
                            <div class="item-title">{{ i.name }}</div>
                            <div class="item-desc">{{ i.desc }}</div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    </div>
</template>

<script>

export default {
    data() {
        return {

        solutionList: [
            {
                "id": 1,
                "model": "文案编写",
                "services": [
                    {
                        "id": 1,
                        "name": "长文本内容生成服务",
                        "desc": "利用先进的自然语言处理技术，如行业报告、技术文档等，减轻人工撰写负担。",
                        "code": "内容生成"
                    },
                    {
                        "id": 2,
                        "name": "技术方案编写与审核",
                        "desc": "提供专业的技术方案编写和审核服务，确保所有技术文档的专业性和准确性。",
                        "code": "技术文档"
                    },
                    {
                        "id": 3,
                        "name": "标书分析编写及Word导出",
                        "desc": "针对不同项目的具体需求，定制化编写标书，并支持直接导出Word格式。",
                        "code": "标书编写"
                    },
                    {
                        "id": 4,
                        "name": "文字转语音服务",
                        "desc": "将文本转换成自然流畅的语音输出，适用于有声书籍、在线教育等多种场景。",
                        "code": "TTS"
                    },
                    {
                        "id": 5,
                        "name": "培训文档生成与导出",
                        "desc": "创建详细的培训材料，包括但不限于操作指南等，并支持多种格式导出。",
                        "code": "培训资料"
                    }
                ]
            },
            {
                "id": 2,
                "model": "团队管理",
                "services": [
                    {
                        "id": 1,
                        "name": "周日报编写和统计",
                        "desc": "自动化收集并汇总团队成员每周的工作进展，生成直观易懂的周报。",
                        "code": "周报管理"
                    },
                    {
                        "id": 2,
                        "name": "工作时间段汇总导出",
                        "desc": "记录团队成员的工作时间段，自动生成汇总报表，便于人力资源规划和绩效评估。",
                        "code": "时间管理"
                    },
                    {
                        "id": 3,
                        "name": "项目发布自动化",
                        "desc": "通过集成持续集成/持续部署（CI/CD）工具，提高效率，减少人为错误。",
                        "code": "自动化发布"
                    }
                ]
            },
            {
                "id": 3,
                "model": "营销管理",
                "services": [
                    {
                        "id": 1,
                        "name": "产品软文卖点发布",
                        "desc": "撰写吸引人的产品软文，突出产品的核心卖点，有效促进市场推广，增加品牌曝光度。",
                        "code": "软文营销"
                    },
                    {
                        "id": 2,
                        "name": "品牌故事文案发布",
                        "desc": "构建独特的品牌故事，通过富有感染力的文字传递品牌价值。",
                        "code": "品牌故事"
                    }
                ]
            },
             {
                    "id": 4,
                    "model": "运维管理",
                    "services": [
                        {
                            "id": 1,
                            "name": "智能监控代理",
                            "desc": "多个智能监控代理，实时收集系统和应用的性能数据，自动发现异常情况并发出警报。",
                            "code": "智能监控"
                        },
                        {
                            "id": 2,
                            "name": "故障诊断与修复代理",
                            "desc": "当智能监控代理检测到异常时，故障诊断代理会立即启动，分析问题根源。",
                            "code": "故障自愈"
                        },
                        {
                            "id": 5,
                            "name": "日志分析与报告代理",
                            "desc": "集中处理来自不同来源的日志信息，使用自然语言处理技术挖掘有价值的信息。",
                            "code": "日志分析"
                        }
                    ]
                }
        ]

        }
    },
    computed: {
    },
    methods: {
        clickCoding(tag) {
            ga('send', 'click', 'e.coding', 'Action', tag)
        }
    }
}

</script>

<style lang="stylus">
.sulution-page-product-container {
    width: 100%;
    float: left;
    margin-top: 30px;

    .sulution-page-header {
        padding: 10px 0px;
        margin-bottom: 30px;


    }
        .sulution-page-title {
            font-size: 30px;
            font-weight: bold;
            margin-bottom: 20px;
        }

        .sulution-page-items-panel {
            margin-bottom: 30px;
            float: left;
            width: 100%;
        }

        .sulution-page-box {
            font-size: 30px;
            font-weight: bold;
            padding: 10px 0px;
        }

        .sulution-page-box-desc {
            font-size: 16px;
            padding: 10px 0px;
            line-height: 30px;
            margin-bottom: 10px;
        }
        .item-list-box {
            float: left;
            width: 100%;

            ul {
                margin: 0px;
                padding: 0px;

                li.sulution-page-item {
                    list-style: none;
                    float: left;
                    width: calc(33% - 70px);
                    padding: 24px;
                    box-shadow: 0 0 0 0 transparent;
                    border: 1px solid #dadce0;
                    border-radius: 8px;
                    margin-right: 20px;
                    margin-bottom: 20px;

                    .item-title {
                        color: #202124;
                        margin: 0;
                        word-wrap: normal;
                        font-size: 20px;
                        font-weight: 500;
                        letter-spacing: normal;
                        line-height: 28px;
                        margin-bottom: 10px;
                    }

                    .item-desc {
                        text-rendering: optimizeLegibility;
                        color: #5f6368;
                        font-size: 16px;
                        font-weight: 400;
                        letter-spacing: .1px;
                        line-height: 24px;
                    }
                }
            }
        }
}
</style>
