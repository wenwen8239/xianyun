<template>
  <!-- 注册功能组件 -->
  <el-form :model="form" :rules="rules" ref="registerForm">
    <el-form-item prop="username">
      <el-input type="username" v-model="form.username" placeholder="用户名/手机"></el-input>
    </el-form-item>
    <el-form-item prop="captcha">
      <el-input placeholder="验证码" v-model="form.captcha">
        <el-button slot="append" @click="sendCode">发送验证码</el-button>
      </el-input>
    </el-form-item>
    <el-form-item prop="nickname">
      <el-input type="name" v-model="form.nickname" placeholder="你的名字"></el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input type="password" v-model="form.password" placeholder="密码"></el-input>
    </el-form-item>
    <el-form-item prop="comfirmPwd">
      <el-input type="password" v-model="form.comfirmPwd" placeholder="确认密码"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" style="width:100%;" @click="handleRegisterForm">提交</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.form.password) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    }
    return {
      // 注册信息
      form: {
        username: '',
        captcha: '',
        nickname: '',
        password: '',
        comfirmPwd: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { message: '请输入正确的手机号', trigger: 'blur', pattern: /^1[345678]\d{9}$/ }
        ],
        captcha: [
          { required: true, message: '请输入验证码', trigger: 'blur' }
        ],
        nickname: [
          { required: true, message: '请输入昵称', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' }
        ],
        comfirmPwd: [
          { validator: validatePass, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    // 发送验证码
    sendCode() {
      // 判断手机号是否为空
      if (this.form.username.trim().length === 0) {
        this.$confirm('手机号码不能为空','提示', {
          confirmButtonText: '确定',
          showCancelButton: false,
          type: 'warning'
        });
        return;
      }
      // 判断手机号输入是否正确
      if (this.form.username.trim().length !== 11) {
        this.$confirm('手机号码格式不正确','提示', {
          confirmButtonText: '确定',
          showCancelButton: false,
          type: 'warning'
        });
        return;
      }
      // 通过store获取验证码
      this.$store.dispatch('user/sendCode',this.form.username).then(code => {
        // 弹出提示
        this.$confirm(`手机模拟验证码为${code}`,'提示', {
          confirmButtonText: '确定',
          showCancelButton: false,
          type: 'success'
        })
      })
      // 请求手机验证码接口
      // this.$axios({
      //   url: `captchas`,
      //   method: "POST",
      //   data: {
      //       tel: this.form.username
      //   }
      // }).then(res => {
      //   console.log(res)
      //   const {code} = res.data;
      //   this.$confirm(`模拟手机验证码为：${code}`, '提示', {
      //       confirmButtonText: '确定',
      //       showCancelButton: false,
      //       type: 'warning'
      //   })
      // })

    },
    // 提交表单
    handleRegisterForm() {
      console.log(this.form);
      // 判断两次密码输入是否一致
      if (this.form.password !== this.form.comfirmPwd) {
        this.$confirm('两次密码输入不一致','提示', {
          confirmButtonText: '确定',
          type: 'warning'
        });
        return;
      }
      // 判断表单是否为空
      this.$refs.registerForm.validate((valid) => {
        if (valid) {
          const {comfirmPwd, ...props} = this.form;
          // 请求注册接口
          this.$store.dispatch('user/register',props).then(res => {
            // 注册成功弹出提示
              this.$message({
                duration: 1000,
                type:'success',
                message: '注册成功'
              })
          })
          // // 请求注册接口
          // this.$axios({
          //   method: 'POST',
          //   url: '/accounts/register',
          //   data: props
          // })
          // .then(res => {
          //   console.log(res)
          //   if (res.data) {
          //
          //   }
          // })
          // .catch(err => {
          //   console.log(err)
          // })
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
  form {
    padding: 25px 25px 0 25px;
  }
</style>


