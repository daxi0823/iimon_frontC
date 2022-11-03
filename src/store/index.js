import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    allSpots: [],
    spotId: 0,
    allPlans: [],
    planId: 0,
    // currentPlan: 0,
  },
  getters: {
    allSpots: state => state.allSpots,
    allPlans: state => state.allPlans,
    // currentPlan: state => state.currentPlan,
    // フィルターしたスポットはここ？
  },
  mutations: {
    // setSpots(state, datas) {
    //   state.allSpots = datas
    // },
    getSpots(state) {
      const q = query(collection(db, 'spots'), orderBy('spotId'))
      // console.log(q)
      onSnapshot(q, snapshot => {

        // const allId = snapshot.docs.map(doc => {
        //   return doc.data().spotId;
        // })
        // if(allId.length > 0) {
        //   state.spotId = allId.reduce((a,b)=>a>b?a:b);
        // }

        snapshot.docChanges().forEach(change => {
          if(change.type === 'added') {
            state.allSpots.push(change.doc.data())
            // console.log('added', change.doc.data())
          }
          if(change.type === 'removed') {
            const currentArray = state.allSpots.filter(spot => {
              return spot.spotId !== change.doc.data().spotId;
            })
            this.spots = currentArray;
          }
        })
      })
      // this.commit('setSpots', {datas: allSpots})
      // 最新のデータを引数に渡している
    },

    getPlans(state) {
      const q = query(collection(db, 'plans'), orderBy('planId'))
      console.log(q)
      onSnapshot(q, snapshot => {
        snapshot.docChanges().forEach(change => {
          if(change.type === 'added') {
            state.allPlans.push(change.doc.data())
            // console.log('added', change.doc.data().imgUrl)
          }
          if(change.type === 'removed') {
            const currentArray = state.allPlans.filter(plan => {
              return plan.planId !== change.doc.data().planId;
            })
            this.plans = currentArray;
          }
        })
      })
    },
    currentPlan(state) {
      state.currentPlan = 0
    }
  },
  actions: {

  },
  modules: {
  }
})
