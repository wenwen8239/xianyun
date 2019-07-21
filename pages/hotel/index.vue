<template>
    <!-- 酒店首页 -->
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
                <div class="scenics-box" :class={show:isshow}>
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
                <nuxt-link to="#" class="moreAera" :class={rotate:isrotate} @click.native="changeShow">
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
      <!-- 引入酒店条件筛选模块 -->
      <HotelListFilter/>
      <!-- 引入酒店列表模块 -->
      <HotelList v-for="(item,index) in dataList" :key="index" :data="item" v-loading="loading"/>
      <!-- 实现分页功能 -->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pageIndex"
        :page-sizes="[2, 4, 6, 8]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total">
      </el-pagination>
    </div>
</template>

<script>
import HotelSearch from '@/components/hotel/hotelSearch'
import HotelListFilter from '@/components/hotel/hotelListFilter'
import HotelList from '@/components/hotel/hotelList'
export default {
  components: {
    HotelSearch,
    HotelListFilter,
    HotelList
  },
  data() {
    return {
      // 区域显示与隐藏
      isshow: true,
      isrotate: true,
      // 页面数据
      hotelInfo: [],
      // 总条数
      total: 0,
      // 当前页码
      pageIndex: 1,
      // 页面显示条数
      pageSize: 2,
      loading: true
    }
  },
  computed: {
    // 实现分页
    dataList() {
      return this.hotelInfo.slice(
        (this.pageIndex - 1) * this.pageSize,
        this.pageIndex * this.pageSize
      );
    }
  },
  mounted() {
    // 设置默认的路由城市id
    this.$router.push('/hotel?city=199')
    setTimeout(() => {
      var id = parseInt(this.$route.query.city);
      console.log(id)
       this.$axios({
        url: `/hotels`,
        query: this.$route.query
      })
      .then(res => {
        const {data} = res.data
        console.log(data)
        // 设置酒店数据
        this.hotelInfo = data
        // 设置总条数
        this.total = data.length
      })
    },1)
    setTimeout(() => {
      this.loading = false
    },1000)
  },
  methods: {
    // 区域的显示与隐藏
    changeShow() {
      if (this.isshow === true && this.isrotate === true) {
        this.isshow = false
        this.isrotate = false
      }
      else {
        this.isshow = true
        this.isrotate = true
      }
    },
    // 实现页面分页
    setDateList() {
      // 获取当前页码数
      var pageIndex = (this.pageIndex - 1) * this.pageSize;
      // 获取页面条数
      var pageSize = pageIndex * this.pageSize;
      // 把分页赋值到显示到显示页面数组中
      this.dataList = this.hotelInfo.slice(pageIndex,this.pageIndex * this.pageSize)
    },
    // 切换页面显示条数
    handleSizeChange(val) {
      this.pageSize = val;
      this.pageIndex = 1;
    },
    // 切换当前页
    handleCurrentChange(val) {
      this.pageIndex = val;
    }
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
          a {
            padding: 0 2px;
            margin-right: 10px;
            &:hover {
              color: #409eff;
            }
          }
        }
        .show {
          max-height: 42px;
          overflow: hidden;
        }
        .rotate {
          i {
            transform: rotate(90deg)
          }
        }
        .el-icon-d-arrow-right {
          color: orange;
          transform: rotate(-90deg);
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
    .el-pagination {
      text-align: right;
      margin-top: 20px;
    }
  }
</style>
