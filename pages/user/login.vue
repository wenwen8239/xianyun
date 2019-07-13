<template>
  <div>
    <div class="container">
        <div class="form-box">
          <el-row type="flex" class="title">
            <span v-for="(item,index) in ['登录','注册']" :key="index" :class="{active: currentTap === index}" @click="handleChangeTap(index)">{{item}}</span>
          </el-row>
          <!-- 登录功能组件 -->
          <LoginForm v-if="currentTap === 0"></LoginForm>
          <!-- 注册功能组件 -->
          <RegisterForm v-if="currentTap === 1"></RegisterForm>
        </div>
      </div>
  </div>
</template>

<script>
import LoginForm from '@/components/user/LoginForm'
import RegisterForm from '@/components/user/RegisterForm'
export default {
  components: {
    LoginForm,
    RegisterForm
  },
  data() {
    return {
      // 当前选中的tap
      currentTap: 0,
    }
  },
  methods: {
    // 点击tap切换
    handleChangeTap(index) {
      this.currentTap = index;
    }
  }
}
</script>

<style lang="less" scoped>
  .container {
    height: 700px;
    position: relative;
    background: url(http://157.122.54.189:9095/assets/images/th03.jfif) center 0;
    .form-box {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%,-50%);
      width: 400px;
      background-color: #fff;
      margin: 0 auto;
      .title {
        span {
          display: block;
          width: 50%;
          height: 50px;
          line-height: 50px;
          text-align: center;
          color: #666;
          background-color: #eee;
          cursor: pointer;
        }
        .active {
          border-top: 2px solid orange;
          background-color: #fff;
          color: orange;
          font-weight: 700;
        }
      }
    }
  }
</style>


