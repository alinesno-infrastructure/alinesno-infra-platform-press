<template>
  <div class="product-container">
    <div class="header-box">
      <div class="header-title">多智能体协作</div>
      <div class="header-sub-title">
        智能体平台，全称Alinesno-Infrastructure-Platform（简称AIP)，
        通过智能体协作实现业务自动化，解放团队人力，优化日常工作和业务流程，支持定制化解决方案，
        自适应环境变化、智能学习与进化、以及高度自治操作，使团队能够专注于更高价值的任务。
      </div>
    </div>

    <!--
    <div class="product-list-panel">
      <div class="product-left-panel">
        <ul>
          <li class="product-item" v-for="item in productList" :key="item.title">
            <div class="product-icon">
               <i :class="item.icon" style="font-size: 50px;font-weight: bold;color: #d33233;" />
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
    -->

  </div>
</template>

<script>

export default {
  data() {
    return {
      productList: [
    {
        "icon": "fa-solid fa-signature",
        "img": "/assets/portal/icons/single_agent.svg",
        "title": "高效任务执行",
        "sub": "通过优化单一智能体的任务处理能力，确保快速响应和高效率的任务完成，提升整体业务流程的顺畅度"
    },
    {
        "icon": "fa-solid fa-users-gear",
        "img": "/assets/portal/icons/multi_agents.svg",
        "title": "团队协作优化",
        "sub": "创建安全高效的协作环境，支持多个智能体在一频道内的互动与合作，显著提高团队协作的效果和灵活性"
    },
    {
        "icon": "fas fa-file-signature",
        "img": "/assets/portal/icons/scenario_platform.svg",
        "title": "灵活场景适配",
        "sub": "根据不同业务场景的需求，提供定制化的智能体协作方案，适应各种复杂的工作流程，实现精准匹配和高效运作"
    },
    {
        "icon": "fas fa-laptop-code",
        "img": "/assets/portal/icons/resource_exchange.svg",
        "title": "资源共享平台",
        "sub": "建立开放平台，促进智能体资源的共享与交换，推动不同组织之间的技术交流与合作，增强创新能力和竞争力"
    },
    {
        "icon": "fas fa-swatchbook",
        "img": "/assets/portal/icons/data_governance.svg",
        "title": "数据治理强化",
        "sub": "利用先进的数据分析工具和技术，确保智能体收集的数据的安全性和隐私性，维护企业信息资产的安全与合规"
    },
    {
        "icon": "fa-solid fa-building-columns",
        "img": "/assets/portal/icons/cross_industry_team.svg",
        "title": "跨行业协同",
        "sub": "跨越传统行业界限，组建由不同背景的智能体组成的团队，实现前所未有的协作可能性，共同解决复杂问题并创造新价值"
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
