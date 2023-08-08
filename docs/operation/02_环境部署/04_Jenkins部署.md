## Jenkins安装文档

本文提供了在CentOS 7上使用`alinesno`用户将Jenkins安装在`/home/alinesno/`目录下的指南。以下是安装Jenkins的步骤：

### 步骤1：准备工作

在开始安装之前，请确保满足以下先决条件：

- CentOS 7操作系统
- 具有sudo权限的用户

### 步骤2：创建用户

1. 打开终端并使用sudo权限的用户登录到服务器。

2. 创建`alinesno`用户（如果尚未创建）：

   ```
   sudo adduser alinesno
   ```

   按照提示设置密码和其他相关信息。

3. 将`alinesno`用户添加到sudo组以获得管理员权限：

   ```
   sudo usermod -aG sudo alinesno
   ```

4. 切换到`alinesno`用户：

   ```
   su - alinesno
   ```

   输入之前设置的密码以登录到`alinesno`用户。

### 步骤3：安装Jenkins

1. 在`/home/alinesno/`目录下创建一个新目录来安装Jenkins：

   ```
   mkdir /home/alinesno/jenkins
   ```

2. 进入Jenkins安装目录：

   ```
   cd /home/alinesno/jenkins
   ```

3. 打开终端并执行以下命令以导入Jenkins的GPG密钥：

   ```
   sudo rpm --import https://pkg.jenkins.io/redhat/jenkins.io.key
   ```

4. 添加Jenkins存储库。创建一个名为`jenkins.repo`的文件：

   ```
   sudo vi /etc/yum.repos.d/jenkins.repo
   ```

5. 将以下内容复制到文件中并保存：

   ```
   [jenkins]
   name=Jenkins
   baseurl=https://pkg.jenkins.io/redhat-stable
   gpgcheck=1
   ```

6. 安装Jenkins。执行以下命令：

   ```
   sudo yum install jenkins
   ```

7. 启动Jenkins服务：

   ```
   sudo systemctl start jenkins
   ```

8. 验证Jenkins是否已成功启动。在浏览器中访问`http://your-server-ip:8080`，将会看到Jenkins的欢迎页面。

9. 在终端中执行以下命令以获取Jenkins的初始管理员密码：

   ```
   sudo cat /var/lib/jenkins/secrets/initialAdminPassword
   ```

   复制该密码。

10. 返回浏览器，输入初始管理员密码，然后点击"Continue"。

11. 选择"Install suggested plugins"以安装Jenkins的建议插件。

12. 创建管理员用户并设置其他配置，然后点击"Save and Finish"。

13. 点击"Start using Jenkins"进入Jenkins的主界面。

### 结论

通过按照上述步骤，在CentOS 7上使用`alinesno`用户将Jenkins安装在`/home/alinesno/`目录下。确保您的服务器满足先决条件，并正确创建和配置`alinesno`用户。然后，按照指南中的步骤创建Jenkins安装目录并安装Jenkins。最后，按照指南中的步骤验证Jenkins的安装，并设置管理员用户和插件。完成这些步骤后，您将能够开始使用Jenkins进行构建和持续集成。

希望这可以帮助您成功安装Jenkins。如果您有任何其他问题，请随时提问。