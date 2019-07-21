<template>
  <!-- 酒店首页列表组件 -->
  <div class="hotel-list">
    <el-row type="flex" justify="space-between">
      <!-- 左边图片 -->
      <el-col :span="8" class="hotel-img">
        <nuxt-link to="#">
          <img :src="data.photos" alt="">
        </nuxt-link>
      </el-col>
      <!-- 中间酒店信息 -->
      <el-col :span="10" class="hotel-intro">
        <!-- 标题 -->
        <nuxt-link :to="{ path: `/hotel/details?${data.id}` }"><h2>{{data.name}}</h2></nuxt-link>
        <!-- 酒店英文名 -->
        <div class="hotel-en-name">
          <span>{{data.alias}}</span>
          <span>
            <i class="iconfont iconhuangguan"></i>
            <i class="iconfont iconhuangguan"></i>
            <i class="iconfont iconhuangguan"></i>
          </span>
          <span>{{data.hoteltype.name}}</span>
        </div>
        <el-row type="flex" justify="space-between" class="mark">
          <!-- 评分 -->
          <el-col :span="10">
            <el-rate
              :value="data.stars"
              disabled
              show-score
              text-color="#ff9900"
              score-template="{value}分"
              >
            </el-rate>
          </el-col>
          <!-- 评价 -->
          <el-col :span="7">
            <span>{{data.all_remarks}}</span>条评论
          </el-col>
          <!-- 游记 -->
          <el-col :span="7">
            <span>80</span>篇游记
          </el-col>
        </el-row>
        <!-- 定位 -->
        <div class="location">
          <i class="iconfont iconlocation"></i>
          <span>位于: {{data.address}}</span>
        </div>
      </el-col>
      <!-- 右边酒店价格 -->
      <el-col :span="6" class="hotel-price">
        <nuxt-link to="#">
          <el-row type="flex" v-for="(hotel,index) in data.products" :key="index">
            <el-col :span="12">
              <div>{{hotel.name}}</div>
            </el-col>
            <el-col :span="12">
              <div><span>￥{{hotel.price}}</span>起<i class="el-icon-arrow-right"></i></div>
            </el-col>
          </el-row>
        </nuxt-link>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: {}
    }
  },
  data() {
    return {
    }
  },
  mounted() {

  },
  methods: {

  }
}
</script>

<style lang="less" scoped>
  .hotel-list {
    > .el-row {
      padding: 25px 0;
      border-bottom: 1px solid #eee;
      .hotel-img {
        margin-right: 20px;
        img {
          width: 320px;
          height: 210px;
        }
      }
      .hotel-intro {
        h2 {
          font-weight: normal;
        }
        .hotel-en-name {
          color: #999;
          i {
            color: orange;
          }
        }
        .mark {
          margin: 10px 0;
          span {
            color: orange;
            margin-right: 10px;
          }
        }
        .location {
          font-size: 14px;
          color: #999;
          i {
            color: #409eff;
          }
        }
      }
      .hotel-price {
        margin-left: 20px;
        /deep/ .el-row {
          font-size: 14px;
          height: 47px;
          line-height: 47px;
          color: #606266;
          border-bottom: 1px solid #ebeef5;
          padding-left: 15px;
          &:hover {
            background-color: #f5f7fa;
          }
          span {
            color: orange;
            font-size: 16px;
            margin-right: 10px;
          }
        }
      }
    }
  }
</style>
