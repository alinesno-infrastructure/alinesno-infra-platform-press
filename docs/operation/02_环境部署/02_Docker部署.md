# AIP 安装部署指南

> 注意：当前一键安装仅支持通过 `docker-compose` 进行。

下面安装假设你的服务器IP是47.98.249.9(请调整成你自己的安装应用的IP)

## 服务器要求

- 内存: 建议 >= 32G
- 硬盘空间: >= 300G
- CPU: >=8核(至少8核) 

## 软件环境准备

### 安装 Docker 和 Docker Compose

确保您的服务器上正确安装了 Docker。如果遇到 Docker Compose 安装问题，可以使用以下链接获取 Docker Compose 文件：

```sh
wget http://data.linesno.com/tools/docker-compose-linux-x86_64
```

确认 Docker 及 Docker Compose 已正确安装并运行正常，可通过以下命令检查：
```bash
systemctl status docker
docker-compose -v
```

## 下载与安装

安装前请一定确认docker已经启动。

### 获取安装包

从指定地址下载最新版本的安装文件：
```sh
wget http://data.linesno.com/aip-install/alinesno-infra-plat-install-boot-1.1.0-SNAPSHOT.jar
```

### 执行安装

下面是安装jdk参考，不同环境请自行配置jdk环境
```sh
sudo yum install epel-release
sudo yum install java-17-openjdk-devel
java --version
```

使用 JDK 17 来执行下载的 JAR 文件以开始安装过程：
```bash
java -jar alinesno-infra-plat-install-boot-1.1.0-SNAPSHOT.jar
```

访问 `http://47.98.249.9:28080` 进行初始化配置。点击“环境检查”，如果没有异常，可继续点击【生成安装配置】完成安装。

## 访问平台

安装完成后，可以通过以下 URL 访问智能体平台和工作台：
- 智能体平台: [http://47.98.249.9:30109](http://47.98.249.9:30109)
- 工作台: [http://47.98.249.9:30600](http://47.98.249.9:30600)

所有安装文件将被放置在 `${user.home}/.aip-install` 目录下，账号密码信息存储于 `.env` 文件中。

## 手动安装步骤（如需）

若自动安装过程中出现问题，您可以选择手动安装。进入对应的应用环境目录，并执行以下命令：
```bash
docker-compose -f docker-compose-dev.yaml --env-file ../.env up
```

更多应用端口详情请参阅 `${user.home}/.aip-install/alinesno-env-tools.yaml` 文件。

## 故障排除

如遇环境异常，可以尝试点击页面上的【重新安装】选项来解决问题。

## 注意

上述文档中的 IP 地址、端口号、文件路径等应根据实际情况调整。此外，对于敏感信息如账号密码，请确保按照安全最佳实践妥善处理。
 