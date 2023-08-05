<template>
    <div class="arch-page-product-container">

        <!-- <div class="arch-page-header">
            <div class="arch-page-title">Google Cloud解决方案</div>
            <div class="arch-page-sub-title">利用基于 AI 技术并以行业需求为着眼点的产品和服务组合，解决您最棘手的业务难题。与销售人员</div>
        </div> -->

        <div class="arch-page-panel">
            <div class="arch-page-items-panel" v-for="item in architectureList" :key="item.id">
                <div class="arch-page-box">{{ item.model }}</div>
                <div class="arch-page-box-desc">{{ item.desc }}</div>
                <div class="item-list-box">
                    <ul>
                        <li class="arch-page-item" v-for="i in item.services" :key="i.id">
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
            architectureList: [
                {
                    "id": 1,
                    "model": "产品架构",
                    "desc": "核心框架模块包括核心开发框架、前端开发框架（桌面）和前端开发框架（移动）。",
                    "services": [
                        {
                            "id": 1,
                            "name": "核心框架",
                            "desc": "用于核心开发的框架，提供基础功能和工具支持。",
                            "code": "alinesno-infra-common"
                        },
                        {
                            "id": 2,
                            "name": "基础服务",
                            "desc": "用于桌面前端开发的框架，提供界面组件和交互功能。",
                            "code": "alinesno-infra-ui"
                        },
                        {
                            "id": 3,
                            "name": "数据服务",
                            "desc": "处理数据的服务，包括数据存储、查询和分析。",
                            "code": ""
                        },
                        {
                            "id": 4,
                            "name": "智能服务",
                            "desc": "提供智能化功能和算法支持，如机器学习和自然语言处理。",
                            "code": ""
                        },
                        {
                            "id": 5,
                            "name": "运维服务",
                            "desc": "负责系统的运行和维护，包括监控、日志和故障处理。",
                            "code": ""
                        },
                        {
                            "id": 6,
                            "name": "业务服务",
                            "desc": "实现具体业务功能的服务，如用户管理和订单处理。",
                            "code": ""
                        },
                        {
                            "id": 7,
                            "name": "运营服务",
                            "desc": "支持运营活动的服务，如推广、营销和数据分析。",
                            "code": ""
                        }
                    ]
                },
                {
                    "id": 2,
                    "model": "技术架构",
                    "desc": "技术架构模块包括平台架构、技术架构、服务架构、数据架构、网关架构、安全架构、部署架构、持续集成架构、运维管理架构和运营架构。",
                    "services": [
                        {
                            "id": 1,
                            "name": "平台架构",
                            "desc": "定义整个平台的基本架构，包括硬件设施、操作系统和基础设施。",
                            "code": ""
                        },
                        {
                            "id": 2,
                            "name": "技术架构",
                            "desc": "定义系统中各个技术组件之间的关系和交互方式，确保系统的稳定性和可扩展性。",
                            "code": ""
                        },
                        {
                            "id": 3,
                            "name": "服务架构",
                            "desc": "设计系统中各个服务的组织结构和通信方式，确保服务之间的协同工作。",
                            "code": ""
                        },
                        {
                            "id": 4,
                            "name": "数据架构",
                            "desc": "定义系统中数据的组织方式和存储结构，确保数据的安全性和高效性。",
                            "code": ""
                        },
                        {
                            "id": 5,
                            "name": "网关架构",
                            "desc": "提供系统与外部系统之间的接口和通信方式，确保系统与外部系统的互操作性。",
                            "code": ""
                        },
                        {
                            "id": 6,
                            "name": "安全架构",
                            "desc": "设计系统的安全策略和机制，确保系统的安全性和防护能力。",
                            "code": ""
                        },
                        {
                            "id": 7,
                            "name": "部署架构",
                            "desc": "定义系统的部署方式和环境配置，确保系统的可靠性和可维护性。",
                            "code": ""
                        },
                        {
                            "id": 8,
                            "name": "持续集成架构",
                            "desc": "建立持续集成和持续交付的流程和环境，确保系统的快速交付和质量保证。",
                            "code": ""
                        },
                        {
                            "id": 9,
                            "name": "运维管理架构",
                            "desc": "定义系统的运维管理策略和工具，确保系统的稳定运行和故障恢复。",
                            "code": ""
                        },
                        {
                            "id": 10,
                            "name": "运营架构",
                            "desc": "设计系统的运营策略和指标体系，确保系统的业务价值和用户满意度。",
                            "code": ""
                        }
                    ]
                },
                {
                    "id": 3,
                    "model": "服务规划",
                    "desc": "服务规划模块包括核心框架、基础服务、数据服务、智能服务、运维服务、业务服务和运营服务。",
                    "services": [
                        {
                            "id": 1,
                            "name": "核心框架",
                            "desc": "提供系统的核心功能和基础设施支持，是其他服务的基础。",
                            "code": ""
                        },
                        {
                            "id": 2,
                            "name": "基础服务",
                            "desc": "包括用户管理、权限控制、日志记录等基础功能，为其他服务提供支持。",
                            "code": ""
                        },
                        {
                            "id": 3,
                            "name": "数据服务",
                            "desc": "负责数据的存储、查询和分析，为系统提供数据支持和数据处理能力。",
                            "code": ""
                        },
                        {
                            "id": 4,
                            "name": "智能服务",
                            "desc": "提供智能化的功能和算法支持，如机器学习、自然语言处理等。",
                            "code": ""
                        },
                        {
                            "id": 5,
                            "name": "运维服务",
                            "desc": "负责系统的运行和维护，包括监控、日志管理、故障处理等。",
                            "code": ""
                        },
                        {
                            "id": 6,
                            "name": "业务服务",
                            "desc": "实现具体业务功能，如订单处理、支付管理、用户推荐等。",
                            "code": ""
                        },
                        {
                            "id": 7,
                            "name": "运营服务",
                            "desc": "支持运营活动的服务，如数据分析、营销推广等。",
                            "code": ""
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
.arch-page-product-container {
    width: 100%;
    float: left;
    margin-top: 30px;

    .arch-page-header {
        padding: 10px 0px;
        margin-bottom: 30px;


    }
        .arch-page-title {
            font-size: 30px;
            font-weight: bold;
            margin-bottom: 20px;
        }

        .arch-page-items-panel {
            margin-bottom: 30px;
            float: left;
            width: 100%;
        }

        .arch-page-box {
            font-size: 30px;
            font-weight: bold;
            padding: 10px 0px;
        }

        .arch-page-box-desc {
            font-size: 16px;
            line-height: 30px;
            padding: 10px 0px;
            margin-bottom: 10px;
        }
        .item-list-box {
            float: left;
            width: 100%;

            ul {
                margin: 0px;
                padding: 0px;

                li.arch-page-item {
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