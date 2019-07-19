export const state = () => {
  return {
    // 选中的机票信息
    infoData: {
      seat_infos: {}
    },
    // 机票总价格
    allPrice: 0
  }
}

export const mutations = {
  // 设置机票信息
  setInfoData(state, data) {
    state.infoData = data
  },
  // 计算机票总价格
  setAllPrice(state,data) {
    state.allPrice = data
  }
}
