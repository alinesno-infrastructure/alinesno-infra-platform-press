<template>
  <div class="arch-container">
    <div class="header-box">
      <div class="header-title">产品架构</div>
      <div class="header-sub-title">为业务发展提供 基础的数字化架构 ，业务规范化和标准化，更好的沉淀企业业务资产和数据资产</div>
    </div>

    <div class="arch-list-panel">
      <div class="arch-left-panel">
        <ul>
          <li class="arch-item" v-for="item in archList" :key="item.title">
            <div class="prouct-title">
              {{ item.title }}
            </div>
            <div class="arch-label">
              {{ item.sub }}
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div class="arch-box">
      <img src="/assets/portal/arch.jpg" alt="" />
    </div>

  </div>
</template>

<script>

export default {
  data() {
    return {
      archList: [
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
