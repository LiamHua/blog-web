import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 控制发布文章对话框的显示
    showPublishModal: false,
  },
  mutations: {
    changePublishModalState(state, isShow) {
      state.showPublishModal = isShow
    }
  },
  actions: {
  },
  modules: {
  }
})
