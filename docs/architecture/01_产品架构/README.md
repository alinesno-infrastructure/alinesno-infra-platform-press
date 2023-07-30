# 产品架构列表

## 概述

## 产品列表

| 序号 | 模块     | 服务                                   | 模块名称                             | 备注                         |
|------|----------|----------------------------------------|--------------------------------------|------------------------------|
| 1    | 核心框架 | 01. 核心开发框架                       | alinesno-infra-common                |                              |
| 2    |          | 02. 前端开发框架（桌面）               | alinesno-infra-ui                    |                              |
| 3    |          | 03. 前端开发框架（移动）               | alinesno-infra-app                   |                              |
|      |          |                                        |                                      |                              |
| 5    | 基础服务 | 01. 权限配置服务                       | alinesno-infra-base-authority        |                              |
| 6    |          | 02. 代码生成器                         | alinesno-infra-base-init             |                              |
| 7    |          | 03. 分布式配置服务                     | alinesno-infra-base-config           |                              |
| 8    |          | 04. 事务消息服务                       | alinesno-infra-base-message          |                              |
| 9    |          | 05. 通知管理服务                       | alinesno-infra-base-notices          |                              |
| 10   |          | 06. 存储管理服务                       | alinesno-infra-base-storage          |                              |
| 11   |          | 07. 单点登陆服务                       | alinesno-infra-base-sso              |                              |
| 12   |          | 08. 网关配置服务                       | alinesno-infra-base-gateway          |                              |
| 13   |          | 09. 安全验证码服务                     | alinesno-infra-base-validate         |                              |
| 14   |          | 10. IM消息服务                         | alinesno-infra-base-im               |                              |
| 15   |          | 11. 邮箱管理服务                       | alinesno-infra-base-email            |                              |
| 16   |          | 12. 文档搜索服务                       | alinesno-infra-base-document         |                              |
| 17   |          | 13. 分布式ID服务                       | alinesno-infra-base-id               |                              |
| 18   |          | 14. 敏感词过滤服务                     | alinesno-infra-base-sensitive        |                              |
| 19   |          | 15. 支付服务                           | alinesno-infra-base-pay              |                              |
| 20   |          | 16. 会员服务                           | alinesno-infra-base-member           |                              |
| 21   |          | 17. 内容服务                           | alinesno-infra-base-cms              |                              |
| 22   |          | 18. 商城服务                           | alinesno-infra-base-shop             |                              |
| 23   |          | 19. 流程中心服务                       | alinesno-infra-base-workflow         |                              |
| 24   |          | 20. 文档查看服务                       | alinesno-infra-base-fileshow         |                              |
| 25   |          | 21. 基设平台管理服务                   | alinesno-infra-base-platform         | 单独管理和监控，定位于管理员 |
|      |          |                                        |                                      |                              |
| 27   | 数据服务 | 01. 主数据服务                         | alinesno-infra-data-mdm              |                              |
| 28   |          | 02. 数据上报服务                       | alinesno-infra-data-report           |                              |
| 29   |          | 03. 数据集成服务                       | alinesno-infra-data-kettle           |                              |
| 30   |          | 04. 数据开发服务                       | alinesno-infra-data-dolphinscheduler |                              |
| 31   |          | 05. 实时计算服务                       | alinesno-infra-data-flink            |                              |
| 32   |          | 06. 数据安全服务                       | alinesno-infra-data-security         |                              |
| 33   |          | 07. 数据质量服务                       | alinesno-infra-data-quarity          |                              |
| 34   |          | 08. 数据总线服务                       | alinesno-infra-data-bus              |                              |
| 35   |          | 09. 数据资产服务                       | alinesno-infra-data-assets           |                              |
| 36   |          | 10. 数据算法服务                       | alinesno-infra-data-algorithm        |                              |
|      |          |                                        |                                      |                              |
| 38   | 智能服务 | 01. OCR视觉识别服务                    | alinesno-infra-ai-ocr                |                              |
| 39   |          | 02. 自然语言识别服务                   | alinesno-infra-ai-nlp                |                              |
| 40   |          | 03. GPT推理服务                        | alinesno-infra-ai-gpt                |                              |
| 41   |          | 04. 流媒体识别服务                     | alinesno-infra-ai-media              |                              |
|      |          |                                        |                                      |                              |
| 43   | 运维服务 | 01. 自动化任务服务（业务自动运维服务） | alinesno-infra-ops-scheduler         |                              |
| 44   |          | 02. 分布式日志服务                     | alinesno-infra-ops-logger            |                              |
| 45   |          | 03. 分布式链路跟踪服务                 | alinesno-infra-ops-telemetry         |                              |
| 46   |          | 04. 持续集成服务                       | alinesno-infra-ops-cicd              |                              |
| 47   |          | 05. 容器管理服务                       | alinesno-infra-ops-container         |                              |
| 48   |          | 06. 监控预警服务                       | alinesno-infra-ops-watcher           |                              |
|      |          |                                        |                                      |                              |
| 57   | 业务服务 | 01. 商品秒杀服务                       | alinesno-infra-bus-limit             |                              |
| 58   |          | 02. 实时推荐服务                       | alinesno-infra-bus-recommend         |                              |
| 59   |          | 03. 实时画像服务                       | alinesno-infra-bus-profiling         |                              |
| 60   |          | 04. 无代码开发服务                     | alinesno-infra-bus-nocode            |                              |
|      |          |                                        |                                      |                              |
| 50   | 运营服务 | 01. 基设平台服务                       | alinesno-infra-plat-saas             | 添加架构排版服务             |
| 51   |          | 02. 安全感触服务                       | alinesno-infra-plat-security         |                              |
| 52   |          | 03. 智能运营大脑服务                   | alinesno-infra-plat-brain            |                              |
| 54   |          | 05. 移动终端服务                       | alinesno-infra-plat-app              |                              |
|      |          |                                        |                                      |                              |

## 其它

- 无
