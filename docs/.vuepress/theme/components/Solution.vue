<template>
  <div class="solution-container">
    <div class="solution-header-box">
      <div class="solution-header-title">全面的产品体系</div>
      <div class="solution-header-sub-title">
        在提升工作效率、促进团队合作、加速业务自动化、简化系统集成、保障信息安全以及推动技<br/>
        术交流等方面的具体价值，为用户提供了一个全面了解智能体协作技术和应用的窗口。
      </div>
    </div>
    <div class="solution-box">
      <div class="industry-list">
        <div 
          v-for="industry in industries" 
          :key="industry.id" 
          @click="activeId = industry.id" 
          :class="{ active: activeId === industry.id }"
          class="industry-item"
        >
        <i :class="industry.icon" style="font-size: 20px;margin-right:5px;color: rgb(211, 50, 51);"></i>
         {{ industry.name }}
        </div>
      </div>
      <div class="content-area">
        <div v-for="industry in industries" :key="industry.id">
          <div v-if="industry.id === activeId">

            <div class="tabpanel">
              <div class="solution-case-img">
                <img alt="" style="width:100%" :src="htmlContents[industry.id].img" > 
              </div>
              <div class="solution-case-info">

                <span class="info-text">
                  <div class="GOsz5b MyvX5d">{{ htmlContents[industry.id].name }}</div>
                </span> 

                <span class="info-img">
                  <picture class="D0Blhe">
                  </picture> 
                  <span class="D0aEmf" style="line-height: 1.7rem;font-size: 15px;">
                    <div>
                      {{ htmlContents[industry.id].desc }}
                    </div>
                  </span>
                </span>
              </div>

              <div class="info-solution-text-link" >
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeId: '1',
      industries: [
          { id: '1', name: '单智能体模式沟通', icon: 'fa-solid fa-signature' },
          { id: '2', name: '频道内多智能体协作', icon: 'fa-solid fa-users-gear' },
          { id: '8', name: '自定义多场景协作平台', icon: 'fa-solid fa-layer-group' },
          { id: '5', name: '自由智能体共享和交换', icon: 'fa-solid fa-share-nodes' },
          { id: '6', name: '智能体感知数据治理', icon: 'fa-solid fa-database' },
          { id: '7', name: '跨行业智能体团队', icon: 'fa-solid fa-building-columns' },
          { id: '3', name: '自定义智能体工具', icon: 'fa-solid fa-wrench' },
          { id: '4', name: '灵活的业务对接编码', icon: 'fa-solid fa-code' },
          { id: '9', name: '其它', icon: 'fa-solid fa-ellipsis' }
      ],
      htmlContents: [
          { id: '1', name: '单智能体协作提升工作效率', label: '单智能体协作', desc: '专注于优化单一智能体的任务处理能力，帮助企业更高效地完成任务并提升整体业务流程效率。', img: '/product/1.png' },
          { id: '2', name: '频道内多智能体协作增强团队合作', label: '频道内多智能体协作', desc: '通过创建安全高效的协作环境，支持多个智能体在同一频道内的互动与合作，提高团队协作效果。', img: '/product/1.png' },
          { id: '3', name: '自定义智能体工具加速业务自动化', label: '自定义智能体工具', desc: '开发符合特定业务需求的智能体工具，实现业务流程的自动化，从而提高工作效率和准确性。', img: '/product/2.png' },
          { id: '4', name: '灵活对接编码简化系统集成', label: '灵活的业务对接编码', desc: '提供灵活的编码标准，简化智能体与其他系统的集成，加快部署速度，降低集成复杂度。', img: '/product/3.png' },
          { id: '5', name: '自由共享交换平台促进资源利用', label: '自由智能体共享和交换', desc: '建立开放平台，促进智能体资源的共享与交换，推动不同组织之间的技术交流与合作。', img: '/product/4.png' },
          { id: '6', name: '智能体感知数据治理保障信息安全', label: '智能体感知数据治理', desc: '利用先进的数据分析工具和技术，确保智能体收集的数据的安全性和隐私性，维护企业信息安全。', img: '/product/5.png' },
          { id: '7', name: '跨行业智能体团队实现无缝协作', label: '跨行业智能体团队', desc: '跨越传统行业界限，组建由不同背景的智能体组成的团队，实现前所未有的协作可能性。', img: '/product/6.png' },
          { id: '8', name: '多场景协作平台满足多样化需求', label: '自定义多场景协作平台', desc: '根据不同业务场景的需求，提供定制化的智能体协作方案，适应各种复杂的工作流程。', img: '/product/7.png' },
          { id: '9', name: '探索智能体协作的新领域', label: '其它', desc: '除了上述领域，我们还在不断探索智能体协作的新应用场景，致力于为客户提供更多创新解决方案。', img: '/product/8.png' }
      ]
    };
  },
};
</script>

<!-- CSS部分保持不变 -->
<style scoped>
.solution-container {
  float: left;
  width: 100%;
  margin-bottom: 50px;
}

.info-solution-text-link{
    font-size: 14px;
    font-weight: 500;
    letter-spacing: normal;
    line-height: 20px;
    color: rgb(59, 89, 152);
    margin: 8px 0px;
    text-align: center;
    margin-top: 20px;
}

.info-text {
    align-items: flex-start;
    background: rgb(32,33,36);
    border-radius: 5px;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 24px;
    float: left;
    width: 40%;
    padding: 28px 20px;
    margin-right: 10px;
}

.tabpanel{
      border: 1px solid #dadce0;
    border-radius: 12px;
    padding: 10px ; 
    transition: border .28s,box-shadow .28s;
    box-shadow: 0px 0px 12px rgba(0,0,0,0.12) ;
}

.industry-list {
  width: 30%;
  padding: 20px;
  overflow-y: auto;
  float:left ;
}

.solution-box{
  width: 1200px;
  margin: auto;
  margin-bottom: 30px;
  margin-top: 30px;
}

.solution-header-box {
    text-align: center;
    margin: auto;
    padding: 30px;
}

.solution-header-title {
    width: 1200px;
    margin: auto;
    font-size: 30px;
    padding: 20px;
    font-weight: bold;
}

.solution-header-sub-title {
    width: 1200px;
    margin: auto;
    line-height: 2rem;
}

.solution-case-img {
  background: #eaeaea;
  border-radius: 8px;
  grid-column-end: span 12;
  height: 300px;
  overflow: hidden;
  position: relative;
  display: block;
  width: 100%;
}

.industry-item {
  padding: 10px;
  cursor: pointer;
  font-size: 15px;
  margin-bottom: 5px;
  border-radius: 5px;
}

.industry-item:hover {
  background-color: #fafafa;
}

.industry-item.active {
  color: rgb(23,78,166);
  font-weight: bold;
  background-color: rgb(232,240,254);
}

.content-area {
  width: calc(70% - 80px);
  padding: 20px;
  overflow-y: auto;
  float:left ;
}

.solution-case-info {
    margin-top: 30px;
}

.info-img {
  align-items: flex-start;
  background: rgb(248, 249, 250);
  border-radius: 8px;
  color: rgb(34, 34, 34);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px 20px;
}

</style>
