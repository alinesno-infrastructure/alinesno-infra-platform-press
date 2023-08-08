# MongoDB部署

本文提供了MongoDB部署环境的部署文档，包括最小配置和建议配置，MongoDB配置和服务器配置，以及限制线程的说明。同时，还包括将MongoDB添加到系统服务中，以便使用systemctl命令进行启动、停止和重启。

## 最小配置要求

在开始部署之前，请确保满足以下最小配置要求：

- CentOS 7操作系统
- alinesno用户具有sudo权限

## 步骤1：准备工作

1. 确保服务器满足以下要求：
    - 内存：建议至少具有4GB的内存。
    - 存储：根据预期的数据量和使用情况，为MongoDB提供足够的磁盘空间。
    - CPU：建议具有多个CPU核心以处理高负载。
    - 网络：确保服务器具有稳定的网络连接。

2. 将用户`alinesno`添加到sudoers文件中，以便具有root权限。

## 步骤2：安装MongoDB

1. 打开终端并执行以下命令以安装MongoDB：

   ```
   sudo yum install mongodb-server
   ```

2. 安装完成后，启动MongoDB服务：

   ```
   sudo systemctl start mongod
   ```

   MongoDB将在默认端口27017上启动。

3. 验证MongoDB是否正确安装和运行：

   ```
   mongo --eval "db.adminCommand('ping')"
   ```

   如果返回结果为`{ "ok" : 1 }`，则表示MongoDB已成功安装并正在运行。

## 步骤3：配置MongoDB

1. 编辑MongoDB配置文件：

   ```
   sudo vi /etc/mongod.conf
   ```

2. 在文件中，按需修改以下配置项：

    - `bindIp`：指定MongoDB绑定的IP地址。
    - `port`：指定MongoDB监听的端口号。
    - `dbPath`：指定MongoDB数据存储路径。
    - `logPath`：指定MongoDB日志文件路径。

   保存并退出文件。

## 步骤4：限制线程

MongoDB在运行时使用多个线程来处理请求和操作。您可以根据服务器的配置和需求来限制线程的数量。

1. 编辑MongoDB的systemd服务文件：

   ```
   sudo vi /usr/lib/systemd/system/mongod.service
   ```

2. 在文件的`[Service]`部分添加以下配置行：

   ```
   LimitNOFILE=64000
   LimitNPROC=64000
   ```

   这将限制MongoDB进程的文件描述符和进程数。

   保存并退出文件。

3. 重新加载systemd配置：

   ```
   sudo systemctl daemon-reload
   ```

## 步骤5：将MongoDB添加到系统服务

1. 创建一个名为`mongodb.service`的文件：

   ```
   sudo vi /etc/systemd/system/mongodb.service
   ```

2. 将以下内容复制到文件中并保存：

   ```
   [Unit]
   Description=MongoDB Database Server
   Documentation=https://docs.mongodb.com/manual
   After=network.target

   [Service]
   User=alinesno
   ExecStart=/usr/bin/mongod --config /etc/mongod.conf
   ExecReload=/bin/kill -s HUP $MAINPID
   Restart=always
   RestartSec=3
   LimitNOFILE=64000
   LimitNPROC=64000
   PrivateTmp=true
   PrivateDevices=true

   [Install]
   WantedBy=multi-user.target
   ```

   请确保替换`alinesno`为实际的用户和`/etc/mongod.conf`为实际的配置文件路径。

3. 保存并退出文件。

4. 重新加载systemd配置：

   ```
   sudo systemctl daemon-reload
   ```

5. 启动MongoDB服务：

   ```
   sudo systemctl start mongodb
   ```

   MongoDB将在系统启动时自动启动。

现在，您可以使用以下命令来启动、停止和