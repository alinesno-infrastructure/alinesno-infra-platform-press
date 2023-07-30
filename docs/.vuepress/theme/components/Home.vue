<template>
  <div class="home-container">
      <!-- 头部导航 -->
      <BannerPanel />

      <!-- 产品列表-->
      <ProductPanel />

      <!-- 产品架构 -->
      <ArchitecturePanel />

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
import ProductPanel from './Product.vue'
import ArchitecturePanel from './Architecture.vue'
import CasePanel from './Case.vue'
import ServicePanel from './Service.vue'
import FooterPanel from './Footer.vue'

export default {
  components: {
    BannerPanel,
    ProductPanel,
    ArchitecturePanel,
    CasePanel,
    ServicePanel,
    FooterPanel,
  },
  data() {
    return {
      title: '全新一代软件基础设施',
      saasTitle: 'AIP基础设施',
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