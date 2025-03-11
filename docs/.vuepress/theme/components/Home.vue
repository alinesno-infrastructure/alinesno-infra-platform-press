<template>
  <div class="home-container">

     <!--
     <iframe class="baniframe" sandbox="allow-scripts allow-same-origin" id="mh" src="https://www.jq22.com/js/a11.html"></iframe>
     -->

      <!-- 头部导航 -->
      <BannerPanel />

      <!-- 产品列表-->
      <ProductPanel />

      <!-- 产品架构 -->
      <ArchitecturePanel />

      <!-- 解决方案 -->
      <SolutionPanel />

      <!-- 服务支持 -->
      <ServicePanel />

      <!-- 案例列表-->
      <CasePanel />

      <!-- 底部菜单-->
      <FooterPanel />

  </div>
</template>

<script>

import BannerPanel from './Banner.vue'
import SolutionPanel from './Solution.vue'
import ProductPanel from './Product.vue'
import ArchitecturePanel from './ArchitectureInfo.vue'
import CasePanel from './Case.vue'
import ServicePanel from './ServiceInfo.vue'
import FooterPanel from './Footer.vue'

export default {
  components: {
    BannerPanel,
    SolutionPanel ,
    ProductPanel,
    ArchitecturePanel,
    CasePanel,
    ServicePanel,
    FooterPanel,
  },
  data() {
    return {
      title: '全新一代智能体平台',
      saasTitle: 'AIP Multi-Agent平台',
    }
  },
  computed: {
    data() {
      return this.$page.frontmatter
    },
    actionLink() {
      return {
        link: this.data.actionLink,
        text: this.data.actionText
      }
    }
  },
  methods: {
    clickCoding(tag) {
      ga('send', 'click', 'e.coding', 'Action', tag)
    }
  }
}

</script>

<style lang="stylus">
.baniframe {
    width: 100%;
    border-width: 0px;
    height: 620px;
    display: flex;
    position: absolute;
    z-index: 1;
}
</style>