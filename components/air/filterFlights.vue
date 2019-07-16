<template>
  <!-- 过滤筛选组件 -->
  <div class="filters">
    <!-- 单程 -->
    <el-row class="flights top" type="flex" justify="space-between">
      <el-col :span="8" style="font-size: 14px;">
        <span>单程：</span>
        <span>广州 - 上海 / 2019-07-25</span>
      </el-col>
      <el-col :span="4" style="margin-right: 10px">
        <el-select v-model="airport" size="mini" placeholder="起飞机场">
          <el-option label="餐厅名" value="1"></el-option>
          <el-option label="订单号" value="2"></el-option>
          <el-option label="用户电话" value="3"></el-option>
        </el-select>
      </el-col>
      <el-col :span="4" style="margin-right: 10px">
        <el-select v-model="airport" size="mini" placeholder="起飞时间">
          <el-option label="餐厅名" value="1"></el-option>
          <el-option label="订单号" value="2"></el-option>
          <el-option label="用户电话" value="3"></el-option>
        </el-select>
      </el-col>
      <el-col :span="4" style="margin-right: 10px">
        <el-select v-model="airport" size="mini" placeholder="航空公司">
          <el-option label="餐厅名" value="1"></el-option>
          <el-option label="订单号" value="2"></el-option>
          <el-option label="用户电话" value="3"></el-option>
        </el-select>
      </el-col>
      <el-col :span="4">
        <el-select v-model="airport" size="mini" placeholder="机型">
          <el-option label="餐厅名" value="1"></el-option>
          <el-option label="订单号" value="2"></el-option>
          <el-option label="用户电话" value="3"></el-option>
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
        airport: ''
      }
    }
  }
</script>

<style lang="less" scoped>

</style>


