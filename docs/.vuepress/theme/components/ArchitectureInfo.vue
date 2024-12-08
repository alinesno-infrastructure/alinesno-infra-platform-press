<template>
  <div class="arch-container">
    <div class="header-box">
      <div class="header-title">多智能体协作</div>
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

    <div class="arch-list-panel arch-box">
      <div class="arch-img-box" v-for="(item, index) in engineers" :key="index">
        <!-- 头像部分 -->
        <img :src="item.icon" style="width: 100px; height: 100px; border-radius: 5px; margin-right: 20px;"
          alt="Profile" />
        <!-- 信息部分 -->
        <div style="flex-grow: 1;">
          <div class="man-title" style="font-size: 16px; font-weight: bold; margin-bottom: 5px;text-align: left;">
            <i class="fa-solid fa-signature" style="font-size: 30px; color: rgb(211, 50, 51);"></i>
            {{ item.position }} {{ item.name }}
          </div>
          <div class="man-desc" style="font-size: 14px; color: #777; margin-bottom: 5px;text-align: left;">
            {{ item.description }}
          </div>
        </div>
      </div>
    </div>



  </div>
</template>

<script>

export default {
  data() {
    return {
      engineers: [
        { icon: '/assets/agent/pic2.jpg', name: '张伟', position: '首席架构师', description: '负责整个项目的架构设计和技术选型，拥有超过10年的行业经验。' },
        { icon: '/assets/agent/pic3.jpg', name: '王芳', position: '前端开发专家', description: '专注于用户界面设计与实现，擅长使用最新的Web技术构建高性能的前端应用。' },
        { icon: '/assets/agent/pic14.jpg', name: '李娜', position: '后端开发工程师', description: '主要负责服务器端逻辑的编写，对微服务架构有深入的理解，并致力于提高系统的可扩展性。' },
        { icon: '/assets/agent/pic15.jpg', name: '赵强', position: '数据库管理员', description: '管理并优化项目中的所有数据库操作，确保数据存储的安全性和高效性。' },
        { icon: '/assets/agent/pic16.jpg', name: '孙丽', position: '全栈开发工程师', description: '具备从前端到后端的全面开发能力，能够快速响应需求变化并实现功能迭代。' },
        { icon: '/assets/agent/pic7.jpg', name: '周勇', position: '安全工程师', description: '专注于系统和网络安全，保障产品免受潜在威胁，为用户提供安全可靠的环境。' },
        { icon: '/assets/agent/pic9.jpg', name: '冯杰', position: 'AI算法工程师', description: '专攻人工智能领域，将机器学习模型应用于实际业务场景，推动智能化转型。' },
        { icon: '/assets/agent/pic4.jpg', name: '陈静', position: 'UI/UX设计师', description: '关注用户交互体验，设计直观易用的产品界面，使用户能够轻松上手。' }
      ],
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
