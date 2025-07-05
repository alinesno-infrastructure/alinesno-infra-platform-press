<template>
  <section id="docs" class="docs-section">
    <div class="container">
      <div class="header">
        <h2>文档中心</h2>
        <p class="subtitle">详细的文档帮助你快速上手和深入了解 AIP智能体</p>
      </div>
      
      <div class="cards-container">
        <!-- Doc Card 1 -->
        <div class="doc-card">
          <div class="card-image">
            <i class="fas fa-swatchbook"></i>
          </div>
          <div class="card-content">
            <h3>快速开始</h3>
            <p class="card-description">了解如何安装和配置，快速搭建你的内容管理系统。</p>
            <a href="#" class="card-link">
              查看文档 <i class="fa fa-angle-right"></i>
            </a>
          </div>
        </div>
        
        <!-- Doc Card 2 -->
        <div class="doc-card">
          <div class="card-image">
            <i class="fa fa-cogs"></i>
          </div>
          <div class="card-content">
            <h3>管理员指南</h3>
            <p class="card-description">学习如何管理用户、设置权限、配置系统和维护内容。</p>
            <a href="#" class="card-link">
              查看文档 <i class="fa fa-angle-right"></i>
            </a>
          </div>
        </div>
        
        <!-- Doc Card 3 -->
        <div class="doc-card">
          <div class="card-image">
            <i class="fas fa-file-signature"></i>
          </div>
          <div class="card-content">
            <h3>内容创作者指南</h3>
            <p class="card-description">掌握内容创作、编辑和发布的最佳实践和技巧。</p>
            <a href="#" class="card-link">
              查看文档 <i class="fa fa-angle-right"></i>
            </a>
          </div>
        </div>
        
        <!-- Doc Card 4 -->
        <div class="doc-card">
          <div class="card-image">
            <i class="fa fa-code"></i>
          </div>
          <div class="card-content">
            <h3>开发者文档</h3>
            <p class="card-description">深入了解系统架构、API接口和插件开发，定制你的内容管理系统。</p>
            <a href="#" class="card-link">
              查看文档 <i class="fa fa-angle-right"></i>
            </a>
          </div>
        </div>
      </div>
      
      <div class="help-container">
        <div class="help-content">
          <h3>需要更详细的帮助？</h3>
          <p>我们的社区随时准备为你提供支持。加入我们的讨论组，与其他开发者和用户交流经验和解决问题。</p>
        </div>
        <div class="help-action">
          <a href="#community" class="help-button">
            <i class="fa fa-comments"></i> 加入社区
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'DocsSection'
}
</script>

<style scoped>
.docs-section {
  background-color: #fff;
  float: left;
  width: 100%;
  padding-top:80px;
  padding-bottom: 80px;
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}

.header {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 64px;
}

.header h2 {
  font-size: clamp(1rem, 2vw, 2rem);
  font-weight: bold;
  color: #343a40;
  margin-bottom: 16px;
  border-bottom: 0px;
}

.subtitle {
  color: #6c757d;
  font-size: 1.125rem;
}

.cards-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
  margin-bottom: 48px;
}

.doc-card {
  background: #f8f9fa;
  overflow: hidden;
  /* box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); */
  /* border-radius: 12px; */
  transition: box-shadow 0.3s ease;

  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.12);
  border: 1px solid #e4e7ed;
  border-radius: 10px;
}

.doc-card:hover {
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}

.card-image {
  height: 192px;
  background-color: rgba(0, 123, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-image i {
  color: #1d75b0;
  font-size: 3.75rem;
}

.card-content {
  padding: 24px;
}

.card-content h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 8px;
}

.card-description {
  color: #6c757d;
  margin-bottom: 16px;
}

.card-link {
  color: #1d75b0;
  font-weight: 500;
  text-decoration: none;
}

.card-link:hover {
  text-decoration: underline;
}

.card-link i {
  margin-left: 4px;
}

.help-container {
  background: #f8f9fa;
  border-radius: 12px;
  padding: 32px;
  margin-top: 48px;
  display: flex;
  flex-direction: column;
}

.help-content {
  margin-bottom: 24px;
}

.help-content h3 {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 16px;
}

.help-content p {
  color: #6c757d;
}

.help-action {
  display: flex;
  justify-content: center;
}

.help-button {
  display: inline-flex;
  align-items: center;
  padding: 12px 24px;
  background-color: #1d75b0;
  color: white;
  border-radius: 9999px;
  text-decoration: none;
  transition: all 0.3s ease;
}

.help-button:hover {
  background-color: rgba(0, 123, 255, 0.9);
  transform: scale(1.05);
}

.help-button i {
  margin-right: 8px;
}

@media (min-width: 768px) {
  .help-container {
    flex-direction: row;
    align-items: center;
  }
  
  .help-content {
    width: 66.666%;
    margin-bottom: 0;
    padding-right: 32px;
  }
  
  .help-action {
    width: 33.333%;
    justify-content: flex-end;
  }
  
  .cards-container {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>