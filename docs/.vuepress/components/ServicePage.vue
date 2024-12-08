<template>
    <div class="test-1">
        产品体系
    </div>
</template>

<script>

export default {
  name: "ServicePage",
  data() {
    return {
      title: '全新一代智能体平台',
      saasTitle: 'AIP Multi-Agent平台',
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
