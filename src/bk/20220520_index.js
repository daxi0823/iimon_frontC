import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { db, storage } from "@/firebase/firebase";
import {
  collection,
  addDoc,
  serverTimestamp,
  onSnapshot,
  query,
  orderBy,
  where,
  deleteDoc,
  getDocs,
  doc,
} from "firebase/firestore";
import {
  getDownloadURL,
  ref,
  uploadBytesResumable,
  deleteObject,
} from "firebase/storage";

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    allSpots: [],
    allPlans: [],
  },
  getters: {
    allSpots: state => state.allSpots
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
        snapshot.docChanges().forEach(change => {
          if(change.type === 'added') {
            state.allSpots.push(change.doc.data())
            console.log('added', change.doc.data().imgUrl)
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
    }
  },
  actions: {

  },
  modules: {
  }
})
