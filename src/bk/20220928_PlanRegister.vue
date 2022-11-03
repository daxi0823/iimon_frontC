<template>
  <v-container class="wrapper">
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="planName"
        :rules="inputRules"
        label="プラン名"
        required
      ></v-text-field>

      <v-card
      block
      height="200px"
      width="80%"
      @click="selectSpot">
        <v-icon>mdi-plus-circle-outline</v-icon>
        <br>
        スポットを選択
      </v-card>

      <v-btn
        :disabled="!valid"
        color="success"
        class="mr-4"
        @click="
          validate();
          addSpot();
        "
      >
        登録
      </v-btn>

      <v-btn color="error" class="mr-4" @click="reset">
        全て消去
      </v-btn>


    </v-form>
  </v-container>
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
      spots: [],
      planName: '',

      valid: true,
      inputRules: [(v) => !!v || "入力してください"],
      selectRules: [(v) => !!v || "選択してください"],
      select: null,
      checkbox: false,
    };
  },

  mounted(){
    // mountedなので、立ち上げるたびにサーバーを読み込む
    const q = query(collection(db, 'spots'), orderBy('spotId'))
    onSnapshot(q, snapshot => {
      //dBのすべてのspotIdを取得
      const allId = snapshot.docs.map(doc => {
        return doc.data().spotId;
      })
      //現在最大値のID番号を代入
      if(allId.length > 0) {
        this.spotId = allId.reduce((a,b)=>a>b?a:b);
      }
    })
  },

  methods: {
    // バリデーション系
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },

    // スポット登録
    selectSpot() {
      this.spots.push()
    },


    //firestoreのデータを削除
    async deleteSpot(id, photo) {
      const delQuery = query(
        collection(db, "spots"),
        where("spotId", "==", id)
      );
      const delSnapshot = await getDocs(delQuery);
      delSnapshot.forEach((delSnap) => {
        console.log(doc.id, " => ", doc.data());
        console.log(delSnap.id);
        deleteDoc(doc(db, "spots", delSnap.id));
      });
      //storage内の画像データも同時に削除
      if (photo) {
        const delPhotoRef = ref(storage, `images/${photo}`);
        deleteObject(delPhotoRef)
          .then(() => {
            console.log("Photo deleted successfully");
          })
          .catch((error) => {
            console.log("Error Photo deleted", error);
          });
        console.log('インデックス',id);
      }
    },
  },
};
</script>

<style scoped>
.wrapper {
  margin: 10px;
  max-height: 100vh;
  max-width: 100vw;
}
</style>

