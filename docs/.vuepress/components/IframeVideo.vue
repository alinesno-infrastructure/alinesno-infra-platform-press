<!--docs/.vuepress/components/iframeComp.vue-->
<template>
  <iframe
    class="video-iframe"
    width="80%"
    title=""
    v-resize="{ log: true }"
    seamless=""
    allowfullscreen="allowfullscreen"
    :src="ihtml"
  ></iframe>
</template>

<script>
export default {
  props: {
    ihtml: {
      type: String,
    },
  },
  mounted() {
    function changeVideoIframe() {
      const video = document.getElementsByClassName("video-iframe");
      const width = document.getElementsByClassName("video-iframe")[0].scrollWidth;
      for (let i = 0; i < video.length; i++) {
        video[i].style.height = width * 0.75 + "px";
      }
    }
    changeVideoIframe();
    window.onresize = function () {
      changeVideoIframe();
    };
  },
};
</script>