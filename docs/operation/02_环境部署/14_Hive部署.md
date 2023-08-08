# Hive安装文档

## 概述
本文提供了在CentOS 7上安装和配置Apache Hive的指南。其中包括安装Java JDK、下载和解压Hive、配置Hive元数据存储和启动Hive的步骤。建议进行更详细的配置和安全性设置，并与Hadoop集群集成以进行数据处理和查询。

## 你将获得
- 安装Java JDK
- 下载和解压Hive
- 配置Hive元数据存储
- 启动Hive

## 步骤1：准备工作

在开始安装之前，请确保满足以下先决条件：

- CentOS 7操作系统
- Java JDK 8或更高版本
- Hadoop集群已安装和运行（Hive依赖于Hadoop）

1. 确保服务器满足以下要求：
    - 内存：建议每个Hive节点至少具有8GB的内存。
    - 存储：根据预期的数据存储需求，为Hive节点提供足够的磁盘空间。
    - CPU：建议每个Hive节点具有多个CPU核心以处理并行计算任务。
    - 网络：确保服务器具有足够的网络带宽和稳定的网络连接。

2. 将用户`alinesno`添加到sudoers文件中，以便具有root权限。

## 步骤2：安装Java JDK

Hive需要Java JDK来运行。按照以下步骤安装Java JDK：

1. 打开终端并执行以下命令以安装Java JDK：

   ```
   sudo yum install java-8-openjdk-devel
   ```

2. 安装完成后，验证Java JDK是否正确安装：

   ```
   java -version
   ```

   应该显示Java版本信息。

## 步骤3：下载和解压Hive

1. 打开终端并执行以下命令以下载Hive：

   ```
   wget https://downloads.apache.org/hive/hive-3.1.2/apache-hive-3.1.2-bin.tar.gz
   ```

2. 解压下载的文件：

   ```
   tar -xzf apache-hive-3.1.2-bin.tar.gz
   ```

3. 将解压后的Hive文件夹移动到适当的位置：

   ```
   sudo mv apache-hive-3.1.2-bin /usr/local/hive
   ```

4. 配置Hive环境变量：

   打开`~/.bashrc`文件并添加以下行：

   ```
   export HIVE_HOME=/usr/local/hive
   export PATH=$PATH:$HIVE_HOME/bin
   ```

   保存并关闭文件。

5. 执行以下命令使环境变量生效：

   ```
   source ~/.bashrc
   ```

## 步骤4：配置Hive元数据存储

Hive需要一个元数据存储来存储表结构和其他元数据。您可以选择使用内嵌的Derby数据库或外部的MySQL数据库作为元数据存储。

### 使用内嵌的Derby数据库

1. 打开Hive配置目录：

   ```
   cd /usr/local/hive/conf
   ```

2. 复制模板文件：

   ```
   cp hive-default.xml.template hive-site.xml
   ```

3. 打开`hive-site.xml`文件并添加以下内容：

   ```xml
   <configuration>
     <property>
       <name>javax.jdo.option.ConnectionURL</name>
       <value>jdbc:derby:;databaseName=/usr/local/hive/metastore_db;create=true</value>
       <description>JDBC connect string for a JDBC metastore.</description>
     </property>
     <property>
       <name>javax.jdo.option.DriverName</name>
       <value>org.apache.derby.jdbc.EmbeddedDriver</value>
       <description>Driver class name for a JDBC metastore.</description>
     </property>
   </configuration>
   ```

   保存并关闭文件。

### 使用外部的MySQL数据库

1. 安装MySQL数据库：

   ```
   sudo yum install mysql-server
   ```

2. 启动MySQL服务：

   ```
   sudo systemctl start mysqld
   ```

3. 配置MySQL数据库：

   ```
   sudo mysql_secure_installation
   ```

   按照提示设置MySQL的root密码和其他安全选项。

4. 创建Hive元数据数据库：

   ```
   sudo mysql -u root -p
   ```

   在MySQL命令行中执行以下命令：

   ```sql
   CREATE DATABASE hive;
   CREATE USER 'hiveuser'@'localhost' IDENTIFIED BY 'password';
   GRANT ALL PRIVILEGES ON hive.* TO 'hiveuser'@'localhost';
   FLUSH PRIVILEGES;
   ```

   将`password`替换为实际的密码。

5. 打开Hive配置目录：

   ```
   cd /usr/local/hive/conf
   ```

6. 复制模板文件：

   ```
   cp hive-default.xml.template hive-site.xml
   ```

7. 打开`hive-site.xml`文件并添加以下内容：

   ```xml
   <configuration>
     <property>
       <name>javax.jdo.option.ConnectionURL</name>
       <value>jdbc:mysql://localhost/hive?createDatabaseIfNotExist=true</value>
       <description>JDBC connect string for a JDBC metastore.</description>
     </property>
     <property>
       <name>javax.jdo.option.ConnectionDriverName</name>
       <value>com.mysql.jdbc.Driver</value>
       <description>Driver class name for a JDBC metastore.</description>
     </property>
     <property>
       <name>javax.jdo.option.ConnectionUserName</name>
       <value>hiveuser</value>
       <description>Username to use against metastore database</description>
     </property>
     <property>
       <name>javax.jdo.option.ConnectionPassword</name>
       <value>password</value>
       <description>Password to use against metastore database</description>
     </property>
   </configuration>
   ```

   将`password`替换为实际的密码。

   保存并关闭文件。

## 步骤5：启动Hive

1. 初始化Hive元数据存储：

   ```
   schematool -dbType derby -initSchema
   ```

   如果使用外部的MySQL数据库，请使用以下命令：

   ```
   schematool -dbType mysql -initSchema
   ```

2. 启动Hive服务：

   ```
   hive --service metastore &
   hive --service hiveserver2 &
   ```

   第一个命令启动Hive元数据服务，第二个命令启动Hive服务器。

3. 验证Hive是否正常运行：

   打开终端并执行以下命令：

   ```
   hive
   ```

   应该能够进入Hive命令行界面。

## 结论

恭喜！您已成功安装和配置了Apache Hive。现在您可以使用Hive进行数据处理和查询。请注意，这只是一个简单的安装文档示例，实际安装和配置过程可能因环境和需求而有所不同。建议参考Hive官方文档和其他资源以获取更详细的指南和最佳实践。