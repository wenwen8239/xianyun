// 用户管理
// 存数据
export const state = () => ({
  userInfo: {
    token: '',
    user: {}
  }
})

// 同步设置修改state数据
export const mutations = {
  // 保存用户信息到state
  setUserInfo(state,data) {
    state.userInfo = data;
  },
  // 实现用户退出将用户数据清除
  clearUserInfo(state) {
    state.userInfo = {
      token: '',
      user: {}
    }
  }
}

// 异步设置修改state数据
export const actions = {
  // 请求登录接口
  login({commit},data) {
    return this.$axios({
      method: 'POST',
      url: '/accounts/login',
      data
    }).then(res => {
      // 将用户数据存储到内存中
      commit('setUserInfo',res.data);
    })
  },
  // 请求注册接口
  register({commit},data) {
    return this.$axios({
      method: 'POST',
      url: '/accounts/register',
      data
    }).then(res => {
      commit('registerUserInfo',res.data)
    })
  },
  // 获取手机验证码
  sendCode(store,phoneNumber) {
    // 请求手机验证码接口
    return this.$axios({
      url: `captchas`,
      method: "POST",
      data: {
          tel: phoneNumber
      }
    }).then(res => {
      const {code} = res.data;
      return code;
    })
  }
}
