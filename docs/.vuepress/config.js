module.exports = {
  lang: 'zh-CN',
  title: 'AIP基础设施',
  description: '能够灵活满足企业数字化建设中各种场景的需要，更高效、专注的沉淀业务和数据能力，进而形成企业的业务和数据中台。通过能力的灵活组合，快速的应对当前快节奏的市场需求，助力企业数字化转型的成功。',
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
      ['vuepress-plugin-code-copy', true] ,
      ['@vuepress/nprogress'] ,
      ['@vuepress/back-to-top'] ,
      ['@vssue/vuepress-plugin-vssue', {
          // set `platform` rather than `api`
          platform: 'github',
          // all other options of Vssue are allowed
          owner: 'alinesno-cloud',
          admins:['switchII'],
          repo: 'alinesno-cloud-platform-press',
          clientId: '27af56cba1b05d7313eb',
          clientSecret: 'ecb6b64de79461454b8033b6c5790e6f8e8a1c87',
      }],
      ['@vuepress/active-header-links', {
          sidebarLinkSelector: '.sidebar-link',
          headerAnchorSelector: '.header-anchor'
      }] ,
      ['@vuepress/medium-zoom']
  ],
  themeConfig: {
      logo: '/logo.png', // 注意图片放在 public 文件夹下
      lastUpdated: 'Last Updated',
      sidebarDepth: 2,
      repo: 'https://github.com/alinesno-infrastructure/alinesno-infrastructure-platform-press' ,
      docsDir: 'docs',
      repoLabel: 'Github',
      docsBranch: '1.0.0-SNAPSHOT',
      editLinks: true,
      editLinkText: '帮助我们改善此页面',
      smoothScroll: true ,
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
              text: '开发者',
              items: [
                  { text: '新手入门', link: '/firstlearn/' },
                  { text: '前端手册', link: '/front/' },
                  { text: '后端手册', link: '/technique/' },
                  { text: '数据手册', link: '/dataskill/' }
              ]
          },
          {
              text: '产品体验',
              link: 'http://alinesno-saas.beta.linesno.com'
          }
      ],
      sidebar: {
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
 * 产品架构设计 
 * @param {序号} menus 
 */
function genArchitectureSidebar(menus){
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
            '/architecture/02_技术架构/',
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
function genProductSidebar(menus){

    const mapArr = [
        '/product/',
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
            '/product/07_运营服务/04_AI模型管理服务.md',
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