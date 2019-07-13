<template>
  <!-- 登录功能组件 -->
  <el-form :model="form" ref="loginForm" :rules="rules">
    <el-form-item prop="username">
      <el-input type="username" v-model="form.username" placeholder="用户名/手机"></el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input type="password" v-model="form.password" placeholder="密码"></el-input>
    </el-form-item>
    <span><nuxt-link to="#">忘记密码</nuxt-link></span>
    <el-form-item>
      <el-button type="primary" style="width:100%;" @click="handleLoginSubmit">提交</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      // 登录信息
      form: {
        username: '',
        password: ''
      },
      // 定义验证规则
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { message: '请输入正确的手机号', trigger: 'blur', pattern: /^1[345678]\d{9}$/ }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    // 验证用户登录
    handleLoginSubmit() {
      console.log(this.form)
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          // 将用户数据存储到内存中
          this.$store.commit('user/userInfo',this.form)
          // 请求用户登录接口
          this.$axios({
            method: 'POST',
            url: '/accounts/login',
            data: this.form
          })
          .then(res => {
            console.log(res.data);
            // 登录成功弹出提示
            this.$message({
              duration: 1000,
              type:'success',
              message: '登录成功'
            })
            setTimeout(function () {
              // 跳转到首页
              this.$router.push('/');
            }.bind(this),1000)
          })
          .catch(err => {
            console.log(err)
          })
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
  form {
    padding: 25px 25px 0 25px;
    span {
      float: right;
      font-size: 12px;
      margin: -5px 0 10px;
      color: #409eff;
    }
  }
</style>


