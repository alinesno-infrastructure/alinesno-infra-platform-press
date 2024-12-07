<template>
  <div class="arch-container">
    <div class="header-box">
      <div class="header-title">产品架构</div>
      <div class="header-sub-title">为业务发展提供 基础的超级自动化架构 ，业务规范化和标准化，更好的沉淀企业业务资产和数据资产</div>
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
          "icon": "fas fa-network-wired",
          "title": "多智能体协作网络",
          "sub": "通过智能体间的自动协作，优化业务流程，解放团队人力，使员工能够专注于更高价值的任务。"
        },
        {
          "icon": "fas fa-robot",
          "title": "智能体驱动的工作自动化",
          "sub": "实现日常任务的自动化处理，减少人工干预，提高工作效率和准确性，支持团队专注于战略性和创造性工作。"
        },
        {
          "icon": "fas fa-users-cog",
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
