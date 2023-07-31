<template>
  <div class="case-container">
    <div class="header-box">
      <div class="header-title">在 Alinesno Infrastructure Platform上实现客户创新</div>
    </div>

    <div class="case-list-panel">
      <div class="case-left-panel">
        <ul>
          <li class="case-item" v-for="item in caseList" :key="item.title">
            <div class="case-icon">
              <img :src="item.img" alt="" />
            </div>
            <div class="case-label">
              {{ item.sub }}
            </div>
          </li>
        </ul>
      </div>
      <div class="case-right-panel"></div>
    </div>

  </div>
</template>

<script>

export default {
  data() {
    return {
      caseList: [
          {
            "img":"/assets/case/case_01.webp",
            "title": "完善的数字中台体系",
            "sub": "可视化友好的管理平台，提供多团队管理的平台，适配为多部门，多外包等体系，形成多方合作，共同基于同。"
          },
          {
            "img":"/assets/case/case_03.webp",
            "title": "可视化多团队研发平台",
            "sub": "可视化友好的管理平台，提供多团队管理的平台，适配为多部门，多外包等体系，形成多方合作，共同基于同。"
          },
          {
            "img":"/assets/case/case_02.webp",
            "title": "通用的业务开发组件",
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
