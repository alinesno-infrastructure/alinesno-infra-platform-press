<template>
    <div class="document-page-product-container">

        <div class="document-page-panel">
            <div class="document-page-items-panel" v-for="item in productDocumentList" :key="item.id">
                <div class="document-page-box">{{ item.model }}</div>
                <div class="document-page-box-desc">评估、规划、实施和衡量软件实践与功能，从而对贵组织的业务应用组合进行现代化改造和简化。</div>
                <div class="item-list-box">
                    <ul>
                        <li class="document-page-item" v-for="i in item.services" :key="i.id">
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
            productDocumentList:
                [
                    {
                        "id": 5,
                        "model": "基础服务",
                        "desc": "基础服务模块包括权限配置服务、代码生成器、分布式配置服务、事务消息服务、通知管理服务、存储管理服务、单点登录服务、网关配置服务、安全验证码服务、IM消息服务、邮箱管理服务、文档搜索服务、分布式ID服务、敏感词过滤服务、支付服务、内容服务和文档查看服务。",
                        "services": [
                            {
                                "id": 5,
                                "name": "权限配置服务",
                                "desc": "用于配置权限的服务，管理用户权限和角色权限",
                                "code": "alinesno-infra-base-authority"
                            },
                            {
                                "id": 6,
                                "name": "代码生成器",
                                "desc": "用于生成代码的工具，快速生成项目代码和模块",
                                "code": "alinesno-infra-base-starter"
                            },
                            {
                                "id": 7,
                                "name": "分布式配置服务",
                                "desc": "用于分布式配置的服务，集中管理分布式系统的配置信息",
                                "code": "alinesno-infra-base-config"
                            },
                            {
                                "id": 8,
                                "name": "事务消息服务",
                                "desc": "用于处理事务消息的服务，保证消息的可靠性和一致性",
                                "code": "alinesno-infra-base-message"
                            },
                            {
                                "id": 9,
                                "name": "通知管理服务",
                                "desc": "用于管理通知的服务，发送和管理系统通知和消息",
                                "code": "alinesno-infra-base-notices"
                            },
                            {
                                "id": 10,
                                "name": "存储管理服务",
                                "desc": "用于管理存储的服务，提供文件和对象的存储管理功能",
                                "code": "alinesno-infra-base-storage"
                            },
                            {
                                "id": 11,
                                "name": "单点登录服务",
                                "desc": "用于实现单点登录的服务，提供统一的身份认证和授权功能",
                                "code": "alinesno-infra-base-identity"
                            },
                            {
                                "id": 12,
                                "name": "网关配置服务",
                                "desc": "用于配置网关的服务，管理网关的路由和过滤规则",
                                "code": "alinesno-infra-base-gateway"
                            },
                            {
                                "id": 13,
                                "name": "安全验证码服务",
                                "desc": "用于生成安全验证码的服务，防止恶意攻击和机器人行为",
                                "code": "alinesno-infra-base-validate"
                            },
                            {
                                "id": 14,
                                "name": "IM消息服务",
                                "desc": "用于处理即时消息的服务，实现实时通讯和消息推送功能",
                                "code": "alinesno-infra-base-im"
                            },
                            {
                                "id": 15,
                                "name": "邮箱管理服务",
                                "desc": "用于管理邮箱的服务，提供邮箱账号和邮件的管理功能",
                                "code": "alinesno-infra-base-email"
                            },

                            {
                                "id": 16,
                                "name": "文档搜索服务",
                                "desc": "用于搜索文档的服务，提供全文搜索和文档检索功能",
                                "code": "alinesno-infra-base-document"
                            },
                            {
                                "id": 17,
                                "name": "分布式ID服务",
                                "desc": "用于生成分布式ID的服务，保证ID的唯一性和分布式生成",
                                "code": "alinesno-infra-base-id"
                            },
                            {
                                "id": 18,
                                "name": "敏感词过滤服务",
                                "desc": "用于过滤敏感词的服务，检测和过滤文本中的敏感词汇",
                                "code": "alinesno-infra-base-sensitive"
                            },
                            {
                                "id": 19,
                                "name": "支付服务",
                                "desc": "用于处理支付的服务，提供支付接口和支付流程管理",
                                "code": "alinesno-infra-base-pay"
                            },
                            {
                                "id": 21,
                                "name": "内容服务",
                                "desc": "用于管理内容的服务，包括内容发布、内容审核和内容管理",
                                "code": "alinesno-infra-base-cms"
                            },
                            {
                                "id": 24,
                                "name": "文档查看服务",
                                "desc": "用于查看文档的服务，支持多种文档格式的在线预览",
                                "code": "alinesno-infra-base-fileshow"
                            },
                            {
                                "id": 25,
                                "name": "基设平台管理服务",
                                "desc": "用于管理基设平台的服务，提供基设平台的配置和管理功能",
                                "code": "alinesno-infra-base-platform"
                            }

                        ]
                    },
                    {
                        "id": 27,
                        "model": "数据服务",
                        "desc": "数据服务模块包括主数据服务、数据上报服务、数据集成服务、数据开发服务、实时计算服务、数据安全服务、数据总线服务、数据资产服务和数据算法服务。",
                        "services": [
                            {
                                "id": 27,
                                "name": "主数据服务",
                                "desc": "用于主数据管理的服务，集中管理和维护组织的核心数据",
                                "code": "alinesno-infra-data-mdm"
                            },
                            {
                                "id": 28,
                                "name": "数据上报服务",
                                "desc": "用于数据上报的服务，支持数据的采集、上传和存储",
                                "code": "alinesno-infra-data-report"
                            },
                            {
                                "id": 29,
                                "name": "数据集成服务",
                                "desc": "用于数据集成的服务，实现不同系统间的数据交换和整合",
                                "code": "alinesno-infra-data-pipeline"
                            },
                            {
                                "id": 30,
                                "name": "数据开发服务",
                                "desc": "用于数据开发的服务，提供数据处理和ETL流程的开发和调度",
                                "code": "alinesno-infra-data-dolphinscheduler"
                            },
                            {
                                "id": 31,
                                "name": "实时计算服务",
                                "desc": "用于实时计算的服务，支持流式数据的实时处理和计算",
                                "code": "alinesno-infra-data-stream"
                            },
                            {
                                "id": 32,
                                "name": "数据安全服务",
                                "desc": "用于数据安全的服务，保护数据的机密性和完整性",
                                "code": "alinesno-infra-data-security"
                            },
                            {
                                "id": 34,
                                "name": "数据总线服务",
                                "desc": "用于数据总线的服务，实现数据的发布、订阅和传输",
                                "code": "alinesno-infra-data-bus"
                            },
                            {
                                "id": 35,
                                "name": "数据资产服务",
                                "desc": "用于数据资产管理的服务，记录和管理组织的数据资产",
                                "code": "alinesno-infra-data-assets"
                            }
                        ]
                    },
                    {
                        "id": 38,
                        "model": "智能服务",
                        "desc": "智能服务模块包括智能推荐服务、智能搜索服务、智能语音服务、智能图像服务、智能视频服务和智能机器人服务。",
                        "services": [
                            {
                                "id": 43,
                                "name": "OCR视觉识别服务",
                                "desc": "用于OCR视觉识别的服务，实现文字和图像的识别和提取",
                                "code": "alinesno-infra-smart-ocr"
                            },
                            {
                                "id": 44,
                                "name": "自然语言识别服务",
                                "desc": "用于自然语言识别的服务，实现文本的语义理解和分析",
                                "code": "alinesno-infra-smart-nlp"
                            },
                            {
                                "id": 45,
                                "name": "GPT推理服务",
                                "desc": "用于GPT推理的服务，实现基于预训练模型的自然语言生成和推理",
                                "code": "alinesno-infra-smart-brain"
                            },
                            {
                                "id": 46,
                                "name": "流媒体识别服务",
                                "desc": "用于流媒体识别的服务，实现对音视频流的实时识别和分析",
                                "code": "alinesno-infra-smart-media"
                            }
                        ]
                    },
                    {
                        "id": 43,
                        "model": "运维服务",
                        "desc": "运维服务模块包括自动化任务服务、分布式日志服务、分布式链路跟踪服务、持续集成服务、容器管理服务和监控预警服务。",
                        "services": [
                            {
                                "id": 1,
                                "name": "自动化任务服务",
                                "desc": "用于自动化运维任务的服务，实现自动化执行和调度任务",
                                "code": "alinesno-infra-ops-scheduler"
                            },
                            {
                                "id": 2,
                                "name": "分布式日志服务",
                                "desc": "用于分布式日志管理的服务，集中收集、存储和分析日志数据",
                                "code": "alinesno-infra-ops-logback"
                            },
                            {
                                "id": 3,
                                "name": "分布式链路跟踪服务",
                                "desc": "用于分布式链路跟踪的服务，追踪和监控分布式系统中的请求链路",
                                "code": "alinesno-infra-ops-telemetry"
                            },
                            {
                                "id": 4,
                                "name": "持续集成服务",
                                "desc": "用于持续集成的服务，自动化构建、测试和部署软件",
                                "code": "alinesno-infra-ops-pipeline"
                            },
                            {
                                "id": 5,
                                "name": "容器管理服务",
                                "desc": "用于容器管理的服务，管理和编排容器化应用程序",
                                "code": "alinesno-infra-ops-container"
                            },
                            {
                                "id": 6,
                                "name": "监控预警服务",
                                "desc": "用于监控和预警的服务，实时监测系统状态并发送预警通知",
                                "code": "alinesno-infra-ops-watcher"
                            }
                        ]
                    },
                    {
                        "id": 57,
                        "model": "业务服务",
                        "desc": "业务服务模块包括实时推荐服务、实时画像服务和无代码开发服务。",
                        "services": [
                            {
                                "id": 2,
                                "name": "实时推荐服务",
                                "desc": "用于实时推荐的服务，提供实时个性化推荐功能",
                                "code": "alinesno-infra-bus-recommend"
                            },
                            {
                                "id": 3,
                                "name": "实时画像服务",
                                "desc": "用于实时画像的服务，实时分析用户行为和特征，生成用户画像",
                                "code": "alinesno-infra-bus-profiling"
                            }
                        ]
                    },
                    {
                        "id": 50,
                        "model": "运营服务",
                        "desc": "运维服务模块包括自动化任务服务、分布式日志服务、分布式链路跟踪服务、持续集成服务、容器管理服务和监控预警服务。",
                        "services": [
                            {
                                "id": 1,
                                "name": "基设平台服务",
                                "desc": "提供架构排版服务，支持快速搭建和调整系统架构",
                                "code": "alinesno-infra-plat-console"
                            },
                            {
                                "id": 2,
                                "name": "安全感知服务",
                                "desc": "用于安全感知的服务，实时监测和分析系统安全状态",
                                "code": "alinesno-infra-plat-security"
                            },
                            {
                                "id": 5,
                                "name": "移动终端服务",
                                "desc": "用于移动终端的服务，提供移动应用开发和管理功能",
                                "code": "alinesno-infra-plat-app"
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
.document-page-product-container {
    width: 100%;
    float: left;
    margin-top: 30px;

    .document-page-header {
        padding: 10px 0px;
        margin-bottom: 30px;


    }
        .document-page-title {
            font-size: 30px;
            font-weight: bold;
            margin-bottom: 20px;
        }

        .document-page-items-panel {
            margin-bottom: 30px;
            float: left;
            width: 100%;
        }

        .document-page-box {
            font-size: 30px;
            font-weight: bold;
            padding: 10px 0px;
        }

        .document-page-box-desc {
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

                li.document-page-item {
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