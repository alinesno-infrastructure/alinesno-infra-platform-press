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
                技术支持服务
              </div>
              <div class="des" style="color: #fff; width:100%; text-align:center;">
                提供全周期的技术支持服务，涵盖多智能体平台的部署、业务集成和二次开发指导，确保企业顺利实施。同步包括：
                <br />
                智能体业务整合与团队使用指导，助力中小企业快速实现智能化转型，满足其自动化和协作提升的需求。
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
          "name": "智能体部署与配置",
          "icon": "fas fa-shipping-fast",
          "desc": "提供智能体平台的安装、现场支持、故障排查及私有化部署配置，确保平台稳定运行。"
        },
        {
          "name": "多智能体技术咨询",
          "icon": "fas fa-file-signature",
          "desc": "为企业IT规划提供顾问咨询服务，包括多智能体架构设计、培训和技术支持，助力企业智能化转型。"
        },
        {
          "name": "业务集成与数据优化",
          "icon": "fas fa-laptop-code",
          "desc": "结合多智能体平台能力，提供业务系统集成和数据采集、处理、整合的解决方案指导，提升工作效率。"
        },
        {
          "name": "定制化智能体开发",
          "icon": "fas fa-swatchbook",
          "desc": "针对企业特定需求，提供定制化智能体开发和业务流程改造，帮助团队实现更高价值的任务自动化。"
        }
      ]
    };
  },
};
</script>

<style lang="stylus" scoped>

</style>