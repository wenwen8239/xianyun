<template>
  <div class="list-filter">
    <el-row type="flex" justify="space-between">
      <!-- 价格 -->
      <el-col :span="6">
        <div>
          <span>价格</span>
          <span style="float:right;">0-4000</span>
        </div>
        <!-- 滑块 -->
        <el-slider v-model="priceRange" :format-tooltip="formatTooltip"></el-slider>
      </el-col>
      <!-- 住宿等级 -->
      <el-col :span="5">
        <div>住宿等级</div>
      </el-col>
      <!-- 住宿类型 -->
      <el-col :span="5">
        <div>住宿类型</div>
      </el-col>
      <!-- 酒店设施 -->
      <el-col :span="4">
        <div>酒店设施</div>
      </el-col>
      <!-- 酒店品牌 -->
      <el-col :span="4">
        <div>酒店品牌</div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      priceRange: 4000
    }
  },
  methods: {
    formatTooltip(val) {
      return val * 40;
    }
  }
}
</script>

<style lang="less" scoped>
  .list-filter {
    font-size: 14px;
    color: #666;
    border: 1px solid #ddd;
    padding: 5px 20px;
    > .el-row {
      > .el-col {
        padding: 5px 20px;
        border-right: 1px solid #ddd;
        box-sizing: border-box;
        .el-slider {
          width: 200px;
        }
        &:first-child {
          padding-left: 0;
        }
        &:last-child {
          border-right: none;
        }
      }
    }

  }
</style>


