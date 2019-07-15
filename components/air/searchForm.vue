<template>
  <!-- 左边搜索模块 -->
  <div class="search-form">
    <!-- tab栏 -->
    <div class="search-tab">
      <span v-for="(item,index) in tabs" :key="index" :class="{active: index === currentTab}" @click="handleSelectTab(index)"><i :class="item.icon"></i>{{item.name}}</span>
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
            v-model="form.destCity"
            :fetch-suggestions="queryDestSearch"
            placeholder="请搜索到达城市"
            @select="handleDestSelect"
          ></el-autocomplete>
        </el-form-item>
        <el-form-item label="出发时间">
          <el-date-picker v-model="form.departDate" type="date" placeholder="请选择日期" style="width: 100%;" @change="handleDate"></el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" icon="el-icon-search" style="width: 100%;" @click="handleSubmit">搜索</el-button>
        </el-form-item>
        <!-- 切换城市 -->
        <div class="reverse">
          <span @click="changeCity">换</span>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
// 引入格式化日期插件
import moment from 'moment'
export default {
  data() {
    return {
      tabs: [
        {icon: 'iconfont icondancheng',name: '单程'},
        {icon: 'iconfont iconshuangxiang',name: '返程'}
      ],
      // 设置当前被选中的标签页
      currentTab: 0,
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
    // 封装实现下拉菜单
    querySearch(value,callback,city,code) {
      // 判断当输入的数据为空的时候
      if (!value) {
        callback([]) // 不加载下拉菜单
        return;
      }
      // 请求机票城市信息
      this.$axios({
        url: '/airs/city',
        params: {
          name: value
        }
      }).then(res => {
        // 获取请求到的数据
        const {data} = res.data;
        // 给数组中的对象添加value，下拉列表必须要有value选项，value是用来展示下拉列表数据的绑定值
        const newArr = data.map(v => {
          v.value = v.name.replace('市','');
          return v;
        })
        callback(newArr)
        // 默认选中出现的第一个数组数据
        this.form.city = newArr[0].value;
        // 保存城市代码
        this.form.code = newArr[0].sort;
      })
      .catch(err => {
        console.log(err)
      })
    },
    // 获取出发城市信息
    queryDepartSearch(value,callback) {
      // 调用实现下拉菜单函数
      this.querySearch(value,callback,this.form.departCity,this.form.destCode)
    },
    // 选择出发城市
    handleDepartSelect(item) {
      console.log(item);
      this.form.departCity = item.value;
      this.form.departCode = item.sort;
    },
    // 获取到达城市信息
    queryDestSearch(value,callback) {
      // 调用实现下拉菜单函数
      this.querySearch(value,callback,this.form.destCity,this.form.departCode)
    },
    // 选择到达城市
    handleDestSelect(item) {
      console.log(item);
      this.form.destCity = item.value;
      this.form.destCode = item.sort;
    },
    // 切换城市
    changeCity() {
      // 结构form中的属性
      const {departCity,departCode,destCity,destCode} = this.form;
      // 把数据交换赋值
      this.form.departCity = destCity;
      this.form.departCode = destCode;
      this.form.destCity = departCity;
      this.form.destCode = departCode;
    },
    // 切换时间
    handleDate(value) {
      console.log(value)
      // 格式化日期格式
      this.form.departDate = moment(value).format('YYYY-DD-MM');
      console.log(this.form.departDate)
    },
    // 点击返程
    handleSelectTab(index) {
      // 弹出提示信息
      if (index === 1) {
        this.$alert('目前暂不支持往返，请使用单程选票！', '提示', {
          confirmButtonText: '确定',
          type: 'warning'
        });
      }
    },
    // 提交表单
    handleSubmit() {
      // 验证表单
      const rules = {
        departCity: {
          value: this.form.departCity,
          message: '请选择出发城市'
        },
        destCity: {
          value: this.form.destCity,
          message: '请选择到达城市'
        },
        departDate: {
          value: this.form.departDate,
          message: '请选择出发时间'
        }
      }
      // 假如表单不为空
      let valid = true;
      // 循环判断表单是否为空
      Object.keys(rules).forEach(v => {
        if (!valid) return;
        if (!rules[v].value) {
          valid = false;
          // 弹出提示框
          this.$alert(rules[v].message, '提示', {
            confirmButtonText: '确定',
            type: 'warning'
          });
        }
      })
      // 请求机票列表数据
      this.$axios({
        url: '/airs',
        params: this.form
      })
      .then(res => {
        console.log(res)
        // 跳转到机票列表页面
        this.$router.push({path: '/air/flights',query: this.form})
      })
      .catch(err => {
        console.log(err)
      })
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
      cursor: pointer;
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


