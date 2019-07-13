import { mapState, mapMutations } from "vuex";

export const state = () => ({
  userInfo: {
    token: '',
    user: {}
  }
})

export const mutations = {
  // 保存用户信息到state
  setUserInfo(state,data) {
    state.userInfo = data;
  }
}

export const actions = {

}
