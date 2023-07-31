<template>
  <div class="banner-container">
    <div class="panel-left">
      <div class="notice-link-info">
        <span class="link-text">新一代软件基础设施服务在研发中</span>
        <span class="link-icon">进度</span>
      </div>
      <div class="hero-header">
        <div class="hero-title">利用AIP构筑创新业务 构建业务服务实现数字转型高质量发展</div>
        <div class="hero-sub-title">快速构建应用、中小企业数字化转型的新型基础设施</div>
      </div>
      <div class="hero-actions">
        <div class="action-link">免费开始使用</div>
        <div class="action-saler">与销售人员联系</div>
      </div>
    </div>
    <div class="panel-right">
      <div class="banner-img">
        <img src="/assets/portal/hero_bg.png" alt="" />
        <div class="img-text">
          了解企业如何使用AIP从内部推进改变
        </div>
      </div>
    </div>
    <div class="panel-list-features">
      <ul>
        <li class="feature" v-for="item in services" :key="item">
          <div class="header-title">{{ item.title }}</div>
          <div class="header-sub-label">{{ item.sub }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {

      services: [
          {
            "title": "数字化转型推动",
            "sub": "建设软件新基础设施和平台，推动企业数字化转型和创新发展"
          },
          {
            "title": "提高竞争力和降低成本",
            "sub": "建设高效、可靠、安全的软件开发和运行环境，提高企业竞争力，降低运营和管理成本"
          },
          {
            "title": "支持创新和业务拓展",
            "sub": "提供创新和业务拓展的平台，促进新产品、新服务的开发和推广，灵活应对市场变化"
          },
          {
            "title": "加强团队协作效率",
            "sub": "提供协作工具和沟通平台，促进团队之间的信息共享和协作，提高工作效率和团队协作能力"
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
