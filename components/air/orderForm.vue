<template>
  <div class="orderForm">
    <!-- 乘机人表单 -->
    <div class="air-column air">
      <h2>乘机人</h2>
      <el-form class="airplane" v-for="(item,index) in users" :key="index">
        <el-form-item label="乘机人类型">
          <el-input placeholder="姓名" class="input-with-select" v-model="item.username">
            <el-select slot="prepend" placeholder="请选择" value="1" width="120px">
              <el-option label="成人" value="1"></el-option>
            </el-select>
          </el-input>
        </el-form-item>
        <el-form-item label="证件类型">
          <el-input placeholder="证件号码" v-model="item.id" class="input-with-select">
            <el-select slot="prepend" v-model="select" placeholder="请选择">
              <el-option :label="cards.label" :value="cards.value" v-for="(cards,index) in card" :key="index"></el-option>
            </el-select>
          </el-input>
        </el-form-item>
        <!-- 移除乘机人 -->
        <span class="delete-user" @click="handleDeleteUser(index)">-</span>
      </el-form>
      <!-- 添加乘机人 -->
      <el-button type="primary" @click="handleAddUsers">添加乘机人</el-button>
    </div>
    <!-- 保险 -->
    <div class="air-column">
      <h2>保险</h2>
      <div class="insurance-item" v-for="(item,index) in data.insurances" :key="index">
        <el-checkbox :label="`${item.type}：￥${item.price}/份×1 最高赔付${item.compensation}`" border @change="handleInsurances(item.id)"></el-checkbox>
      </div>
    </div>
    <!-- 联系人 -->
    <div class="air-column">
      <h2>联系人</h2>
      <el-form label-width="80px" class="contact">
        <el-form-item label="姓名">
          <el-input v-model="contactName"></el-input>
        </el-form-item>
        <el-form-item label="手机">
          <el-input v-model="contactPhone">
            <el-button slot="append" @click="handleSendCaptcha">发送验证码</el-button>
          </el-input>
        </el-form-item>
        <el-form-item label="验证码">
          <el-input v-model="captcha"></el-input>
        </el-form-item>
      </el-form>
      <!-- 提交订单按钮 -->
      <el-button type="warning" class="submit" @click="handleSubmit">提交订单</el-button>
    </div>
    <input type="hidden" :value="allPrice">
  </div>
</template>

<script>
export default {
  // 获取父组件传递的数据
  props: {
    data: {
      type: Object,
      default: {}
    }
  },
  data() {
    return {
      select: '身份证',
      // 乘机人信息
      users: [{
        username: '王小小',
        id: '12345'
      }],
      card: [
        {value: "1",label: '身份证'},
        {value: "2",label: '护照'}
      ],
      insurances: [], // 保险数据
      contactName: '小小', // 联系人姓名
      contactPhone: '15611111111', // 联系人电话
      captcha: '000000', // 验证码,
      invoice: false // 是否需要发票
    }
  },
  computed: {
    // 计算总价格
    allPrice() {
      let price = 0;
      let length = this.users.length;
      // 计算所有乘机人总价格
      price += this.data.seat_infos.org_settle_price * length;
      // 计算购买保险价格
      this.insurances.forEach(v => {
        price += this.data.insurances[v - 1].price * length;
      })
      // 计算每位乘机人的机建，燃油价格
      price += this.data.airport_tax_audlet * length;
      // 把总价格传递回父组件
      // this.$emit('setAllPrice',price)
      // 返回总价格
      // return price
      // 使用store来传递总金额
      this.$store.commit('air/setAllPrice',price)
    }
  },
  methods: {
    // 添加乘机人
    handleAddUsers() {
      // 通过这个方法对数组进行添加数据，实现新增乘机人表单
      this.users = [
        ...this.users,
        {
          username: '',
          id: ''
        }
      ]
    },
    // 移除乘机人
    handleDeleteUser(index) {
      this.users.splice(index,1);
    },
    // 保险数据选中
    handleInsurances(id) {
      // 判断当前点击的id是否存在当前保险数组中
      if (this.insurances.indexOf(id) > -1) {
        // 把当前保险数组中的数据重新赋值到arr中
        let arr = this.insurances.slice(0);
        // 把数组中id与当前点击的id一致的数据删除
        arr.splice(this.insurances.indexOf(id),1);
        // 把arr赋值给原来的数组
        this.insurances = arr
      }
      else {
        // 如果存在则把重复数据删除
        this.insurances = [...new Set([...this.insurances , id])]
      }
    },
    // 发送验证码
    handleSendCaptcha() {
      // 判断手机号是否为空
      if (this.contactPhone.trim().length === 0) {
        // 弹出提示
        this.$confirm('手机号不能为空','提示', {
          confirmButtonText: '确定',
          showCancelButton: false,
          type: 'warning'
        })
        return;
      }
      // 判断手机号长度是否小于11位
      if (this.contactPhone.trim().length !== 11) {
        // 弹出提示
        this.$confirm('手机号格式不正确','提示', {
          confirmButtonText: '确定',
          showCancelButton: false,
          type: 'warning'
        })
        return;
      }
      // 请求验证码
      // this.$axios({
      //   url: '/captchas',
      //   method: 'POST',
      //   data: {
      //     tel: this.contactPhone
      //   }
      // })
      // .then(res => {
      //   console.log(res)
      //   const { code } = res.data
      //   // 弹出提示
      //   this.$confirm(`手机模拟验证码为${code}`,'提示', {
      //     confirmButtonText: '确定',
      //     showCancelButton: false,
      //     type: 'success'
      //   })
      // })
      // .catch(err => {
      //   console.log(err)
      // })
      // 通过store获取手机验证码
      this.$store.dispatch('user/sendCode',this.contactPhone).then(code => {
        // 弹出提示
        this.$confirm(`手机模拟验证码为${code}`,'提示', {
          confirmButtonText: '确定',
          showCancelButton: false,
          type: 'success'
        })
      })

    },
    // 提交表单
    handleSubmit() {
      // 设置表单验证信息
      const rules = {
        users: {
          value: this.users[0].username && this.users[0].id,
          message: '请输入乘机人信息'
        },
        contactName: {
          value: this.contactName,
          message: '请输入联系人姓名'
        },
        contactPhone: {
          value: this.contactPhone,
          message: '请输入联系人电话'
        },
        captcha: {
          value: this.captcha,
          message: '请输入验证码'
        }
      }
      let voild = true;
      Object.keys(rules).forEach(v => {
        if (!voild) return;
        if (!rules[v].value) {
          voild = false;
          this.$message.error(rules[v].message)
        }
      })
      if (voild) {
        // 获取所有的表单数据
        const orderData = {
          users: this.users,
          insurances: this.insurances,
          contactName: this.contactName,
          contactPhone: this.contactPhone,
          invoice: this.invoice,
          captcha: this.captcha,
          seat_xid: this.data.seat_infos.seat_xid,
          air: this.data.id
        }
        // 获取store中存储的用户数据
        const {user: {userInfo}} = this.$store.state;
        // 请求提交机票订单信息
        this.$axios({
          url: '/airorders',
          method: 'POST',
          data: orderData,
          headers: {
            Authorization: `Bearer ${userInfo.token || 'NO TOKEN'}`
          }
        })
        .then(res => {
          console.log(res)
          this.$message({
            message: "正在生成订单！请稍等",
            type: "success",
            duration: 2000
          })
          // 跳转至付款页
          setTimeout(() => {
            this.$router.push('/air/pay')
          }, 2000);
        })
        .catch(err => {
          console.log(err)
          // const { message } = err.response.data;
          // 弹出提示
          // this.$confirm(message,'提示', {
          //   confirmButtonText: '确定',
          //   showCancelButton: false,
          //   type: 'warning'
          // })
        })
      }
    }
  }
}
</script>

<style lang="less" scoped>
.air-column {
  padding: 20px 0;
  &:nth-child(-n+2) {
    border-bottom: 1px dashed #ddd;
  }
  h2 {
    font-weight: 400;
    margin-bottom: 15px;
  }
  .airplane {
    border-bottom: 1px dashed #ddd;
    margin-bottom: 20px;
    position: relative;
    .el-form-item {
      &:nth-child(1) {
        margin-bottom: 0;
      }
    }
    .el-input {
      width: 550px;
    }
    .el-select {
      width: 120px;
    }
    .input-with-select /deep/  .el-input-group__prepend {
      background-color: #fff;
    }
  }
  .delete-user {
    position: absolute;
    right: -5%;
    top: 50%;
    display: block;
    width: 16px;
    height: 16px;
    line-height: 12px;
    text-align: center;
    border-radius: 50%;
    color: #fff;
    background-color: #ddd;
    cursor: pointer;
  }
  .insurance-item {
    padding: 10px 0;
  }
  .contact {
    .el-input {
      width: 300px;
    }
  }
  .submit {
    display: block;
    margin: 50px auto;
    width: 250px;
    height: 50px;
  }
}
.air {
  &:first-child {
    .delete-user {
      // display: none;
    }
  }
}
</style>


