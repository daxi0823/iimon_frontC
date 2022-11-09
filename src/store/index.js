import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    leftItems: ["Apple", "Grape", "Strawberry", "Cherry", "Plum"],
    rightItems: ["Watermelon", "Banana", "Peach"],
  },
  getters: {
  },
  mutations: {
    leftButton: function(state) {
      if (state.leftItems.length > 0) {
        const targetItem = state.leftItems.pop();
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
