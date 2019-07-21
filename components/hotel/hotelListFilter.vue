<template>
  <!-- 酒店筛选条件组件 -->
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
        <el-select v-model="grade" placeholder="不限">
          <el-option
            v-for="(item,index) in start"
            :key="index"
            :label="item"
            :value="item">
            <span style="float: left">{{ start[index] }}</span>
          </el-option>
        </el-select>
      </el-col>
      <!-- 住宿类型 -->
      <el-col :span="5">
        <div>住宿类型</div>
        <el-select v-model="type" placeholder="不限">
          <el-option
            v-for="(item,index) in types"
            :key="index"
            :label="item"
            :value="item">
            <span style="float: left">{{ types[index] }}</span>
          </el-option>
        </el-select>
      </el-col>
      <!-- 酒店设施 -->
      <el-col :span="5">
        <div>酒店设施</div>
        <el-select v-model="facility" placeholder="不限">
          <el-option
            v-for="(item,index) in types"
            :key="index"
            :label="item"
            :value="item">
            <span style="float: left">{{ facilitys[index] }}</span>
          </el-option>
        </el-select>
      </el-col>
      <!-- 酒店品牌 -->
      <el-col :span="4">
        <div>酒店品牌</div>
        <el-select v-model="facility" placeholder="不限">
          <el-option
            v-for="(item,index) in types"
            :key="index"
            :label="item"
            :value="item">
            <span style="float: left">{{ facilitys[index] }}</span>
          </el-option>
        </el-select>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      priceRange: 4000,
      grade: '',
      type: '',
      facility: '',
      start: ['1星','2星','3星','4星','5星'],
      types: ['经济型','舒适型','高档型','豪华型','度假村','公寓式酒店'],
      facilitys: ['wifi','热水壶','吹风机','外币兑换服务','洗衣服务','电梯']
    }
  },
  methods: {
    formatTooltip(val) {
      return val * 40;
    }
  },
  mounted () {

  }
}
</script>

<style lang="less" scoped>
  .list-filter {
    font-size: 14px;
    color: #666;
    border: 1px solid #ddd;
    padding: 10px 20px;
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
      /deep/ .el-input__inner {
        border: none;
        // border: 1px solid #000;
      }
    }

  }
</style>


