(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{461:function(a,t,s){"use strict";s.r(t);var e=s(8),o=Object(e.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"mongodb部署"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mongodb部署"}},[a._v("#")]),a._v(" MongoDB部署")]),a._v(" "),t("p",[a._v("本文提供了MongoDB部署环境的部署文档，包括最小配置和建议配置，MongoDB配置和服务器配置，以及限制线程的说明。同时，还包括将MongoDB添加到系统服务中，以便使用systemctl命令进行启动、停止和重启。")]),a._v(" "),t("h2",{attrs:{id:"最小配置要求"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#最小配置要求"}},[a._v("#")]),a._v(" 最小配置要求")]),a._v(" "),t("p",[a._v("在开始部署之前，请确保满足以下最小配置要求：")]),a._v(" "),t("ul",[t("li",[a._v("CentOS 7操作系统")]),a._v(" "),t("li",[a._v("alinesno用户具有sudo权限")])]),a._v(" "),t("h2",{attrs:{id:"步骤1-准备工作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#步骤1-准备工作"}},[a._v("#")]),a._v(" 步骤1：准备工作")]),a._v(" "),t("ol",[t("li",[t("p",[a._v("确保服务器满足以下要求：")]),a._v(" "),t("ul",[t("li",[a._v("内存：建议至少具有4GB的内存。")]),a._v(" "),t("li",[a._v("存储：根据预期的数据量和使用情况，为MongoDB提供足够的磁盘空间。")]),a._v(" "),t("li",[a._v("CPU：建议具有多个CPU核心以处理高负载。")]),a._v(" "),t("li",[a._v("网络：确保服务器具有稳定的网络连接。")])])]),a._v(" "),t("li",[t("p",[a._v("将用户"),t("code",[a._v("alinesno")]),a._v("添加到sudoers文件中，以便具有root权限。")])])]),a._v(" "),t("h2",{attrs:{id:"步骤2-安装mongodb"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#步骤2-安装mongodb"}},[a._v("#")]),a._v(" 步骤2：安装MongoDB")]),a._v(" "),t("ol",[t("li",[t("p",[a._v("打开终端并执行以下命令以安装MongoDB：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("sudo yum install mongodb-server\n")])])])]),a._v(" "),t("li",[t("p",[a._v("安装完成后，启动MongoDB服务：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("sudo systemctl start mongod\n")])])]),t("p",[a._v("MongoDB将在默认端口27017上启动。")])]),a._v(" "),t("li",[t("p",[a._v("验证MongoDB是否正确安装和运行：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("mongo --eval \"db.adminCommand('ping')\"\n")])])]),t("p",[a._v("如果返回结果为"),t("code",[a._v('{ "ok" : 1 }')]),a._v("，则表示MongoDB已成功安装并正在运行。")])])]),a._v(" "),t("h2",{attrs:{id:"步骤3-配置mongodb"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#步骤3-配置mongodb"}},[a._v("#")]),a._v(" 步骤3：配置MongoDB")]),a._v(" "),t("ol",[t("li",[t("p",[a._v("编辑MongoDB配置文件：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("sudo vi /etc/mongod.conf\n")])])])]),a._v(" "),t("li",[t("p",[a._v("在文件中，按需修改以下配置项：")]),a._v(" "),t("ul",[t("li",[t("code",[a._v("bindIp")]),a._v("：指定MongoDB绑定的IP地址。")]),a._v(" "),t("li",[t("code",[a._v("port")]),a._v("：指定MongoDB监听的端口号。")]),a._v(" "),t("li",[t("code",[a._v("dbPath")]),a._v("：指定MongoDB数据存储路径。")]),a._v(" "),t("li",[t("code",[a._v("logPath")]),a._v("：指定MongoDB日志文件路径。")])]),a._v(" "),t("p",[a._v("保存并退出文件。")])])]),a._v(" "),t("h2",{attrs:{id:"步骤4-限制线程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#步骤4-限制线程"}},[a._v("#")]),a._v(" 步骤4：限制线程")]),a._v(" "),t("p",[a._v("MongoDB在运行时使用多个线程来处理请求和操作。您可以根据服务器的配置和需求来限制线程的数量。")]),a._v(" "),t("ol",[t("li",[t("p",[a._v("编辑MongoDB的systemd服务文件：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("sudo vi /usr/lib/systemd/system/mongod.service\n")])])])]),a._v(" "),t("li",[t("p",[a._v("在文件的"),t("code",[a._v("[Service]")]),a._v("部分添加以下配置行：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("LimitNOFILE=64000\nLimitNPROC=64000\n")])])]),t("p",[a._v("这将限制MongoDB进程的文件描述符和进程数。")]),a._v(" "),t("p",[a._v("保存并退出文件。")])]),a._v(" "),t("li",[t("p",[a._v("重新加载systemd配置：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("sudo systemctl daemon-reload\n")])])])])]),a._v(" "),t("h2",{attrs:{id:"步骤5-将mongodb添加到系统服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#步骤5-将mongodb添加到系统服务"}},[a._v("#")]),a._v(" 步骤5：将MongoDB添加到系统服务")]),a._v(" "),t("ol",[t("li",[t("p",[a._v("创建一个名为"),t("code",[a._v("mongodb.service")]),a._v("的文件：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("sudo vi /etc/systemd/system/mongodb.service\n")])])])]),a._v(" "),t("li",[t("p",[a._v("将以下内容复制到文件中并保存：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("[Unit]\nDescription=MongoDB Database Server\nDocumentation=https://docs.mongodb.com/manual\nAfter=network.target\n\n[Service]\nUser=alinesno\nExecStart=/usr/bin/mongod --config /etc/mongod.conf\nExecReload=/bin/kill -s HUP $MAINPID\nRestart=always\nRestartSec=3\nLimitNOFILE=64000\nLimitNPROC=64000\nPrivateTmp=true\nPrivateDevices=true\n\n[Install]\nWantedBy=multi-user.target\n")])])]),t("p",[a._v("请确保替换"),t("code",[a._v("alinesno")]),a._v("为实际的用户和"),t("code",[a._v("/etc/mongod.conf")]),a._v("为实际的配置文件路径。")])]),a._v(" "),t("li",[t("p",[a._v("保存并退出文件。")])]),a._v(" "),t("li",[t("p",[a._v("重新加载systemd配置：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("sudo systemctl daemon-reload\n")])])])]),a._v(" "),t("li",[t("p",[a._v("启动MongoDB服务：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("sudo systemctl start mongodb\n")])])]),t("p",[a._v("MongoDB将在系统启动时自动启动。")])])]),a._v(" "),t("p",[a._v("现在，您可以使用以下命令来启动、停止和")])])}),[],!1,null,null,null);t.default=o.exports}}]);