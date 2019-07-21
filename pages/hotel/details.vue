<template>
  <div class="details">
    <!-- 面包屑导航 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/hotel' }">酒店</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/hotel' }">南京酒店</el-breadcrumb-item>
      <el-breadcrumb-item>协春园旅馆(南京禄口机场店)</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 酒店信息 -->
    <div class="name-info">
        <h2 class="title">好来阁商务宾馆
          <span>
            <i class="iconfont iconhuangguan"></i>
            <i class="iconfont iconhuangguan"></i>
            <i class="iconfont iconhuangguan"></i>
            <i class="iconfont iconhuangguan"></i>
            <i class="iconfont iconhuangguan"></i>
          </span>
        </h2>
        <div class="title-en">hao lai ge shang wu hotel</div>
        <div class="address">
          <i class="iconfont iconlocation"></i>
          <span>高淳县淳溪镇镇兴路118号(高淳县委党校对面)</span>
        </div>
    </div>
    <!-- 酒店图片 -->
    <div class="pic-info">
      <el-row type="flex">
        <el-col :span="16" class="pic-left">
          <img src="http://qcloud.dpfile.com/pc/wQ2ejOSmhB4OoEq1LYPHp_2RhNciyW026YiQFr_EEZsQrI_ZB6abZPwgKDOmI03U3dWYFEM5hoslgWXTJDjSPA.jpg" alt="">
        </el-col>
        <el-col :span="10" class="pic-right" align="right">
          <el-row type="flex">
            <el-col :span="12">
              <img src="http://qcloud.dpfile.com/pc/wQ2ejOSmhB4OoEq1LYPHp_2RhNciyW026YiQFr_EEZsQrI_ZB6abZPwgKDOmI03U3dWYFEM5hoslgWXTJDjSPA.jpg" alt="">
            </el-col>
            <el-col :span="12">
              <img src="http://qcloud.dpfile.com/pc/wQ2ejOSmhB4OoEq1LYPHp_2RhNciyW026YiQFr_EEZsQrI_ZB6abZPwgKDOmI03U3dWYFEM5hoslgWXTJDjSPA.jpg" alt="">
            </el-col>
          </el-row>
          <el-row type="flex">
            <el-col :span="12">
              <img src="http://qcloud.dpfile.com/pc/wQ2ejOSmhB4OoEq1LYPHp_2RhNciyW026YiQFr_EEZsQrI_ZB6abZPwgKDOmI03U3dWYFEM5hoslgWXTJDjSPA.jpg" alt="">
            </el-col>
            <el-col :span="12">
              <img src="http://qcloud.dpfile.com/pc/wQ2ejOSmhB4OoEq1LYPHp_2RhNciyW026YiQFr_EEZsQrI_ZB6abZPwgKDOmI03U3dWYFEM5hoslgWXTJDjSPA.jpg" alt="">
            </el-col>
          </el-row>
          <el-row type="flex">
            <el-col :span="12">
              <img src="http://qcloud.dpfile.com/pc/wQ2ejOSmhB4OoEq1LYPHp_2RhNciyW026YiQFr_EEZsQrI_ZB6abZPwgKDOmI03U3dWYFEM5hoslgWXTJDjSPA.jpg" alt="">
            </el-col>
            <el-col :span="12">
              <img src="http://qcloud.dpfile.com/pc/wQ2ejOSmhB4OoEq1LYPHp_2RhNciyW026YiQFr_EEZsQrI_ZB6abZPwgKDOmI03U3dWYFEM5hoslgWXTJDjSPA.jpg" alt="">
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
    <!-- 价格来源 -->
    <div class="price-from">
      <div class="title">
        <el-row>
          <el-col :span="10">价格来源</el-col>
          <el-col :span="10">低价房型</el-col>
          <el-col :span="4">最低价格/每晚</el-col>
        </el-row>
      </div>
      <div class="list" v-for="(item,index) in priceInfo" :key="index">
        <el-row>
          <el-col :span="10">{{item.from}}</el-col>
          <el-col :span="10">{{item.house}}</el-col>
          <el-col :span="4"><span>￥{{item.price}}</span>起<i class="el-icon-arrow-right height-light"></i></el-col>
        </el-row>
      </div>
    </div>
    <!-- 地图 -->
    <div class="map"></div>
    <!-- 服务 -->
    <div class="serve">
      <!-- 基本信息 -->
      <el-row type="flex">
        <el-col :span="4">基本信息</el-col>
        <el-col :span="20">
          <el-row type="flex" justify="space-between">
            <span>入住时间: 14:00之后</span>
            <span>离店时间: 12:00之前</span>
            <span>2011年开业 / 2011年装修</span>
            <span>酒店规模: 63间客房</span>
          </el-row>
        </el-col>
      </el-row>
      <!-- 主要设施 -->
      <el-row type="flex">
        <el-col :span="4">主要设施</el-col>
        <el-col :span="20"><span>wifi</span></el-col>
      </el-row>
      <!-- 停车服务 -->
      <el-row type="flex">
        <el-col :span="4">停车服务</el-col>
        <el-col :span="20">免费;提供免费停车位;酒店停车场，免费</el-col>
      </el-row>
      <!-- 品牌信息 -->
      <el-row type="flex">
        <el-col :span="4">品牌信息</el-col>
        <el-col :span="20">希尔顿</el-col>
      </el-row>
    </div>
    <!-- 用户评论 -->
    <HotelComment/>
  </div>
</template>

<script>
import HotelComment from '@/components/hotel/hotelComment'
export default {
  components:{
    HotelComment
  },
  data() {
    return {
      priceInfo: [
        {from: '携程',house: '高级大床房',price: '37'},
        {from: '携程',house: '高级大床房',price: '37'},
        {from: '携程',house: '高级大床房',price: '37'}
      ]
    }
  },
  mounted() {
    this.$route
  }
}
</script>

<style lang="less" scoped>
  .details {
    width: 1000px;
    margin: 0 auto;
    .el-breadcrumb {
      margin: 15px 0;
    }
    .name-info {
      h2 {
        font-size: 24px;
        color: #333;
        font-weight: normal;
        i {
          color: orange;
        }
      }
      .title-en {
        font-size: 14px;
        color: #666;
        margin: 5px 0;
      }
      .address {
        font-size: 14px;
        color: #666;
        i {
          color: #4196ff;
        }
      }
    }
    .pic-info {
      margin: 40px 0;
      height: 370px;
      .pic-left {
        img {
          width: 640px;
          height: 360px;
        }
      }
      .pic-right {
        img {
          width: 160px;
          height: 110px;
          margin-bottom: 10px;
        }
      }
    }
    .price-from {
      .title {
        height: 47px;
        line-height: 47px;
        color: #909399;
        font-weight: 700;
        font-size: 14px;
        border-bottom: 1px solid #ebeef5;
      }
      .list {
        .el-col {
          color: #606266;
          font-size: 14px;
          height: 49px;
          line-height: 49px;
          border-bottom: 1px solid #ebeef5;
        }
        span {
          color: orange;
          font-size: 16px;
          margin-right: 10px;
        }
        i {
          color: orange;
          margin-left: 10px;
        }
        &:hover {
          background-color: #f5f7fa;
        }
      }
    }
    .map {
      height: 360px;
      margin: 40px 0;
      border: 1px solid #000;
    }
    .serve {
      margin-bottom: 40px;
      > .el-row {
        font-size: 14px;
        color: #666;
        > .el-col {
          padding: 20px 10px;
          border-bottom: 1px solid #ebeef5;
          &:first-child {
            color: #000;
          }
        }
        &:nth-child(2) {
          span {
            border-radius: 4px;
            padding: 4px 10px;
            background-color: #eee;
          }
        }
      }
    }
  }
</style>


