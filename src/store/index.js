import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    leftItems: ["Apple", "Grape", "Strawberry", "Cherry", "Plum"],
    rightItems: ["Watermelon", "Banana", "Peach"],
  },
  getters: {
    // leftItemlist: function(state){
    //   return state.allItemList.filter(item => item.position == "left");
    // },
    // rightItemlist: function(state){
    //   return state.allItemList.filter(item => item.position == "right");
    // },
  },
  mutations: {
    leftButton: function(state) {
      const targetItem = state.leftItems.pop();
      state.rightItems.push(targetItem);
    },
    rightButton: function(state) {
      const targetItem = state.rightItems.pop();
      state.leftItems.push(targetItem);
    },

    // setSpots(state, datas) {
    //   state.allSpots = datas
    // },
    // getSpots(state) {
    //   const q = query(collection(db, 'spots'), orderBy('spotId'))
      // console.log(q)
      // onSnapshot(q, snapshot => {

        // const allId = snapshot.docs.map(doc => {
        //   return doc.data().spotId;
        // })
        // if(allId.length > 0) {
        //   state.spotId = allId.reduce((a,b)=>a>b?a:b);
        // }

        // snapshot.docChanges().forEach(change => {
        //   if(change.type === 'added') {
        //     state.allSpots.push(change.doc.data())
            // console.log('added', change.doc.data())
      //     }
      //     if(change.type === 'removed') {
      //       const currentArray = state.allSpots.filter(spot => {
      //         return spot.spotId !== change.doc.data().spotId;
      //       })
      //       this.spots = currentArray;
      //     }
      //   })
      // })
      // this.commit('setSpots', {datas: allSpots})
      // 最新のデータを引数に渡している
    // },

    // getPlans(state) {
    //   const q = query(collection(db, 'plans'), orderBy('planId'))
    //   console.log(q)
    //   onSnapshot(q, snapshot => {
    //     snapshot.docChanges().forEach(change => {
    //       if(change.type === 'added') {
    //         state.allPlans.push(change.doc.data())
            // console.log('added', change.doc.data().imgUrl)
      //     }
      //     if(change.type === 'removed') {
      //       const currentArray = state.allPlans.filter(plan => {
      //         return plan.planId !== change.doc.data().planId;
      //       })
      //       this.plans = currentArray;
      //     }
      //   })
      // })
    // },
    // currentPlan(state) {
    //   state.currentPlan = 0
    // }
  },
  actions: {

  },
  modules: {
  }
})
