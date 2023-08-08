# 集成非root账号运行

## 概述

本文档介绍了如何将系统配置为非root账号运行，以降低系统受到攻击的风险，并限制对系统资源的访问权限。

## 你将获取

- 非root账号运行的配置
- 系统资源访问权限的限制

## 集成方式

为了将系统配置为非root账号运行，可以按照以下步骤进行配置：

1. 在Dockerfile中添加以下配置，以创建并配置非root用户：

   ```dockerfile
   FROM openjdk:11.0.16-jdk-slim
   
   ARG user=alinesno
   ARG logger_dir=alinesno-running-logger
   ARG logger_csp=logs/csp
   ARG upload_files_dir=alinesno-upload-files
   
   RUN useradd --create-home --no-log-init --shell /bin/bash ${user}
   RUN adduser ${user} sudo
   
   RUN chown -R ${user}:${user} /home/${user}
   RUN mkdir /home/${user}/${logger_dir} && chown -R ${user}:${user} /home/${user}/${logger_dir}
   RUN mkdir /home/${user}/${upload_files_dir} && chown -R ${user}:${user} /home/${user}/${upload_files_dir}
   
   RUN mkdir -p /home/${user}/${logger_csp} && chown -R ${user}:${user} /home/${user}/${logger_csp}
   ```

   这些配置将在镜像中创建一个名为`alinesno`的非root用户，并为其分配sudo权限。还创建了一些目录并将其所有权分配给该用户。

2. 在应用程序的相关配置文件中，添加以下配置，以指定使用非root用户运行容器：

   ```xml
   <docker.user>alinesno</docker.user>
   ```

   这将告诉容器在运行时使用`alinesno`用户来执行应用程序。

请根据自己的系统和应用程序的需求，进行相应的配置和调整。

## 注意事项

- 非root账号运行可以提高系统的安全性，但在配置时需要谨慎操作，确保用户具有足够的权限来执行所需的操作。

- 在为非root用户分配sudo权限时，请谨慎选择哪些操作可以由该用户执行，并确保只授予必要的权限。

- 非root账号可能会受到一些限制，例如无法访问某些系统资源或执行某些特权操作。请确保在配置非root账号运行时，考虑到应用程序的需求和限制。

## 术语和缩略语

- root账号：具有系统最高权限的账号。

## 其它

- 无