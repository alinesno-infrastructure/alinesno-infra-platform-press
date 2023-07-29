<template>
  <footer id="footer" class="footer-page">
    <div class="container">
      <div class="row footer-row">
        <div class="col-md-3">
          <p class="footer-title">关于我们</p>
          <p class="footer-text" style="text-indent: 24px">
            AIP研发团队， 我们只专注于基础层建设，提供低代码、无代码、数据管理、数据运营建设，
            为业务建设提供基础层，提供基于PaaS层之上和IaaS层之间的服务
          </p>
        </div>
        <div class="col-md-3">
          <p class="footer-title">产品列表</p>
          <p
            class="footer-text-product"
            style="padding-top: 10px; margin-bottom: 0px"
          >
            <a href="javascript:void(0);"> alinesno-infrastructure-devops(ACOps) </a>
          </p>
          <p
            class="footer-text-product"
            style="
              padding-top: 0px;
              font-size: 10px;
              color: #64656b;
              font-weight: 300;
            "
          >
            更新日期：2023-02-17
          </p>
          <p
            class="footer-text-product"
            style="padding-top: 0px; margin-bottom: 0px"
          >
            <a href="javascript:void(0);"> alinenso-cloud-platform(AIP) </a>
          </p>
          <p
            class="footer-text-product"
            style="
              padding-top: 0px;
              font-size: 10px;
              color: #64656b;
              font-weight: 300;
            "
          >
            更新日期：2023-02-27
          </p>
          <p class="footer-text-product">
            <a href="javascript:void(0);"> alinenso-cloud-plat-press </a>
          </p>
          <p
            class="footer-text-product"
            style="
              padding-top: 0px;
              font-size: 10px;
              color: #64656b;
              font-weight: 300;
            "
          >
            更新日期：2019-02-17
          </p>
          <p class="footer-text-product">
            <a href="javascript:void(0);"> alinesno-infrastructure-data(ACD) </a>
          </p>
          <p
            class="footer-text-product"
            style="
              padding-top: 0px;
              font-size: 10px;
              color: #64656b;
              font-weight: 300;
            "
          >
            更新日期：2019-03-04
          </p>
        </div>
        <div class="col-md-3">
          <p class="footer-title">联系方式</p>
          <p class="footer-text-product" style="padding-top: 10px">
            <i class="iconfont icon-dianhua1"> </i>
            15578942583
          </p>
          <!--<p class="footer-text-product"><i class="iconfont icon-dianhua1"></i> 18774035187</p>-->
          <p class="footer-text-product">
            <i class="iconfont icon-weizhi1"> </i>
            广西南宁大学东路时代天骄4楼413室
          </p>
          <p class="footer-title" style="margin-top: 40px">付款方式</p>
          <p class="footer-text-product" style="padding-top: 10px">
            <i class="iconfont icon-icon-alipay"> </i>
            <a href="javascript:void(0);"> 支付宝在线支付 </a>
          </p>
          <!--<p class="footer-text-product"><i class="iconfont icon-dianhua1"></i> 18774035187</p>-->
          <p class="footer-text-product">
            <i class="iconfont icon-duigongzhanghu"> </i>
            <a href="javascript:void(0);"> 企业账号汇款 </a>
          </p>
        </div>
        <div class="col-md-3">
          <p class="footer-title">合作伙伴</p>
        </div>
      </div>
      <div class="footer-copyright" style="font-size: .9rem">
        版权所有 ©
        <strong id="copyrightYear">
          {{ new Date().getFullYear() }}
        </strong>
        AIP研发团队
        <a href="https://beian.miit.gov.cn/" target="_blank" rel="nofollow">
          桂ICP备15005934号-1
        </a>
      </div>
    </div>
  </footer>
</template>

<style lang="stylus" scoped>
.footer-page {
  float: left;
  background: #eef1f6 none repeat center top;
  padding-bottom: 80px;
  width: 100%;

  .container {
    width: 90%;
    max-width: 1290px;
    margin: auto;

    .footer-row {
      background: #eef1f6 none repeat center top;
      padding-top: 80px;
      float: left;
      width: 100%;
    }

    .col-md-3 {
      width: 25%;
      float: left;
    }

    .footer-title {
      font-size: 18px;
      color: rgb(51, 51, 51);
      font-weight: bold;
    }

    .footer-text-product {
      color: rgb(51, 51, 51);
      font-size: .9rem;
    }

    p {
      margin: 0 0 10px;
    }

    .footer-text {
      color: rgb(51, 51, 51);
      font-size: .9rem;
      display: table-cell;
      line-height: 2.1em;
      padding-top: 10px;
      padding-right: 60px;
    }
  }

  .footer-copyright {
    text-align: center;
    color: #333333;
    float: left;
    width: 100%;
    margin-top: 20px;
  }
}
</style>
