<template>
    <div class="container">
      <!-- 头部搜索组件 -->
      <HotelSearch/>
      <!-- 酒店介绍模块 -->
      <div class="hotel-option">
        <el-row type="flex">
          <el-col :span="14">
            <!-- 区域 -->
            <el-row type="flex">
              <el-col :span="3">区域：</el-col>
              <el-col :span="21">
                <div class="scenics-box">
                  <nuxt-link to="#">全部</nuxt-link>
                  <nuxt-link to="#">镇兴路沿线</nuxt-link>
                  <nuxt-link to="#">镇兴路沿线</nuxt-link>
                  <nuxt-link to="#">镇兴路沿线</nuxt-link>
                  <nuxt-link to="#">镇兴路沿线</nuxt-link>
                  <nuxt-link to="#">镇兴路沿线</nuxt-link>
                  <nuxt-link to="#">镇兴路沿线</nuxt-link>
                  <nuxt-link to="#">镇兴路沿线</nuxt-link>
                  <nuxt-link to="#">镇兴路沿线</nuxt-link>
                  <nuxt-link to="#">镇兴路沿线</nuxt-link>
                  <nuxt-link to="#">镇兴路沿线</nuxt-link>
                  <nuxt-link to="#">镇兴路沿线</nuxt-link>
                  <nuxt-link to="#">镇兴路沿线</nuxt-link>
                </div>
                <nuxt-link to="#">
                  <i class="el-icon-d-arrow-right"></i>
                  <span>等43个区域</span>
                </nuxt-link>
              </el-col>
            </el-row>
            <!-- 攻略 -->
            <el-row type="flex">
              <el-col :span="3">攻略：</el-col>
              <el-col :span="21">北京，你想要的都能在这找到。博古通今，兼容并蓄，天下一城，如是帝都。 景点以故宫为中心向四处辐射；地铁便宜通畅，而且覆盖绝大多数景点。 由于早上有天安门升旗仪式，所以大多数人选择在天安门附近住宿。</el-col>
            </el-row>
            <!-- 均价 -->
            <el-row type="flex">
              <el-col :span="3" class="avgPrice">均价&nbsp;&nbsp;&nbsp;&nbsp;：<sup class="question-mark">?</sup></el-col>
              <el-col :span="21">
                <el-row type="flex">
                  <el-tooltip content="等级评定是针对房价，设施和服务等各方面水平的综合评估。" placement="bottom">
                    <div>
                      <i class="iconfont iconhuangguan"></i>
                      <i class="iconfont iconhuangguan"></i>
                      <i class="iconfont iconhuangguan"></i>
                      <span class="price-budget">￥332</span>
                    </div>
                  </el-tooltip>
                  <el-tooltip content="等级评定是针对房价，设施和服务等各方面水平的综合评估。" placement="bottom">
                    <div>
                      <i class="iconfont iconhuangguan"></i>
                      <i class="iconfont iconhuangguan"></i>
                      <i class="iconfont iconhuangguan"></i>
                      <i class="iconfont iconhuangguan"></i>
                      <span class="price-budget">￥521</span>
                    </div>
                  </el-tooltip>
                  <el-tooltip content="等级评定是针对房价，设施和服务等各方面水平的综合评估。" placement="bottom">
                    <div>
                      <i class="iconfont iconhuangguan"></i>
                      <i class="iconfont iconhuangguan"></i>
                      <i class="iconfont iconhuangguan"></i>
                      <i class="iconfont iconhuangguan"></i>
                      <i class="iconfont iconhuangguan"></i>
                      <span class="price-budget">￥768</span>
                    </div>
                  </el-tooltip>
                </el-row>
              </el-col>
            </el-row>
          </el-col>
          <el-col :span="10">
            <div class="map-box"></div>
          </el-col>
        </el-row>
      </div>
      <!-- 酒店条件筛选模块 -->
      <HotelListFilter/>
    </div>
</template>

<script>
import HotelSearch from '@/components/hotel/hotelSearch'
import HotelListFilter from '@/components/hotel/hotelListFilter'
export default {
  components: {
    HotelSearch,
    HotelListFilter
  }
}
</script>

<style lang="less" scoped>
  .container {
    width: 1000px;
    margin: 20px auto;
    .hotel-option {
      font-size: 14px;
      color: #666;
      margin-top: 20px;
      .el-row {
        margin-bottom: 20px;
        .scenics-box {
          max-height: 42px;
          overflow: hidden;
          a {
            padding: 0 2px;
            margin-right: 10px;
          }
        }
        .el-icon-d-arrow-right {
          color: orange;
          transform: rotate(90deg);
        }
        // 均价
        .avgPrice {
          position: relative;
          .question-mark {
            display: block;
            width: 14px;
            height: 14px;
            line-height: 14px;
            text-align: center;
            color: #fff;
            background-color: #ccc;
            border-radius: 50%;
            float: right;
            position: absolute;
            right: 28px;
            top: 0;
          }
        }
        // 文字提示
        .el-tooltip {
          margin-right:35px;
          .iconhuangguan {
            color: orange;
          }
        }
        // 地图
        .map-box {
          width: 420px;
          height: 260px;
          margin-left: 20px;
          border: 1px solid #000;
        }
      }
    }
  }
</style>
