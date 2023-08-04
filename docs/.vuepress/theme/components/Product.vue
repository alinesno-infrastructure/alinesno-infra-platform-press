<template>
  <div class="product-container">
    <div class="header-box">
      <div class="header-title">产品特征</div>
      <div class="header-sub-title">
        软件新基础设施，全称Alinesno-Infrastructure-Platform（简称AIP)，通过建设软件新基础设施和平台，
        推动数字化转型和创新的发展，提高竞争力、降低成本、支持创新和业务拓展，以及提升团队协作效率，
        对现代软件开发和运行需求而建设的基础设施系统。 
      </div>
    </div>

    <div class="product-list-panel">
      <div class="product-left-panel">
        <ul>
          <li class="product-item" v-for="item in productList" :key="item.title">
            <div class="product-icon">
              <img :src="item.img" :alt="item.title" style="width: 61px;">
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
            "img":"/assets/portal/icons/outlook_48x1.svg",
            "title": "支持创新和业务拓展",
            "sub": "可视化友好的管理平台，提供多团队管理的平台，适配为多部门，多外包等体系，形成多方合作。"
          },
          {
            "icon":"fas fa-tags",
            "img":"/assets/portal/icons/powerpoint_48x1.svg",
            "title": "数字化转型推动",
            "sub": "可视化友好的管理平台，提供多团队管理的平台，适配为多部门，多外包等体系，形成多方合作。"
          },
          {
            "icon":"fas fa-file-word",
            "img":"/assets/portal/icons/teams_48x1.svg",
            "title": "提高竞争力和降低成本",
            "sub": "可视化友好的管理平台，提供多团队管理的平台，适配为多部门，多外包等体系，形成多方合作。"
          },
          {
            "icon":"fas fa-file-csv",
            "img":"/assets/portal/icons/onenote_48x1.svg",
            "title": "数字经济发展支持",
            "sub": "可视化友好的管理平台，提供多团队管理的平台，适配为多部门，多外包等体系，形成多方合作。"
          },
          {
            "icon":"fab fa-google-drive",
            "img":"/assets/portal/icons/excel_48x1.svg",
            "title": "全面的产品覆盖",
            "sub": "可视化友好的管理平台，提供多团队管理的平台，适配为多部门，多外包等体系，形成多方合作。"
          },
          {
            "icon":"fas fa-feather",
            "img":"/assets/portal/icons/sharepoint_48x1.svg",
            "title": "加强团队协作效率",
            "sub": "可视化友好的管理平台，提供多团队管理的平台，适配为多部门，多外包等体系，形成多方合作。"
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
