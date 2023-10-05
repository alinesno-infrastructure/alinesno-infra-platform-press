<template>
  <div class="banner-container">
    <div class="panel-left">
      <div class="notice-link-info">
        <span class="link-text">新一代软件智能设施服务在研发中</span>
        <span class="link-icon">进度</span>
      </div>
      <div class="hero-header">
        <div class="hero-title">利用AIP智能设施 赋能业务超级自动化 促进高质量发展</div>
        <div class="hero-sub-title">升级为智能设施，推动业务的智能化自动化转型，提升业务的智能化和更高质量</div>
      </div>
      <div class="hero-actions">
        <div class="action-link">免费开始使用</div>
        <div class="action-saler">与技术专家联系</div>
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
        <li class="feature" v-for="item in services" :key="item.id">
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
            "id":1 ,
            "title": "自动化转型高质量发展",
            "sub": "建设软件新智能设施和平台，推动企业超级自动化转型和创新发展"
          },
          {
            "id":2 ,
            "title": "提高竞争力和降低成本",
            "sub": "建设高效、可靠、安全的环境，提高竞争力，降低运营和管理成本"
          },
          {
            "id":3 ,
            "title": "支持创新和业务拓展",
            "sub": "提供创新和业务拓展的平台，促进新产品、新服务的开发和推广"
          },
          {
            "id":4 ,
            "title": "加强团队协作效率",
            "sub": "提供工具和平台，促进团队之间的协作，提高工作效率和团队能力"
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
