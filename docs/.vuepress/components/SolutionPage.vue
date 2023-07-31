<template>
    <div class="sulution-page-product-container">

        <!-- <div class="sulution-page-header">
            <div class="sulution-page-title">Google Cloud解决方案</div>
            <div class="sulution-page-sub-title">利用基于 AI 技术并以行业需求为着眼点的产品和服务组合，解决您最棘手的业务难题。与销售人员</div>
        </div> -->

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
                        "model": "业务中台",
                        "services": [
                        {
                            "id": 1,
                            "name": "传统企业转变成业务中台解决方案",
                            "desc": "该解决方案旨在帮助传统企业实现业务中台转型。",
                            "code": "业务中台"
                        },
                        {
                            "id": 2,
                            "name": "企业业务中台建设解决方案",
                            "desc": "该解决方案旨在帮助企业建设业务中台，实现业务的集中管理和协同发展。",
                            "code": "业务中台"
                        },
                        {
                            "id": 3,
                            "name": "新旧结合业务微服务解决方案",
                            "desc": "该解决方案结合了传统业务和微服务架构，帮助企业实现业务的快速创新和灵活扩展。",
                            "code": "业务中台"
                        },
                        {
                            "id": 4,
                            "name": "企业数字化解决方案",
                            "desc": "该解决方案旨在帮助企业实现数字化转型，提升业务流程的效率和用户体验。",
                            "code": "业务中台"
                        }
                        ]
                    },
                    {
                        "id": 2,
                        "model": "数据治理",
                        "services": [
                        {
                            "id": 1,
                            "name": "数据中台建设解决方案",
                            "desc": "该解决方案旨在帮助企业建设数据中台，实现数据的集中管理、质量控制和共享应用。",
                            "code": "数据治理"
                        },
                        {
                            "id": 2,
                            "name": "数据报表分析解决方案",
                            "desc": "该解决方案旨在帮助企业实现数据报表的自动化生成和分析，提供决策支持和业务洞察。",
                            "code": "数据治理"
                        },
                        {
                            "id": 3,
                            "name": "用户画像解决方案",
                            "desc": "该解决方案旨在帮助企业构建用户画像，深入了解用户需求和行为，进行个性化推荐和精准营销。",
                            "code": "数据治理"
                        },
                        {
                            "id": 4,
                            "name": "运维应用画像解决方案",
                            "desc": "该解决方案旨在帮助企业实现运维应用的画像管理，监控应用性能和故障，提高运维效率和系统稳定性。",
                            "code": "数据治理"
                        }
                        ]
                    },
                    {
                        "id": 4,
                        "model": "运维方案",
                        "services": [
                        {
                            "id": 1,
                            "name": "自动化运维解决方案",
                            "desc": "该解决方案旨在帮助企业实现运维流程的自动化，减少人工干预，提高运维效率和可靠性。",
                            "code": "运维方案"
                        },
                        {
                            "id": 2,
                            "name": "分布式日志分析解决方案",
                            "desc": "该解决方案旨在帮助企业对分布式系统的日志进行集中管理和分析，实现故障排查和性能优化。",
                            "code": "运维方案"
                        },
                        {
                            "id": 3,
                            "name": "AI智能运维解决方案",
                            "desc": "该解决方案旨在应用人工智能技术，实现智能化的运维管理，提升系统的稳定性和可靠性。",
                            "code": "运维方案"
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
    margin-bottom: 50px;

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
            font-size: 14px;
            padding: 10px 0px;
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
                    width: calc(33% - 80px);
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