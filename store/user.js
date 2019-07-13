
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

}
