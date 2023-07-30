<template>
  <div class="footer-container">

    <div class="footer-panel">
      <div class="footer-list" v-for="item in infoItem" :key="item.id">
        <div class="footer-item-title">
          {{ item.title }}
        </div>
        <ul class="footer-itembox">
          <li class="footer-item" v-for="i in item.item" :key="i.id">
            {{ i.title }}
          </li>
        </ul>
      </div>
    </div>

    <div class="footer-linkbox">
      <nav class="footer-nav">
        <ul>
          <li class="footer-link-text">关于 AIP</li>
          <li class="footer-link-text">隐私权政策</li>
          <li class="footer-link-text">网站条款</li>
          <li class="footer-link-text">AIP 条款</li>
        </ul>
      </nav>
    </div>

  </div>
</template>

<script>

export default {
  data() {
    return {
      title: '全新一代软件基础设施',
      saasTitle: 'AIP基础设施',
      infoItem: [
        {
          "id": "why-choose-AIP",
          "title": "为什么选择 AIP",
          "link": "",
          "item": [
            {
              "id": "choose-AIP",
              "title": "选择 AIP ",
              "link": ""
            },
            {
              "id": "trust-and-security",
              "title": "信任与安全",
              "link": ""
            },
            {
              "id": "open",
              "title": "开放的云",
              "link": ""
            },
            {
              "id": "multi",
              "title": "多云",
              "link": ""
            },
            {
              "id": "global-infrastructure",
              "title": "全球基础架构",
              "link": ""
            },
            {
              "id": "customers-and-case-studies",
              "title": "客户和案例研究",
              "link": ""
            },
            {
              "id": "analyst-reports",
              "title": "分析师报告",
              "link": ""
            },
            {
              "id": "whitepapers",
              "title": "白皮书",
              "link": ""
            },
            {
              "id": "blogs",
              "title": "博客",
              "link": ""
            }
          ]
        },
        {
          "id": "product-and-pricing",
          "title": "产品和价格",
          "link": "",
          "item": [
            {
              "id": "AIP-pricing",
              "title": "AIP  价格",
              "link": ""
            },
            {
              "id": "AIP-workspace-pricing",
              "title": "AIP Workspace 价格",
              "link": ""
            },
            {
              "id": "view-all-products",
              "title": "查看所有产品",
              "link": ""
            }
          ]
        },
        {
          "id": "solutions",
          "title": "解决方案",
          "link": "",
          "item": [
            {
              "id": "modernize-infrastructure",
              "title": "基础架构现代化",
              "link": ""
            },
            {
              "id": "databases",
              "title": "数据库",
              "link": ""
            },
            {
              "id": "modernize-applications",
              "title": "应用现代化改造",
              "link": ""
            },
            {
              "id": "smart-analytics",
              "title": "智能分析",
              "link": ""
            },
            {
              "id": "artificial-intelligence",
              "title": "人工智能",
              "link": ""
            },
            {
              "id": "security",
              "title": "安全",
              "link": ""
            },
            {
              "id": "productivity-and-work-transformation",
              "title": "Productivity & work transformation",
              "link": ""
            },
            {
              "id": "industry-solutions",
              "title": "Industry solutions",
              "link": ""
            },
            {
              "id": "devops-solutions",
              "title": "DevOps solutions",
              "link": ""
            },
            {
              "id": "small-business-solutions",
              "title": "Small business solutions",
              "link": ""
            },
            {
              "id": "view-all-solutions",
              "title": "查看所有解决方案",
              "link": ""
            }
          ]
        },
        {
          "id": "resources",
          "title": "资源",
          "link": "",
          "item": [
            {
              "id": "AIP-documentation",
              "title": "AIP  文档",
              "link": ""
            },
            {
              "id": "AIP-quickstart",
              "title": "AIP  快速入门",
              "link": ""
            },
            {
              "id": "AIP-marketplace",
              "title": "AIP  Marketplace",
              "link": ""
            },
            {
              "id": "learn-about-computing",
              "title": "了解云计算",
              "link": ""
            },
            {
              "id": "support",
              "title": "支持",
              "link": ""
            },
            {
              "id": "code-examples",
              "title": "代码示例",
              "link": ""
            },
            {
              "id": "-architecture-center",
              "title": "云架构中心",
              "link": ""
            },
            {
              "id": "training",
              "title": "培训",
              "link": ""
            },
            {
              "id": "certification",
              "title": "认证",
              "link": ""
            },
            {
              "id": "AIP-for-developers",
              "title": "AIP for Developers",
              "link": ""
            },
            {
              "id": "AIP-startup-program",
              "title": "AIP  创业公司计划",
              "link": ""
            },
            {
              "id": "system-status",
              "title": "系统状态",
              "link": ""
            },
            {
              "id": "release-notes",
              "title": "版本说明",
              "link": ""
            }
          ]
        },
        {
          "id": "interact",
          "title": "互动",
          "link": "",
          "item": [
            {
              "id": "contact-sales",
              "title": "与销售人员联系",
              "link": ""
            },
            {
              "id": "find-partners",
              "title": "查找合作伙伴",
              "link": ""
            },
            {
              "id": "become-a-partner",
              "title": "成为合作伙伴",
              "link": ""
            },
            {
              "id": "events",
              "title": "活动",
              "link": ""
            },
            {
              "id": "podcasts",
              "title": "播客",
              "link": ""
            },
            {
              "id": "developer-center",
              "title": "开发者中心",
              "link": ""
            },
            {
              "id": "media-newsroom",
              "title": "媒体资讯角",
              "link": ""
            }
          ]
        }
      ]


    }
  },
  computed: {
  },
  methods: {
    clickCoding(tag) {
      ga('send', 'click', 'e.coding', 'Action', tag)
    }
  }
}

</script>
