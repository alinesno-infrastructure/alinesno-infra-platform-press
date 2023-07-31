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
      title: '全新一代软件基础设施',
      saasTitle: 'AIP基础设施',
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
