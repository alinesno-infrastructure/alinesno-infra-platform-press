<template>
  <div class="layout service-container layout-grid-0">
    <!--row -->
    <div class="grid-0">
      <!-- col -->

      <div class="col col-main">
        <div class="main-wrap J_Region wb-zc-ybmod-brand-mod2-pc">
          <!--module -->

          <div class="suppoert-pannel suppoert-pannel-module" tms="suppoert-pannel/0.0.3">
            <div class="module-wrap J_tb_lazyload" style="background-color: #373d41">
              <div class="title" style="color: #fff; font-size: 24px">
                企业技术支持服务
              </div>
              <div class="des" style="color: #fff; width:100%; text-align:center;">
                提供全周期的技术支持服务，满足企业研发中台环境的搭建，包含部署指导，业务集成指导，二次开发指导还有过程答疑等，同步包括 <br />
                业务整合，业务组开发使用指导，满足中小企业快速中台化，平台化的服务需求。
              </div>
              <ul class="col clearfix">
                <li class="colli" v-for="(item, index) in serviceArr" :key="index">
                  <a target="_blank">
                    <div class="content">
                      <h3 class="item-title">{{ item.name }}</h3>
                      <div class="item-img-panel">
                        <!-- <img :src="item.icon" class="item-img" /> -->
                        <i :class="item.icon"></i>
                      </div>
                      <p class="item-desc">
                        {{ item.desc }}
                      </p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <!--module -->
        </div>
      </div>
      <!--col -->
    </div>
    <!-- row -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      serviceArr: [
        {
          name: "中台私服部署",
          icon: "fas fa-shipping-fast",
          desc: "提供安装、现场紧急救助、软件故障排查，在内部和数据私有化配置",
        },
        {
          name: "技术咨询指导",
          icon: "fas fa-file-signature",
          desc: "可以根据企业 IT 规划提供相关顾问咨询服务，培训等专业支持服务",
        },
        {
          name: "业务结合数据指导",
          icon: "fas fa-laptop-code",
          desc: "结合智能设施能力，业务建设集成，数据采集抽取计算整合解决方案指导",
        },
        {
          name: "企业定制化服务",
          icon: "fas fa-swatchbook",
          desc: "针对企业定制化指导，定制化开发，针对团队做针对业务的核心改造",
        },
      ],
    };
  },
};
</script>

<style lang="stylus" scoped>

</style>