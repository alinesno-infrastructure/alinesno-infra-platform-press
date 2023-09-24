module.exports = {
    lang: 'zh-CN',
    title: 'AIP智能设施',
    description: '能够灵活满足企业超级自动化建设中各种场景的需要，更高效、专注的沉淀业务和数据能力，进而形成企业的业务和数据基设。通过能力的灵活组合，快速的应对当前快节奏的市场需求，助力企业超级自动化转型的成功。',
    base: '/',
    head: [
        ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
        ['link', { rel: 'icon', href: '/favicon.png' }],
        ['link', { rel: 'stylesheet', href: '/font-awesome-5.11.2/css/all.min.css' }]
    ],
    plugins: [
        ['@vuepress/active-header-links'],
        [
            '@vuepress/google-analytics', {
                'ga': 'G-V0D6KNXG35' // UA-00000000-0
            }
        ],
        ['@vuepress/register-components'],
        ['vuepress-plugin-code-copy', true],
        ['@vuepress/nprogress'],
        ['@vuepress/back-to-top'],
        ['@vssue/vuepress-plugin-vssue', {
            // set `platform` rather than `api`
            platform: 'github',
            // all other options of Vssue are allowed
            owner: 'alineson-infrastructure',
            admins: ['switchII'],
            repo: 'alineson-infrastructure-platform-press',
            clientId: '27af56cba1b05d7313eb',
            clientSecret: 'ecb6b64de79461454b8033b6c5790e6f8e8a1c87',
        }],
        ['@vuepress/active-header-links', {
            sidebarLinkSelector: '.sidebar-link',
            headerAnchorSelector: '.header-anchor'
        }],
        ['@vuepress/medium-zoom']
    ],
    themeConfig: {
        logo: '/logo.png', // 注意图片放在 public 文件夹下
        lastUpdated: 'Last Updated',
        sidebarDepth: 2,
        repo: 'https://github.com/alinesno-infrastructure/alinesno-infrastructure-platform-press',
        docsDir: 'docs',
        repoLabel: 'Github',
        docsBranch: 'main',
        editLinks: true,
        editLinkText: '帮助我们改善此页面',
        smoothScroll: true,
        nav: [
            {
                text: '首页',
                link: '/'
            },
            {
                text: '产品体系',
                link: '/product/'
            },
            {
                text: '解决方案',
                link: '/solution/'
            },
            {
                text: '基设架构',
                link: '/architecture/'
            },
            {
                text: '部署建设',
                link: '/operation/'
            },
            {
                text: '产品手册',
                link: '/document/'
            },
            {
                text: '技术文档',
                link: '/technical/'
            },
            {
                text: '产品体验',
                link: 'http://console.infra.linesno.com/index'
            }
        ],
        sidebar: {
            '/technical': [
                {
                    title: '技术文档',
                    collapsible: true,
                    children: genTechnicalSidebar(0)
                },
                {
                    title: '规范管理',
                    collapsible: true,
                    children: genTechnicalRuleSidebar(0)
                },
                {
                    title: '父类技术',
                    collapsible: true,
                    children: genTechnicalSidebar(1)
                },
                {
                    title: '基础框架',
                    collapsible: true,
                    children: genTechnicalSidebar(2)
                },
                {
                    title: '前端技术',
                    collapsible: true,
                    children: genTechnicalSidebar(3)
                },
                {
                    title: '安全过滤',
                    collapsible: true,
                    children: genTechnicalSidebar(4)
                },
                {
                    title: '安全质量',
                    collapsible: true,
                    children: genTechnicalSidebar(7)
                },
                {
                    title: '运维技术',
                    collapsible: true,
                    children: genTechnicalSidebar(6)
                },
            ],
            '/document': [
                {
                    title: '产品手册',
                    collapsible: true,
                    children: genDocumentSidebar(0)
                },
                {
                    title: '基础服务',
                    collapsible: true,
                    children: genDocumentSidebar(3)
                },
                {
                    title: '数据服务',
                    collapsible: true,
                    children: genDocumentSidebar(4)
                },
                {
                    title: '智能服务',
                    collapsible: true,
                    children: genDocumentSidebar(5)
                },
                {
                    title: '运维服务',
                    collapsible: true,
                    children: genDocumentSidebar(6)
                },
                {
                    title: '业务服务',
                    collapsible: true,
                    children: genDocumentSidebar(7)
                },
                {
                    title: '运营服务',
                    collapsible: true,
                    children: genDocumentSidebar(8)
                },
            ],
            '/operation': [
                {
                    title: '部署架构',
                    collapsible: true,
                    children: genOperationSidebar(1)
                },
                {
                    title: '环境部署',
                    collapsible: true,
                    children: genOperationSidebar(2)
                },
                {
                    title: '运维任务',
                    collapsible: true,
                    children: genOperationSidebar(3)
                },
            ],
            '/solution': [
                {
                    title: '方案体系',
                    collapsible: true,
                    children: genSolutionSidebar(1)
                },
                {
                    title: '业务中台',
                    collapsible: true,
                    children: genSolutionSidebar(2)
                },
                {
                    title: ' 数据治理',
                    collapsible: true,
                    children: genSolutionSidebar(3)
                },
                {
                    title: ' 运维方案',
                    collapsible: true,
                    children: genSolutionSidebar(4)
                },
            ],
            '/architecture': [
                {
                    title: '产品架构',
                    collapsible: true,
                    children: genArchitectureSidebar(1)
                },
                {
                    title: '技术架构',
                    collapsible: true,
                    children: genArchitectureSidebar(2)
                },
                {
                    title: ' 数据治理',
                    collapsible: true,
                    children: genArchitectureSidebar(4)
                },
                {
                    title: '服务规划',
                    collapsible: true,
                    children: genArchitectureSidebar(3)
                },
            ],
            '/product': [
                {
                    title: '产品体系',
                    collapsible: true,
                    children: genProductSidebar(1)
                },
                {
                    title: '核心框架',
                    collapsible: true,
                    children: genProductSidebar(2)
                },
                {
                    title: '基础服务',
                    collapsible: true,
                    children: genProductSidebar(3)
                },
                {
                    title: '数据服务',
                    collapsible: true,
                    children: genProductSidebar(4)
                },
                {
                    title: '智能服务',
                    collapsible: true,
                    children: genProductSidebar(5)
                },
                {
                    title: '运维服务',
                    collapsible: true,
                    children: genProductSidebar(6)
                },
                {
                    title: '业务服务',
                    collapsible: true,
                    children: genProductSidebar(7)
                },
                {
                    title: '运营服务',
                    collapsible: true,
                    children: genProductSidebar(8)
                },
            ]
        }
    },
}

/**
* 产品手册
 * @param {序号} menus
 */
function genDocumentSidebar(menus) {
    const mapArr = [
        '/document/',
    ]

    if (menus == 2) {
        const mapArr = [
            '/document/01_核心框架/01_核心开发框架.md',
            '/document/01_核心框架/02_前端开发框架_桌面.md',
            '/document/01_核心框架/03_前端开发框架_移动.md',
        ]
        return mapArr.map(i => {
            return i
        })
    } else if (menus == 3) {
        const mapArr = [
            '/document/02_基础服务/01_权限配置服务.md',
            '/document/02_基础服务/02_代码生成器.md',
            '/document/02_基础服务/03_分布式配置服务.md',
            '/document/02_基础服务/04_事务消息服务.md',
            '/document/02_基础服务/05_通知管理服务.md',
            '/document/02_基础服务/06_存储管理服务.md',
            '/document/02_基础服务/07_单点登陆服务.md',
            '/document/02_基础服务/08_网关配置服务.md',
            '/document/02_基础服务/09_安全验证码服务.md',
            '/document/02_基础服务/10_IM消息服务.md',
            '/document/02_基础服务/11_邮箱管理服务.md',
            '/document/02_基础服务/12_文档搜索服务.md',
            '/document/02_基础服务/13_分布式ID服务.md',
            '/document/02_基础服务/14_敏感词过滤服务.md',
            '/document/02_基础服务/15_支付服务.md',
            '/document/02_基础服务/16_会员服务.md',
            '/document/02_基础服务/17_内容服务.md',
            '/document/02_基础服务/18_商城服务.md',
            '/document/02_基础服务/19_流程中心服务.md',
            '/document/02_基础服务/20_文档查看服务.md',
            '/document/02_基础服务/21_基设平台管理服务.md',
        ]
        return mapArr.map(i => {
            return i
        })
    } else if (menus == 4) {
        const mapArr = [
            '/document/03_数据服务/01_主数据服务.md',
            '/document/03_数据服务/02_数据上报服务.md',
            '/document/03_数据服务/03_数据集成服务.md',
            '/document/03_数据服务/04_数据开发服务.md',
            '/document/03_数据服务/05_实时计算服务.md',
            '/document/03_数据服务/06_数据安全服务.md',
            '/document/03_数据服务/07_数据质量服务.md',
            '/document/03_数据服务/08_数据总线服务.md',
            '/document/03_数据服务/09_数据资产服务.md',
            '/document/03_数据服务/10_数据算法服务.md',
        ]
        return mapArr.map(i => {
            return i
        })
    } else if (menus == 5) {
        const mapArr = [
            '/document/04_智能服务/01_OCR视觉识别服务.md',
            '/document/04_智能服务/02_自然语言识别服务.md',
            '/document/04_智能服务/03_GPT推理服务.md',
            '/document/04_智能服务/04_流媒体识别服务.md',
            '/document/04_智能服务/05_语音助手服务.md',
            '/document/04_智能服务/06_目标检测识别服务.md',
        ]
        return mapArr.map(i => {
            return i
        })
    } else if (menus == 6) {
        const mapArr = [
            '/document/05_运维服务/01_自动化任务服务.md',
            '/document/05_运维服务/02_分布式日志服务.md',
            '/document/05_运维服务/03_分布式链路跟踪服务.md',
            '/document/05_运维服务/04_持续集成服务.md',
            '/document/05_运维服务/05_容器管理服务.md',
            '/document/05_运维服务/06_监控预警服务.md',
        ]
        return mapArr.map(i => {
            return i
        })
    } else if (menus == 7) {
        const mapArr = [
            '/document/06_业务服务/01_商品秒杀服务.md',
            '/document/06_业务服务/02_实时推荐服务.md',
            '/document/06_业务服务/03_实时画像服务.md',
            '/document/06_业务服务/04_无代码开发服务.md',
        ]
        return mapArr.map(i => {
            return i
        })
    } else if (menus == 8) {
        const mapArr = [
            '/document/07_运营服务/01_基设平台服务.md',
            '/document/07_运营服务/02_安全感触服务.md',
            '/document/07_运营服务/03_智能运营大脑服务.md',
            '/document/07_运营服务/04_AI模型管理服务.md',
            '/document/07_运营服务/05_移动终端服务.md',
        ]
        return mapArr.map(i => {
            return i
        })
    }

    return mapArr.map(i => {
        return i
    })

}

/**
* 部署建设
 * @param {序号} menus
 */
function genOperationSidebar(menus) {
    const mapArr = [
        '/operation/',
    ]

    if (menus == 2) {
        const mapArr = [
            '/operation/02_环境部署/01_服务器.md',
            '/operation/02_环境部署/02_Docker部署.md',
            '/operation/02_环境部署/03_Kuberantes部署.md',
            '/operation/02_环境部署/04_Jenkins部署.md',
            '/operation/02_环境部署/05_MySQL部署.md',
            '/operation/02_环境部署/06_MongoDB部署.md',
            '/operation/02_环境部署/07_Kafka部署.md',
            '/operation/02_环境部署/08_MinIO部署.md',
            '/operation/02_环境部署/09_ElasticSearch部署.md',
            '/operation/02_环境部署/10_NodeJS部署.md',
            '/operation/02_环境部署/11_JDK部署.md',
            '/operation/02_环境部署/12_Redis部署.md',
            '/operation/02_环境部署/13_Doris部署.md',
            '/operation/02_环境部署/14_Hive部署.md',
            '/operation/02_环境部署/15_Flink部署.md',
            '/operation/02_环境部署/16_Hadoop部署.md',
            '/operation/02_环境部署/17_Prometheus部署.md',
            '/operation/02_环境部署/18_Clickhouse部署.md',
        ]
        return mapArr.map(i => {
            return i
        })
    } else if (menus == 3) {
        const mapArr = [
            '/operation/03_运维任务/01_环境监控.md',
            '/operation/03_运维任务/02_巡检任务.md',
            '/operation/03_运维任务/03_集成预警.md',
        ]
        return mapArr.map(i => {
            return i
        })
    }

    return mapArr.map(i => {
        return i
    })
}

/**
* 规范手册
 * @param {序号} menus
 */
function genTechnicalRuleSidebar(menus) {
    const mapArr = [
        '/technical/rules/',
        '/technical/rules/01_代码风格规范.md',
        '/technical/rules/14_版本管理规范.md',
        '/technical/rules/06_前端规范.md',
        '/technical/rules/06_API接口规范.md',
        '/technical/rules/07_前端工程规范.md',
        '/technical/rules/08_服务工程规范.md',
        '/technical/rules/09_数据开发规范.md',
        '/technical/rules/10_数据治理规范 .md',
        '/technical/rules/13_接口开发规范.md',
        '/technical/rules/15_推理Prompt规范.md',
        '/technical/rules/11_运维管理规范.md',
        '/technical/rules/12_反向代理规范.md',
    ]
    return mapArr.map(i => {
        return i
    })
}

/**
* 技术手册
 * @param {序号} menus
 */
function genTechnicalSidebar(menus) {
    const mapArr = [
        '/technical/',
    ];

    if (menus === 1) { // 01_父类技术
        const mapArr = [
            '/technical/framework/01_父类技术/01_Nexus仓库集成.md',
            '/technical/framework/01_父类技术/02_集成revision统一版本号.md',
            '/technical/framework/01_父类技术/03_集成镜像仓库.md',
            '/technical/framework/01_父类技术/04_集成非root账号运行.md',
            '/technical/framework/01_父类技术/05_实体父类.md',
            '/technical/framework/01_父类技术/06_Controller父类.md',
        ];
        return mapArr.map(i => {
            return i;
        });
    } else if (menus === 2) { // 02_基础功能
        const mapArr = [
            '/technical/framework/02_基础功能/01_分布式框架.md',
            '/technical/framework/02_基础功能/02_公共依赖包.md',
            '/technical/framework/02_基础功能/03_服务容器化.md',
            '/technical/framework/02_基础功能/04_代码生成器.md',
            '/technical/framework/02_基础功能/05_MyBatis操作集成.md',
            '/technical/framework/02_基础功能/06_按钮权限.md',
            '/technical/framework/02_基础功能/07_单点登录.md',
            '/technical/framework/02_基础功能/07_租户集成.md',
            '/technical/framework/02_基础功能/08_多服务集成.md',
            '/technical/framework/02_基础功能/09_前端集成.md',
            '/technical/framework/02_基础功能/09_本地调试.md',
            '/technical/framework/02_基础功能/09_多平台发布集成.md',
            '/technical/framework/02_基础功能/13_异常处理.md',
            '/technical/framework/02_基础功能/14_日志处理.md',
            '/technical/framework/02_基础功能/15_Redis缓存使用.md',
            '/technical/framework/02_基础功能/15_页面搜索.md',
            '/technical/framework/02_基础功能/17_分布式Redis缓存使用.md',
            '/technical/framework/02_基础功能/18_系统日志.md',
            '/technical/framework/02_基础功能/19_消息使用.md',
            '/technical/framework/02_基础功能/20_日志埋点.md',
            '/technical/framework/02_基础功能/21_SwaggerUI文档.md',
            '/technical/framework/02_基础功能/22_多数据库源.md',
            '/technical/framework/02_基础功能/23_配置加密.md',
            '/technical/framework/02_基础功能/24_表单提交校验.md',
            '/technical/framework/02_基础功能/25_Excel导入_导出.md',
            '/technical/framework/02_基础功能/26_文件上传.md',
            '/technical/framework/02_基础功能/27_XSS攻击防护.md',
            '/technical/framework/02_基础功能/28_多数据源分库分表.md',
            '/technical/framework/02_基础功能/29_多数据源动态加载卸载.md',
            '/technical/framework/02_基础功能/30_多数据源事务.md',
            '/technical/framework/02_基础功能/31_CDN配置.md',
            '/technical/framework/02_基础功能/32_多种环境部署.md',
            '/technical/framework/02_基础功能/33_分布式ID.md',
            '/technical/framework/02_基础功能/34_通用API.md',
            '/technical/framework/02_基础功能/35_通用CURD.md',
            '/technical/framework/02_基础功能/36_通用Service.md',
            '/technical/framework/02_基础功能/37_通用Mapper.md',
            '/technical/framework/02_基础功能/38_Junit基础类.md',
            '/technical/framework/02_基础功能/39_ORM基础类.md',
            '/technical/framework/02_基础功能/40_Entity基础类.md',
            '/technical/framework/02_基础功能/41_PO基础类.md',
            '/technical/framework/02_基础功能/42_VO基础类.md',
            '/technical/framework/02_基础功能/43_Exception基础类.md',
            '/technical/framework/02_基础功能/44_Service基础类.md',
            '/technical/framework/02_基础功能/45_Mapper基础类.md',
            '/technical/framework/02_基础功能/46_分页基础类.md',
            '/technical/framework/02_基础功能/47_日志基础类.md',
            '/technical/framework/02_基础功能/48_基础通用常量.md',
            '/technical/framework/02_基础功能/49_获取Context上下文.md',
        ];
        return mapArr.map(i => {
            return i;
        });
    } else if (menus === 3) { // 03_前端技术
        const mapArr = [
            '/technical/framework/03_前端技术/01_普通JWT前后端登录.md',
            '/technical/framework/03_前端技术/02_单点登录.md',
            '/technical/framework/03_前端技术/03_菜单权限集成.md',
            '/technical/framework/03_前端技术/04_权限注解.md',
            '/technical/framework/03_前端技术/05_数据权限.md',
            '/technical/framework/03_前端技术/06_参数和代码集成.md',
            '/technical/framework/03_前端技术/07_CORS集成.md',
            '/technical/framework/03_前端技术/08_黑白名单路径请求.md',
            '/technical/framework/03_前端技术/09_安全验证码集成.md',
            '/technical/framework/03_前端技术/10_前端异常.md',
            '/technical/framework/03_前端技术/11_公共前端返回对象.md',
            '/technical/framework/03_前端技术/12_数据请求分页.md',
            '/technical/framework/03_前端技术/13_代码过滤转换.md',
            '/technical/framework/03_前端技术/14_会话管理.md',
            '/technical/framework/03_前端技术/15_公共API.md',
            '/technical/framework/03_前端技术/16_代码转换插件机制.md',
            '/technical/framework/03_前端技术/18_获取当前用户注解制.md',
            '/technical/framework/03_前端技术/19_存储接口集成.md',
            '/technical/framework/03_前端技术/20_非存储接口集成.md',
            '/technical/framework/03_前端技术/21_通知组件集成.md',
            '/technical/framework/03_前端技术/22_分布式ID集成.md',
        ]
        return mapArr.map(i => {
            return i
        })
    } else if (menus === 4) { // 04_安全过滤
        const mapArr = [
            '/technical/framework/04_安全过滤/01_接口API数据加密和解密.md',
            '/technical/framework/04_安全过滤/02_接口API的限流配置.md',
            '/technical/framework/04_安全过滤/03_接口API的文件上传安全限制.md',
            '/technical/framework/04_安全过滤/04_接口API的防重复提交.md',
            '/technical/framework/04_安全过滤/05_接口API的防SQL注入_防XSS攻击.md',
            '/technical/framework/04_安全过滤/06_接口API的全加密交互.md',
            '/technical/framework/04_安全过滤/07_接口API防越权配置.md',
            '/technical/framework/04_安全过滤/08_身份验证和授权.md',
            '/technical/framework/04_安全过滤/09_强化密码策略.md',
            '/technical/framework/04_安全过滤/10_输入验证和过滤.md',
            '/technical/framework/04_安全过滤/11_安全漏洞扫描.md',
            '/technical/framework/04_安全过滤/12_异常处理和错误信息.md',
            '/technical/framework/04_安全过滤/13_数据存储安全.md',
            '/technical/framework/04_安全过滤/14_数据审计.md',
            '/technical/framework/04_安全过滤/15_数据敏感词过滤.md',
            '/technical/framework/04_安全过滤/16_数据范围.md',
            '/technical/framework/04_安全过滤/17_表结构自动维护.md',
            '/technical/framework/04_安全过滤/18_字段数据绑定.md',
            '/technical/framework/04_安全过滤/19_虚拟属性绑定.md',
            '/technical/framework/04_安全过滤/20_字段加密解密.md',
            '/technical/framework/04_安全过滤/21_字段脱敏.md',
            '/technical/framework/04_安全过滤/22_日志和监控.md',
            '/technical/framework/04_安全过滤/22_字段加密解密.md',
            '/technical/framework/04_安全过滤/23_日志输出打印安全.md',
            '/technical/framework/04_安全过滤/24_双因子认证安全.md',
        ]
        return mapArr.map(i => {
            return i
        })
    } else if (menus === 5) { // 05_前端UI
        const mapArr = [
            '/technical/',
            '/technical/framework/05_前端UI/01_界面布局.md',
            '/technical/framework/05_前端UI/02_文件上传.md',
            '/technical/framework/05_前端UI/03_菜单列表.md',
            '/technical/framework/05_前端UI/04_切换缓存.md',
            '/technical/framework/05_前端UI/05_自定义主题.md',
            '/technical/framework/05_前端UI/06_临时锁屏.md',
            '/technical/framework/05_前端UI/07_图片查看.md',
            '/technical/framework/05_前端UI/08_分页列表.md',
            '/technical/framework/05_前端UI/09_服务支持列表.md',
            '/technical/framework/05_前端UI/10_平台功能介绍.md',
            '/technical/framework/05_前端UI/11_账号密码登陆.md',
            '/technical/framework/05_前端UI/12_验证码开关.md',
            '/technical/framework/05_前端UI/13_通知公告.md',
            '/technical/framework/05_前端UI/14_平台教程列表.md',
            '/technical/framework/05_前端UI/15_登陆次数限制.md',
            '/technical/framework/05_前端UI/16_登陆次数限制时间.md',
            '/technical/framework/05_前端UI/17_登陆IP限制.md',
            '/technical/framework/05_前端UI/18_登陆IP限制时间.md',
            '/technical/framework/05_前端UI/19_自定义登陆域名.md',
            '/technical/framework/05_前端UI/20_手机验证码登陆.md',
            '/technical/framework/05_前端UI/21_微信绑定登陆.md',
            '/technical/framework/05_前端UI/22_自定义企业信息.md',
            '/technical/framework/05_前端UI/23_获取系统配置.md',
            '/technical/framework/05_前端UI/24_获取参数字典.md',
            '/technical/framework/05_前端UI/25_获取当前用户.md',
            '/technical/framework/05_前端UI/26_异常处理.md',
            '/technical/framework/05_前端UI/27_内容复制.md',
            '/technical/framework/05_前端UI/28_使用图标.md',
            '/technical/framework/05_前端UI/29_权限使用.md',
            '/technical/framework/05_前端UI/30_多级目录.md',
            '/technical/framework/05_前端UI/31_Request工具类.md',
            '/technical/framework/05_前端UI/32_SessionStorage工具类.md',
            '/technical/framework/05_前端UI/33_Cookie工具类.md',
            '/technical/framework/05_前端UI/34_LocalStorage工具类.md',
            '/technical/framework/05_前端UI/35_用户信息编辑.md',
            '/technical/framework/05_前端UI/36_登陆日志.md',
            '/technical/framework/05_前端UI/37_在线会话管理.md',
            '/technical/framework/05_前端UI/38_异常登陆拦截.md',
            '/technical/framework/05_前端UI/39_踢人下线.md',
            '/technical/framework/05_前端UI/40_最大登陆会话.md',
            '/technical/framework/05_前端UI/41_最长登陆时间.md',
            '/technical/framework/05_前端UI/42_单点登陆.md',
            '/technical/framework/05_前端UI/43_单点退出.md',
            '/technical/framework/05_前端UI/44_登陆条款编辑.md',
            '/technical/framework/05_前端UI/45_登陆隐私政策编辑.md',
            '/technical/framework/05_前端UI/46_邮件二次登陆.md',
            '/technical/framework/05_前端UI/47_令牌二次认证.md',
            '/technical/framework/05_前端UI/48_登陆数据加密.md',
            '/technical/framework/05_前端UI/49_记住我安全加密.md',
            '/technical/framework/05_前端UI/50_钉钉_微信扫描登陆.md'
        ];
        return mapArr.map(i => {
            return i
        })
    } else if (menus === 6) { // 运维技术
        const mapArr = [
            '/technical/operation/01_分布式日志技术.md',
            '/technical/operation/02_链路跟踪集成.md',
            '/technical/operation/03_巡检上报集成.md',
            '/technical/operation/04_集成前端日志.md',
            '/technical/operation/05_集成访问日志.md',
            '/technical/operation/06_自动化操作集成.md',
        ];
        return mapArr.map(i => {
            return i
        })
    } else if (menus === 7) { // 安全质量
        const mapArr = [
            '/technical/quality/01_工程安全检测.md',
            '/technical/quality/02_单元测试报告.md',
        ];
        return mapArr.map(i => {
            return i
        })
    }

    return mapArr.map(i => {
        return i
    })
}

/**
 * 解决方案体系
 * @param {序号} menus
 */
function genSolutionSidebar(menus) {
    const mapArr = [
        '/solution/',
    ]

    if (menus == 2) {
        const mapArr = [
            '/solution/01_业务中台/01_企业业务中台解决方案.md',
            '/solution/01_业务中台/02_传统企业转变业务中台解决方案.md',
            '/solution/01_业务中台/03_企业超级自动化解决方案.md',
            '/solution/01_业务中台/04_新旧结合业务微服务解决方案.md',
        ]
        return mapArr.map(i => {
            return i
        })
    } else if (menus == 3) {
        const mapArr = [
            '/solution/02_数据治理/01_数据中台建设解决方案.md',
            '/solution/02_数据治理/02_数据报表分析解决方案.md',
            '/solution/02_数据治理/03_运维应用画像解决方案.md',
            '/solution/02_数据治理/04_用户画像解决方案.md',
        ]
        return mapArr.map(i => {
            return i
        })
    } else if (menus == 4) {
        const mapArr = [
            '/solution/03_运维方案/01_自动化运维解决方案.md',
            '/solution/03_运维方案/02_分布式日志分析解决方案.md',
            '/solution/03_运维方案/03_AI智能运维解决方案.md',
        ]
        return mapArr.map(i => {
            return i
        })
    }

    return mapArr.map(i => {
        return i
    })
}

/**
 * 产品架构设计
 * @param {序号} menus
 */
function genArchitectureSidebar(menus) {
    const mapArr = [
        '/architecture/01_产品架构/',
        '/architecture/01_产品架构/01_核心框架.md',
        '/architecture/01_产品架构/02_基础服务.md',
        '/architecture/01_产品架构/03_数据服务.md',
        '/architecture/01_产品架构/04_智能服务.md',
        '/architecture/01_产品架构/05_运维服务.md',
        '/architecture/01_产品架构/06_业务服务.md',
        '/architecture/01_产品架构/07_运营服务.md',
    ]

    if (menus == 2) {
        const mapArr = [
            '/architecture/02_技术架构/01_平台架构.md',
            '/architecture/02_技术架构/02_技术架构.md',
            '/architecture/02_技术架构/03_服务架构.md',
            '/architecture/02_技术架构/04_数据架构.md',
            '/architecture/02_技术架构/05_网关架构.md',
            '/architecture/02_技术架构/06_安全架构.md',
            '/architecture/02_技术架构/07_部署架构.md',
            '/architecture/02_技术架构/08_持续集成架构.md',
            '/architecture/02_技术架构/09_运维管理架构.md',
            '/architecture/02_技术架构/10_运营架构.md',
        ]
        return mapArr.map(i => {
            return i
        })
    } else if (menus == 3) {
        const mapArr = [
            '/architecture/03_服务规划/',
            '/architecture/03_服务规划/01_核心框架.md',
            '/architecture/03_服务规划/02_基础服务.md',
            '/architecture/03_服务规划/03_数据服务.md',
            '/architecture/03_服务规划/04_智能服务.md',
            '/architecture/03_服务规划/05_运维服务.md',
            '/architecture/03_服务规划/06_业务服务.md',
            '/architecture/03_服务规划/07_运营服务.md',
        ]
        return mapArr.map(i => {
            return i
        })
    } else if (menus == 4) {
        const mapArr = [
            '/architecture/04_数据治理/01_治理架构.md',
            '/architecture/04_数据治理/02_数据标准.md',
            '/architecture/04_数据治理/03_数据采集.md',
            '/architecture/04_数据治理/04_数据仓库.md',
            '/architecture/04_数据治理/05_数据质量.md',
            '/architecture/04_数据治理/06_数据安全.md',
            '/architecture/04_数据治理/07_数据管理.md',
            '/architecture/04_数据治理/08_数据资产.md',
        ]
        return mapArr.map(i => {
            return i
        })
    }

    return mapArr.map(i => {
        return i
    })
}

/**
 * 产品描述
 * @param {} menus
 * @returns
 */
function genProductSidebar(menus) {

    const mapArr = [
        '/product/',
        '/product/ProductDesign.md',
        '/product/plan.md'
    ]

    if (menus == 2) {
        const mapArr = [
            '/product/01_核心框架/01_核心开发框架.md',
            '/product/01_核心框架/02_前端开发框架_桌面.md',
            '/product/01_核心框架/03_前端开发框架_移动.md',
        ]
        return mapArr.map(i => {
            return i
        })
    } else if (menus == 3) {
        const mapArr = [
            '/product/02_基础服务/01_权限配置服务.md',
            '/product/02_基础服务/02_代码生成器.md',
            '/product/02_基础服务/03_分布式配置服务.md',
            '/product/02_基础服务/04_事务消息服务.md',
            '/product/02_基础服务/05_通知管理服务.md',
            '/product/02_基础服务/06_存储管理服务.md',
            '/product/02_基础服务/07_单点登陆服务.md',
            '/product/02_基础服务/08_网关配置服务.md',
            '/product/02_基础服务/09_安全验证码服务.md',
            '/product/02_基础服务/10_IM消息服务.md',
            '/product/02_基础服务/11_邮箱管理服务.md',
            '/product/02_基础服务/12_文档搜索服务.md',
            '/product/02_基础服务/13_分布式ID服务.md',
            '/product/02_基础服务/14_敏感词过滤服务.md',
            '/product/02_基础服务/15_支付服务.md',
            '/product/02_基础服务/16_会员服务.md',
            '/product/02_基础服务/17_内容服务.md',
            '/product/02_基础服务/18_商城服务.md',
            '/product/02_基础服务/19_流程中心服务.md',
            '/product/02_基础服务/20_文档查看服务.md',
            '/product/02_基础服务/21_基设平台管理服务.md',
        ]
        return mapArr.map(i => {
            return i
        })
    } else if (menus == 4) {
        const mapArr = [
            '/product/03_数据服务/01_主数据服务.md',
            '/product/03_数据服务/02_数据上报服务.md',
            '/product/03_数据服务/03_数据集成服务.md',
            '/product/03_数据服务/04_数据开发服务.md',
            '/product/03_数据服务/05_实时计算服务.md',
            '/product/03_数据服务/06_数据安全服务.md',
            '/product/03_数据服务/07_数据质量服务.md',
            '/product/03_数据服务/08_数据总线服务.md',
            '/product/03_数据服务/09_数据资产服务.md',
            '/product/03_数据服务/10_数据算法服务.md',
        ]
        return mapArr.map(i => {
            return i
        })
    } else if (menus == 5) {
        const mapArr = [
            '/product/04_智能服务/01_OCR视觉识别服务.md',
            '/product/04_智能服务/02_自然语言识别服务.md',
            '/product/04_智能服务/03_GPT推理服务.md',
            '/product/04_智能服务/04_流媒体识别服务.md',
            '/product/04_智能服务/05_语音助手服务.md',
            '/product/04_智能服务/06_目标检测识别服务.md',
        ]
        return mapArr.map(i => {
            return i
        })
    } else if (menus == 6) {
        const mapArr = [
            '/product/05_运维服务/01_自动化任务服务.md',
            '/product/05_运维服务/02_分布式日志服务.md',
            '/product/05_运维服务/03_分布式链路跟踪服务.md',
            '/product/05_运维服务/04_持续集成服务.md',
            '/product/05_运维服务/05_容器管理服务.md',
            '/product/05_运维服务/06_监控预警服务.md',
        ]
        return mapArr.map(i => {
            return i
        })
    } else if (menus == 7) {
        const mapArr = [
            '/product/06_业务服务/01_商品秒杀服务.md',
            '/product/06_业务服务/02_实时推荐服务.md',
            '/product/06_业务服务/03_实时画像服务.md',
            '/product/06_业务服务/04_无代码开发服务.md',
        ]
        return mapArr.map(i => {
            return i
        })
    } else if (menus == 8) {
        const mapArr = [
            '/product/07_运营服务/01_基设平台服务.md',
            '/product/07_运营服务/02_安全感触服务.md',
            '/product/07_运营服务/03_智能运营大脑服务.md',
            '/product/07_运营服务/05_移动终端服务.md',
        ]
        return mapArr.map(i => {
            return i
        })
    }


    return mapArr.map(i => {
        return i
    })
}
