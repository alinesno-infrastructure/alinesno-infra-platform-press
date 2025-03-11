<template>
    <div class="crs-page-product-container">

        <!-- <div class="crs-page-header">
            <div class="crs-page-title">AIP基设服务解决方案</div>
            <div class="crs-page-sub-title">利用基于 AI 技术并以行业需求为着眼点的产品和服务组合，解决您最棘手的业务难题。与销售人员</div>
        </div> -->

        <div class="sulution-page-product-container" style="margin-bottom: 70px;margin-top:0px;">
            <div style="font-size: 30px;font-weight: bold;padding: 10px 0px;text-align: center;margin-bottom: 30px;">
                智能体产品全景图 </div>
            <div style="border-radius: 8px;text-align: center;padding: 20px 0px;">
                <img src="/product/aip_arch_product_01.jpg" style="border-radius: 5px;" class="medium-zoom-image">
            </div>
        </div>

        <div class="crs-page-panel">

            <div style="margin-bottom: 40px;width: 100%;">
                <span style="font-size: 25px;font-weight: bold;margin-right: 20px;">全链路智能体平台</span>
                <span>推动企业集成各行业场景数据、技术、工艺、开发融合人工智能</span>
            </div>

            <div class="crs-page-items-panel" v-for="item in productList" :key="item.id">
                <div class="crs-page-box">
                    <div
                        style="display: flex;gap: 10px;align-items: center;width: 100%;margin: auto;justify-content: center;">
                        <i :class="item.icon" style="font-size: 50px; color: rgb(211, 50, 51);" />
                        {{ item.model }}
                    </div>
                </div>
                <div class="crs-page-box-desc">{{ item.desc }}</div>
                <div class="item-list-box">
                    <ul>
                        <li class="crs-page-item" v-for="i in item.services" :key="i.id">
                            <div class="item-title">
                                <i :class="i.icon" style="font-size: 30px; color: rgb(211, 50, 51);"></i>
                                {{ i.name }}
                            </div>
                            <div class="item-desc">{{ i.desc }} </div>
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

            productList: [
                {
                    "id": 38,
                    "model": "智能体中枢推理",
                    "desc": "基于大模型的智能决策系统，集成自然语言处理、计算机视觉等AI能力，支撑智能体自主推理与策略生成。",
                    "icon": "fa-solid fa-brain",
                    "services": [
                        {
                            "id": 45,
                            "name": "智能体管理平台",
                            "desc": "提供高性能LLM推理引擎，支持多模态交互与复杂逻辑推理，实现智能体认知决策。",
                            "icon": "fa-solid fa-cogs",
                            "code": "alinesno-infra-smart-brain"
                        },
                        {
                            "id": 43,
                            "name": "OCR视觉识别服务",
                            "desc": "高精度图文识别引擎，支持多场景文档解析与结构化数据提取，强化智能体视觉感知。",
                            "icon": "fa-solid fa-images",
                            "code": "alinesno-infra-smart-ocr"
                        },
                        {
                            "id": 44,
                            "name": "自然语言识别服务",
                            "desc": "NLP语义理解引擎，实现文本情感分析、意图识别与知识抽取，赋能智能体语言交互。",
                            "icon": "fa-solid fa-comment",
                            "code": "alinesno-infra-smart-nlp"
                        },
                        {
                            "id": 48,
                            "name": "目标检测识别服务",
                            "desc": "基于深度学习的物体检测框架，支持视频流实时分析与异常行为识别。",
                            "icon": "fa-solid fa-magnifying-glass",
                            "code": "alinesno-infra-smart-detection"
                        }
                    ]
                },
                {
                    "id": 27,
                    "model": "智能体感知能力",
                    "desc": "构建智能体的环境感知系统，提供多源数据采集、清洗、集成与实时计算能力，支撑智能体对物理世界的全面感知。",
                    "icon": "fa-solid fa-sensor",
                    "services": [
                        {
                            "id": 27,
                            "name": "主数据服务",
                            "desc": "建立企业核心数据资产库，实现数据标准化管理与跨系统共享，保障智能体数据一致性。",
                            "icon": "fa-solid fa-database",
                            "code": "alinesno-infra-data-mdm"
                        },
                        {
                            "id": 29,
                            "name": "数据集成服务",
                            "desc": "提供ETL可视化编排工具，实现不同系统间数据的高效交换与价值融合。",
                            "icon": "fa-solid fa-exchange-alt",
                            "code": "alinesno-infra-data-pipeline"
                        },
                        {
                            "id": 30,
                            "name": "数据编排服务",
                            "desc": "基于自研的数据编排的工作流引擎，支持复杂数据处理逻辑的快速开发与调度。",
                            "icon": "fa-solid fa-code",
                            "code": "alinesno-infra-data-dolphinscheduler"
                        },
                        {
                            "id": 31,
                            "name": "实时计算服务",
                            "desc": "流式数据处理框架，支持毫秒级延迟的实时分析与决策，赋能智能体动态响应。",
                            "icon": "fa-solid fa-tachometer-fast",
                            "code": "alinesno-infra-data-stream"
                        },
                        {
                            "id": 35,
                            "name": "数据资产服务",
                            "desc": "建立数据资产目录与血缘分析体系，实现数据全生命周期管理与价值挖掘。",
                            "icon": "fa-solid fa-file-invoice",
                            "code": "alinesno-infra-data-assets"
                        }
                    ]
                },
                {
                    "id": 5,
                    "model": "智能体业务执行",
                    "desc": "构建智能体行动支撑体系，提供低代码开发工具与业务系统集成能力，实现决策结果的高效落地。",
                    "icon": "fa-solid fa-gears",
                    "services": [
                        {
                            "id": 5,
                            "name": "权限配置服务",
                            "desc": "RBAC权限管理系统，支持细粒度的智能体行为控制与安全策略配置。",
                            "icon": "fa-solid fa-lock",
                            "code": "alinesno-infra-base-authority"
                        },
                        {
                            "id": 6,
                            "name": "项目生成器",
                            "desc": "可视化代码生成工具，支持智能体功能模块的快速构建与个性化工具和技能的定制。",
                            "icon": "fa-solid fa-code-branch",
                            "code": "alinesno-infra-base-starter"
                        },
                        {
                            "id": 7,
                            "name": "分布式配置服务",
                            "desc": "集中式配置管理平台，支持智能体参数动态更新与多环境统一管控。",
                            "icon": "fa-solid fa-server",
                            "code": "alinesno-infra-base-config"
                        },
                        {
                            "id": 12,
                            "name": "网关配置服务",
                            "desc": "API网关管理系统，提供智能体服务路由、流量控制与安全防护能力。",
                            "icon": "fa-solid fa-cloud",
                            "code": "alinesno-infra-base-gateway"
                        },
                        {
                            "id": 18,
                            "name": "敏感词过滤服务",
                            "desc": "AI驱动的内容安全引擎，实时检测并过滤违规信息，保障智能体交互合规。",
                            "icon": "fa-solid fa-filter",
                            "code": "alinesno-infra-base-sensitive"
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
.crs-page-product-container {
    width: 100%;
    float: left;
    margin-top: 30px;

    .crs-page-header {
        padding: 10px 0px;
        margin-bottom: 30px;


    }
        .crs-page-title {
            font-size: 30px;
            font-weight: bold;
            margin-bottom: 20px;
        }

        .crs-page-items-panel {
            margin-bottom: 30px;
            float: left;
            width: 100%;
        }

        .crs-page-box {
            font-size: 30px;
            font-weight: bold;
            padding: 10px 0px;
        }

        .crs-page-box-desc {
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

                li.crs-page-item {
                    list-style: none;
                    float: left;
                    width: calc(33% - 70px);
                    padding: 24px;
                    box-shadow: 0 0 0 0 transparent;
                    border: 1px solid #dadce0;
                    height: 100px;
                    border-radius: 8px;
                    margin-right: 20px;
                    margin-bottom: 20px;

                    .item-title {
                        color: #202124;
                        margin: 0;
                        word-wrap: normal;
                        font-size: 23px;
                        font-weight: bold;
                        letter-spacing: normal;
                        line-height: 30px;
                        margin-bottom: 10px;
                    }

                    .item-desc {
                        text-rendering: optimizeLegibility;
                        color: #5f6368;
                        font-size: 16px;
                        font-weight: 400;
                        letter-spacing: .1px;
                        line-height: 30px;
                    }
                }
            }
        }
}
</style>
