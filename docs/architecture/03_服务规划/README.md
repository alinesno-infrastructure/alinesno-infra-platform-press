# 服务规划
## 概述

## 工程规范

为了更好的适配工程结构，这里约定工程结构如下，假设工程模块为`demo`，则定义工程结构如下:

| 序号 | 模块         | 作用           | 范围                       | 备注                                 |
|:----:|--------------|----------------|----------------------------|--------------------------------------|
| 1    | demo-facade  | 对外依赖工程包 | 接口和引用                 | 工程结构的规范为了更好的进行工程管理 |
| 2    | demo-common  | 公共包         |                            |                                      |
| 3    | demo-domain  | 领域工程服务   |                            |                                      |
| 4    | demo-api     | 对外提供接口   |                            |                                      |
| 5    | demo-adapter | 适配层         | 引用第三方和各个协议的适配 |                                      |
| 6    | demo-client  | 对外接口引用层 |                            |                                      |
| 7    | demo-boot    | 启动服务       | 配置管理                   |                                      |
| 8    | demo-admin   | 前端UI管理端   |                            |                                      |

在工程规范中，以下是对于每个模块后缀的含义解释：

1. `facade`：表示门面（Facade），用于提供对外的接口和服务。它作为模块对外的统一入口，隐藏了内部复杂的实现细节，提供简单易用的接口供其他模块调用。
2. `boot`：表示启动（Boot），用于处理模块的启动逻辑。在该模块中，通常包含了初始化、配置加载、依赖注入等启动过程的代码。
3. `domain`：表示领域（Domain），用于定义模块的核心领域模型和业务逻辑。在该模块中，通常包含了实体类、值对象、领域服务等与领域相关的代码。
4. `api`：表示接口（API），用于定义模块对外暴露的接口。在该模块中，通常包含了接口类、DTO（数据传输对象）等与外部交互的代码。
5. `adapter`：表示适配器（Adapter），用于与外部系统进行交互和适配。在该模块中，通常包含了与外部系统的接口实现、数据转换、适配器等代码。
6. `client`：表示客户端（Client），用于与模块进行交互的客户端代码。在该模块中，通常包含了调用模块提供的接口、处理响应结果等与客户端交互相关的代码。

这些模块后缀的含义可以帮助开发人员更好地理解每个模块的作用和职责，同时也有助于工程的组织和管理。

## 产品列表

| 序号 | 模块     | 服务                           | 模块名称                   | 备注                           |
| ---- | -------- | ------------------------------ | -------------------------- | ------------------------------ |
| 1    | 核心框架 | 01. 核心开发框架               | alinesno-infra-common      |                                |
| 2    |          | 02. 前端开发框架（桌面）       | alinesno-infra-ui          |                                |
| 3    |          | 03. 前端开发框架（移动）       | alinesno-infra-app         |                                |
|      |          |                                |                            |                                |
| 5    | 基础服务 | 01. 权限配置服务               | alinesno-infra-base-authority |                                |
| 6    |          | 02. 代码生成器                 | alinesno-infra-base-init   |                                |
| 7    |          | 03. 分布式配置服务             | alinesno-infra-base-config |                                |
| 8    |          | 04. 事务消息服务               | alinesno-infra-base-message |                                |
| 9    |          | 05. 通知管理服务               | alinesno-infra-base-notices |                                |
| 10   |          | 06. 存储管理服务               | alinesno-infra-base-storage |                                |
| 11   |          | 07. 单点登陆服务               | alinesno-infra-base-sso     |                                |
| 12   |          | 08. 网关配置服务               | alinesno-infra-base-gateway |                                |
| 13   |          | 09. 安全验证码服务             | alinesno-infra-base-validate |                                |
| 14   |          | 10. IM消息服务                 | alinesno-infra-base-im      |                                |
| 15   |          | 11. 邮箱管理服务               | alinesno-infra-base-email   |                                |
| 16   |          | 12. 文档搜索服务               | alinesno-infra-base-document |                                |
| 17   |          | 13. 分布式ID服务               | alinesno-infra-base-id      |                                |
| 18   |          | 14. 敏感词过滤服务             | alinesno-infra-base-sensitive |                                |
| 19   |          | 15. 支付服务                   | alinesno-infra-base-pay     |                                |
| 20   |          | 16. 会员服务                   | alinesno-infra-base-member  |                                |
| 21   |          | 17. 内容服务                   | alinesno-infra-base-cms     |                                |
| 22   |          | 18. 商城服务                   | alinesno-infra-base-shop    |                                |
| 23   |          | 19. 流程中心服务               | alinesno-infra-base-workflow |                                |
| 24   |          | 20. 文档查看服务               | alinesno-infra-base-fileshow |                                |
| 25   |          | 21. 基设平台管理服务           | alinesno-infra-base-platform | 单独管理和监控，定位于管理员 |
|      |          |                                |                            |                                |
| 27   | 数据服务 | 01. 主数据服务                 | alinesno-infra-data-mdm     |                                |
| 28   |          | 02. 数据上报服务               | alinesno-infra-data-report  |                                |
| 29   |          | 03. 数据集成服务               | alinesno-infra-data-kettle  |                                |
| 30   |          | 04. 数据开发服务               | alinesno-infra-data-dolphinscheduler |                                |
| 31   |          | 05. 实时计算服务               | alinesno-infra-data-flink   |                                |
| 32   |          | 06. 数据安全服务               | alinesno-infra-data-security |                                |
| 33   |          | 07. 数据质量服务               | alinesno-infra-data-quarity |                                |
| 34   |          | 08. 数据总线服务               | alinesno-infra-data-bus     |                                |
| 35   |          | 09. 数据资产服务               | alinesno-infra-data-assets  |                                |
| 36   |          | 10. 数据算法服务               | alinesno-infra-data-algorithm |                                |
|      |          |                                |                            |                                |
| 38   | 智能服务 | 01. OCR视觉识别服务            | alinesno-infra-ai-ocr       |                                |
| 39   |          | 02. 自然语言识别服务           | alinesno-infra-ai-nlp       |                                |
| 40   |          | 03. GPT推理服务                | alinesno-infra-ai-gpt       |                                |
| 41   |          | 04. 流媒体识别服务             | alinesno-infra-ai-media     |                                |
|      |          |                                |                            |                                |
| 43   | 运维服务 | 01. 自动化任务服务（业务自动运维服务） | alinesno-infra-ops-scheduler |                                |
| 44   |          | 02. 分布式日志服务             | alinesno-infra-ops-logger |                                |
| 45   |          | 03. 分布式链路跟踪服务         | alinesno-infra-ops-telemetry |                                |
| 46   |          | 04. 持续集成服务               | alinesno-infra-ops-cicd |                                |
| 47   |          | 05. 容器管理服务               | alinesno-infra-ops-container |                                |
| 48   |          | 06. 监控预警服务               | alinesno-infra-ops-watcher |                                |
|      |          |                                |                            |                                |
| 57   | 业务服务 | 01. 商品秒杀服务               | alinesno-infra-bus-limit   |                                |
| 58   |          | 02. 实时推荐服务               | alinesno-infra-bus-recommend |                                |
| 59   |          | 03. 实时画像服务               | alinesno-infra-bus-profiling |                                |
| 60   |          | 04. 无代码开发服务             | alinesno-infra-bus-nocode  |                                |
|      |          |                                |                            |                                |
| 50   | 运营服务 | 01. 基设平台服务               | alinesno-infra-plat-saas | 添加架构排版服务               |
| 51   |          | 02. 安全感触服务               | alinesno-infra-plat-security |                                |
| 52   |          | 03. 智能运营大脑服务           | alinesno-infra-plat-brain |                                |
| 53   |          | 04. AI模型管理服务             | alinesno-infra-plat-model |                                |
| 54   |          | 05. 移动终端服务               | alinesno-infra-plat-app |                                |
|      |          |                                |                            |                                |

## 其它

- 无
