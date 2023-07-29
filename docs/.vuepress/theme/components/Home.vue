<template>
  <div class="home">
    <div class="hero hero-platform ">

       <img src="/banner-bg.jpg" class="hero-bg-img" />

      <div class="hero-text-box" >
        <span class="banner-title">
          利用AIP构筑业务、构建应用并实现数字转型
          <br>
          中小团队转型的新型基础设施
        </span>
        <p class="action">
          <NavLink class="action-button link-action" style="" :item="actionLink" />
        </p>
      </div>
      <section class="row td-box td-box--primary position-relative td-box--gradient td-box--height-auto feature-box" >
          <ul >
            <li  v-for="(item , index) in platformFeature" :key="index">
              <div class="item-title"> {{ item.title}}</div>
              <div class="item-desc"> {{ item.desc }}</div>
            </li>
          </ul>
      </section>
    </div>

    <!--
    <div class="hero">
      <img
        v-if="data.heroImage"
        :src="$withBase(data.heroImage)"
        :alt="data.heroAlt || 'hero'"
      >

      <h1>{{ title }}</h1>

      <p class="description">
        {{ data.tagline || $description || 'Welcome to your VuePress site' }}
      </p>

      <p class="action">
        <NavLink
          class="action-button"
          :item="actionLink"
        />
      </p>
    </div> 
      -->


    <section class="row td-box td-box--primary position-relative td-box--gradient td-box--height-auto">
      <div class="container text-center td-arrow-down">
        <span class="h4 mb-0">
          <h3>基础设施服务 AIP产品优势</h3>
          <p>
            AIP中台服务（Alinesno Infrastructure Platform）是业务应用生命周期管理和监控的新一代中台， 为业务发展提供
            基础的数字化架构 ，业务规范化和标准化，更好的沉淀企业业务资产和数据资产,形成行业的业务标准和 团队的一套解决方案，形成自己的核心竞争力
          </p>
        </span>
      </div>
    </section>

    <div class="features-box" style="background-color:rgb(244, 244, 244)">
      <div v-if="functionAll.length" class="features" style="background-color:rgb(244, 244, 244)">
        <div v-for="(feature, index) in functionAll" :key="index" class="feature">
          <div class="title-icon">
            <i :class="feature.icon"></i>
          </div>
          <h3>{{ feature.title }}</h3>
          <p style="text-align:left">{{ feature.details }}</p>
        </div>
      </div>
    </div>

    <section class="row td-box td-box--primary position-relative td-box--gradient td-box--height-auto"
      style="background-color:#fff;padding-bottom:0px;">
      <div class="container text-center td-arrow-down">
        <span class="h4 mb-0">
          <h3 style="color:#555">AIP 可以帮助我做什么</h3>
          <p style="color:#555">为业务上层提供基础的数字化架构，规范化的开发，为后期业务的沉淀 形成基础</p>
        </span>
      </div>
    </section>

    <div class="features-box" style="background-color:#fff;padding-bottom:6rem">
      <div v-if="helpAll.length" class="features" style="background-color:#fff">
        <div v-for="(feature, index) in helpAll" :key="index" class="feature">
          <div class="title-icon">
            <!--
            <img :src="$withBase('/svg/' + feature.icon)" />
            -->
            <i :class="feature.icon"></i>
          </div>
          <h3>{{ feature.title }}</h3>
          <p>{{ feature.details }}</p>
        </div>
      </div>

      <div style="position: relative;max-width: 1024px;margin: auto;">
        <img :src="$withBase('/aip_product_arc.jpg')" style="width: 100%;margin: auto;">
      </div>

    </div>

    <section class="row td-box td-box--primary position-relative td-box--gradient td-box--height-auto"
      style="background-color:rgb(255 124 0)">
      <div class="container text-center td-arrow-down">
        <span class="h4 mb-0">
          <h3>产品功能</h3>
          <p>为业务上层提供基础的数字化架构，规范化的开发，为后期业务的沉淀 形成基础，更好的沉淀企业资产,业务架构师的规划， 进行核心业务的改造和各个业务线的整合，形成行业的业务标准和 一套解决方案，形成自己的核心竞争力
          </p>
        </span>
      </div>
    </section>

    <div class="features-box" style="padding:6rem 0">
      <div v-if="featuresAll.length" class="features">
        <div v-for="(feature, index) in featuresAll" :key="index" class="feature">
          <div class="title-icon">
            <i :class="feature.icon"></i>
          </div>
          <h3>{{ feature.title }}</h3>
          <p style="text-align:left">{{ feature.details }}</p>
        </div>
      </div>
    </div>

    <home-service />

    <!-- footer_start -->
    <footer-temp />
    <!-- footer_end -->

  </div>
</template>

<script>
import HomeService from './HomeService.vue'
import FooterTemp from './Footer.vue'
import NavLink from '@parent-theme/components/NavLink.vue'

export default {
  components: {
    NavLink,
    HomeService,
    FooterTemp
  },
  data() {
    return {
      title: '全新一代企业基础设施',
      saasTitle: 'AIP数字化平台',
      saasUrl: 'http://v212.ui.saas.dev.lbxinhu.linesno.com:23456/',
      platformFeature:[
        {
          title: '一体化基础服务能力集成' , 
          desc: '集成统一的管理门户和应用生命周期管理' , 
        },
        {
          title: '集成标准的技术框架和手册' , 
          desc: '统一规范管理和DevOps技术研发流程' , 
        },
        {
          title: '轻量级数据治理和运营标准' , 
          desc: '针对于中小型项目轻量级的数据运营治理' , 
        },
        {
          title: '基于k8S容器云平台运维治理' , 
          desc: '集成自动化运维和针对容器化进行运营管理' , 
        }
      ] ,
      helpAll: [
        {
          title: '开箱即用的AIP中台系统',
          details:
            '基于中台体系，提供生产可使用的系统工具，包括技术体系，技术平台和研发中台管理工具，完善的团队切入流程',
          icon: 'fas fa-laptop-code'
        },
        {
          title: '快速实现基础设施和业务集成',
          details:
            '基于中台体系和工具，快速集成业务体系的管理体系，提供业务建设需要的平台化能力和稳定的开发框架，使业务快速整合',
          icon: 'fab fa-pinterest-square'
        },
        {
          title: '研发中台和团队组快速结合',
          details:
            '针对于中小型团队的特点，提供示例和基础入门工程，同时提供相关案例的项目架构文档参考，团队快速成长和切入企业中台',
          icon: 'fas fa-shipping-fast'
        }
      ],
      functionAll: [
        {
          title: '完善的基础设施体系',
          details:
            '包含平台化、中台化、保障体系，支持技术、研发、标准、数据、运营一体化的中台建设体系，业务应用生命周期管理和监控的新一代中台。',
          icon: 'fab fa-angular'
        },
        {
          title: '可视化多团队研发平台',
          details:
            '可视化友好的管理平台，提供多团队管理的平台，适配为多部门，多外包等体系，形成多方合作，共同基于同一中台建设业务数字化。',
          icon: 'fab fa-artstation'
        },
        {
          title: '通用的业务开发组件',
          details:
            '根据元数据，提取出通用的，基础的业务组件，形成标准规范，沉淀规范，中台提供基础的通用的业务研发组件，让专业更专注于场景和需求',
          icon: 'fas fa-bus-alt'
        },
        {
          title: '转量级数据治理体系',
          details:
            '基础能力管理，数据采集、计算、治理运营输出,统一业务规范，集成DataOps能力，提供数据API接口提供业务集成',
          icon: 'fas fa-crop'
        },
        {
          title: '云原生容器化架构体系',
          details:
            '中台天然的云原生架构，结合k8s/docker等容器化技术，快速实现云平台架构，跟进行业先进架构，提供完善的传统架构到云平台架构方案。',
          icon: 'fas fa-dove'
        },
        {
          title: '完善的项目实践文档',
          details:
            '标准中台体系在每个流程环节都有标准的文档交付流程，从技术、项目、产出、团队体系还有沉淀等，基于中台建设支撑的一套中台管理文档',
          icon: 'fab fa-earlybirds'
        }
      ],
      featuresAll: [
        {
          title: '一套技术研发基础框架和方法',
          details:
            '为企业基础架构和统一研发云平台，为企业提供统一研发平台， 代码生成器开发平台。整体平台从规范、组织、架构-、业务、持续集成、自动化、在线升级全方位企业级基础设施研发解决方案',
          icon: 'fas fa-feather'
        },
        {
          title: '一套技术研发中台和数据中台底座',
          details:
            '针对于大中小型团队合适的开发平台，支持微服务化、中台化、统一权限和基础能力管理，数据采集、计算、治理运营输出，提供技术到业务再到数据一条线的基础数字化能力',
          icon: 'fas fa-tags'
        },
        {
          title: '统一的前端框架和微服务研发引擎',
          details:
            '实现了集合各种微服务基础能力，分布式技术，容器化管理，分布式事务处理等，集成微服务框架能力和公共的前端基础组件，结合低代码平台形成规划化工程结构',
          icon: 'fas fa-file-csv'
        },
        {
          title: '成熟的研发组件跨团队多部门',
          details:
            '完善的SaaS应用周期管理,业务产品管理，通过单点登陆集成，集成统一的管理门户，便于多种业务的管理集成，提供内部研发人员成长的入口，形成团队统一的管理平台，同时提供门户管理平台',
          icon: 'fas fa-file-word'
        },
        {
          title: '集成多个基础服务管理组件',
          details:
            '集成包括基础权限、统一用户、分布式存储、分布式通知、消息服务、代码生成器、网关、开放平台等可视化的基础管理组件，规避技术上的难点，让业务更专注于业务',
          icon: 'fas fa-gem'
        },
        {
          title: '日志异常监控通知和运维部署实践',
          details:
            '集成从系统，业务，应用监控集成，运维规划完善的项目运维体系，偏向于自动化产品运维设计，大型运维另做规划，主要的运维目标是 做到自动化、可视化、可预警几个目标',
          icon: 'fab fa-google-drive'
        }
      ]
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

.home {
  padding: $navbarHeight 0rem 0;
  max-width: 100%;
  margin: 0px auto;

  .hero {
    text-align: center;
    padding: 4rem 0px;
    background: url('/banner_bg.png') center bottom / 1600px no-repeat;
    background-repeat: no-repeat;
    background-position: center;

    >img {
      max-height: 280px;
      display: block;
      margin: 4rem auto 1.5rem;
    }

    h1 {
      font-size: 2rem;
    }

    h1, .description, .action {
      margin: 1.8rem auto;
    }

    .description {
      max-width: 65rem;
      font-size: 1.25rem;
      line-height: 1.3;
      color: lighten($textColor, 20%);
      font-weight: bold;
    }

    .action-button {
      display: inline-block;
      font-size: 1.2rem;
      color: #fff;
      background-color: $accentColor;
      padding: 0.8rem 1.6rem;
      border-radius: 4px;
      transition: background-color 0.1s ease;
      box-sizing: border-box;
      border-bottom: 1px solid darken($accentColor, 10%);

      &:hover {
        background-color: lighten($accentColor, 10%);
      }
    }
  }

  .features-box {
    background-color: #f7fbfd;
    padding: 2rem 0px;
  }

  .features {
    padding: 1rem 0;
    margin-top: 2.5rem;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    align-content: stretch;
    justify-content: space-between;
    text-align: center;
    background-color: #f7fbfd;
    max-width: 1290px;
    margin: auto;
  }

  .feature {
    flex-grow: 1;
    flex-basis: 30%;
    max-width: 30%;
    margin-bottom: 30px;

    &:hover {
      cursor: pointer;
    }

    h2 {
      font-size: 1.4rem;
      font-weight: 500;
      border-bottom: none;
      padding-bottom: 0;
      color: lighten($textColor, 10%);
    }

    p {
      color: lighten($textColor, 25%);
    }
  }

  .footer {
    padding: 2rem;
    text-align: center;
    color: lighten($textColor, 25%);
  }
}

.footer-section {
  text-align: center;
  padding: 4rem 0px;
  background-color: rgb(37, 37, 37) ;
  float: left;
  width: 100%;
  margin-bottom: 0px;

  p {
    color: #fff;
    line-height: 0.9rem;
  }

  ul {
    max-width: 90%;
    width: 100%;
    margin: auto;
    padding: 0px;
  }

  li {
    float: left;
    width: 33%;
  }

  .icon {
    font-size: 1.8rem;
    line-height: 0.5rem;
    padding: 0px;
    margin: 10px;

    img {
      width: 80px;
      border-radius: 2px;
    }
  }
}

.hero-section {
  text-align: center;
  padding: 3rem 0px;

  .title {
    font-size: 1.6rem;
    font-weight: 700;
  }

  .description {
    font-size: 1.25rem;
    line-height: 1.3;
    color: #3b5998;
    font-weight: bold;
  }
}

@media (max-width: $MQMobile) {
  .home {
    .features {
      flex-direction: column;
    }

    .feature {
      max-width: 100%;
      padding: 0 2.5rem;
    }
  }
}

@media (max-width: $MQMobileNarrow) {
  .home {
    padding-left: 1.5rem;
    padding-right: 1.5rem;

    .footer-section li{
      width: 100% ;
      list-style: none;
    }

    .footer-page .container .col-md-3 {
      width: 100% ;
      margin-bottom: 20px;
    }

    .hero {
      background: none ;
      img {
        width: 100%;
        margin: 2rem auto 1.2rem;
      }

      h1 {
        font-size: 2rem;
      }

      h1, .description, .action {
        margin: 1.2rem auto;
      }

      .description {
        font-size: 1.2rem;
        color: #3b5998;
        font-weight: bold;
      }

      .action-button {
        font-size: 1rem;
        padding: 0.6rem 1.2rem;
      }
    }

    .feature {
      h2 {
        font-size: 1.25rem;
      }
    }
  }
}

.title-icon {
  font-size: 2.7rem;
  color: $accentColor;

  img {
    width: 45px;
  }
}

.td-box--primary {
    color: #fff;
    background-color: #3b5998 ;
    padding-top: 4rem;
    padding-bottom: 4rem;
    text-align: center!important;
    font-size: 1rem;
    font-weight: 400;

    .td-arrow-down{
      max-width: 1140px;
      margin: auto;
      font-size: 18px;
    }

    .td-box--primary:before {
        left: 50%;
        margin-left: -30px;
        bottom: -40px;
        border-style: solid;
        border-width: 25px 30px 0;
        border-color: #2ba3de transparent transparent transparent;
        z-index: 3;
        position: absolute;
        content: "";
    }

}

@media all and (max-width:719px) {

  .td-box--primary .td-arrow-down , .des , .description{
    padding: 0px 20px !important ;
    }

    .des{
     width: calc(100% - 50px) !important ;
      }

  .wb-zc-ybmod-brand-mod2-pc .module-wrap{
    min-width: auto !important ;
    width: 100% !important ;

    .col{
      width: 100% !important ;
      }

    .colli{
      width:calc(100% - 76px) !important ;
      margin-bottom: 10px !important ; 
      }
  }
 }

</style>
