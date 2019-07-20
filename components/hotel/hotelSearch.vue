<template>
  <div class="container">
    <!-- 面包屑导航 -->
    <el-breadcrumb separator="/" class="breadcrumb">
      <el-breadcrumb-item :to="{ path: '/hotel' }">酒店</el-breadcrumb-item>
      <el-breadcrumb-item>南京市酒店预订</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 远程搜索输入框 -->
    <el-autocomplete
      v-model="place"
      :fetch-suggestions="queryPlaceSearch"
      placeholder="请输入内容"
      @select="handlePlaceSelect"
    ></el-autocomplete>
    <!-- 入住离店日期 -->
    <el-date-picker
      v-model="data"
      type="daterange"
      range-separator="-"
      start-placeholder="入住日期"
      end-placeholder="离店日期">
    </el-date-picker>
    <!-- 人数 -->
    <el-input
      placeholder="人数未定"
      suffix-icon="el-input__icon iconfont iconuser"
      v-model="person"
      style="width:220px"
      v-popover:popover4>
    </el-input>
    <!-- 弹出框 -->
    <el-popover
      ref="popover4"
      placement="bottom"
      width="300"
      trigger="click">
      <el-row type="flex" align="middle">
        <el-col :span="6">
          <span>每间</span>
        </el-col>
        <el-col :span="18">
          <el-select v-model="adult" size="mini" style="width:100px">
            <el-option
              v-for="item in adultNum"
              :key="item.value"
              :label="item.label"
              :value="item.value"
              >
            </el-option>
          </el-select>
          <el-select v-model="child" size="mini" style="width:100px">
            <el-option
              v-for="item in childNum"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-col>
      </el-row>
      <el-row type="flex" justify="end" style="margin-top: 20px;padding-top: 20px;border-top: 1px solid #ddd;">
        <el-button type="primary" size="mini" class="confirm">确定</el-button>
      </el-row>
    </el-popover>
    <!-- 查看价格按钮 -->
    <el-button type="primary">查看价格</el-button>
  </div>
</template>

<script>
export default {
   data() {
    return {
      place: '',
      data: '',
      person: '',
      adult: '1成人',
      child: '0儿童',
      adultNum: [
        {value: '1',label: '1'},
        {value: '2',label: '2'},
        {value: '3',label: '3'},
        {value: '4',label: '4'},
        {value: '5',label: '5'},
        {value: '6',label: '6'},
        {value: '7',label: '7'}
      ],
      childNum: [
        {value: '0',label: '0'},
        {value: '1',label: '1'},
        {value: '2',label: '2'},
        {value: '3',label: '3'},
        {value: '4',label: '4'},
        {value: '5',label: '5'}
      ],
    }
  },
  methods: {
    // 搜索城市
    queryPlaceSearch(value,callback) {
      console.log(value)
    },
    // 点击选中建议项时触发
    handlePlaceSelect(value) {
      console.log(value)
    },
    handleNumberSelect(value) {
      console.log(value)
    },
    queryNumberSearch(queryString, cb) {

        // 调用 callback 返回建议列表的数据
        cb(results);
      }
  }
}
</script>

<style lang="less" scoped>
  .container {
    .el-breadcrumb {
      margin-bottom: 20px;
    }
  }
</style>


