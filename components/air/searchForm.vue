<template>
  <!-- 左边搜索模块 -->
  <div class="search-form">
    <!-- tab栏 -->
    <div class="search-tab">
      <span class="active"><i class="iconfont icondancheng"></i>单程</span>
      <span><i class="iconfont iconshuangxiang"></i>返程</span>
    </div>
    <!-- 查询表单 -->
    <div class="form">
      <el-form ref="form" label-width="80px">
        <el-form-item label="出发城市">
          <el-autocomplete
            v-model="form.departCity"
            :fetch-suggestions="queryDepartSearch"
            placeholder="请搜索出发城市"
            @select="handleDepartSelect"
          ></el-autocomplete>
        </el-form-item>
        <el-form-item label="到达城市">
          <el-autocomplete
            v-model="form.departCity"
            :fetch-suggestions="queryDestSearch"
            placeholder="请搜索到达城市"
            @select="handleDestSelect"
          ></el-autocomplete>
        </el-form-item>
        <el-form-item label="出发时间">
          <el-date-picker type="date" placeholder="请选择日期" style="width: 100%;"></el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" icon="el-icon-search" style="width: 100%;">搜索</el-button>
        </el-form-item>
        <!-- 切换城市 -->
        <div class="reverse">
          <span>换</span>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: "",
      form: {
        departCity: '',
        departCode: '',
        destCity: '',
        destCode: '',
        departDate: ''
      }
    }
  },
  methods: {
    // 获取出发城市信息
    queryDepartSearch(value,callback) {
      console.log(value)
      // 请求机票城市信息
      this.$axios({
        url: '/airs/city',
        params: {
          name: value
        }
      }).then(res => {
        console.log(res)
        // 请求成功返回显示下拉列表数据
        callback([
          // this.departCity = res.data.data.name,
          // this.departCode = res.data.data.code

        ])
      })
      .catch(err => {
        console.log(err)
      })
    },
    // 选择出发城市
    handleDepartSelect(item) {
      console.log(item);
    },
    // 获取到达城市信息
    queryDestSearch(value,callback) {
      console.log(value)
    },
    // 选择到达城市
    handleDestSelect(item) {
      console.log(item);
    }
  }
};
</script>

<style lang="less" scoped>
.search-form {
  width: 358px;
  height: 350px;
  border: 1px solid #ddd;
  .search-tab {
    text-align: center;
    display: flex;
    span {
      display: block;
      flex: 1;
      width: 179px;
      height: 48px;
      line-height: 48px;
      background-color: #eee;

      &.active {
        color: #000;
        background-color: #fff;
        border-top: 2px solid orange;
      }
    }
  }
  .form {
    padding: 25px 50px 0 15px;
    position: relative;
    .reverse {
      span {
        position: absolute;
        right: 15px;
        top: 60px;
        font-size: 12px;
        color: #fff;
        padding: 5px;
        background-color: #999;
        border-radius: 2px;
        cursor: pointer;
        &:after {
          content: '';
          right: 10px;
          top: -20px;
          position: absolute;
          width: 30px;
          height: 65px;
          border: 1px solid #ccc;
          border-left: none;
          z-index: -1;
        }
      }
    }
  }
}
</style>


