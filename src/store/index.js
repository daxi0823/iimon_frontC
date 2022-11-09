import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    // 課題で指定されたアイテム
    leftItems: ["Apple", "Grape", "Strawberry", "Cherry", "Plum"],
    rightItems: ["Watermelon", "Banana", "Peach"],
  },
  getters: {
  },
  mutations: {
    leftButton: function(state) {
      // 配列のアイテムがなくなった場合実行しない
      if (state.leftItems.length > 0) {
        // 配列の最後のアイテムを取り出し、変数に代入
        const targetItem = state.leftItems.pop();
        // 上記のアイテムを右に移動
        state.rightItems.push(targetItem);
      }
    },
    rightButton: function(state) {
      if (state.rightItems.length > 0) {
        const targetItem = state.rightItems.pop();
        state.leftItems.push(targetItem);
      }
    },
  },
  actions: {

  },
  modules: {
  }
})
