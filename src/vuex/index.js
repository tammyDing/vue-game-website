import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  // 唯一的数据源,类似data
  state: {
    topicShow: true
  },
  // mutations唯一允许更新应用状态的地方
  mutations: {
    // 关闭事件修改topicShow
    topicCloseHandler (state, item) {
      state.topicShow = item
    }
  },
  actions: {
    // 提交关闭事件
    onTopicCloseHandler (context, item) {
      context.commit('topicCloseHandler', item)
    }
  }
})

export default store
