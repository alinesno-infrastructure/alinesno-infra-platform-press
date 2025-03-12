# 智能体平台本地环境

## 概述

智能体平台为AIP中的一部分，负责AI大模型和智能体的配置管理，主要包含两部分：

- 后端管理： 用于智能体的配置管理端
- 客户端：用于客户使用，多智能体场景

## 开发工具

开发工具尽量按最简化的方式进行，以下为开发环境

- [必须] mysql8
- [必须] redis5+
- [必须] jdk17+
- [BaseSearch] postgresql(开启pgvector) 
- [BaseStorage] minio/qiniu: 当前使用七牛

## 涉及到的工程

- common: 公共包[打开](https://gitee.com/alinesno-infrastructure/alinesno-infra-common)
- model-adapter: 多模型适配包[打开](https://gitee.com/alinesno-infrastructure/alinesno-infra-smart-model-adapater.git),基于AgentFlex二次开发.
- base-authority sso认证服务[打开](https://gitee.com/alinesno-infrastructure/alinesno-infra-base-authority)
- smart-brain: 智能体平台[打开](https://gitee.com/alinesno-infrastructure/alinesno-infra-smart-brain)

这里只说明部署smart-brain智能体平台，common和authority参考文章[打开](http://portal.infra.linesno.com/operation/02_环境部署/01_服务器.html)的权限服务部分。

## 本地部署

1. 先安装common包到本地，install即可,缺少actable包,[查看](https://gitee.com/alinesno-infrastructure/alinesno-infra-common/issues/IBEK4W)
2. 安装model-adapter包到本地, install即可.

3. 然后克隆smart-brain工程到idea包,分别启动:
	- 服务端: alinesno-infra-smart-expert-boot
	- 服务端前端: alinesno-infra-smart-expert-ui
	- 客户端: alinesno-infra-smart-im-ui

   默认情况下,启动之后会连接开发环境的权限系统和sso认证系统,直接登陆即可,如需要修改成base-authority服务,以下为配置说明.

4. 配置说明:

以下为主要配置:

```yaml
server:
  port: 30304

# spring 配置
spring:
  application:
    name: alinesno-infra-smart-expert-boot
    id: 1848341995578118144
  datasource.dynamic:
    primary: mysql
    datasource:
      mysql:
        driver-class-name: com.mysql.cj.jdbc.Driver
        url: jdbc:mysql://localhost:3306/dev_alinesno_infra_smart_assistant_v100?characterEncoding=UTF-8&serverTimezone=GMT%2B8&allowMultiQueries=true
        username: root
        password: adminer
      postgresql:
        driver-class-name: org.postgresql.Driver
        url: jdbc:postgresql://192.168.101.18:5432/postgres
        username: postgres
        password: 123456
  data:
    redis:
      host: 127.0.0.1
      port: 6379
      password: aip@local
  mvc:
    async:
      request-timeout: 3600000
  devtools:
    restart:
      enabled: true

actable:
  table:
    auto: update

forest:
  max-connections: 1000        # 连接池最大连接数
  connect-timeout: 60000        # 连接超时时间，单位为毫秒
  read-timeout: 120000           # 数据读取超时时间，单位为毫秒

# sa-token配置
sa-token:
  token-name: Authorization
  host-path: http://alinesno-infra-base-identity-auth-application.beta.base.infra.linesno.com
  
alinesno:
  security:
    # 排除路径
    excludes:
      - /sso/**
      - /logout
      - /v1/api/infra/base/im/roleChat/**
      - /v1/api/infra/base/im/sse/**
      - /v1/api/infra/base/im/chat/**
      - /api/infra/base/im/channel/**
      - /api/infra/smart/assistant/template/testTemplate
      - /api/infra/smart/assistant/screenChapter/**
      - /api/infra/smart/assistant/screen/**
      - /api/infra/smart/assistant/screenLongtext/**
  xss:
    # TODO 待处理XSS的问题
    enabled: false
  infra:
    gateway:
      host: http://alinesno-infra-base-authority-boot.beta.base.infra.linesno.com 
    smart: 
      brain: 
        qianwen:
          key:  sk-xxxxxxxxx
```

配置说明:
- sa-token.host-path: 默认连接线上开发环境,如已部署base-authority,可修改成本地base-authority的地址 http://127.0.0.1:27001
- alinesno.infra.gateway.host: 默认连接线上开发环境,如已部署base-authority,可修改成本地base-authority的地址 http://127.0.0.1:30100 [注意,这两个端口不一样]
- alinesno.infra.smart.brain.qianwen.key: 阿里百炼的api-key,目前集成百炼较为深度(通用版本调整中)

## 角色测试

以下为测试角色脚本,以请假角色为示例:
  
