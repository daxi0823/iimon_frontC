<template>
  <v-card class="mx-auto" width="100%" max-width="375">
    <v-container fluid>
      <v-row dense>
        <v-col v-for="(spot, spotId) in spots" :key="spotId" :cols="spot.flex">
          <v-card>
            <v-img
              :src="spot.spotImgUrl"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title v-text="spot.spotName"></v-card-title>
            </v-img>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>mdi-bookmark</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>mdi-share-variant</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
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


export default {
  data() {
    return {
    }
  },
  computed: {
    spots() {
      return this.$store.getters.allSpots
    },
  },
  mounted() {
    this.$store.commit('getSpots')
    // const q = query(collection(db, 'spots'))
    // onSnapshot(q, snapshot => {
    //   snapshot.docChanges().forEach(change => {
    //     console.log(change.doc.data())
    //     this.spots.push(change.doc.data())
    //   })
    // })
  }
}
</script>


<style scoped>
.wrapper {
  max-width: 373px;
  width: 100%;
}
.cv {
  width: 100%;
  max-width: auto;
  height: auto;
}
</style>
