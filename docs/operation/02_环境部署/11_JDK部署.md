# JDK 11 安装和配置文档

本文档将指导您在 CentOS 7 上安装 JDK 11，并提供一些 JDK 11 的调优参数和常用配置参数。

## 步骤 1：添加 JDK 11 存储库

1. 打开终端并使用 root 用户或具有 sudo 权限的用户登录。

2. 运行以下命令将 JDK 11 存储库添加到系统：

```shell
sudo yum install -y https://adoptopenjdk.jfrog.io/adoptopenjdk/rpm/centos/7/x86_64/adoptopenjdk.repo
```

## 步骤 2：安装 JDK 11

1. 运行以下命令安装 JDK 11：

```shell
sudo yum install -y adoptopenjdk-11-hotspot
```

2. 安装完成后，验证 JDK 安装是否成功：

```shell
java -version
```

确保输出显示 JDK 11 的版本信息。

## 步骤 3：JDK 11 调优参数

在使用 JDK 11 时，您可以根据需要调整一些参数来优化性能和稳定性。

1. 内存相关参数

- `-Xms`：设置 Java 堆的初始内存大小。
- `-Xmx`：设置 Java 堆的最大内存大小。

示例：

```shell
java -Xms2g -Xmx4g -jar your_application.jar
```

2. GC 相关参数

- `-XX:+UseG1GC`：启用 G1 垃圾回收器。
- `-XX:MaxGCPauseMillis`：设置最大 GC 暂停时间的目标值。

示例：

```shell
java -XX:+UseG1GC -XX:MaxGCPauseMillis=200 -jar your_application.jar
```

3. 线程相关参数

- `-XX:ParallelGCThreads`：设置并行垃圾回收的线程数。
- `-XX:ConcGCThreads`：设置并发垃圾回收的线程数。

示例：

```shell
java -XX:ParallelGCThreads=4 -XX:ConcGCThreads=2 -jar your_application.jar
```

## 步骤 4：常用配置参数

以下是一些常用的 JDK 11 配置参数，您可以根据需要进行调整。

- `-Dfile.encoding`：设置文件编码。
- `-Djava.security.egd`：设置随机数生成器的来源。
- `-Dsun.net.client.defaultConnectTimeout`：设置默认的网络连接超时时间。
- `-Dsun.net.client.defaultReadTimeout`：设置默认的网络读取超时时间。

示例：

```shell
java -Dfile.encoding=UTF-8 -Djava.security.egd=file:/dev/urandom -Dsun.net.client.defaultConnectTimeout=5000 -Dsun.net.client.defaultReadTimeout=10000 -jar your_application.jar
```

## 结论

通过按照本文档的步骤，在 CentOS 7 上成功安装和配置了 JDK 11。您还了解了一些 JDK 11 的调优参数和常用配置参数，以便根据需要进行优化。

请注意，本文档提供的参数仅供参考，具体的参数设置应根据您的应用程序和系统需求进行调整。

祝您使用愉快！