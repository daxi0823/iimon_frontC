<template>
  <v-container class="wrapper">
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="spotName"
        :rules="inputRules"
        label="スポット名"
        required
      ></v-text-field>

      <v-select
        v-model="spotType"
        :items="types"
        :rules="selectRules"
        label="スポットタイプ"
        required
      ></v-select>

      <v-text-field
        v-model="spotAddress"
        :rules="inputRules"
        label="住所"
        required
      ></v-text-field>

      <v-container class="timepickerContainer">
        <vue-timepicker
          id="openTime"
          v-model="spotOpen"
          minute-interval="10"
          placeholder="10:00"
          hour-label="時"
          minute-label="分"
          input-width="100px"
          advanced-keyboard
          manual-input
          auto-scroll
          close-on-complete
        >
        </vue-timepicker
        >〜
        <vue-timepicker
          id="closeTime"
          v-model="spotClose"
          minute-interval="10"
          placeholder="19:00"
          hour-label="時"
          minute-label="分"
          input-width="100px"
          advanced-keyboard
          manual-input
          auto-scroll
          close-on-complete
        >
        </vue-timepicker>
      </v-container>
      <v-textarea
        v-model="spotIntro"
        :rules="inputRules"
        label="紹介文"
        required
        auto-grow
        rows="3"
      ></v-textarea>

      <v-file-input
        placeholder="写真投稿"
        v-model="spotImage"
        show-size
        truncate-length="15"
        ref="imgUp"
        id="fileImg"
        input-width="100px"
      ></v-file-input>

      <v-btn @click="imgUpload">写真アップロード</v-btn>

      <v-checkbox
        v-model="checkbox"
        label="他ユーザーの編集を許可"
      ></v-checkbox>
      <v-btn
        :disabled="!valid"
        color="success"
        class="mr-4"
        @click="
          validate();
          addSpot();
        "
      >
        <v-icon left dark> mdi-cloud-upload </v-icon>
        登録
      </v-btn>

      <v-btn color="error" class="mr-4" @click="reset">
        消去
      </v-btn>

      <!-- <v-text-field
        v-model.number="deleteId"
        label="削除するspotのID"
        required
      ></v-text-field>
      <v-btn @click="deleteSpot(spot.spotId, spot.spotImgFile)">
        データ削除
      </v-btn> -->
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

import VueTimepicker from "vue2-timepicker/src/vue-timepicker.vue";

export default {
  data() {
    return {
      valid: true,
      inputRules: [(v) => !!v || "入力してください"],
      types: ["観光地", "体験", "ご飯", "カフェ", "その他"],
      selectRules: [(v) => !!v || "選択してください"],
      select: null,
      checkbox: false,

      spotId: 0,
      spotName: "",
      spotType: "",
      spotAddress: "",
      spotOpen: "",
      spotClose: "",
      spotIntro: "",
      spotImgUrl: "",
      spotImgFile: "",
      spotImage: [],
      deleteId: 0,
    };
  },
  components: {
    "vue-timepicker": VueTimepicker,
  },
  mounted() {
    // mountedなので、立ち上げるたびにサーバーを読み込む
    const q = query(collection(db, "spots"), orderBy("spotId"));
    onSnapshot(q, (snapshot) => {
      //dBのすべてのspotIdを取得
      const allId = snapshot.docs.map((doc) => {
        return doc.data().spotId;
      });
      //現在最大値のID番号を代入
      if (allId.length > 0) {
        this.spotId = allId.reduce((a, b) => (a > b ? a : b));
      }
    });
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
    addSpot() {
      addDoc(collection(db, "spots"), {
        spotId: (this.spotId += 1),
        spotName: this.spotName,
        spotType: this.spotType,
        spotAddress: this.spotAddress,
        spotOpen: this.spotOpen,
        spotClose: this.spotClose,
        spotIntro: this.spotIntro,
        created: serverTimestamp(),
        spotImgUrl: this.spotImgUrl,
        spotImgFile: this.spotImgFile,
      })
        .then((doc) => {
          console.log(`スポットの登録に成功しました（${doc.id}）`);
          //追加に成功したら入力データを空にする
          this.spotName = "";
          this.spotType = [];
          this.spotAddress = "";
          this.spotOpen = "";
          this.spotClose = "";
          this.spotIntro = "";
          this.spotImage = [];
        })
        .catch((error) => {
          //エラー時の処理
          console.log(`スポットの登録に失敗しました（${error}）`);
        });
    },

    //firestoreのデータを削除
    async deleteSpot(id, photo) {
      //削除ボタンをクリックした商品データをfirestore内から削除
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
        console.log("インデックス", id);
      }
    },

    imgUpload() {
      //画像ファイルへの参照を作成
      const userImageRef = ref(storage, `images/${this.spotImage.name}`);
      //画像ファイルのアップロードメソッド
      uploadBytesResumable(userImageRef, this.spotImage).then((snapshot) => {
        console.log("Uploaded a blob or file!", snapshot);
        getDownloadURL(snapshot.ref)
          .then((downloadURL) => {
            //firestoreにURLとファイル名を保存するため
            this.spotImgUrl = downloadURL;
            this.spotImgFile = this.spotImage.name;
            console.log("Success!", this.spotImage.name, downloadURL);
          })
          .catch((error) => {
            console.error(error);
          });
      });
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
