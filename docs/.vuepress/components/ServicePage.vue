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
      title: '全新一代软件智能设施',
      saasTitle: 'AIP智能设施',
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
