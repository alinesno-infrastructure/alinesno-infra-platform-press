<template>
  <div class="product-container">
    <div class="header-box">
      <div class="header-title">产品列表</div>
      <div class="header-sub-title">ACP中台服务（Alinesno Cloud Platform）是业务应用生命周期管理和监控的新一代中台， 为业务发展提供 基础的数字化架构 ，
        业务规范化和标准化，更好的沉淀企业业务资产和数据资产,形成行业的业务标准和 团队的一套解决方案，形成自己的核心竞争力</div>
    </div>

    <div class="product-list-panel">
      <div class="product-left-panel">
        <ul>
          <li class="product-item" v-for="item in productList" :key="item">
            <div class="product-icon">
              <i :class="item.icon" />
            </div>
            <div class="prouct-title">
              {{ item.title }}
            </div>
            <div class="product-label">
              {{ item.sub }}
            </div>
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  data() {
    return {
      productList: [
          {
            "icon":"fas fa-laptop-code",
            "title": "完善的数字中台体系",
            "sub": "可视化友好的管理平台，提供多团队管理的平台，适配为多部门，多外包等体系，形成多方合作，共同基于同。"
          },
          {
            "icon":"fas fa-tags",
            "title": "可视化多团队研发平台",
            "sub": "可视化友好的管理平台，提供多团队管理的平台，适配为多部门，多外包等体系，形成多方合作，共同基于同。"
          },
          {
            "icon":"fas fa-file-word",
            "title": "通用的业务开发组件",
            "sub": "可视化友好的管理平台，提供多团队管理的平台，适配为多部门，多外包等体系，形成多方合作，共同基于同。"
          },
          {
            "icon":"fas fa-file-csv",
            "title": "轻量级数据治理体系",
            "sub": "可视化友好的管理平台，提供多团队管理的平台，适配为多部门，多外包等体系，形成多方合作，共同基于同。"
          },
          {
            "icon":"fab fa-google-drive",
            "title": "云原生容器化架构体系",
            "sub": "可视化友好的管理平台，提供多团队管理的平台，适配为多部门，多外包等体系，形成多方合作，共同基于同。"
          },
          {
            "icon":"fas fa-feather",
            "title": "完善的项目实践文档",
            "sub": "可视化友好的管理平台，提供多团队管理的平台，适配为多部门，多外包等体系，形成多方合作，共同基于同。"
          },
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
