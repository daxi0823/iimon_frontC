<template>
<div>
  <!-- <v-form ref="form" lazy-validation> -->
    <v-file-input v-model="image"></v-file-input>
    <!-- <button @click="imgUpload">アップロード</button> -->
    <button @click="post">アップロード</button>
  <!-- </v-form> --></div>
</template>

<script>
export default {
  data() {
    return {
      image: [],
    };
  },

  methods: {
    post() {
      console.log(this.image)
    //   //画像はFormDataで送る
    //   var formData = new FormData();
    //   formData.append("image", this.image);
    //   //ContentTypeを変える
    //   const config = {
    //     header: {
    //       "Content-Type": "multipart/form-data",
    //     },
    //   };
    //   //axiosで送信する
    //   axios
    //     .post("post", formData, config)
    //     .then((response) => console.log(response))
    //     .catch((error) => console.log(error));
    },
  },
};
</script>