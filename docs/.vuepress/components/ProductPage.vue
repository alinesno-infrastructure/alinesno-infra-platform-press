<template>
    <div class="crs-page-product-container">

        <div class="crs-page-header">
            <!-- <div class="crs-page-title">Google Cloud解决方案</div> -->
            <div class="crs-page-sub-title">利用基于 AI 技术并以行业需求为着眼点的产品和服务组合，解决您最棘手的业务难题。与销售人员</div>
        </div>

        <div class="crs-page-panel">
            <div class="crs-page-items-panel" v-for="item in 7" :key="item">
                <div class="crs-page-box">应用现代化改造</div>
                <div class="crs-page-box-desc">评估、规划、实施和衡量软件实践与功能，从而对贵组织的业务应用组合进行现代化改造和简化。</div>
                <div class="item-list-box">
                    <ul>
                        <li class="crs-page-item" v-for="i in 8" :key="i">
                            <div class="item-title">FinOps 和 GKE 优化</div>
                            <div class="item-desc">在 GKE 上运行可靠、高性能且经济实惠的应用的最佳实践。</div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    </div>
</template>

<style lang="stylus">
.crs-page-product-container {
    width: 100%;
    float: left;
    margin-bottom: 50px;

    .crs-page-header {
        padding: 10px 0px;
        margin-bottom: 30px;


    }
        .crs-page-title {
            font-size: 30px;
            font-weight: bold;
            margin-bottom: 20px;
        }

        .crs-page-items-panel {
            margin-bottom: 30px;
            float: left;
            width: 100%;
        }

        .crs-page-box {
            font-size: 30px;
            font-weight: bold;
            padding: 10px 0px;
        }

        .crs-page-box-desc {
            font-size: 14px;
            padding: 10px 0px;
            margin-bottom: 10px;
        }
        .item-list-box {
            float: left;
            width: 100%;

            ul {
                margin: 0px;
                padding: 0px;

                li.crs-page-item {
                    list-style: none;
                    float: left;
                    width: calc(33% - 80px);
                    padding: 24px;
                    box-shadow: 0 0 0 0 transparent;
                    border: 1px solid #dadce0;
                    border-radius: 8px;
                    margin-right: 20px;
                    margin-bottom: 20px;

                    .item-title {
                        color: #202124;
                        margin: 0;
                        word-wrap: normal;
                        font-size: 20px;
                        font-weight: 500;
                        letter-spacing: normal;
                        line-height: 28px;
                        margin-bottom: 10px;
                    }

                    .item-desc {
                        text-rendering: optimizeLegibility;
                        color: #5f6368;
                        font-size: 16px;
                        font-weight: 400;
                        letter-spacing: .1px;
                        line-height: 24px;
                    }
                }
            }
        }
}
</style>