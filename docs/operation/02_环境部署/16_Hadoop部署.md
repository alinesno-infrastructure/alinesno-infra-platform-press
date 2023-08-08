# Hadoop集群安装文档

## 概述
本文提供了在CentOS 7上安装和配置Hadoop集群的指南。其中包括安装Java JDK、下载和解压Hadoop、配置Hadoop集群、启动集群以及验证集群的步骤。建议进行更详细的配置和安全性设置，并使用适当的集群规模和复制因子来确保高可用性和数据冗余。

## 你将获得
- 安装Java JDK
- 下载和解压Hadoop
- 配置Hadoop集群
- 启动Hadoop集群
- 验证Hadoop集群

## 步骤1：准备工作

在开始安装之前，请确保满足以下先决条件：

- CentOS 7操作系统
- Java JDK 8或更高版本
- 具有sudo权限的用户

1. 确保服务器满足以下要求：
    - 内存：建议每个Hadoop节点至少具有8GB的内存。
    - 存储：根据预期的数据存储需求，为Hadoop节点提供足够的磁盘空间。
    - CPU：建议每个Hadoop节点具有多个CPU核心以处理并行计算任务。
    - 网络：确保服务器具有足够的网络带宽和稳定的网络连接。

2. 将用户`alinesno`添加到sudoers文件中，以便具有root权限。

## 步骤2：安装Java JDK

Hadoop需要Java JDK来运行。按照以下步骤安装Java JDK：

1. 打开终端并执行以下命令以安装Java JDK：

   ```
   sudo yum install java-8-openjdk-devel
   ```

2. 安装完成后，验证Java JDK是否正确安装：

   ```
   java -version
   ```

   应该显示Java版本信息。

## 步骤3：下载和解压Hadoop

1. 打开终端并执行以下命令以下载Hadoop：

   ```
   wget https://downloads.apache.org/hadoop/common/hadoop-3.3.1/hadoop-3.3.1.tar.gz
   ```

2. 解压下载的文件：

   ```
   tar -xzf hadoop-3.3.1.tar.gz
   ```

3. 将解压后的Hadoop文件夹移动到适当的位置：

   ```
   sudo mv hadoop-3.3.1 /usr/local/hadoop
   ```

4. 配置Hadoop环境变量：

   打开`~/.bashrc`文件并添加以下行：

   ```
   export HADOOP_HOME=/usr/local/hadoop
   export PATH=$PATH:$HADOOP_HOME/bin:$HADOOP_HOME/sbin
   ```

   保存并关闭文件。

5. 执行以下命令使环境变量生效：

   ```
   source ~/.bashrc
   ```

## 步骤4：配置Hadoop集群

1. 进入Hadoop配置目录：

   ```
   cd /usr/local/hadoop/etc/hadoop
   ```

2. 配置`hadoop-env.sh`文件：

   打开`hadoop-env.sh`文件并找到以下行：

   ```
   # export JAVA_HOME=/usr/lib/jvm/java-8-openjdk
   ```

   将其修改为：

   ```
   export JAVA_HOME=/usr/lib/jvm/java-8-openjdk
   ```

   保存并关闭文件。

3. 配置`core-site.xml`文件：

   打开`core-site.xml`文件并添加以下内容：

   ```xml
   <configuration>
     <property>
       <name>fs.defaultFS</name>
       <value>hdfs://localhost:9000</value>
     </property>
   </configuration>
   ```

   保存并关闭文件。

4. 配置`hdfs-site.xml`文件：

   打开`hdfs-site.xml`文件并添加以下内容：

   ```xml
   <configuration>
     <property>
       <name>dfs.replication</name>
       <value>3</value>
     </property>
   </configuration>
   ```

   保存并关闭文件。

5. 配置`mapred-site.xml`文件：

   复制模板文件：

   ```
   cp mapred-site.xml.template mapred-site.xml
   ```

   打开`mapred-site.xml`文件并添加以下内容：

   ```xml
   <configuration>
     <property>
       <name>mapreduce.framework.name</name>
       <value>yarn</value>
     </property>
   </configuration>
   ```

   保存并关闭文件。

6. 配置`yarn-site.xml`文件：

   打开`yarn-site.xml`文件并添加以下内容：

   ```xml
   <configuration>
     <property>
       <name>yarn.nodemanager.aux-services</name>
       <value>mapreduce_shuffle</value>
     </property>
     <property>
       <name>yarn.nodemanager.aux-services.mapreduce.shuffle.class</name>
       <value>org.apache.hadoop.mapred.ShuffleHandler</value>
     </property>
     <property>
       <name>yarn.resourcemanager.hostname</name>
       <value>localhost</value>
     </property>
   </configuration>
   ```

   保存并关闭文件。

## 步骤5：启动Hadoop集群

1. 格式化Hadoop文件系统：

   ```
   hdfs namenode -format
   ```

2. 启动Hadoop集群：

   ```
   start-dfs.sh
   start-yarn.sh
   ```

3. 验证Hadoop集群是否正常运行：

   打开浏览器并访问以下URL：

   - HDFS管理界面：http://localhost:9870
   - YARN管理界面：http://localhost:8088

   应该能够看到Hadoop集群的状态和信息。

## 结论

恭喜！您已成功安装和配置了Hadoop集群。现在您可以开始使用Hadoop进行大数据处理和分析。

请注意，这只是一个简单的安装文档示例，实际安装和配置过程可能因环境和需求而有所不同。建议参考Hadoop官方文档和其他资源以获取更详细的指南和最佳实践。