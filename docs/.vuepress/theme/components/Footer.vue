<template>
  <div class="footer-container">

    <div class="footer-panel">
      <div class="footer-list" v-for="item in infoItem" :key="item.id">
        <div class="footer-item-title">
          {{ item.title }}
        </div>
        <ul class="footer-itembox">
          <li class="footer-item" v-for="i in item.item" :key="i.id">
            <a style="color:#fff" :href="i.link">
                {{ i.title }}
            </a>
          </li>
        </ul>
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


  </div>
</template>

<script>

export default {
  data() {
    return {
      title: '全新一代智能体平台',
      saasTitle: 'AIP Multi-Agent平台',
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
              "title": "技术自动化",
              "link": ""
            },
            {
              "id": "global-infrastructure",
              "title": "AIP基础架构",
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
              "title": "产品白皮书",
              "link": ""
            },
            {
              "id": "blogs",
              "title": "博客",
              "link": "http://switch.linesno.com"
            }
          ]
        },
        {
          "id": "product-and-pricing",
          "title": "产品和服务",
          "link": "",
          "item": [
            {
              "id": "AIP-pricing",
              "title": "企业服务",
              "link": ""
            },
            {
              "id": "AIP-workspace-pricing",
              "title": "AIP平台搭建",
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
              "title": "文档编辑",
              "link": ""
            },
            {
              "id": "modernize-applications",
              "title": "项目团队管理",
              "link": ""
            },
            {
              "id": "smart-analytics",
              "title": "市场营销",
              "link": ""
            },
            {
              "id": "artificial-intelligence",
              "title": "运维分析管理",
              "link": ""
            },
            {
              "id": "security",
              "title": "产品研发",
              "link": ""
            },
            {
              "id": "productivity-and-work-transformation",
              "title": "产品销售自动化",
              "link": ""
            },
            {
              "id": "industry-solutions",
              "title": "技术解决方案编写",
              "link": ""
            },
            {
              "id": "devops-solutions",
              "title": "数据挖掘分析",
              "link": ""
            },
            {
              "id": "small-business-solutions",
              "title": "客服团队",
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
              "title": "AIP 架构设计",
              "link": "/architecture"
            },
            {
              "id": "AIP-quickstart",
              "title": "AIP技术文档",
              "link": "/technical"
            },
            {
              "id": "AIP-marketplace",
              "title": "AIP部署手册",
              "link": "/operation"
            },
            {
              "id": "support",
              "title": "支持",
              "link": "/business"
            },
            {
              "id": "code-examples",
              "title": "代码示例",
              "link": ""
            },
            {
              "id": "-architecture-center",
              "title": "DataOps体系",
              "link": ""
            },
            {
              "id": "training",
              "title": "培训",
              "link": ""
            },
            {
              "id": "AIP-for-developers",
              "title": "AIP for 开发者",
              "link": ""
            },
            {
              "id": "system-status",
              "title": "系统演示",
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
              "title": "与团队人员联系",
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
              "title": "视频介绍",
              "link": "https://www.bilibili.com/video/BV1PwCuY1Eu5/"
            },
            {
              "id": "developer-center",
              "title": "开发者平台",
              "link": ""
            },
            {
              "id": "media-newsroom",
              "title": "内容运营",
              "link": "http://alinesno-infra-portal.beta.base.infra.linesno.com"
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
