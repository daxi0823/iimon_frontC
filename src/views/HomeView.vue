<template>
  <v-container class="homeWrapper">

    <v-container class="contentsWrapper">
      <v-container class="titleWrapper">
        <h1 id="title">Dating</h1>
      </v-container>

      <v-container class="buttonWrapper">
        <v-row justify="center">
          <v-btn display="block" width="80%" margin-bottom="10px" @click="planindex">デートプランを探す</v-btn>
          <v-btn display="block" width="80%" @click="planregister">デートプランを作る</v-btn>
          <v-btn display="block" width="80%" disabled>Googleでログイン<br />（開発中）</v-btn>
        </v-row>
      </v-container>
    </v-container>

    <video
      src="../../public/VideoTopCompressed.mp4"
      preload="auto"
      autoplay
      loop
      muted
      playsinline
    />
  </v-container>
</template>

<script>
export default {
  data() {
    return {

    };
  },
    methods: {
    planindex() {
      this.$router.push("/planindex");
    },
    planregister() {
      this.$router.push("/planregister");
    },
  },
}
</script>


<style scoped>
/*=========================
  Google fonts
=========================*/
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Fredoka+One&display=swap');


#title {
  z-index: 1;
  color: #fff;
  text-shadow: 0 0px 5px rgba(0, 0, 0, 0.5);
  letter-spacing: 1px;
  margin: 10px;
  font-size: 4em;
  font-weight: 600;
  font-family: 'DM Serif Display', serif;

}

.homeWrapper {
  position: relative;
  height: 100vh;
  overflow: hidden;
  opacity: 0.01;
  animation: load 1.5s 0.8s ease-out forwards;
}
.homeWrapper video {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: 100%;
  height: 100%;
  z-index: -1000;
  overflow: hidden;
  object-fit: cover;
  transform: translate(-50%, -50%) scale(1.05);
  z-index: -1;
}

@keyframes load {
  100% {
    opacity: 1;
  }
}
.buttonWrapper {
  display: table;
  width: 100%;
  position: relative;
  height: 100%;
}
.buttonWrapper > div {
  display: table-cell;
  vertical-align: middle;
  position: relative;
  text-align: center;
}

</style>
