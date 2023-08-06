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
2. `domain`：表示领域（Domain），用于定义模块的核心领域模型和业务逻辑。在该模块中，通常包含了实体类、值对象、领域服务等与领域相关的代码。
3. `api`：表示接口（API），用于定义模块对外暴露的接口。在该模块中，通常包含了接口类、DTO（数据传输对象）等与外部交互的代码。
4. `adapter`：表示适配器（Adapter），用于与外部系统进行交互和适配。在该模块中，通常包含了与外部系统的接口实现、数据转换、适配器等代码。
5. `client`：表示客户端（Client），用于与模块进行交互的客户端代码。在该模块中，通常包含了调用模块提供的接口、处理响应结果等与客户端交互相关的代码。
6. `boot`：表示启动（Boot），用于处理模块的启动逻辑。在该模块中，通常包含了初始化、配置加载、依赖注入等启动过程的代码。

这些模块后缀的含义可以帮助开发人员更好地理解每个模块的作用和职责，同时也有助于工程的组织和管理。

## 产品列表

### 端口规划

端口使用docker的net配置内部网络或者k8s的内部端口，列出的端口号分配表格：

| 序号 | 服务     | 端口范围      | 描述                                             | 备注                                 |
|:----:|----------|---------------|--------------------------------------------------|--------------------------------------|
| 1    | 基础服务 | 30100 - 30199 | 基础服务的端口范围，用于内部部署                 | 工程结构的规范为了更好的进行工程管理 |
| 2    | 数据服务 | 30200 - 30299 | 数据服务                                         |                                      |
| 3    | 智能服务 | 30300 - 30399 | 智能服务                                         |                                      |
| 4    | 智能服务 | 30400 - 30499 | 智能服务                                         |                                      |
| 5    | 业务服务 | 30500 - 30599 | 业务服务                                         |                                      |
| 6    | 运营服务 | 30600 - 30699 | 运营服务                                         |                                      |
|      |          |               |                                                  |                                      |
| 9    | 平台     | 27001         | 整体平台的入口，这个是唯一的端口号，其它不能占用 |                                      |
|      |          |               |                                                  |                                      |

根据上述表格，你可以根据服务的序号和描述来分配相应的端口号。请注意，在实际使用时，确保遵循相关的网络通信标准和安全性要求。

### 服务规划

| 序号 | 模块     | 服务                                   | 模块名称                             | 端口  | 备注                         |
|------|----------|----------------------------------------|--------------------------------------|:-----:|------------------------------|
| 1    | 核心框架 | 01. 核心开发框架                       | alinesno-infra-common                |       |                              |
| 2    |          | 02. 前端开发框架（桌面）               | alinesno-infra-ui                    |       |                              |
| 3    |          | 03. 前端开发框架（移动）               | alinesno-infra-app                   |       |                              |
|      |          |                                        |                                      |       |                              |
| 5    | 基础服务 | 01. 权限配置服务                       | alinesno-infra-base-authority        | 30100 |                              |
| 6    |          | 02. 代码生成器                         | alinesno-infra-base-init             | 30101 |                              |
| 7    |          | 03. 分布式配置服务                     | alinesno-infra-base-config           | 30102 |                              |
| 8    |          | 04. 事务消息服务                       | alinesno-infra-base-message          | 30103 |                              |
| 9    |          | 05. 通知管理服务                       | alinesno-infra-base-notices          | 30104 |                              |
| 10   |          | 06. 存储管理服务                       | alinesno-infra-base-storage          | 30105 |                              |
| 11   |          | 07. 单点登陆服务                       | alinesno-infra-base-sso              | 30106 |                              |
| 12   |          | 08. 网关配置服务                       | alinesno-infra-base-gateway          | 30107 |                              |
| 13   |          | 09. 安全验证码服务                     | alinesno-infra-base-validate         | 30108 |                              |
| 14   |          | 10. IM消息服务                         | alinesno-infra-base-im               | 30109 |                              |
| 15   |          | 11. 邮箱管理服务                       | alinesno-infra-base-email            | 30110 |                              |
| 16   |          | 12. 文档搜索服务                       | alinesno-infra-base-document         | 30111 |                              |
| 17   |          | 13. 分布式ID服务                       | alinesno-infra-base-id               | 30112 |                              |
| 18   |          | 14. 敏感词过滤服务                     | alinesno-infra-base-sensitive        | 30113 |                              |
| 19   |          | 15. 支付服务                           | alinesno-infra-base-pay              | 30114 |                              |
| 20   |          | 16. 会员服务                           | alinesno-infra-base-member           | 30115 |                              |
| 21   |          | 17. 内容服务                           | alinesno-infra-base-cms              | 30116 |                              |
| 22   |          | 18. 商城服务                           | alinesno-infra-base-shop             | 30117 |                              |
| 23   |          | 19. 流程中心服务                       | alinesno-infra-base-workflow         | 30118 |                              |
| 24   |          | 20. 文档查看服务                       | alinesno-infra-base-fileshow         | 30119 |                              |
| 25   |          | 21. 基设平台管理服务                   | alinesno-infra-base-platform         | 30120 | 单独管理和监控，定位于管理员 |
|      |          |                                        |                                      |       |                              |
| 27   | 数据服务 | 01. 主数据服务                         | alinesno-infra-data-mdm              | 30200 |                              |
| 28   |          | 02. 数据上报服务                       | alinesno-infra-data-report           | 30201 |                              |
| 29   |          | 03. 数据集成服务                       | alinesno-infra-data-kettle           | 30202 |                              |
| 30   |          | 04. 数据开发服务                       | alinesno-infra-data-dolphinscheduler | 30203 |                              |
| 31   |          | 05. 实时计算服务                       | alinesno-infra-data-flink            | 30204 |                              |
| 32   |          | 06. 数据安全服务                       | alinesno-infra-data-security         | 30205 |                              |
| 33   |          | 07. 数据质量服务                       | alinesno-infra-data-quarity          | 30206 |                              |
| 34   |          | 08. 数据总线服务                       | alinesno-infra-data-bus              | 30207 |                              |
| 35   |          | 09. 数据资产服务                       | alinesno-infra-data-assets           | 30208 |                              |
| 36   |          | 10. 数据算法服务                       | alinesno-infra-data-algorithm        | 30209 |                              |
|      |          |                                        |                                      |       |                              |
| 38   | 智能服务 | 01. OCR视觉识别服务                    | alinesno-infra-smart-ocr                | 30300 |                              |
| 39   |          | 02. 自然语言识别服务                   | alinesno-infra-smart-nlp                | 30301 |                              |
| 40   |          | 03. GPT推理服务                        | alinesno-infra-smart-brain                | 30302 |                              |
| 41   |          | 04. 流媒体识别服务                     | alinesno-infra-smart-media              | 30303 |                              |
|      |          |                                        |                                      |       |                              |
| 43   | 运维服务 | 01. 自动化任务服务 | alinesno-infra-ops-scheduler         | 30400 |                              |
| 44   |          | 02. 分布式日志服务                     | alinesno-infra-ops-logback            | 30401 |                              |
| 45   |          | 03. 分布式链路跟踪服务                 | alinesno-infra-ops-telemetry         | 30402 |                              |
| 46   |          | 04. 持续集成服务                       | alinesno-infra-ops-cicd              | 30403 |                              |
| 47   |          | 05. 容器管理服务                       | alinesno-infra-ops-container         | 30404 |                              |
| 48   |          | 06. 监控预警服务                       | alinesno-infra-ops-watcher           | 30405 |                              |
|      |          |                                        |                                      |       |                              |
| 57   | 业务服务 | 01. 商品秒杀服务                       | alinesno-infra-bus-limit             | 30500 |                              |
| 58   |          | 02. 实时推荐服务                       | alinesno-infra-bus-recommend         | 30501 |                              |
| 59   |          | 03. 实时画像服务                       | alinesno-infra-bus-profiling         | 30502 |                              |
| 60   |          | 04. 无代码开发服务                     | alinesno-infra-bus-nocode            | 30503 |                              |
|      |          |                                        |                                      |       |                              |
| 50   | 运营服务 | 01. 基设平台服务                       | alinesno-infra-plat-saas             | 30600 | 添加架构排版服务             |
| 51   |          | 02. 安全感触服务                       | alinesno-infra-plat-security         | 30601 |                              |
| 52   |          | 03. 智能运营大脑服务                   | alinesno-infra-plat-brain            | 30602 |                              |
| 53   |          | 04. AI模型管理服务                     | alinesno-infra-plat-model            | 30603 |                              |
| 54   |          | 05. 移动终端服务                       | alinesno-infra-plat-app              | 30604 |                              |
|      |          |                                        |                                      |       |                              |

## 其它

- 无
