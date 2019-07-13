<template>
  <div class="header">
    <el-row type="flex" justify="space-between" class="main">
      <!-- 页面logo -->
      <div class="logo">
        <nuxt-link to="/">
          <img src="http://157.122.54.189:9093/images/logo.jpg" alt="">
        </nuxt-link>
      </div>

      <!-- 菜单 -->
      <el-row type="flex" class="navs">
        <nuxt-link to="/">首页</nuxt-link>
        <nuxt-link to="/post">旅游攻略</nuxt-link>
        <nuxt-link to="/hotel">酒店</nuxt-link>
        <nuxt-link to="/air">国内机票</nuxt-link>
      </el-row>

      <!-- 登录信息 -->
      <div class="info">
        <div class="message" v-if="!$store.state.user.userInfo.token">
          <el-dropdown>
            <span class="el-dropdown-link">
              <i class="el-icon-bell"></i>
              消息
              <i class="el-icon-caret-bottom el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>消息</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <nuxt-link to="/user/login">登录 / 注册</nuxt-link>
        </div>
        <!-- 用户登录成功显示信息 -->
        <div class="login" v-else>
          <el-dropdown>
            <span class="el-dropdown-link">
              <img :src="$axios.defaults.baseUrl + $store.state.user.userInfo.user.defaultAvatar" alt="">
              {{$store.state.user.userInfo.user.nickname}}
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>个人中心</el-dropdown-item>
              <el-dropdown-item><nuxt-link to="/user/login">退出</nuxt-link></el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  mathods: {
    // 用户退出
    handleLogout() {

    }
  }
}
</script>

<style lang="less" scoped>
.header {
  height: 60px;
  line-height: 60px;
  background-color: #fff;
  // 版心布局
  .main {
    width: 1000px;
    margin: 0 auto;
  }
  // logo样式
  .logo {
    margin-top: 10px;
    img {
      width: 156px;
      height: 43px;
    }
  }
  // 导航栏样式
  .navs {
    flex: 1;
    margin: 0 20px;
    a {
      display: block;
      height: 60px;
      line-height: 60px;
      padding: 0 20px;
      box-sizing: border-box;
      &:hover {
        color: #409eff;
        border-bottom: 5px solid #409eff;
      }
    }
    .nuxt-link-exact-active {
      background-color: #409eff;
      color: #fff;
      &:hover {
        color: #fff;
      }
    }
  }
  // 用户信息样式
  .info {
    .message {
      cursor: pointer;
      /deep/ .el-dropdown {
        font-size: 16px;
      }
      a {
        margin-left: 10px;
        color: #606266;
      }
    }
    .login {
      img {
        width: 32px;
        height: 32px;
        vertical-align: middle;
      }
    }
  }

}
</style>


