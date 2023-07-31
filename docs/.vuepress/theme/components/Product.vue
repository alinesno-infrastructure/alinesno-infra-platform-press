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
          <li class="product-item" v-for="item in productList" :key="item.title">
            <div class="product-icon">
              <!-- <i :class="item.icon" /> -->
              <img :src="item.img" alt="" style="width: 61px;">
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
            "img":"https://res-1.cdn.office.net/files/fabric-cdn-prod_20221209.001/assets/brand-icons/product/svg/outlook_48x1.svg",
            "title": "支持创新和业务拓展",
            "sub": "可视化友好的管理平台，提供多团队管理的平台，适配为多部门，多外包等体系，形成多方合作，共同基于同。"
          },
          {
            "icon":"fas fa-tags",
            "img":"https://res-1.cdn.office.net/files/fabric-cdn-prod_20221209.001/assets/brand-icons/product/svg/powerpoint_48x1.svg",
            "title": "数字化转型推动",
            "sub": "可视化友好的管理平台，提供多团队管理的平台，适配为多部门，多外包等体系，形成多方合作，共同基于同。"
          },
          {
            "icon":"fas fa-file-word",
            "img":"https://res-1.cdn.office.net/files/fabric-cdn-prod_20221209.001/assets/brand-icons/product/svg/teams_48x1.svg",
            "title": "提高竞争力和降低成本",
            "sub": "可视化友好的管理平台，提供多团队管理的平台，适配为多部门，多外包等体系，形成多方合作，共同基于同。"
          },
          {
            "icon":"fas fa-file-csv",
            "img":"https://res-1.cdn.office.net/files/fabric-cdn-prod_20221209.001/assets/brand-icons/product/svg/onenote_48x1.svg",
            "title": "数字经济发展支持",
            "sub": "可视化友好的管理平台，提供多团队管理的平台，适配为多部门，多外包等体系，形成多方合作，共同基于同。"
          },
          {
            "icon":"fab fa-google-drive",
            "img":"https://res-1.cdn.office.net/files/fabric-cdn-prod_20221209.001/assets/brand-icons/product/svg/excel_48x1.svg",
            "title": "全面的产品覆盖",
            "sub": "可视化友好的管理平台，提供多团队管理的平台，适配为多部门，多外包等体系，形成多方合作，共同基于同。"
          },
          {
            "icon":"fas fa-feather",
            "img":"https://res-1.cdn.office.net/files/fabric-cdn-prod_20221209.001/assets/brand-icons/product/svg/sharepoint_48x1.svg",
            "title": "加强团队协作效率",
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
