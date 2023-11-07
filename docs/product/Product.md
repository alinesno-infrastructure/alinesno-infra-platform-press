# 产品架构

## 概述

AIP是为了推动超级自动化转型和创新发展而建设的智能设施系统，通过提供开发工具、测试环境、运行平台和协作工具等功能，帮助企业提高竞争力、降低成本、支持创新和业务拓展，以及提升团队协作效率。

### 包含有哪些能力

1. 核心框架：包括核心开发框架、前端开发框架（桌面）和前端开发框架（移动），提供基础的开发工具和框架。
2. 基础服务：包括权限配置服务、代码生成器、分布式配置服务、事务消息服务、通知管理服务、存储管理服务等，提供基础的功能和服务支持。
3. 数据服务：包括主数据服务、数据上报服务、数据集成服务、数据开发服务、实时计算服务等，提供数据相关的服务和功能。
4. 智能服务：包括OCR视觉识别服务、自然语言识别服务、GPT推理服务、流媒体识别服务等，提供智能化的服务和功能。
5. 运维服务：包括自动化任务服务、分布式日志服务、分布式链路跟踪服务、持续集成服务、容器管理服务等，提供运维相关的服务和功能。
6. 业务服务：包括商品秒杀服务、实时推荐服务、实时画像服务、无代码开发服务等，提供业务相关的服务和功能。
7. 运营服务：包括基设平台服务、安全感触服务、智能运营大脑服务、AI模型管理服务、移动终端服务等，提供运营相关的服务和功能。
8. 案例：包括分布式电商系统等，提供实际应用的案例和示例。

### 可以为企业做什么

1. 提高竞争力：软件新智能设施可以帮助企业提高超级自动化能力和创新能力，从而增强在市场中的竞争力。通过建设先进的软件智能设施和平台，企业可以更高效地进行业务运营、产品研发和市场营销，提供更好的用户体验，满足客户需求。
2. 降低成本：软件新智能设施可以帮助企业降低运营成本和管理成本。通过自动化的开发流程和持续集成和部署技术，可以减少开发周期，加快软件上线速度，提高开发团队的生产力。此外，软件新智能设施还可以降低企业的IT智能设施和系统维护成本，提高资源利用效率。
3. 支持创新和业务拓展：软件新智能设施为企业提供了创新和业务拓展的平台。通过建设开放的软件智能设施和平台，企业可以与合作伙伴、开发者和创新生态系统进行紧密合作，共同推动新产品和新服务的开发和推广。软件新智能设施还可以帮助企业快速响应市场变化，灵活调整业务模式，开拓新的市场机会。
4. 提升团队协作效率：软件新智能设施可以提升企业内部团队的协作效率和沟通效率。通过建设协同办公平台、项目管理系统等软件工具，可以促进团队成员之间的信息共享和协作，提高工作效率和团队合作能力。软件新智能设施还可以支持远程办公和灵活工作模式，提供更便捷的工作方式。

企业使用软件新智能设施可以提高竞争力、降低成本、支持创新和业务拓展，以及提升团队协作效率。它是企业实现超级自动化转型和创新发展的关键举措，可以帮助企业在快速变化的市场环境中保持竞争优势。


## 产品架构

| 序号 | 模块     | 服务                     | 模块名称                             | 备注                         |
|------|----------|--------------------------|--------------------------------------|------------------------------|
| 1    | 核心框架 | 01. 核心开发框架         | alinesno-infra-common                |                              |
| 2    |          | 02. 前端开发框架（桌面） | alinesno-infra-ui                    |                              |
| 3    |          | 03. 前端开发框架（移动） | alinesno-infra-app                   |                              |
|      |          |                          |                                      |                              |
| 5    | 基础服务 | 01. 权限配置服务         | alinesno-infra-base-authority        |                              |
| 6    |          | 02. 代码生成器           | alinesno-infra-base-starter          |                              |
| 7    |          | 03. 分布式配置服务       | alinesno-infra-base-config           |                              |
| 8    |          | 04. 事务消息服务         | alinesno-infra-base-message          |                              |
| 9    |          | 05. 通知管理服务         | alinesno-infra-base-notices          |                              |
| 10   |          | 06. 存储管理服务         | alinesno-infra-base-storage          |                              |
| 11   |          | 07. 单点登陆服务         | alinesno-infra-base-identity         |                              |
| 12   |          | 08. 网关配置服务         | alinesno-infra-base-gateway          |                              |
| 13   |          | 09. 安全验证码服务       | alinesno-infra-base-validate         |                              |
| 14   |          | 10. IM消息服务           | alinesno-infra-base-im               |                              |
| 15   |          | 11. 邮箱管理服务         | alinesno-infra-base-email            |                              |
| 16   |          | 12. 文档搜索服务         | alinesno-infra-base-document         |                              |
| 17   |          | 13. 分布式ID服务         | alinesno-infra-base-id               |                              |
| 18   |          | 14. 敏感词过滤服务       | alinesno-infra-base-sensitive        |                              |
| 19   |          | 15. 支付服务             | alinesno-infra-base-pay              |                              |
| 20   |          | 16. 会员服务             | alinesno-infra-base-member           |                              |
| 21   |          | 17. 内容服务             | alinesno-infra-base-cms              |                              |
| 22   |          | 18. 商城服务             | alinesno-infra-base-shop             |                              |
| 23   |          | 19. 流程中心服务         | alinesno-infra-base-workflow         |                              |
| 24   |          | 20. 文档查看服务         | alinesno-infra-base-fileshow         |                              |
| 25   |          | 21. 基设平台管理服务     | alinesno-infra-base-platform         | 单独管理和监控，定位于管理员 |
|      |          |                          |                                      |                              |
| 27   | 数据服务 | 01. 主数据服务           | alinesno-infra-data-mdm              |                              |
| 28   |          | 02. 数据上报服务         | alinesno-infra-data-report           |                              |
| 29   |          | 03. 数据集成服务         | alinesno-infra-data-pipeline         |                              |
| 30   |          | 04. 数据开发服务         | alinesno-infra-data-dolphinscheduler |                              |
| 31   |          | 05. 实时计算服务         | alinesno-infra-data-stream            |                              |
| 32   |          | 06. 数据安全服务         | alinesno-infra-data-security         |                              |
| 33   |          | 07. 数据质量服务         | alinesno-infra-data-quality          |                              |
| 34   |          | 08. 数据总线服务         | alinesno-infra-data-bus              |                              |
| 35   |          | 09. 数据资产服务         | alinesno-infra-data-assets           |                              |
| 36   |          | 10. 数据算法服务         | alinesno-infra-data-algorithm        |                              |
|      |          |                          |                                      |                              |
| 38   | 智能服务 | 01. OCR视觉识别服务      | alinesno-infra-smart-ocr             |                              |
| 39   |          | 02. 自然语言识别服务     | alinesno-infra-smart-nlp             |                              |
| 40   |          | 03. GPT推理服务          | alinesno-infra-smart-brain           |                              |
| 41   |          | 04. 流媒体识别服务       | alinesno-infra-smart-media           |                              |
| 42   |          | 05. 智能助手服务         | alinesno-infra-smart-assistant       |                              |
| 43   |          | 06. 目标检测识别服务     | alinesno-infra-smart-detection       |                              |
|      |          |                          |                                      |                              |
| 44   | 运维服务 | 01. 自动化任务服务       | alinesno-infra-ops-scheduler         |                              |
| 45   |          | 02. 分布式日志服务       | alinesno-infra-ops-logback           |                              |
| 46   |          | 03. 分布式链路跟踪服务   | alinesno-infra-ops-telemetry         |                              |
| 47   |          | 04. 持续集成服务         | alinesno-infra-ops-pipeline          |                              |
| 48   |          | 05. 容器管理服务         | alinesno-infra-ops-container         |                              |
| 49   |          | 06. 监控预警服务         | alinesno-infra-ops-watcher           |                              |
|      |          |                          |                                      |                              |
| 57   | 业务服务 | 01. 商品秒杀服务         | alinesno-infra-bus-limit             |                              |
| 58   |          | 02. 实时推荐服务         | alinesno-infra-bus-recommend         |                              |
| 59   |          | 03. 实时画像服务         | alinesno-infra-bus-profiling         |                              |
| 60   |          | 04. 无代码开发服务       | alinesno-infra-bus-nocode            |                              |
|      |          |                          |                                      |                              |
| 50   | 运营服务 | 01. 基设平台服务         | alinesno-infra-plat-console          | 添加架构排版服务             |
| 51   |          | 02. 安全感触服务         | alinesno-infra-plat-security         |                              |
| 52   |          | 03. 智能运营大脑服务     | alinesno-infra-plat-brain            |                              |
| 54   |          | 05. 移动终端服务         | alinesno-infra-plat-app              |                              |
|      |          |                          |                                      |                              |
| 62   | 案例     | 01. 分布式电商系统       | alinesno-infra-case-shop             |                              |

## 其它
