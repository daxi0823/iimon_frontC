<template>
  <v-app class="container">
    <v-toolbar color="indigo" dark width="375" height="56" class="flex-grow-0 toolbar">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>Discovery</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-toolbar>
    <!-- <LogInComp /> -->
    <router-view />
  </v-app>
</template>

<script>

export default {
  name: "App",

  data: () => ({
  }),
  // mounted() {
  //   this.$store.commit("getSpots")
  //   this.$store.commit("getPlans")
  // },
  components: {
  }
};
</script>

<style scoped>
/*=========================
  CSS初期化
=========================*/
.container {
  padding: 0;
}

.toolbar {
  margin: 0 auto;
}

/*=========================
  Google fonts
=========================*/
@import url('https://fonts.googleapis.com/css2?family=Passions+Conflict&display=swap');


/*=========================
  Media Query
=========================*/
/*スマホ大、横向き〜 */
/* @media (min-width: 576px) {
  .container {
    max-width: 540px;
  }
} */
/*　タブレット 〜 */
/* @media (min-width: 768px) {
  .container {
    max-width: 720px;
  }
} */
/*　PC 〜 */
/* @media (min-width: 992px) {
  .container {
    max-width: 960px;
  }
} */
/*　PC大 〜 */
/* @media (min-width: 1200px) {
  .container {
    max-width: 1140px;
  }
} */
</style>
