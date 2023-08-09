# Nexus仓库集成

## 概述

将Nexus仓库集成到系统中，用于管理和存储软件包、依赖项等。

## 你将获取

- Nexus仓库的配置
- Nexus仓库的上传
- 集成多个开源Nexus仓库

## 集成方式

要将Nexus仓库集成到系统中，需要进行以下配置和操作：

1. 创建一个名为`settings.xml`的配置文件，用于指定Nexus仓库的相关信息。
2. 在`settings.xml`中配置服务器信息，包括仓库ID、用户名和密码。示例配置如下：
```xml
<?xml version="1.0" encoding="UTF-8"?>
<settings>
  <servers>
    <server>
      <id>rdc-releases</id>
      <username>${{ NEXUS_USERNAME }}</username>
      <password>${{ NEXUS_PASSWORD }}</password>
    </server>
    <server>
      <id>rdc-snapshots</id>
      <username>${{ NEXUS_USERNAME }}</username>
      <password>${{ NEXUS_PASSWORD }}</password>
    </server>
  </servers>
  ...
</settings>
```
请根据实际情况替换`${{ NEXUS_USERNAME }}`和`${{ NEXUS_PASSWORD }}`为正确的用户名和密码。

3. 在`settings.xml`中配置镜像信息，包括镜像ID、镜像类型、名称和URL。示例配置如下：
```xml
...
  <mirrors>
    <mirror>
      <id>mirror</id>
      <mirrorOf>central,jcenter,!rdc-releases,!rdc-snapshots</mirrorOf>
      <name>mirror</name>
      <url>https://repo.maven.apache.org/maven2</url>
    </mirror>
    <mirror>
      <id>rdc-releases</id>
      <mirrorOf>releases</mirrorOf>
      <url>${{ secrets.NEXUS_REPOSITORY_RELEASE }}</url>
    </mirror>
    <mirror>
      <id>rdc-snapshots</id>
      <mirrorOf>snapshots</mirrorOf>
      <url>${{ secrets.NEXUS_REPOSITORY_SNAPSHOT }}</url>
    </mirror>
  </mirrors>
...
```
请根据实际情况替换镜像URL为正确的Nexus仓库地址。

4. 在`settings.xml`中配置配置文件的profiles部分，包括profile ID、发布和快照仓库URL等。示例配置如下：
```xml
...
  <profiles>
    <profile>
      <id>rdc</id>
      <properties>
        <altReleaseDeploymentRepository>
          rdc-releases::default::${{ secrets.NEXUS_REPOSITORY_RELEASE }}
        </altReleaseDeploymentRepository>
        <altSnapshotDeploymentRepository>
          rdc-snapshots::default::${{ secrets.NEXUS_REPOSITORY_SNAPSHOT }}
        </altSnapshotDeploymentRepository>
      </properties>
      <repositories>
        <repository>
          <id>central</id>
          <url>https://repo.maven.apache.org/maven2</url>
          <releases>
            <enabled>true</enabled>
          </releases>
          <snapshots>
            <enabled>false</enabled>
          </snapshots>
        </repository>
        <repository>
          <id>snapshots</id>
          <url>https://repo.maven.apache.org/maven2</url>
          <releases>
            <enabled>false</enabled>
          </releases>
          <snapshots>
            <enabled>true</enabled>
          </snapshots>
        </repository>
        <repository>
          <id>rdc-releases</id>
          <url>${{ secrets.NEXUS_REPOSITORY_RELEASE }}</url>
          <releases>
            <enabled>true</enabled>
          </releases>
          <snapshots>
            <enabled>false</enabled>
          </snapshots>
        </repository>
        <repository>
          <id>rdc-snapshots</id>
          <url>${{ secrets.NEXUS_REPOSITORY_SNAPSHOT }}</url>
          <releases>
            <enabled>false</enabled>
          </releases>
          <snapshots>
            <enabled>true</enabled>
          </snapshots>
        </repository>
      </repositories>
    </profile>
  </profiles>
...
```
请根据实际情况替换仓库URL为正确的Nexus仓库地址。

5. 在`settings.xml`中配置activeProfiles，指定要激活的profile。示例配置如下：
```xml
...
  <activeProfiles>
    <activeProfile>rdc</activeProfile>
  </activeProfiles>
</settings>
```
这里激活了名为`rdc`的profile。

6. 将配置文件`settings.xml`放置在Maven的配置目录下，通常是`~/.m2`目录。

完成以上配置后，可以使用`mvn clean deploy`命令来进行上传操作。

## 注意事项

- 请确保在配置`settings.xml`时，将其中的用户名和密码替换为正确的凭据。
- 请根据实际情况替换镜像URL和仓库URL为正确的Nexus仓库地址。
- 配置文件`settings.xml`需要放置在Maven的配置目录下才能生效。

## 术语和缩略语

- Nexus: Nexus是一个用于管理和传输二进制、源、API和其他组件的仓库管理系统。

## 其它

- 无