# ElasticSearch 部署和安装指南

本文档提供了在 CentOS 7 上部署和安装 ElasticSearch 7.10 的详细步骤和说明。

## 环境准备

确保您的 CentOS 7 服务器满足以下要求：

- 已经安装了 Java 8 或更高版本。
- 具有足够的内存和存储空间来支持 ElasticSearch 的运行。
- 已经设置了正确的主机名和 IP 地址。

## 最小配置

以下是 ElasticSearch 集群的最小配置：

### 硬件配置

- CPU：至少 2 个核心。
- 内存：至少 4GB RAM。
- 存储：至少 30GB 磁盘空间。

### 软件配置

- 操作系统：CentOS 7。
- Java：安装 Java 8 或更高版本。

## 建议配置

以下是 ElasticSearch 集群的建议配置：

### 硬件配置

- CPU：建议 4 个或更多核心。
- 内存：建议 8GB RAM 或更多。
- 存储：建议使用 SSD 硬盘，至少 60GB 磁盘空间。

### 软件配置

- 操作系统：CentOS 7。
- Java：建议使用最新版本的 Java 11。

## JDK 配置

在安装 ElasticSearch 之前，您需要安装并配置适当的 JDK。以下是在 CentOS 7 上安装 JDK 11 的步骤：

1. 添加 JDK 11 的存储库：

```shell
sudo yum install -y https://adoptopenjdk.jfrog.io/adoptopenjdk/rpm/centos/7/x86_64/adoptopenjdk.repo
```

2. 安装 JDK 11：

```shell
sudo yum install -y adoptopenjdk-11-hotspot
```

3. 验证 JDK 安装：

```shell
java -version
```

确保输出显示 JDK 11 的版本信息。

## 服务器配置

在进行 ElasticSearch 部署之前，您需要配置服务器以满足 ElasticSearch 的要求。以下是一些建议的服务器配置：

- 禁用 THP（Transparent Huge Pages）：ElasticSearch 不建议启用 THP。您可以通过在 `/etc/rc.local` 文件中添加以下命令来禁用 THP：

  ```shell
  echo never > /sys/kernel/mm/transparent_hugepage/enabled
  echo never > /sys/kernel/mm/transparent_hugepage/defrag
  ```

- 调整文件描述符限制：ElasticSearch 需要较高的文件描述符限制。您可以通过编辑 `/etc/security/limits.conf` 文件，并添加以下行来调整文件描述符限制：

  ```
  alinesno     soft    nofile    65536
  alinesno     hard    nofile    65536
  ```

  这里的 `alinesno` 是您的用户名。

- 调整虚拟内存限制：ElasticSearch 需要增加虚拟内存映射区域的最大数量。您可以通过编辑 `/etc/sysctl.conf` 文件，并添加以下行来调整虚拟内存限制：

  ```
  vm.max_map_count = 262144
  ```

  然后通过运行以下命令使配置生效：

  ```shell
  sudo sysctl -p
  ```

## 线程限制说明

为了优化 ElasticSearch 的性能和稳定性，您可以设置以下线程限制：

- `bootstrap.memory_lock`：将 ElasticSearch 进程锁定在内存中，避免交换和页面错误。您可以在 `config/elasticsearch.yml` 文件中添加以下配置：

  ```shell
  bootstrap.memory_lock: true
  ```

- `ulimit`：调整操作系统的打开文件和进程限制。您可以编辑 `/etc/security/limits.conf` 文件，并添加以下行：

  ```
  alinesno     soft    nofile    65536
  alinesno     hard    nofile    65536
  alinesno     soft    nproc     4096
  alinesno     hard    nproc     4096
  ```

  这里的 `alinesno` 是您的用户名。
## 步骤

### 1. 下载 ElasticSearch

首先，您需要下载 ElasticSearch 的安装包。在终端中执行以下命令：

```shell
wget https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-7.10.0-linux-x86_64.tar.gz
```

### 2. 解压安装包

解压下载的安装包：

```shell
tar -xzf elasticsearch-7.10.0-linux-x86_64.tar.gz
```

### 3. 配置 ElasticSearch

进入 ElasticSearch 目录：

```shell
cd elasticsearch-7.10.0
```

编辑配置文件 `config/elasticsearch.yml`：

```shell
vi config/elasticsearch.yml
```

根据您的需求进行以下配置：

- `cluster.name`：指定集群的名称。
- `node.name`：指定节点的名称。
- `path.data`：指定 ElasticSearch 数据文件的路径。
- `path.logs`：指定日志文件的路径。

确保在所有节点上具有相同的集群名称，并为每个节点设置唯一的节点名称。

保存并关闭文件。

### 4. 配置主节点和数据节点

在集群中，您可以选择将某些节点配置为主节点（master node）和数据节点（data node）。主节点负责集群管理和协调操作，而数据节点负责存储和处理数据。

编辑配置文件 `config/elasticsearch.yml`：

```shell
vi config/elasticsearch.yml
```

对于主节点，添加以下配置：

```shell
node.master: true
```

对于数据节点，添加以下配置：

```shell
node.data: true
```

确保在所有节点上正确配置主节点和数据节点。

保存并关闭文件。

### 5. 配置发现和集群节点

在集群中，节点需要能够发现其他节点并加入集群。为此，您需要配置发现机制和集群节点。

编辑配置文件 `config/elasticsearch.yml`：

```shell
vi config/elasticsearch.yml
```

添加以下配置：

```shell
discovery.seed_hosts: ["host1", "host2", "host3"]
cluster.initial_master_nodes: ["node1", "node2", "node3"]
```

将 `"host1", "host2", "host3"` 替换为实际的主机名或 IP 地址，将 `"node1", "node2", "node3"` 替换为实际的节点名称。

保存并关闭文件。

### 6. 启动 ElasticSearch

通过以下命令在每个节点上启动 ElasticSearch：

```shell
./bin/elasticsearch
```

### 7. 验证集群状态

使用 curl 命令验证 ElasticSearch 集群状态：

```shell
curl -X GET http://localhost:9200/_cluster/health?pretty
```

您应该会看到类似以下的输出：

```
{
  "cluster_name" : "my_cluster",
  "status" : "green",
  "timed_out" : false,
  "number_of_nodes" : 3,
  "number_of_data_nodes" : 3,
  "active_primary_shards" : 0,
  "active_shards" : 0,
  "relocating_shards" : 0,
  "initializing_shards" : 0,
  "unassigned_shards" : 0,
  "delayed_unassigned_shards" : 0,
  "number_of_pending_tasks" : 0,
  "number_of_in_flight_fetch" : 0,
  "task_max_waiting_in_queue_millis" : 0,
  "active_shards_percent_as_number" : 100.0
}
```

如果您能看到类似的输出，并且状态为 "green"，则表示 ElasticSearch 集群安装和启动成功。

## 配置建议

以下是一些建议的配置选项，可以根据您的需求进行调整：

- `cluster.name`：设置一个唯一的集群名称。
- `node.name`：为每个节点设置一个有意义的名称。
- `path.data`：将数据文件存储在独立的磁盘分区上。
- `path.logs`：将日志文件存储在独立的磁盘分区上。
- `network.host`：设置 ElasticSearch 监听的网络接口。
- `discovery.seed_hosts`：指定用于发现其他节点的主机列表。
- `cluster.initial_master_nodes`：指定初始主节点的名称。

## 限制线程说明

为了优化 ElasticSearch 的性能和稳定性，您可以根据服务器的硬件和资源情况设置以下线程限制：

- `bootstrap.memory_lock`：将 ElasticSearch 进程锁定在内存中，避免交换和页面错误。
- `max_map_count`：增加虚拟内存映射区域的最大数量。
- `ulimit`：调整操作系统的打开文件和进程限制。

您可以在启动 ElasticSearch 之前，根据您的需求和服务器的配置，在启动脚本中设置这些限制。


## 将 ElasticSearch 添加到系统服务

要将 ElasticSearch 添加到系统服务中，您可以按照以下步骤进行操作：

1. 创建 `elasticsearch.service` 文件：

```shell
sudo vi /etc/systemd/system/elasticsearch.service
```

2. 将以下内容添加到文件中：

```
[Unit]
Description=Elasticsearch
Documentation=https://www.elastic.co
Wants=network-online.target
After=network-online.target

[Service]
Type=simple
User=alinesno
Group=alinesno
LimitMEMLOCK=infinity
LimitNOFILE=65536
LimitNPROC=4096
Environment=ES_HOME=/home/alinesno/elasticsearch-7.10.0
Environment=PID_DIR=/var/run/elasticsearch
EnvironmentFile=-/etc/sysconfig/elasticsearch
ExecStart=/home/alinesno/elasticsearch-7.10.0/bin/elasticsearch
Restart=always
WorkingDirectory=/home/alinesno/elasticsearch-7.10.0

[Install]
WantedBy=multi-user.target
```

确保将 `User` 和 `Group` 替换为您的用户名。

3. 保存并关闭文件。

4. 重新加载 systemd 配置：

```shell
sudo systemctl daemon-reload
```

5. 启动 ElasticSearch 服务：

```shell
sudo systemctl start elasticsearch
```

6. 验证 ElasticSearch 服务状态：

```shell
sudo systemctl status elasticsearch
```

如果状态显示为 "active"，则表示 ElasticSearch 服务已成功启动。

7. 设置 ElasticSearch 服务开机自启动：

```shell
sudo systemctl enable elasticsearch
```

现在，您可以使用以下命令来控制 ElasticSearch 服务：

- 启动服务：`sudo systemctl start elasticsearch`
- 停止服务：`sudo systemctl stop elasticsearch`
- 重启服务：`sudo systemctl restart elasticsearch`
- 查看服务状态：`sudo systemctl status elasticsearch`

请注意，这些命令需要使用 `sudo` 运行，以获取管理员权限。

## 总结

恭喜！您已经成功部署和安装了 ElasticSearch 7.10 集群。现在您可以开始使用 ElasticSearch 来进行强大的搜索和分析。如有任何问题，请参考 ElasticSearch 的官方文档或社区支持。

祝您使用愉快！