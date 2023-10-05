<template>
  <div class="solution-container">
    <div class="solution-header-box">
      <div class="solution-header-title">行业解决方案</div>
      <div class="solution-header-sub-title">
        利用我们的 行业解决方案解决您的业务问题，从改进零售 商品发现解决方案到检测 银行欺诈，我们的行业解决方案可以应对您面临的最大挑战。
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
          {{ industry.name }}
        </div>
      </div>
      <div class="content-area">
        <div v-for="industry in industries" :key="industry.id">
          <div v-if="industry.id === activeId">
            <!-- <div v-html="htmlContents[industry.id]"></div> -->

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
                    <img  src="https://lh3.googleusercontent.com/xGJQ-HwIDNIESh2O3xnU6BLgHPPTShWkZIPT5KLnZcMeVeyswbbw_1-u3vQnGHvgF8G_PGBT0LOB" style="width: 40%;">
                  </picture> 
                  <span class="D0aEmf" style="line-height: 1.7rem;font-size: 15px;">
                    <div>
                      {{ htmlContents[industry.id].desc }}
                    </div>
                  </span>
                </span>
              </div>

              <div class="info-solution-text-link" >
                探索供应链与物流解决方案
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
        { id: '1', name: '零售' },
        { id: '2', name: '快速消费品' },
        { id: '3', name: '金融服务' },
        { id: '4', name: '医疗保健与生命科学' },
        { id: '5', name: '媒体和娱乐' },
        { id: '6', name: '游戏' },
        { id: '7', name: '制造业' },
        { id: '8', name: '供应链与物流' },
        { id: '9', name: '教育' },
      ],
      htmlContents: [
        // 这里放置每个行业对应的HTML内容，键为行业的id
        {id:'1' , name:'诸多大型政府机构选择和对依赖有加 AIP基设服务' ,  label:'探索供应链与物流解决方案' , desc:'J.B. Hunt 通过数据云产品提高了货运效率并围绕可用容量做出明智的决策。 探索我们的供应链与物流解决方案能带来怎样的改变。' , img:'https://lh3.googleusercontent.com/tOKcHvOWHRjheif1tICHjYBs-TNJv-7f38rmkN7XHjM50jMdvmGluBEl9wn-btFSnvhfON_gC2QX=rw' },
        {id:'2' , name:'诸多生物技术和制药公司对 AIP基设服务 信赖有加' ,  label:'探索供应链与物流解决方案' , desc:'J.B. Hunt 通过数据云产品提高了货运效率并围绕可用容量做出明智的决策。 探索我们的供应链与物流解决方案能带来怎样的改变。' , img:'https://lh3.googleusercontent.com/kIs4wRUAS_doZpi9cJE0Kn4vwR1yzcOHPzGX9ElAzCSLsNA52Es0Kb4oLUMFw-1intMQelINWuja6w=rw' },
        {id:'3' , name:'诸多大型供应链与物流公司选择 AIP基设服务' ,  label:'探索供应链与物流解决方案' , desc:'J.B. Hunt 通过数据云产品提高了货运效率并围绕可用容量做出明智的决策。 探索我们的供应链与物流解决方案能带来怎样的改变。' , img:'https://lh3.googleusercontent.com/7BqAVxgngPLyjlUG3deE1o3KVB85hINoiLEeDmE2JW3MdJfF8T54XZQeOu7iA8ORV7Vz6rn3dWs2' },
        {id:'4' , name:'诸多大型供应链与物流公司选择 AIP基设服务' ,  label:'探索供应链与物流解决方案' , desc:'J.B. Hunt 通过数据云产品提高了货运效率并围绕可用容量做出明智的决策。 探索我们的供应链与物流解决方案能带来怎样的改变。' , img:'https://lh3.googleusercontent.com/7BqAVxgngPLyjlUG3deE1o3KVB85hINoiLEeDmE2JW3MdJfF8T54XZQeOu7iA8ORV7Vz6rn3dWs2' },
        {id:'5' , name:'诸多大型政府机构选择和对依赖有加  AIP基设服务' ,  label:'探索供应链与物流解决方案' , desc:'J.B. Hunt 通过数据云产品提高了货运效率并围绕可用容量做出明智的决策。 探索我们的供应链与物流解决方案能带来怎样的改变。' , img:'https://lh3.googleusercontent.com/kIs4wRUAS_doZpi9cJE0Kn4vwR1yzcOHPzGX9ElAzCSLsNA52Es0Kb4oLUMFw-1intMQelINWuja6w=rw' },
        {id:'6' , name:'诸多生物技术和制药公司对 AIP基设服务 信赖有加' ,  label:'探索供应链与物流解决方案' , desc:'J.B. Hunt 通过数据云产品提高了货运效率并围绕可用容量做出明智的决策。 探索我们的供应链与物流解决方案能带来怎样的改变。' , img:'https://lh3.googleusercontent.com/tOKcHvOWHRjheif1tICHjYBs-TNJv-7f38rmkN7XHjM50jMdvmGluBEl9wn-btFSnvhfON_gC2QX=rw' },
        {id:'7' , name:'诸多大型供应链与物流公司选择 AIP基设服务' ,  label:'探索供应链与物流解决方案' , desc:'J.B. Hunt 通过数据云产品提高了货运效率并围绕可用容量做出明智的决策。 探索我们的供应链与物流解决方案能带来怎样的改变。' , img:'https://lh3.googleusercontent.com/7BqAVxgngPLyjlUG3deE1o3KVB85hINoiLEeDmE2JW3MdJfF8T54XZQeOu7iA8ORV7Vz6rn3dWs2' },
        {id:'8' , name:'诸多大型政府机构选择和对依赖有加  AIP基设服务' ,  label:'探索供应链与物流解决方案' , desc:'J.B. Hunt 通过数据云产品提高了货运效率并围绕可用容量做出明智的决策。 探索我们的供应链与物流解决方案能带来怎样的改变。' , img:'https://lh3.googleusercontent.com/kIs4wRUAS_doZpi9cJE0Kn4vwR1yzcOHPzGX9ElAzCSLsNA52Es0Kb4oLUMFw-1intMQelINWuja6w=rw' },
        {id:'9' , name:'诸多大型供应链与物流公司选择 AIP基设服务' ,  label:'探索供应链与物流解决方案' , desc:'J.B. Hunt 通过数据云产品提高了货运效率并围绕可用容量做出明智的决策。 探索我们的供应链与物流解决方案能带来怎样的改变。' , img:'https://lh3.googleusercontent.com/tOKcHvOWHRjheif1tICHjYBs-TNJv-7f38rmkN7XHjM50jMdvmGluBEl9wn-btFSnvhfON_gC2QX=rw' },
      ],
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
    border-radius: 8px;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 24px;
    float: left;
    width: 40%;
    padding: 43px 20px;
    margin-right: 10px;
}

.tabpanel{
  border: 1px solid #dadce0;
    border-radius: 12px;
    padding: 10px ; 
    transition: border .28s,box-shadow .28s;
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
  border-radius: 10px;
}

.industry-item:hover {
  background-color: #f5fafe;
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
