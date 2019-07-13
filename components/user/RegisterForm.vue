<template>
  <!-- 注册功能组件 -->
  <el-form :model="form" :rules="rules">
    <el-form-item prop="username">
      <el-input type="username" v-model="form.username" placeholder="用户名/手机"></el-input>
    </el-form-item>
    <el-form-item prop="code">
      <el-input placeholder="验证码" v-model="form.code">
        <el-button slot="append" @click="sendCode">发送验证码</el-button>
      </el-input>
    </el-form-item>
    <el-form-item prop="name">
      <el-input type="name" v-model="form.name" placeholder="你的名字"></el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input type="password" v-model="form.password" placeholder="密码"></el-input>
    </el-form-item>
    <el-form-item prop="confirmPwd">
      <el-input type="password" v-model="form.confirmPwd" placeholder="确认密码"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" style="width:100%;">提交</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      // 注册信息
      form: {
        username: '',
        code: '',
        name: '',
        password: '',
        confirmPwd: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { message: '请输入正确的手机号', trigger: 'blur', pattern: /^1[345678]\d{9}$/ }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' }
        ],
        name: [
          { required: true, message: '请输入昵称', trigger: 'blur' }
        ],
        confirmPwd: [
          { required: true, message: '请再次输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    // 发送验证码
    sendCode() {
      if (this.form.username.length === 0) {
        this.$alert('手机号码不能为空','提示', {
          confirmButtonText: '确定',
          type: 'warning'
        });
      }
      else if (this.form.username.length !== 11) {
        this.$alert('手机号码格式不正确','提示', {
          confirmButtonText: '确定',
          type: 'warning'
        });
      }
      else {
        this.$alert('模拟手机验证码为：000000','提示', {
          confirmButtonText: '确定',
          type: 'warning'
        });
      }
    }
  }
}
</script>

<style lang="less" scoped>
  form {
    padding: 25px 25px 0 25px;
  }
</style>


