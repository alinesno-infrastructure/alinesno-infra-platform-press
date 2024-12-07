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
      caseList:
        [
          {
            "img": "/assets/case/case_01.webp",
            "title": "多智能体协作网络",
            "sub": "通过智能体间的自动协作，优化业务流程，解放团队人力，使员工能够专注于更高价值的任务。"
          },
          {
            "img": "/assets/case/case_03.webp",
            "title": "智能体驱动的工作自动化",
            "sub": "实现日常任务的自动化处理，减少人工干预，提高工作效率和准确性，支持团队专注于战略性和创造性工作。"
          },
          {
            "img": "/assets/case/case_02.webp",
            "title": "多团队智能协作平台",
            "sub": "提供一个可视化友好的管理平台，适配多部门和外包体系，促进多方合作，确保无缝沟通与协作。"
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
