<template>
    <div class="operation-page-product-container">

        <!-- <div class="operation-page-header">
            <div class="operation-page-title">AIP基设服务解决方案</div>
            <div class="operation-page-sub-title">利用基于 AI 技术并以行业需求为着眼点的产品和服务组合，解决您最棘手的业务难题。与销售人员</div>
        </div> -->

        <div class="operation-page-panel">
            <div class="operation-page-items-panel" v-for="item in operationList" :key="item.id">
                <div class="operation-page-box">{{ item.model }}</div>
                <div class="operation-page-box-desc">{{ item.desc }}</div>
                <div class="item-list-box">
                    <ul>
                        <li class="operation-page-item" v-for="i in item.services" :key="i.id">
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
            operationList: [
                {
                    "id": 1,
                    "model": "部署架构",
                    "desc": "部署架构是指在系统开发完成后，将系统部署到相应的环境中的架构设计。它包括系统的部署方式、部署流程、部署工具等。",
                    "services": [
                        {
                            "id": 1,
                            "name": "部署架构",
                            "desc": "部署架构是指系统的整体部署方案，包括网络拓扑、系统组件的部署位置等。",
                            "code": ""
                        },
                        {
                            "id": 2,
                            "name": "在线部署",
                            "desc": "在线部署是指通过网络将系统部署到目标环境中，实现快速、便捷的部署方式。",
                            "code": ""
                        },
                        {
                            "id": 3,
                            "name": "环境搭建",
                            "desc": "环境搭建是指在部署系统之前，需要搭建相应的环境，包括数据库、中间件等。",
                            "code": ""
                        }
                    ]
                },
                {
                    "id": 2,
                    "model": "环境部署",
                    "desc": "环境部署是指将系统所需的各种服务和组件部署到相应的环境中，以支持系统的正常运行。",
                    "services": [
                        {
                            "id": 1,
                            "name": "服务器配置",
                            "desc": "服务器是指用于承载系统的硬件设备，提供计算、存储和网络等资源。",
                            "code": ""
                        },
                        {
                            "id": 2,
                            "name": "Docker部署",
                            "desc": "Docker部署是指使用Docker容器化技术将系统的各个组件打包成镜像。",
                            "code": ""
                        },
                        {
                            "id": 3,
                            "name": "Kubernetes部署",
                            "desc": "Kubernetes部署是指使用Kubernetes容器编排平台管理和部署系统的容器化组件。",
                            "code": ""
                        },
                        {
                            "id": 4,
                            "name": "Jenkins部署",
                            "desc": "Jenkins部署是指使用Jenkins持续集成工具进行系统的自动化部署和集成。",
                            "code": ""
                        },
                        {
                            "id": 5,
                            "name": "MySQL部署",
                            "desc": "MySQL部署是指将MySQL数据库部署到目标环境中，以支持系统对数据的存储和管理。",
                            "code": ""
                        },
                        {
                            "id": 6,
                            "name": "MongoDB部署",
                            "desc": "MongoDB部署是指部署到目标环境中，以支持系统对非结构化数据的存储和管理。",
                            "code": ""
                        },
                        {
                            "id": 7,
                            "name": "Kafka部署",
                            "desc": "Kafka部署是指将Kafka消息队列系统部署到目标环境中，以支持系统之间的异步通信。",
                            "code": ""
                        },
                        {
                            "id": 8,
                            "name": "MinIO部署",
                            "desc": "MinIO部署是指将以支持系统对大规模对象数据的存储和管理。",
                            "code": ""
                        },
                        {
                            "id": 9,
                            "name": "ElasticSearch部署",
                            "desc": "ElasticSearch部署是指以支持系统的全文搜索和数据分析功能。",
                            "code": ""
                        },
                        {
                            "id": 10,
                            "name": "Node.js部署",
                            "desc": "Node.js部署是指以支持系统的后端JavaScript开发和运行。",
                            "code": ""
                        },
                        {
                            "id": 11,
                            "name": "JDK部署",
                            "desc": "JDK部署是指将Java开发工具包部署到目标环境中，以支持系统的Java开发和运行。",
                            "code": ""
                        },
                        {
                            "id": 12,
                            "name": "Redis部署",
                            "desc": "Redis部署是指以支持系统的高速缓存和数据存储功能。",
                            "code": ""
                        },
                        {
                            "id": 13,
                            "name": "Doris部署",
                            "desc": "Doris部署是指以支持系统的海量数据存储和实时分析功能。",
                            "code": ""
                        },
                        {
                            "id": 14,
                            "name": "Hive部署",
                            "desc": "Hive部署是指以支持系统的大数据存储和查询功能。",
                            "code": ""
                        },
                        {
                            "id": 15,
                            "name": "Flink部署",
                            "desc": "Flink部署是指以支持系统的实时数据处理和分析功能。",
                            "code": ""
                        },
                        {
                            "id": 16,
                            "name": "Hadoop部署",
                            "desc": "Hadoop部署是指将分布式存储和计算框架部署到目标环境。",
                            "code": ""
                        },
                        {
                            "id": 17,
                            "name": "Prometheus部署",
                            "desc": "Prometheus部署是指将Prometheus监控系统部署到目标环境中。",
                            "code": ""
                        }
                    ]
                },
                {
                    "id": 3,
                    "model": "运维任务",
                    "desc": "运维任务是指对系统进行监控、巡检和预警等操作，以确保系统的稳定运行。",
                    "services": [
                        {
                            "id": 1,
                            "name": "环境监控",
                            "desc": "环境监控是指对系统所在环境的资源使用情况、性能指标等进行实时监控",
                            "code": ""
                        },
                        {
                            "id": 2,
                            "name": "巡检任务",
                            "desc": "巡检任务是指定期对系统进行巡检，检查系统的配置、运行状态、日志等",
                            "code": ""
                        },
                        {
                            "id": 3,
                            "name": "集成预警监控",
                            "desc": "是指将系统的监控指标与预设的阈值进行比较，当指标超过阈值时触发预警机制",
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
.operation-page-product-container {
    width: 100%;
    float: left;
    margin-top: 30px;

    .operation-page-header {
        padding: 10px 0px;
        margin-bottom: 30px;


    }
        .operation-page-title {
            font-size: 30px;
            font-weight: bold;
            margin-bottom: 20px;
        }

        .operation-page-items-panel {
            margin-bottom: 30px;
            float: left;
            width: 100%;
        }

        .operation-page-box {
            font-size: 30px;
            font-weight: bold;
            padding: 10px 0px;
        }

        .operation-page-box-desc {
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

                li.operation-page-item {
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