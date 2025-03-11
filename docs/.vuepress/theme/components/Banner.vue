<template>
  <div class="banner-container">
    <div class="panel-left">
      <div class="notice-link-info">
        <span class="link-text">新一代智能体平台服务</span>
      </div>
      <div class="hero-header">
        <div class="hero-title">Multi-Agent平台 赋能团队自动化优化流程提升团队能力</div>
        <div class="hero-sub-title">
            <img src="http://staticok.oss-cn-hangzhou.aliyuncs.com/avatar-share/thumbnail-6046836d-7766-4bfd-a93d-85fd52d2b0e4.webp" style="width: 60px;border-radius: 50%;">
            利用强大的多智能体优化传统业务流程，处理复杂任务，将不同的智能分配处理不同的任务，形成协作性。
        </div>
      </div>
      <div class="hero-actions">
        <div class="action-link" style="background:#d33232">
          <a href="https://kdocs.cn/l/cnKqyJwnd6au" style="color: #fff;text-decoration: none;" target="_blank">
            <i class="fa-solid fa-file-pdf" style="font-size:25px;"></i> AIP智能体平台介绍
          </a>
        </div> 
        <div class="action-saler">
          <a href="http://alinesno-agent.linesno.com/book/" style="color: #fff;text-decoration: none;" target="_blank">
            <i class="fa-solid fa-book-journal-whills" style="font-size:25px;"></i> 多Agent协作与自动化电子书
          </a>
        </div> 
      </div>
    </div>
    <div class="panel-right">
      <div class="banner-img">
        <img src="/assets/agent/agents.jpg" alt="" />
        <div class="img-text">
            <a href="http://alinesno-agent.linesno.com/book/" style="color: #fff;font-size: 15px;" target="_blank">
               超级个体:多Agent协作与自动化产品实践
            </a>
        </div>
      </div>
    </div>
    <div class="panel-list-features">
      <ul>
        <li class="feature" v-for="item in services" :key="item.id">
          <div class="header-title">
            <i :class="item.icon" style="font-size: 30px;color: #d33233;"></i>
            {{ item.title }}</div>
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
            "id":1 ,
            "icon":"fa-solid fa-truck-fast",
            "title": "多组织智能协作",
            "sub": "通过多智能体间的高效协作，为企业提供定制化的解决方案，优化业务流程"
          },
          {
            "id":2 ,
            "icon":"fa-solid fa-user-secret",
            "title": "智能体市场与生态",
            "sub": "构建一个智能体市场，允许分享智能体服务，促进技术创新和快速部署"
          },
          {
            "id":3 ,
            "icon":"fa-solid fa-signature" , 
            "title": "跨场景融合应用",
            "sub": "支持多智能体在不同业务场景下的无缝集成，如综合业务、市场营销等"
          },
          {
            "id":4 ,
            "icon":"fa-solid fa-rocket",
            "title": "自定义与个性化智能体",
            "sub": "提供强大的工具，使团队能够根据自身需求创建和结合场景自定义智能体"
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
