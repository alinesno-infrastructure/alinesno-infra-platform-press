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
              text: '数字建设',
              items: [
                  { text: '数字规划', link: '/design/overview/' },
                  { text: '组织架构', link: '/group/01_部门建设/' },
                  { text: '研发架构', link: '/framework/' },
                  { text: '数据架构', link: '/data/framework/' }
              ]
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
  },
}