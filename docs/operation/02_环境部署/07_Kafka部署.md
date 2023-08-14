# Kafka集群安装文档

## 概述
本文提供了在CentOS 7上安装和配置Kafka集群的指南。其中包括安装Java JDK 11、下载和解压Zookeeper和Kafka、
配置Zookeeper集群和Kafka集群、启动集群以及验证集群的步骤。建议进行更详细的配置和安全性设置，并使用适当的集群规模和复制因子来确保高可用性和数据冗余。

## 你将获得
- 安装Java JDK 11
- 下载和解压Zookeeper和Kafka
- 配置Zookeeper集群和Kafka集群
- 启动Kafka集群
- 验证Kafka集群

## 步骤1：准备工作

在开始安装之前，请确保满足以下先决条件：

- CentOS 7操作系统
- Java JDK 11或更高版本
- 具有sudo权限的用户
 
1. 确保服务器满足以下要求：
    - 内存：建议每个Kafka节点至少具有8GB的内存。
    - 存储：根据预期的消息负载和保留期限，为Kafka节点提供足够的磁盘空间。
    - CPU：建议每个Kafka节点具有多个CPU核心以处理高吞吐量的消息流。
    - 网络：确保服务器具有足够的网络带宽和稳定的网络连接。

2. 将用户`alinesno`添加到sudoers文件中，以便具有root权限。 

## 步骤2：安装Java JDK

Kafka需要Java JDK来运行。按照以下步骤安装Java JDK 11：

1. 打开终端并执行以下命令以安装Java JDK 11：

   ```
   sudo yum install java-11-openjdk-devel
   ```

2. 安装完成后，验证Java JDK是否正确安装：

   ```
   java -version
   ```

   应该显示Java版本信息。

## 步骤3：下载和解压Zookeeper

1. 打开终端并执行以下命令以下载Zookeeper：

   ```
   wget https://dlcdn.apache.org/zookeeper/zookeeper-3.8.2/apache-zookeeper-3.8.2-bin.tar.gz
   ```

2. 下载完成后，执行以下命令解压Zookeeper：

   ```
   tar -xzf apache-zookeeper-3.8.2-bin.tar.gz
   ```

   解压后的文件将位于当前目录下的"apache-zookeeper-3.8.2-bin"文件夹中。

## 步骤4：下载和解压Kafka

1. 打开终端并执行以下命令以下载Kafka：

   ```
   wget https://downloads.apache.org/kafka/3.5.1/kafka_2.12-3.5.1.tgz
   ```

2. 下载完成后，执行以下命令解压Kafka：

   ```
   tar -xzf kafka_2.12-3.5.1.tgz
   ```

   解压后的文件将位于当前目录下的"kafka_2.12-3.5.1"文件夹中。

## 步骤5：配置Zookeeper集群

1. 进入Zookeeper安装目录：

   ```
   cd apache-zookeeper-3.8.2-bin
   ```

2. 复制示例配置文件：

   ```
   cp conf/zoo_sample.cfg conf/zoo.cfg
   ```

3. 编辑`conf/zoo.cfg`文件：

   ```
   vi conf/zoo.cfg
   ```

4. 在文件中，按需修改以下配置项：

    - `dataDir`：Zookeeper数据目录的路径。

   保存并退出文件。

## 步骤6：启动Zookeeper集群

1. 在新的终端窗口中，进入Zookeeper安装目录：

   ```
   cd apache-zookeeper-3.8.2-bin
   ```

2. 启动Zookeeper服务：

   ```
   bin/zkServer.sh start
   ```

   执行此命令以启动Zookeeper集群。

3. 如果您有多个Zookeeper节点，请在新的终端窗口中为每个节点重复步骤2。

## 步骤7：配置Kafka集群

1. 进入Kafka安装目录：

   ```
   cd kafka_2.12-3.5.1
   ```

2. 编辑`config/server.properties`文件：

   ```
   vi config/server.properties
   ```

3. 在文件中，按需修改以下配置项：

    - `broker.id`：每个Kafka节点的唯一标识符。
    - `listeners`：Kafka监听器的主机名和端口号。
    - `advertised.listeners`：对外公开的Kafka监听器的主机名和端口号。
    - `zookeeper.connect`：Zookeeper集群的连接字符串。

   保存并退出文件。

## 步骤8：启动Kafka集群

1. 在新的终端窗口中，进入Kafka安装目录：

   ```
   cd kafka_2.12-3.5.1
   ```

2. 启动Kafka服务器：

   ```
   bin/kafka-server-start.sh config/server.properties
   ```

   执行此命令以启动第一个Kafka节点。

3. 如果您有多个Kafka节点，请在新的终端窗口中为每个节点重复步骤2。

## 步骤9：验证Kafka集群

1. 在新的终端窗口中，进入Kafka安装目录：

   ```
   cd kafka_2.12-3.5.1
   ```

2. 创建一个名为"test"的主题：

   ```
   bin/kafka-topics.sh --create --topic test --bootstrap-server localhost:9092 --replication-factor 1 --partitions 1
   ```

3. 发布一些消息到"test"主题：

   ```
   bin/kafka-console-producer.sh --topic test --bootstrap-server localhost:9092
   ```

   输入一些消息并按Enter键，按ctrl+c结束

4. 消费"test"主题的消息：

   ```
   bin/kafka-console-consumer.sh --topic test --from-beginning --bootstrap-server localhost:9092
   ```

   您应该能够看到之前发布的消息。


## 步骤10：Kafka消息存储设置

要将Kafka的消息存储天数设置为7天和消息最大大小设置为5M，请按照以下步骤进行配置：

1. 进入Kafka安装目录：

   ```
   cd kafka_2.12-3.5.1
   ```

2. 编辑`config/server.properties`文件：

   ```
   vi config/server.properties
   ```

3. 在文件中，找到以下配置项并进行相应的修改：

    - `log.retention.hours`：将其设置为168（即7天）以设置消息的存储时间为7天。
    - `message.max.bytes`：将其设置为5242880（即5M）以设置消息的最大大小为5M。

   保存并退出文件。

## 步骤11：Kafka副本配置

要配置Kafka的副本配置为2个和集群节点数量为3个，请按照以下步骤进行配置：

1. 编辑`config/server.properties`文件：

   ```
   vi config/server.properties
   ```

2. 在文件中，找到以下配置项并进行相应的修改：

    - `default.replication.factor`：将其设置为2以配置每个主题的副本数为2。
    - `offsets.topic.replication.factor`：将其设置为2以配置Kafka内部使用的`__consumer_offsets`主题的副本数为2。

   保存并退出文件。

3. 如果您要配置3个Kafka节点的集群，请确保复制以下文件和配置到其他节点上：

    - Kafka安装目录下的整个文件夹。
    - 您在步骤5中修改的`config/server.properties`文件。

   这样，每个节点都将具有相同的配置，并且可以以集群模式运行。

## 步骤12：Kafka集成服务器service

以下是一个示例的Kafka集成服务器的service脚本，您可以使用它来启动、停止和重启Kafka服务，并使用systemctl来管理服务。

1. 创建一个名为`kafka.service`的文件：

   ```
   sudo vi /etc/systemd/system/kafka.service
   ```

2. 将以下内容复制到文件中并保存：

   ```
    [Unit]
    Description=Apache Kafka Server
    Documentation=http://kafka.apache.org/documentation.html
    Requires=network.target
    After=network.target

    [Service]
    Type=simple
    User=alinesno
    Environment="JAVA_HOME=/usr/lib/jvm/java-11-openjdk"
    ExecStart=/home/alinesno/kafka_2.12-3.5.1/bin/kafka-server-start.sh /home/alinesno/kafka_2.12-3.5.1/config/server.properties
    ExecStop=/home/alinesno/kafka_2.12-3.5.1/bin/kafka-server-stop.sh
    Restart=on-failure

    [Install]
    WantedBy=multi-user.target
   ```

   请确保替换`/path/to/kafka_2.12-3.5.1`为实际的Kafka安装目录。

3. 保存并退出文件。

4. 重新加载systemd配置：

   ```
   sudo systemctl daemon-reload
   ```

现在，您可以使用以下命令来启动、停止和重启Kafka服务：

- 启动Kafka服务：

  ```
  sudo systemctl start kafka
  ```

- 停止Kafka服务：

  ```
  sudo systemctl stop kafka
  ```

- 重启Kafka服务：

  ```
  sudo systemctl restart kafka
  ```
  
## 结论

**建议进行更详细的配置和安全性设置，并使用适当的集群规模和复制因子来确保高可用性和数据冗余。** 在生产环境中，您可以考虑以下配置和设置：

- 配置Kafka集群的复制因子（replication factor）为大于1的值，以实现数据冗余和高可用性。
- 配置适当的分区数和副本数，以满足您的业务需求和数据负载。
- 配置Kafka的安全性设置，如SSL/TLS加密、

认证和访问控制，以保护Kafka集群免受未经授权的访问。

以下是一些进一步的配置和安全性设置的建议：

- 使用SSL/TLS加密：配置Kafka集群使用SSL/TLS加密来保护数据在传输过程中的安全性。
- 配置身份验证：使用Kafka支持的身份验证机制，如Kerberos、SSL客户端身份验证或SASL/PLAIN身份验证，以确保只有经过身份验证的用户可以访问和操作Kafka集群。
- 设置访问控制列表（ACLs）：使用Kafka的ACL功能限制访问和操作Kafka主题的权限，以确保只有授权的用户或应用程序可以读写特定的主题。
- 监控和日志记录：配置适当的监控和日志记录机制，以便及时发现和响应潜在的安全事件或故障。
- 定期备份和数据冗余：实施定期的备份策略，并确保在集群中有足够的数据冗余，以防止数据丢失。
