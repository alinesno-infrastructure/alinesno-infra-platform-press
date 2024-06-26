# 产品研发进度

> 计划时间调整中，未确定

给出一个更完整的产品研发计划示例，涵盖了更多的模块和时间范围。请注意，这只是一个示例，实际的研发计划需要根据具体情况进行制定和调整。

## 总体计划和进度

| 序号 |    阶段    | 描述                             |  进度  |  计划完成时间  | 备注 |
|:----:|:--------:|--------------------------------|:----:|:-----------:|------|
|  1   | 研发一阶段 | 初始化后台环境并集成基础功能     | 进行中 | 2024年2月29日  |      |
|  2   | 研发二阶段 | 集成功能API接口，并进行相应的测试 | 进行中 | 2024年7月30日  |      |
|  3   | 研发三阶段 | 集成UI前端，并进行相应的测试      | 进行中 | 2024年10月30日 |      |

以下阶段性进度状态和说明，这里的`完成`指的是完成初版本和达到预期演示目标。

|  序号  | 阶段       | 内容               | 描述                                                                                  |  状态  |
|:------:|------------|--------------------|---------------------------------------------------------------------------------------|:------:|
|  AQ1   | 研发一阶段 | 初始化工程         | 这个阶段通常用于项目的起始阶段，包括创建项目文件夹、设置项目结构和配置文件等。           |  完成  |
|  AQ2   |            | 初始化Entity       | 决定是否需要为项目创建实体（Entity）。实体是指在应用程序中用于表示具体对象或数据的模型。  |  完成  |
|  AQ3   |            | 集成数据库         | 这个阶段涉及选择适合项目需求的数据库系统，并进行数据库连接和配置。                      |  完成  |
|  AQ4   |            | 生成CURD           | 自动生成CURD（Create, Update, READ, Delete）操作的代码。包括创建、更新、检索和删除数据。    | 进行中 |
|  AQ5   |            | 集成Demo           | 确定是否需要将演示功能集成到项目中。这个阶段涉及创建演示以展示项目的基本功能和特性。    |  完成  |
|  AQ6   |            | Demo完善           | 判断项目演示是否完善。这个阶段涉及对演示功能进行测试和优化，展示项目的核心功能和价值。   |        |
| AQ6-2  |            | 服务发布           | 集成github action发布到k8s，集成ingress提供开发和测试验证接口，用于下阶段的前端开发服务 |  完成  |
|        |            |                    |                                                                                       |        |
|  AQ7   | 研发二阶段 | 编写API接口        | 编写应用程序接口（API）来实现与其他系统或服务的交互。这个阶段涉及定义API的路由           | 初版本 |
| AQ7-1  |            | 实体映射关系       | 实体生成表映射是指通过MyBatis-Plus库将Java实体类映射为数据库表结构的过程              | 进行中 |
| AQ7-2  |            | 编写前端原型       | 设计出前端UI的原型和相关界面、字段关系等，形成原型功能                                  | 进行中 |
|  AQ8   |            | 前后端联调         | 前端和后端接口进行联调，编写验证，并根据原型完善界面                                    | 进行中 |
|  AQ9   |            | 编写单元测试       | 编写单元测试来验证项目的各个组件和功能的正确性。以确保代码的质量和可靠性。              |        |
|  AQ10  |            | 集成API联调        | 集成API测试工具来对API进行自动化测试。涉及选择合适的API测试工具，验证API的功能和性能。   |        |
|        |            |                    |                                                                                       |        |
|  AQ11  | 研发三阶段 | 集成UI框架         | 集成用户界面（UI）到项目中,设计用户交互和实现界面功能，以提供用户友好的应用程序体验。     |  完成  |
| AQ11-2 |            | 集成SSO认证        | 集成Sa-Token的统一认证管理和配置，形成统一认证授权管理                                 |  完成  |
| AQ11-3 |            | 集成Dashboard界面  | 完善和优化每个服务单独的Dashboard界面，形成后期设计的统一指导                          | 进行中 |
| AQ11-4 |            | 集成功能的管理界面 | 完成和集成功能的CURD界面，管理界面和功能界面，达到可用的环节                            | 进行中 |
|  AQ12  |            | 集成UI测试         | 集成UI测试工具来对UI界面进行自动化测试。编写测试脚本和执行测试，验证UI的功能和兼容性。   |        |
|  AQ13  |            | 集成测试           | 整体的集成测试，以验证不同组件和功能之间的协作和兼容性。编写综合测试用例和执行测试。     |        |
|        |            |                    |                                                                                       |        |

## 产品后端集成进度

标识来表示每个阶段的状态：

- `✅`：表示该阶段已完成（Done）。
- `❌`：表示该阶段未完成（Incomplete）。
- `🔵`：表示该阶段正在进行中（In Progress）。
- `⚠️`：表示该阶段出现异常（Exception）。
- `🚫`：表示该阶段不包含（Not Applicable）。

### 一阶段进度

| 序号 | 模块     | 服务                   | 模块名称                             | AQ1 | AQ2 | AQ3 | AQ4 | AQ5 | AQ6 | AQ6-2 |
|------|----------|------------------------|--------------------------------------|:---:|:---:|:---:|:---:|:---:|:---:|:-----:|
| 1    | 核心框架 | 01. 核心开发框架       | alinesno-infra-common                |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |🔵  |  🚫   |
| 2    |          | 02. 前端开发框架（桌面） | alinesno-infra-ui                    |  ✅  | 🚫  | 🚫  | 🚫  |  🚫 |  🔵 |  🚫   |
| 3    |          | 03. 前端开发框架（移动） | alinesno-infra-app                   |     |     |     |     |     |     |  🚫   |
|      |          |                        |                                      |     |     |     |     |     |     |       |
| 5    | 基础服务 | 01. 权限配置服务       | alinesno-infra-base-authority        |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |     |   ✅   |
| 6    |          | 02. 代码生成器         | alinesno-infra-base-starter          |  ✅  |  ✅  |     |     |  ✅  |     |   ✅   |
| 7    |          | 03. 分布式配置服务     | alinesno-infra-base-config           |  ✅  |  ✅  |     |  ✅  |  ✅  |     |   ✅   |
| 8    |          | 04. 事务消息服务       | alinesno-infra-base-message          |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |     |   ✅   |
| 9    |          | 05. 通知管理服务       | alinesno-infra-base-notices          |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |     |   ✅   |
| 10   |          | 06. 存储管理服务       | alinesno-infra-base-storage          |  ✅  |  ✅  |  ✅  |     |  ✅  |     |   ✅   |
| 11   |          | 07. 单点登陆服务       | alinesno-infra-base-identity         |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |     |   ✅   |
| 12   |          | 08. 网关配置服务       | alinesno-infra-base-gateway          |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |     |   ✅   |
| 13   |          | 09. 安全验证码服务     | alinesno-infra-base-validate         |  ✅  |  ✅  |  ✅  |     |  ✅  |     |   ✅   |
| 14   |          | 10. IM消息服务         | alinesno-infra-base-im               |  ✅  |  ✅  | 🔵  |     |  ✅  |     |   ✅   |
| 15   |          | 11. 邮箱管理服务       | alinesno-infra-base-email            |  ✅  |  ✅  |     |     |  ✅  |     |   ✅   |
| 16   |          | 12. 文档搜索服务       | alinesno-infra-base-document         |  ✅  |  ✅  |  ✅  |     |  ✅  |     |   ✅   |
| 17   |          | 13. 分布式ID服务       | alinesno-infra-base-id               |  ✅  | ✅  | ✅  | ✅  |  ✅  |     |   ✅   |
| 18   |          | 14. 敏感词过滤服务     | alinesno-infra-base-sensitive        |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |     |   ✅   |
| 19   |          | 15. 支付服务           | alinesno-infra-base-pay              |  ✅  |  ✅  |     |     |  ✅  |     |   ✅   |
| 21   |          | 17. 内容服务           | alinesno-infra-base-cms              |  ✅  |  ✅  | 🔵  |  ✅  |  ✅  |     |   ✅   |
| 24   |          | 20. 文档查看服务       | alinesno-infra-base-fileshow         |  ✅  | ✅  |  ✅  | ✅  |  ✅  |     |   ✅   |
| 25   |          | 21. 基设平台管理服务   | alinesno-infra-base-platform         |  ✅  |  ✅  |  ✅  |     |  ✅  |     |   ✅   |
|      |          |                        |                                      |     |     |     |     |     |     |       |
| 27   | 数据服务 | 01. 主数据服务         | alinesno-infra-data-mdm              |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |     |   ✅   |
| 28   |          | 02. 数据上报服务       | alinesno-infra-data-report           |  ✅  | ✅  |  ✅  |  ✅  |  ✅  |     |   ✅   |
| 29   |          | 03. 数据集成服务       | alinesno-infra-data-pipeline         |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |     |   ✅   |
| 30   |          | 04. 数据开发服务       | alinesno-infra-data-dolphinscheduler |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |     |       |
| 31   |          | 05. 实时计算服务       | alinesno-infra-data-stream           |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |     |   ✅   |
| 32   |          | 06. 数据安全服务       | alinesno-infra-data-security         |  ✅  |  ✅  |     |     |  ✅  |     |   ✅   |
| 34   |          | 08. 数据总线服务       | alinesno-infra-data-bus              |  ✅  | 🔵  |     |     |  ✅  |     |   ✅   |
| 35   |          | 09. 数据资产服务       | alinesno-infra-data-assets           |  ✅  |  ✅  |     |     |  ✅  |     |   ✅   |
| 37   |          | 11. 数据接口服务       | alinesno-infra-data-fastapi          |  ✅  |  ✅  | 🔵  |     |     |     |       |
|      |          |                        |                                      |     |     |     |     |     |     |       |
| 38   | 智能服务 | 01. OCR视觉识别服务    | alinesno-infra-smart-ocr             |  ✅  | ✅  | ✅  |  ✅  |  ✅  |     |   ✅   |
| 39   |          | 02. 自然语言识别服务   | alinesno-infra-smart-nlp             |  ✅  | ✅  |  ✅  | ✅   |  ✅  |     |   ✅   |
| 40   |          | 03. GPT推理服务        | alinesno-infra-smart-brain           |  ✅  |  ✅  |  ✅  | 🔵  |  ✅  |  ✅  |   ✅   |
| 41   |          | 04. 流媒体识别服务     | alinesno-infra-smart-media           |  ✅  |  ✅  |  ✅  | ✅   |  ✅  |     |   ✅   |
| 42   |          | 05. 智能助手服务       | alinesno-infra-smart-assistant       |  ✅  | ✅ |  ✅  |  ✅  |  ✅  |     |   ✅   |
| 43   |          | 06. 目标检测识别服务   | alinesno-infra-smart-detection       |  ✅  |  ✅  |     |     |  ✅  |     |   ✅   |
|      |          |                        |                                      |     |     |     |     |     |     |       |
| 44   | 运维服务 | 01. 自动化任务服务     | alinesno-infra-ops-scheduler         |  ✅  |  ✅  |  ✅  | 🔵  |  ✅  |     |   ✅   |
| 45   |          | 02. 分布式日志服务     | alinesno-infra-ops-logback           |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |   ✅   |
| 46   |          | 03. 分布式链路跟踪服务 | alinesno-infra-ops-telemetry         |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |   ✅   |
| 47   |          | 04. 持续集成服务       | alinesno-infra-ops-pipeline          |  ✅  |  ✅  |  ✅  |     |  ✅  |     |   ✅   |
| 48   |          | 05. 容器管理服务       | alinesno-infra-ops-container         |  ✅  |  ✅  |     |  ✅  |  ✅  |     |   ✅   |
| 49   |          | 06. 监控预警服务       | alinesno-infra-ops-watcher           |  ✅  |  ✅  |     |     |  ✅  |     |   ✅   |
|      |          |                        |                                      |     |     |     |     |     |     |       |
| 58   |  业务服务 | 02. 实时推荐服务       | alinesno-infra-bus-recommend         |  ✅  |     |     |     |  ✅  |     |   ✅   |
| 59   |          | 03. 实时画像服务       | alinesno-infra-bus-profiling         |  ✅  |     |     |     |  ✅  |     |   ✅   |
|      |          |                        |                                      |     |     |     |     |     |     |       |
| 50   | 运营服务 | 01. 基设平台服务       | alinesno-infra-plat-console          |  ✅  |  ✅  |     |     |  ✅  |     |   ✅   |
| 51   |          | 02. 安全感触服务       | alinesno-infra-plat-security         |  ✅  |  ✅  |     |     |  ✅  |     |   ✅   |
| 53   |          | 04. 项目管理服务       | alinesno-infra-plat-project          | ✅  | ✅  | 🔵  |     |     |     |       |
| 54   |          | 05. 移动终端服务       | alinesno-infra-plat-app              |     |     |     |     |     |     |       |
|      |          |                        |                                      |     |     |     |     |     |     |       |

### 二阶段进度

| 序号 | 模块     | 服务                   | 模块名称                             | AQ7 | AQ7-1 | AQ7-2 | AQ8 | AQ9 | AQ10 | 备注 |
|------|----------|------------------------|--------------------------------------|:---:|:-----:|:-----:|:---:|:---:|:-----|:----:|
| 1    | 核心框架 | 01. 核心开发框架       | alinesno-infra-common                | 🔵  |  🚫   |       |     |     |      |      |
| 2    |          | 02. 前端开发框架（桌面） | alinesno-infra-ui                    | 🚫  |  🚫   |       |     |     |      |      |
| 3    |          | 03. 前端开发框架（移动） | alinesno-infra-app                   |     |  🚫   |       |     |     |      |      |
|      |          |                        |                                      |     |       |       |     |     |      |      |
| 5    | 基础服务 | 01. 权限配置服务       | alinesno-infra-base-authority        | 🔵  |   ✅   |  🔵   |     |     |      |      |
| 6    |          | 02. 代码生成器         | alinesno-infra-base-starter          | 🔵  |   ✅   |  🔵   |     |     |      |      |
| 7    |          | 03. 分布式配置服务     | alinesno-infra-base-config           | 🔵  |   ✅   |       |     |     |      |      |
| 8    |          | 04. 事务消息服务       | alinesno-infra-base-message          | 🔵  |   ✅   |  🔵   |     |     |      |      |
| 9    |          | 05. 通知管理服务       | alinesno-infra-base-notices          | 🔵  |   ✅   |  🔵   |     |     |      |      |
| 10   |          | 06. 存储管理服务       | alinesno-infra-base-storage          | 🔵  |   ✅   |  🔵   |     |     |      |      |
| 11   |          | 07. 单点登陆服务       | alinesno-infra-base-identity         | 🔵  |   ✅   |  🔵   |     |     |      |      |
| 12   |          | 08. 网关配置服务       | alinesno-infra-base-gateway          | 🔵  |  🚫   |  🔵   |     |     |      |      |
| 13   |          | 09. 安全验证码服务     | alinesno-infra-base-validate         | 🔵  |   ✅   |  🔵   |     |     |      |      |
| 14   |          | 10. IM消息服务         | alinesno-infra-base-im               | 🔵  |       |       |     |     |      |      |
| 15   |          | 11. 邮箱管理服务       | alinesno-infra-base-email            | 🔵  |   ✅   |       |     |     |      |      |
| 16   |          | 12. 文档搜索服务       | alinesno-infra-base-document         | 🔵  |       |  🔵   |     |     |      |      |
| 17   |          | 13. 分布式ID服务       | alinesno-infra-base-id               | 🔵  |   ✅   |       |     |     |      |      |
| 18   |          | 14. 敏感词过滤服务     | alinesno-infra-base-sensitive        | 🔵  |  ✅   |       |     |     |      |      |
| 19   |          | 15. 支付服务           | alinesno-infra-base-pay              | 🔵  |   ✅   |  🔵   |     |     |      |      |
| 21   |          | 17. 内容服务           | alinesno-infra-base-cms              | 🔵  |   ✅   |  🔵   |     |     |      |      |
| 24   |          | 20. 文档查看服务       | alinesno-infra-base-fileshow         | 🔵  |   ✅   |       |     |     |      |      |
| 25   |          | 21. 基设平台管理服务   | alinesno-infra-base-platform         | 🔵  |   ✅   |       |     |     |      |      |
|      |          |                        |                                      |     |       |       |     |     |      |      |
| 27   | 数据服务 | 01. 主数据服务         | alinesno-infra-data-mdm              | 🔵  |       |  🔵   |     |     |      |      |
| 28   |          | 02. 数据上报服务       | alinesno-infra-data-report           | 🔵  |   ✅   |       |     |     |      |      |
| 29   |          | 03. 数据集成服务       | alinesno-infra-data-pipeline         | 🔵  |       |       |     |     |      |      |
| 30   |          | 04. 数据开发服务       | alinesno-infra-data-dolphinscheduler | 🔵  |       |  🔵   |     |     |      |      |
| 31   |          | 05. 实时计算服务       | alinesno-infra-data-stream           | 🔵  |       |  🔵   |     |     |      |      |
| 32   |          | 06. 数据安全服务       | alinesno-infra-data-security         | 🔵  |   ✅   |       |     |     |      |      |
| 34   |          | 08. 数据总线服务       | alinesno-infra-data-bus              | 🔵  |       |       |     |     |      |      |
| 35   |          | 09. 数据资产服务       | alinesno-infra-data-assets           | 🔵  |       |  🔵   |     |     |      |      |
| 37   |          | 11. 数据接口服务       | alinesno-infra-data-fastapi          | 🔵  |       |  🔵   |     |     |      |      |
|      |          |                        |                                      |     |       |       |     |     |      |      |
| 38   | 智能服务 | 01. OCR视觉识别服务    | alinesno-infra-smart-ocr             | 🔵  |   ✅   |       |     |     |      |      |
| 39   |          | 02. 自然语言识别服务   | alinesno-infra-smart-nlp             | 🔵  |   ✅   |       |     |     |      |      |
| 40   |          | 03. GPT推理服务        | alinesno-infra-smart-brain           | 🔵  |       |       |     |     |      |      |
| 41   |          | 04. 流媒体识别服务     | alinesno-infra-smart-media           | 🔵  |   ✅   |       |     |     |      |      |
| 42   |          | 05. 智能助手服务       | alinesno-infra-smart-assistant       | 🔵  |       |       |     |     |      |      |
| 43   |          | 06. 目标检测识别服务   | alinesno-infra-smart-detection       | 🔵  |       |       |     |     |      |      |
|      |          |                        |                                      |     |       |       |     |     |      |      |
| 44   | 运维服务 | 01. 自动化任务服务     | alinesno-infra-ops-scheduler         | 🔵  |       |       |     |     |      |      |
| 45   |          | 02. 分布式日志服务     | alinesno-infra-ops-logback           | 🔵  |   ✅   |  🔵   |     |     |      |      |
| 46   |          | 03. 分布式链路跟踪服务 | alinesno-infra-ops-telemetry         | 🔵  |   ✅   |       |     |     |      |      |
| 47   |          | 04. 持续集成服务       | alinesno-infra-ops-pipeline          | 🔵  |       |       |     |     |      |      |
| 48   |          | 05. 容器管理服务       | alinesno-infra-ops-container         | 🔵  |   ✅   |  🔵   |     |     |      |      |
| 49   |          | 06. 监控预警服务       | alinesno-infra-ops-watcher           | 🔵  |   ✅   |  🔵   |     |     |      |      |
|      |          |                        |                                      |     |       |       |     |     |      |      |
| 58   |  业务服务 | 02. 实时推荐服务       | alinesno-infra-bus-recommend         | 🔵  |       |       |     |     |      |      |
| 59   |          | 03. 实时画像服务       | alinesno-infra-bus-profiling         | 🔵  |       |       |     |     |      |      |
|      |          |                        |                                      |     |       |       |     |     |      |      |
| 50   | 运营服务 | 01. 基设平台服务       | alinesno-infra-plat-console          | 🔵  |       |  🔵   |     |     |      |      |
| 51   |          | 02. 安全感触服务       | alinesno-infra-plat-security         | 🔵  |   ✅   |  🔵   |     |     |      |      |
| 53   |          | 04. 项目管理服务       | alinesno-infra-plat-project          | 🔵  |       |  🔵   |     |     |      |      |
| 54   |          | 05. 移动终端服务       | alinesno-infra-plat-app              |     |       |       |     |     |      |      |
|      |          |                        |                                      |     |       |       |     |     |      |      |

### 三阶段进度

| 序号 | 模块     | 服务                   | 模块名称                             | AQ11 | AQ11-2 | AQ11-3 | AQ11-4 | AQ12 | AQ13 |
|------|----------|------------------------|--------------------------------------|:----:|:------:|:------:|:------:|------|------|
| 1    | 核心框架 | 01. 核心开发框架       | alinesno-infra-common                |  🚫  |   🚫   |   🚫   |        |      |      |
| 2    |          | 02. 前端开发框架（桌面） | alinesno-infra-ui                    |  🚫  |   🚫   |   🚫   |        |      |      |
| 3    |          | 03. 前端开发框架（移动） | alinesno-infra-app                   |  🚫  |   🚫   |   🚫   |        |      |      |
|      |          |                        |                                      |      |        |        |        |      |      |
| 5    | 基础服务 | 01. 权限配置服务       | alinesno-infra-base-authority        |  ✅   |   ✅    |   ✅    |        |      |      |
| 6    |          | 02. 代码生成器         | alinesno-infra-base-starter          |  ✅   |   ✅    |   ✅    |        |      |      |
| 7    |          | 03. 分布式配置服务     | alinesno-infra-base-config           |  ✅   |   ✅    |   ✅    |        |      |      |
| 8    |          | 04. 事务消息服务       | alinesno-infra-base-message          |  ✅   |   ✅    |   ✅    |        |      |      |
| 9    |          | 05. 通知管理服务       | alinesno-infra-base-notices          |  ✅   |   ✅    |   ✅    |        |      |      |
| 10   |          | 06. 存储管理服务       | alinesno-infra-base-storage          |  ✅   |   ✅    |   ✅    |        |      |      |
| 11   |          | 07. 单点登陆服务       | alinesno-infra-base-identity         |  ✅   |   ✅    |   ✅    |        |      |      |
| 12   |          | 08. 网关配置服务       | alinesno-infra-base-gateway          |  ✅   |   ✅    |   ✅    |        |      |      |
| 13   |          | 09. 安全验证码服务     | alinesno-infra-base-validate         |  ✅   |   ✅    |   ✅    |        |      |      |
| 14   |          | 10. IM消息服务         | alinesno-infra-base-im               |  ✅   |   ✅    |        |        |      |      |
| 15   |          | 11. 邮箱管理服务       | alinesno-infra-base-email            |  ✅   |   ✅    |        |        |      |      |
| 16   |          | 12. 文档搜索服务       | alinesno-infra-base-document         |  ✅   |   ✅    |   ✅    |        |      |      |
| 17   |          | 13. 分布式ID服务       | alinesno-infra-base-id               |  ✅   |   ✅    |        |        |      |      |
| 18   |          | 14. 敏感词过滤服务     | alinesno-infra-base-sensitive        |  ✅   |   ✅    |   ✅    |        |      |      |
| 19   |          | 15. 支付服务           | alinesno-infra-base-pay              |  ✅   |   ✅    |   ✅    |        |      |      |
| 21   |          | 17. 内容服务           | alinesno-infra-base-cms              |  ✅   |   ✅    |   ✅    |        |      |      |
| 24   |          | 20. 文档查看服务       | alinesno-infra-base-fileshow         |  ✅   |   ✅    |        |        |      |      |
| 25   |          | 21. 基设平台管理服务   | alinesno-infra-base-platform         |  ✅   |   ✅    |        |        |      |      |
|      |          |                        |                                      |      |        |        |        |      |      |
| 27   | 数据服务 | 01. 主数据服务         | alinesno-infra-data-mdm              |  ✅   |   ✅    |        |        |      |      |
| 28   |          | 02. 数据上报服务       | alinesno-infra-data-report           |  ✅   |   ✅    |        |        |      |      |
| 29   |          | 03. 数据集成服务       | alinesno-infra-data-pipeline         |  ✅   |   ✅    |        |        |      |      |
| 30   |          | 04. 数据开发服务       | alinesno-infra-data-dolphinscheduler |  ✅   |   ✅    |   ✅    |   ✅    |      |      |
| 31   |          | 05. 实时计算服务       | alinesno-infra-data-stream           |  ✅   |        |        |        |      |      |
| 32   |          | 06. 数据安全服务       | alinesno-infra-data-security         |  ✅   |   ✅    |        |        |      |      |
| 34   |          | 08. 数据总线服务       | alinesno-infra-data-bus              |  ✅   |   ✅    |        |        |      |      |
| 35   |          | 09. 数据资产服务       | alinesno-infra-data-assets           |  ✅   |   ✅    |        |        |      |      |
| 37   |          | 11. 数据接口服务         | alinesno-infra-data-fastapi        | ✅ |  ✅  | ✅     |     |     |      |      |
|      |          |                          |                                      |      |        |        |        |      |      |
| 38   | 智能服务 | 01. OCR视觉识别服务      | alinesno-infra-smart-ocr             | ✅   | ✅     |        |        |      |      |
| 39   |          | 02. 自然语言识别服务     | alinesno-infra-smart-nlp             | ✅   | ✅     |        |        |      |      |
| 40   |          | 03. GPT推理服务          | alinesno-infra-smart-brain           | ✅   | ✅     | ✅     |        |      |      |
| 41   |          | 04. 流媒体识别服务       | alinesno-infra-smart-media           | ✅   | ✅     |        |        |      |      |
| 42   |          | 05. 智能助手服务         | alinesno-infra-smart-assistant       | ✅   | ✅     |        |        |      |      |
| 43   |          | 06. 目标检测识别服务     | alinesno-infra-smart-detection       | ✅   | ✅     |        |        |      |      |
|      |          |                          |                                      |      |        |        |        |      |      |
| 44   | 运维服务 | 01. 自动化任务服务       | alinesno-infra-ops-scheduler         | ✅   | ✅     |        |        |      |      |
| 45   |          | 02. 分布式日志服务       | alinesno-infra-ops-logback           | ✅   | ✅     | ✅     |        |      |      |
| 46   |          | 03. 分布式链路跟踪服务   | alinesno-infra-ops-telemetry         | ✅   | ✅     | ✅     |        |      |      |
| 47   |          | 04. 持续集成服务         | alinesno-infra-ops-pipeline          | ✅   | ✅     |        |        |      |      |
| 48   |          | 05. 容器管理服务         | alinesno-infra-ops-container         | ✅   | ✅     | ✅     |        |      |      |
| 49   |          | 06. 监控预警服务         | alinesno-infra-ops-watcher           | ✅   | ✅     |        |        |      |      |
|      |          |                          |                                      |      |        |        |        |      |      |
| 58   | 业务服务  | 02. 实时推荐服务         | alinesno-infra-bus-recommend         | ✅   | ✅     |        |        |      |      |
| 59   |          | 03. 实时画像服务         | alinesno-infra-bus-profiling         | ✅   | ✅     | ✅     |        |      |      |
|      |          |                          |                                      |      |        |        |        |      |      |
| 50   | 运营服务 | 01. 基设平台服务         | alinesno-infra-plat-console          | ✅   | ✅     | ✅     |        |      |      |
| 51   |          | 02. 安全感触服务         | alinesno-infra-plat-security         | ✅   | ✅     | ✅     |        |      |      |
| 53   |          | 04. 项目管理服务     | alinesno-infra-plat-project            | ✅  |  ✅   | ✅   |     |     |      |      |
| 54   |          | 05. 移动终端服务         | alinesno-infra-plat-app              | 🚫   | 🚫     | 🚫     |        |      |      |
|      |          |                          |                                      |      |        |        |        |      |      |

## 其它

以上是一个大致的产品研发计划示例，您可以根据实际情况进行调整和安排。这个计划涵盖了从准备阶段到产品发布和后续维护的全过程，帮助确保产品的顺利开发和成功上线。
