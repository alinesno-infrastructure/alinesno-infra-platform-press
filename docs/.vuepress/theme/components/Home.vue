<template>
  <div class="home-container">

      <FooterPanel />

  </div>
</template>

<script>

import FooterPanel from './Footer.vue'

export default {
  components: {
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