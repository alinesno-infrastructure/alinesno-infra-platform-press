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
            "title": "一体化基础服务能力集成",
            "sub": "集成统一的管理门户和应用生命周期管理"
          },
          {
            "title": "集成标准的技术框架和手册",
            "sub": "统一规范管理和DevOps技术研发流程"
          },
          {
            "title": "轻量级数据治理和运营标准",
            "sub": "针对于中小型项目轻量级的数据运营治理"
          },
          {
            "title": "基于k8S容器云平台运维治理",
            "sub": "集成自动化运维和针对容器化进行运营管理"
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
