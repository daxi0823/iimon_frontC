<template>
  <v-container fluid>
    <v-row justify="center">
      <!-- 入力フォーム -->
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field
          v-model="planName"
          :rules="inputRules"
          label="プラン名"
          required
        ></v-text-field>

        <!-- dialogで選択されたspotを表示 -->
        <v-col v-for="(spot, index) in spotIds" :key="index">
          <v-card>
            <v-img
              :src="getSpotData(spot).spotImgUrl"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="100px"
              max-width="375px"
            >
              <v-card-title v-text="getSpotData(spot).spotName"></v-card-title>
            </v-img>
          </v-card>
        </v-col>


        <!-- dialogを開くカード -->
        <v-card @click.stop="dialog = true" >
          <v-icon class="mx-auto">mdi-plus-circle-outline</v-icon>
          <br>
          スポットを選択
        </v-card>

        <!-- 登録ボタン -->
        <v-btn
          :disabled="!valid"
          color="success"
          class="mr-4"
          @click="
            validate();
            addPlan();
          "
        >
          <v-icon left dark> mdi-cloud-upload </v-icon>
          登録
        </v-btn>
      </v-form>


      <!-- dialog -->
      <v-dialog
        v-model="dialog"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
      >
        <!-- <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" dark v-bind="attrs" v-on="on">
            <v-icon>mdi-plus-circle-outline</v-icon>
          </v-btn>
        </template> -->

        <v-card>
          <v-toolbar dark color="primary">
            <v-btn icon dark @click="dialog = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-toolbar-title>Settings</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
              <v-btn dark text @click="dialog = false"> Save </v-btn>
            </v-toolbar-items>
          </v-toolbar>

          <v-card class="mx-auto" width="100%" max-width="375">
            <v-container fluid>
              <v-row dense>
                <v-col
                  v-for="(spot, spotId) in spots"
                  :key="spotId"
                  :cols="spot.flex"
                >
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
                      <v-btn icon @click="chooseSpot(spotId)" v-model="selectedId">
                        <v-icon>mdi-plus-circle</v-icon>
                      </v-btn>
                      <v-btn icon>
                        <v-icon>mdi-heart</v-icon>
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-card>
      </v-dialog>
    </v-row>
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
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false,
      spotIds: [],
      selectedId: "",
      planName: '',

      planId: 0,

      // validation
      valid: true,
      inputRules: [(v) => !!v || "入力してください"],
      selectRules: [(v) => !!v || "選択してください"],
    };
  },
  methods: {
    chooseSpot(spotId) {
      this.spotIds.push(spotId);
      console.log(this.spotIds);
    },
    getSpotData(spotid) {
      const result = this.spots.find((item) => {
        return item.spotId === spotid + 1;
      });
      // console.log(spotid);
      // console.log(result);
      return result;
    },

    // プラン登録
    addPlan() {
      addDoc(collection(db, "plans"), {
        planId: (this.planId += 1),
        planName: this.planName,
        spotId: this.spotIds,
        created: serverTimestamp(),
      })
            .then((doc) => {
          console.log(`プランの登録に成功しました（${doc.id}）`);
          //追加に成功したら入力データを空にする
          this.planName = "";
          this.spotIds = [];
        })
        .catch((error) => {
          //エラー時の処理
          console.log(`プランの登録に失敗しました（${error}）`);
        });
    },
    validate() {
      this.$refs.form.validate();
    },
  },
  computed: {
    spots() {
      return this.$store.getters.allSpots;
    },
  },
  mounted() {
    this.$store.commit("getSpots");

    // planId指定用
    const q = query(collection(db, "plans"), orderBy("planId"));
    onSnapshot(q, (snapshot) => {
      const allId = snapshot.docs.map((doc) => {
        return doc.data().planId;
      });
      if (allId.length > 0) {
        this.planId = allId.reduce((a, b) => (a > b ? a : b));
      }
    });
  },
};
</script>
