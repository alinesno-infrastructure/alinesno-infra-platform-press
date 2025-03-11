<template>
    <div class="sulution-page-product-container" style="margin-top:0px">

        <div class="sulution-page-product-container" style="margin-bottom: 70px;">
            <div style="font-size: 30px;font-weight: bold;padding: 10px 0px;text-align: center;margin-bottom: 30px;">
                解决方案全景图 </div>
            <div style="background: rgb(29 30 31);border-radius: 8px;text-align: center;padding: 20px 0px;">
                <img src="https://resource.bantouyan.com/battleyeah-ai/ai-website/assets/newSolution/solution-panorama.png"
                    class="medium-zoom-image">
            </div>
        </div>

        <div class="sulution-page-panel">

            <div style="margin-bottom: 40px;width: 100%;">
                <span style="font-size: 25px;font-weight: bold;margin-right: 20px;">最佳应用实践辅助大模型落地</span>
                <span>一站式场景需求解析，基于文心大模型实现应用开发，效果评估全流程</span>
            </div>

            <div class="sulution-page-items-panel" v-for="item in solutionList" :key="item.id">
                <div class="sulution-page-box">
                    <div style="display: flex;gap: 10px;align-items: center;width: 100%;margin: auto;justify-content: center;">
                        <img :src="item.icon" style="width: 60px;border-radius: 50%;">
                        {{ item.model }}
                    </div>
                </div>
                <div class="sulution-page-box-desc">{{ item.desc }}</div>
                <div class="item-list-box">
                    <ul>
                        <li class="sulution-page-item" v-for="i in item.services" :key="i.id">
                            <div class="item-title">
                                <i :class="i.icon" style="font-size: 30px; color: rgb(211, 50, 51);"></i>
                                {{ i.name }}
                            </div>
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

            solutionList:
                [
                    {
                        "id": 1,
                        "model": "文案处理专员",
                        "icon": "http://staticok.oss-cn-hangzhou.aliyuncs.com/avatar-share/thumbnail-56d48d94-e821-45e4-8592-37981ac1a483.webp",
                        "desc": "基于大语言模型构建的智能内容工坊，覆盖企业全生命周期文字需求，实现从创意构思到文档交付的端到端自动化",
                        "services": [
                            {
                                "id": 1,
                                "name": "长文本内容生成服务",
                                "desc": "行业白皮书/专利申请书等专业文档自动生成，减少80%人工撰写时间，显著降低内容生产成本，释放人力投入高价值工作",
                                "code": "内容生成",
                                "icon": "fa-solid fa-file-alt"
                            },
                            {
                                "id": 2,
                                "name": "技术方案编写与审核",
                                "desc": "ISO标准技术文档智能生成，内置专家审核规则引擎，确保技术文档的规范性与准确性，提升技术协作效率30%+",
                                "code": "技术文档",
                                "icon": "fa-solid fa-file-code"
                            },
                            {
                                "id": 5,
                                "name": "培训文档生成与导出",
                                "desc": "操作手册/考试题库智能生成，针对不同场景智能体智能匹配，支持Office标准格式输出，培训材料制作效率提升70%",
                                "code": "培训资料",
                                "icon": "fa-solid fa-graduation-cap"
                            }
                        ]
                    },
                    {
                        "id": 2,
                        "model": "团队管理专员",
                        "icon": "http://staticok.oss-cn-hangzhou.aliyuncs.com/avatar-share/thumbnail-6046836d-7766-4bfd-a93d-85fd52d2b0e4.webp",
                        "desc": "AI驱动的数字化团队管家，实现项目管理、人力资源、知识资产的智能化协同",
                        "services": [
                            {
                                "id": 1,
                                "name": "周日报编写和统计",
                                "desc": "自动抓取项目管理平台数据生成可视化周报，支持异常任务预警，优化资源分配，提升团队协作效率25%",
                                "code": "周报管理",
                                "icon": "fa-solid fa-chart-line"
                            },
                            {
                                "id": 2,
                                "name": "工作时间段汇总导出",
                                "desc": "基于企业考勤数据的智能分析，生成人力成本优化建议，人力成本降低15%-20%，资源配置更精准",
                                "code": "时间管理",
                                "icon": "fa-solid fa-clock"
                            },
                            {
                                "id": 3,
                                "name": "项目发布自动化",
                                "desc": "通过集成自动化工具链，实现代码提交到生产部署的全链路自动化，部署效率提升80%，人为错误率下降90%",
                                "code": "自动化发布",
                                "icon": "fa-solid fa-rocket"
                            }
                        ]
                    },
                    {
                        "id": 3,
                        "model": "营销管理专员",
                        "icon": "http://staticok.oss-cn-hangzhou.aliyuncs.com/avatar-share/thumbnail-d809e295-17bb-4247-9d3e-daafedefdf6e.webp",
                        "desc": "AI营销大脑赋能精准获客，构建从内容创作到效果分析的智能营销闭环",
                        "services": [
                            {
                                "id": 1,
                                "name": "产品营销文案编写",
                                "desc": "基于用户画像的智能短视频文案生成，小红书/抖音文案自动生成，适配平台传播特性，提升品牌曝光与用户互动率50%",
                                "code": "软文营销",
                                "icon": "fa-solid fa-video"
                            },
                            {
                                "id": 2,
                                "name": "品牌故事文案发布",
                                "desc": "结合行业趋势与企业基因的品牌叙事生成，支持多语言版本自动适配，增强品牌认知度，客户留存率提升35%",
                                "code": "品牌故事",
                                "icon": "fa-solid fa-book-open"
                            }
                        ]
                    },
                    {
                        "id": 4,
                        "model": "运维管理专员",
                        "icon": "http://staticok.oss-cn-hangzhou.aliyuncs.com/avatar-share/thumbnail-56d48d94-e821-45e4-8592-37981ac1a483.webp",
                        "desc": "AI驱动的智能运维体系，实现从监控预警到故障自愈的全流程自动化",
                        "services": [
                            {
                                "id": 1,
                                "name": "智能监控代理",
                                "desc": "多维度性能监控系统，支持数据可视化与异常检测，提供监控自动处理和预测机制，降低系统宕机风险70%",
                                "code": "智能监控",
                                "icon": "fa-solid fa-eye"
                            },
                            {
                                "id": 2,
                                "name": "故障诊断与修复代理",
                                "desc": "基于故障树分析的AI诊断引擎，支持自动化修复脚本执行，平均故障恢复时间缩短85%，保障业务连续性",
                                "code": "故障自愈",
                                "icon": "fa-solid fa-wrench"
                            },
                            {
                                "id": 5,
                                "name": "日志分析与报告代理",
                                "desc": "自然语言处理驱动的日志解析系统，支持根因分析与优化建议生成，运维效率提升60%，决策支持更科学",
                                "code": "日志分析",
                                "icon": "fa-solid fa-search"
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
            text-align:center;
        }

        .sulution-page-box-desc {
            font-size: 16px;
            padding: 10px 0px;
            text-align:center;
            line-height: 30px;
            margin-bottom: 10px;
        }
        .item-list-box {
            float: left;
            width: 100%;
            margin-top: 20px;
            margin-bottom: 30px;

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
                    height:130px;
                    margin-right: 20px;
                    margin-bottom: 20px;

                    .item-title {
                        color: #202124;
                        margin: 0;
                        word-wrap: normal;
                        font-size: 23px;
                        font-weight: bold;
                        letter-spacing: normal;
                        line-height: 28px;
                        margin-bottom: 15px;
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
