# 安装Docker环境

## 概述
本文提供了安装Docker环境的指南。Docker是一种流行的容器化平台，可以轻松创建、部署和管理应用程序和服务。在安装Docker之前，请确保您的系统满足要求，并按照以下步骤进行安装和配置。

## 你将获得
- 安装Docker环境

## 步骤1：准备工作
在开始安装Docker之前，请确保您的系统满足以下要求：
- 操作系统：CentOS 7或更高版本。
- 内核版本：3.10及以上。
- 内存：建议至少4GB的可用内存。

## 步骤2：安装Docker
1. 更新系统软件包：
   ```
   sudo yum update -y
   ```

2. 安装所需的软件包以允许yum使用HTTPS源：
   ```
   sudo yum install -y yum-utils device-mapper-persistent-data lvm2
   ```

3. 添加Docker的官方GPG密钥：
   ```
   sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
   ```

4. 安装Docker引擎：
   ```
   sudo yum install -y docker-ce docker-ce-cli containerd.io
   ```

5. 启动Docker服务：
   ```
   sudo systemctl start docker
   ```

6. 将Docker服务设置为开机自启动：
   ```
   sudo systemctl enable docker
   ```

## 步骤3：配置Docker存储路径
1. 停止Docker服务：
   ```
   sudo systemctl stop docker
   ```

2. 编辑Docker配置文件：
   ```
   sudo vi /etc/docker/daemon.json
   ```

3. 在文件中添加以下内容：
   ```
   {
     "data-root": "/mnt/docker/root"
   }
   ```

   这将将Docker的默认存储路径设置为`/mnt/docker/root`。请确保该目录存在并具有足够的磁盘空间。

4. 保存并退出文件。

5. 启动Docker服务：
   ```
   sudo systemctl start docker
   ```

## 结论
恭喜！您已成功安装和配置了Docker环境，并将默认存储路径设置为`/mnt/docker/root`。现在您可以开始使用Docker来创建、部署和管理容器化应用程序和服务。

希望这份指南对您有所帮助！如果您有任何进一步的问题，请随时提问。