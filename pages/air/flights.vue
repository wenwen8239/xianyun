<template>
  <div class="container">
    <el-row :gutter="24">
      <!-- 左边列表部分 -->
      <el-col class="flights-content" :span="18">
        <!-- 机票筛选 -->
        <FilterFlights/>
        <!-- 机票列表标题 -->
        <div class="filghts-title">
          <el-row type="flex" justify="space-between">
            <el-col>航空信息</el-col>
            <el-col>起飞时间</el-col>
            <el-col>到达时间</el-col>
            <el-col>价格</el-col>
          </el-row>
        </div>
        <!-- 机票列表 -->
        <FlightsItem v-for="(item,index) in dataList" :key="index" :data="item"/>
      </el-col>
      <!-- 右边服务与历史查询 -->
      <el-col class="aside" :span="6">
        <FlightsAside/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// 引入过滤筛选组件
import FilterFlights from '@/components/air/filterFlights'
// 引入侧边栏
import FlightsAside from '@/components/air/flightsAside'
// 引入机票列表
import FlightsItem from '@/components/air/flightsItem'
export default {
  // 注入组件
  components: {
    FilterFlights,
    FlightsAside,
    FlightsItem
  },
  data() {
    return {
      airport: '',
      // 航班总数据
      flightsData: {},
      // 航班列表数据
      dataList: []
    }
  },
  mounted () {
    this.$axios({
      url: '/airs',
      params: this.$route.query  // 获取路径传递的参数
    })
    .then(res => {
      console.log(res)
      this.flightsData = res.data
      this.dataList = res.data.flights
    })
    .catch(err => {
      console.log(err)
    })
  }
}
</script>

<style lang="less" scoped>
  .container {
    width: 1000px;
    margin: 20px auto;
    .filghts-title {
      height: 38px;
      line-height: 38px;
      text-align: center;
      font-size: 12px;
      margin: 20px 0;
      color: #666;
      background-color: #f6f6f6;
      border: 1px solid #ddd;
    }
  }
</style>


