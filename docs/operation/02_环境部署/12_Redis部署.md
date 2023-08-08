# Redis集群部署

## 概述
本文提供了在CentOS 7上部署Redis集群的指南。其中包括安装Redis、配置Redis集群、设置服务器配置和线程限制，以及将Redis添加到系统服务中。建议根据实际需求进行详细配置，并遵循最小配置和建议配置来确保集群的性能和可靠性。

## 你将获得
- 安装Redis
- 配置Redis集群
- 设置服务器配置
- 设置线程限制
- 将Redis添加到系统服务

## 步骤1：准备工作

在开始部署之前，请确保满足以下先决条件：

- CentOS 7操作系统
- 具有sudo权限的用户（例如，alinesno用户）

1. 确保服务器满足以下要求：
    - 内存：建议每个Redis节点至少具有1GB的内存。
    - 存储：根据预期的数据存储需求，为Redis节点提供足够的磁盘空间。
    - CPU：建议每个Redis节点具有多个CPU核心以处理高并发的请求。
    - 网络：确保服务器具有足够的网络带宽和稳定的网络连接。

2. 将用户`alinesno`添加到sudoers文件中，以便具有root权限。

## 步骤2：安装Redis

按照以下步骤安装Redis：

1. 打开终端并执行以下命令以安装Redis：

   ```
   sudo yum install redis
   ```

2. 安装完成后，验证Redis是否正确安装：

   ```
   redis-server --version
   ```

   应该显示Redis版本信息。

## 步骤3：配置Redis集群

1. 进入Redis配置目录：

   ```
   cd /etc/redis/
   ```

2. 复制示例配置文件：

   ```
   sudo cp redis.conf redis-cluster.conf
   ```

3. 编辑`redis-cluster.conf`文件：

   ```
   sudo vi redis-cluster.conf
   ```

4. 在文件中，按需修改以下配置项：

    - `bind`：指定Redis绑定的IP地址。
    - `port`：指定Redis监听的端口号。
    - `cluster-enabled`：将其设置为`yes`以启用Redis集群模式。
    - `cluster-config-file`：指定Redis集群配置文件的路径和名称。
    - `cluster-node-timeout`：指定节点超时时间，建议设置为15000。
    - `appendonly`：将其设置为`yes`以启用AOF持久化。

   保存并退出文件。

5. 创建Redis集群所需的目录：

   ```
   sudo mkdir /var/lib/redis-cluster
   ```

## 步骤4：设置服务器配置

1. 打开终端并编辑`/etc/sysctl.conf`文件：

   ```
   sudo vi /etc/sysctl.conf
   ```

2. 在文件末尾添加以下配置项：

   ```
   vm.overcommit_memory = 1
   net.core.somaxconn = 65535
   ```

   保存并退出文件。

3. 重新加载sysctl配置：

   ```
   sudo sysctl -p
   ```

4. 打开终端并编辑`/etc/security/limits.conf`文件：

   ```
   sudo vi /etc/security/limits.conf
   ```

5. 在文件末尾添加以下配置项：

   ```
   *    soft    nofile    65535
   *    hard    nofile    65535
   ```

   保存并退出文件。

## 步骤5：设置线程限制

1. 打开终端并编辑`/etc/systemd/system/redis.service.d/limit.conf`文件：

   ```
   sudo vi /etc/systemd/system/redis.service.d/limit.conf
   ```

2. 在文件中添加以下内容：

   ```
   [Service]
   LimitNOFILE=65535
   ```

   保存并退出文件。

3. 重新加载systemd配置：

   ```
   sudo systemctl daemon-reload
