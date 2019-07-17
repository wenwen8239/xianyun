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
        <!-- 分页 -->
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="pageIndex"
          :page-sizes="[5, 10, 15, 20]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total">
        </el-pagination>
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
      flightsData: {
        // 航班列表数据
        flights: []
      },
      // 负责渲染页面数据数组
      // dataList: [],
      // 当前页码
      pageIndex: 1,
      pageSize: 5,
      // 总页数
      total: 0
    }
  },
  computed: {
    dataList() {
      return this.flightsData.flights.slice(
        (this.pageIndex - 1) * this.pageSize,
        this.pageIndex * this.pageSize
      );
    }
  },
  mounted () {
    this.$axios({
      url: '/airs',
      params: this.$route.query  // 获取路径传递的参数
    })
    .then(res => {
      console.log(res)
      // 设置航班总数据
      this.flightsData = res.data
      // 设置总条数
      this.total = res.data.total
      // 初始化分页
      // this.setDateList()
    })

  },
  methods: {
    // 实现页面分页
    setDateList() {
      // 获取当前页码数
      var pageIndex = (this.pageIndex - 1) * this.pageSize;
      // 获取页面条数
      var pageSize = pageIndex * this.pageSize;
      // 把分页赋值到显示到显示页面数组中
      this.dataList = this.flightsData.flights.slice((this.pageIndex - 1) * this.pageSize,this.pageIndex * this.pageSize)
    },
    // 页面显示条数切换
    handleSizeChange(value) {
      console.log(value)
      this.pageSize = value
      this.pageIndex = 1
      // this.setDateList()
      this.dataLists
    },
    // 当前页码切换
    handleCurrentChange(value) {
      console.log(value)
      this.pageIndex = value
      // this.setDateList()
    }
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


