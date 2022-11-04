<template>
  <v-app class="container">
    <router-view />
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
  }),
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
  margin: 0;
}


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
