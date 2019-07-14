<template>
    <section>
      <!-- 标题 -->
      <h2 class="air-title">
        <i class="iconfont iconfeiji"></i>
        <span>国内机票</span>
      </h2>
      <!-- 搜索模块 -->
      <el-row type="flex" justify="space-between">
        <SearchForm></SearchForm>
        <!-- banner广告 -->
        <div class="banner">
          <img src="http://157.122.54.189:9093/images/pic_sale.jpeg" alt="">
        </div>
      </el-row>
      <!-- 服务 -->
      <el-row type="flex" class="statement">
        <el-col :span="8" style="border-right: 1px solid #ddd;">
          <i class="iconfont iconweibiaoti-_huabanfuben" style="color: rgb(64, 158, 255);"></i>
          <span>100%航协认证</span>
        </el-col>
        <el-col :span="8" style="border-right: 1px solid #ddd;">
          <i class="iconfont iconbaozheng" style="color: green;"></i>
          <span>出行保证</span>
        </el-col>
        <el-col :span="8">
          <i class="iconfont icondianhua" style="color: rgb(64, 158, 255);"></i>
          <span>7x24小时服务</span>
        </el-col>
      </el-row>
      <!-- 特价机票 -->
      <h2 class="air-sale-title">
        <i class="iconfont icontejiajipiao"></i>
        <span>特价机票</span>
      </h2>
      <div class="air-sale">
        <el-row type="flex" justify="space-between">
          <el-col v-for="(item,index) in sales" :key="index" :span="6">
            <nuxt-link :to="`/air/flights?departCity=${item.departCity}&departCode=${item.departCode}&destCity=${item.destCity}&destCode=${item.destCode}&departDate=${item.departDate}`">
              <img :src="sales.cover" alt="">
              <el-row type="flex" class="layer-bar">
                <span>{{sales.departCity}}-{{sales.destCity}}</span>
                <span>{{sales.price}}</span>
              </el-row>
            </nuxt-link>
          </el-col>
        </el-row>
      </div>
    </section>
</template>

<script>
// 引入搜索模块组件
import SearchForm from '@/components/air/searchForm'
export default {
  // 注册组件
  components: {
    SearchForm
  },
  data() {
    return {
      // 特价机票
      sales: []
    }
  },
  mounted () {
    // 获取特价机票
    this.$axios({
      url: '/airs/sale'
    })
    .then(res => {
      console.log(res)
      this.sales = res.data.data;
      // var data = res.data.data;
      // data.forEach(e => {
      //   console.log(e)
      //   this.sales = e
      // })
    })
    .catch(err => {
      console.log(err)
    })
  },
  methods: {

  }
}
</script>

<style lang="less" scoped>
  section {
    width: 1000px;
    margin: 0 auto;
    h2 {
      font-size: 20px;
      font-weight: normal;
      margin: 15px 0;
      &.air-title {
        color: orange;
      }
    }
    .statement {
      text-align: center;
      background-color: #f5f5f5;
      border: 1px solid #ddd;
      margin: 15px 0;
      /deep/ .el-col {
        height: 38px;
        line-height: 38px;
        margin: 10px 0;
      }
      i {
        font-size: 30px;
        vertical-align: middle;
      }
    }
    .air-sale-title {
      color: #409eff;
    }
    .air-sale {
      border: 1px solid #ddd;
      padding: 20px;
      margin-bottom: 50px;
      img {
        width: 100%;
      }
      /deep/ .el-col {
        width: 225px;
        height: 140px;
        overflow: hidden;
        position: relative;
        border: 1px solid #000;
        .layer-bar {
          position: absolute;
          bottom: 0;
          left: 0;
          span {

          }
        }
      }
    }
  }
</style>

