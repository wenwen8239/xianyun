<template>
  <!-- 过滤筛选组件 -->
  <div class="filters">
    <!-- 单程 -->
    <el-row class="flights top" type="flex" justify="space-between" :model="info">
      <el-col :span="8" style="font-size: 14px;">
        <span>单程：</span>
        <span>{{info.departCity}} - {{info.destCity}} / {{info.departDate}}</span>
      </el-col>
      <el-col :span="4" style="margin-right: 10px">
        <el-select v-model="airport" size="mini" placeholder="起飞机场">
          <el-option label="餐厅名" value="1"></el-option>
        </el-select>
      </el-col>
      <el-col :span="4" style="margin-right: 10px">
        <el-select v-model="airport" size="mini" placeholder="起飞时间">
          <el-option label="餐厅名" value="1"></el-option>
        </el-select>
      </el-col>
      <el-col :span="4" style="margin-right: 10px">
        <el-select v-model="airport" size="mini" placeholder="航空公司">
          <el-option label="餐厅名" value="1"></el-option>
        </el-select>
      </el-col>
      <el-col :span="4">
        <el-select v-model="airport" size="mini" placeholder="机型">
          <el-option label="餐厅名" value="1"></el-option>
        </el-select>
      </el-col>
    </el-row>
    <!-- 筛选 -->
    <el-row class="flights-cancel" style="font-size: 14px;">
      筛选
      <el-button type="primary" size="small" plain round>撤销</el-button>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      airport: '',
      info: ''
    }
  },
  mounted () {
    // 获取机票信息
    this.$axios({
      url: '/airs',
      params: this.$route.query  // 获取路径传递的参数
    })
    .then(res => {
      console.log(res)
      console.log(res.data.info)
      this.info = res.data.info
    })
  }
}
</script>

<style lang="less" scoped>

</style>


