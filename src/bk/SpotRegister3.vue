<template>
  <div id="main__wrapper">
    <main>
      <section id="mv" class="mv__less">
        <div class="copy__wrapper">
          <h2 class="mv__ttl">メニュー登録</h2>
          <h3>Save On firebase</h3>
          <label>メニュー名：<input v-model="menuName" type="text" /></label>

          <label
            >メニュー画像：<input ref="imgUp" type="file" id="fileImg"
          /></label>
          <button @click="imgUpload">アップロード</button>

          <label
            >メニュー説明：<textarea
              v-model="menuTxt"
              cols="30"
              rows="10"
            ></textarea>
          </label>
          <button @click="addMenu" class="btn_confirm">データ登録</button>
          <h2 class="mv__ttl">登録済メニューリスト</h2>
          <ul class="registered__menus">
            <li v-for="(menu, index) in menus" :key="index">
              <h3 v-if="menu.menuName" class="mv__ttl mv__ttl__menu">
                {{ menu.menuName }}
              </h3>
              <p v-if="menu.menuImgUrl">
                <img :src="menu.menuImgUrl" alt="" />
              </p>
              <p v-if="menu.menuTxt">{{ menu.menuTxt }}</p>
              <button @click="removeMenu(menu.menuId, menu.menuImgFile)">
                データ削除
              </button>
            </li>
          </ul>
        </div>
        <!--copy__wrapper-->
      </section>
      <!--mv-->
    </main>
  </div>
  <!--main_wrapper-->
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
      menuId: 0, //メニューID
      menuName: "", //メニュー名
      menuTxt: "", //メニュー説明文
      menuImgUrl: "", //メニュー画像URL
      menuImgFile: "", //メニュー画像ファイル名
      file: "", //メニュー画像ファイル
      menus: [], //描画用データ

    };
  },

  mounted() {
    //firestore内のデータの変化を受け取り、描画用データmenusに反映
    const q = query(collection(db, "menus"), orderBy("menuId"));
    onSnapshot(q, (snapshot) => {
      //dBのすべてのmenuIdを取得
      const allId = snapshot.docs.map((doc) => {
        return doc.data().menuId;
      });
      //現在最大値のID番号を代入
      if (allId.length > 0) {
        this.menuId = allId.reduce((a, b) => (a > b ? a : b));
      }
      snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
          this.menus.push(change.doc.data());
          console.log("added", change.doc.data());
        }
        if (change.type === "removed") {
          console.log("Removed", change.doc.data());
          const currentArry = this.menus.filter((menu) => {
            return menu.menuId !== change.doc.data().menuId;
          });
          this.menus = currentArry;
        }
      });
    });
  },
  methods: {

    // post() {
    //   console.log(this.image)
    // },

    //firestoreにデータを追加
    addMenu() {
      addDoc(collection(db, "menus"), {
        menuId: (this.menuId += 1),
        menuName: this.menuName,
        menuTxt: this.menuTxt,
        created: serverTimestamp(),
        menuImgUrl: this.menuImgUrl,
        menuImgFile: this.menuImgFile,
      })
        .then((doc) => {
          console.log(`データ追加に成功しました（${doc.id}）`);
          //追加に成功したら入力データを空にする
          this.menuName = "";
          this.menuTxt = "";
          this.file = "";
          const menuImgUrlRemain = document.getElementById("fileImg");
          menuImgUrlRemain.value = "";
        })
        .catch((error) => {
          //エラー時の処理
          console.log(`データ追加に失敗しました（${error}）`);
        });
    },
    //firestoreのデータを削除
    async removeMenu(id, photo) {
      //削除ボタンをクリックした商品データをfirestore内から削除
      const delQuery = query(
        collection(db, "menus"),
        where("menuId", "==", id)
      );
      const delSnapshot = await getDocs(delQuery);
      delSnapshot.forEach((delSnap) => {
        // console.log(doc.id, " => ", doc.data());
        console.log(delSnap.id);
        deleteDoc(doc(db, "menus", delSnap.id));
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
        // console.log('インデックス',id);
      }
    },
    //画像データをアップロード
    imgUpload() {
      //ファイルの取得
      this.file = this.$refs.imgUp.files[0];
      //画像ファイルへの参照を作成
      const userImageRef = ref(storage, `images/${this.file.name}`);
      //画像ファイルのアップロードメソッド
      uploadBytesResumable(userImageRef, this.file).then((snapshot) => {
        console.log("Uploaded a blob or file!", snapshot);
        getDownloadURL(snapshot.ref)
          .then((downloadURL) => {
            //firestoreにURLとファイル名を保存するため
            this.menuImgUrl = downloadURL;
            this.menuImgFile = this.file.name;
            console.log("Success!", downloadURL);
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
label {
  text-align: left;
  margin-top: 40px;
}
.mv__ttl__menu {
  color: orange;
  font-size: 4.6rem;
}
.btn_confirm {
  background-color: orange;
  color: #fff;
  font-size: 24px;
  margin-bottom: 100px;
}
.registered__menus li {
  margin-top: 60px;
  text-align: left;
  padding: 0 10%;
}
.registered__menus li p {
  font-size: 1.8rem;
}
</style>
