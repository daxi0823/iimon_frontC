<template>
  <v-container>
    <v-row justify="space-around">
      <v-card class="wrapper" width="400">
        <!-- plansが取得される前に呼び出そうとしてエラーになっていた-->
        <!-- 変数で配列番号を指定する場合は、plans[0]を両方変更する -->
        <v-card-text v-if="plans[0]">
          <v-timeline align-top dense>
            <!-- plansのIDには、currentplanidなりを渡す -->
            <!-- 同じ場所を複数回指定されても良いように、indexを渡す -->
            <v-timeline-item
              v-for="(spot, index) in plans[0].spotId"
              :key="index"
              small
            >
              <v-card>
                <!-- spotには数字(spotId)が入っている -->
                <v-img
                  :src="getSpotData(spot).spotImgUrl"
                  class="white--text align-end"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                  height="100px"
                >
                  <v-card-title
                    v-text="getSpotData(spot).spotName"
                  ></v-card-title>
                </v-img>
              </v-card>
            </v-timeline-item>
          </v-timeline>
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      // 0523 仮置き、ここで指定したPlanIdの情報を読み取る
      // vuexで指定した方がよいかも
      nowPlanId: 0,
    };
  },
  computed: {
    // allspotsは
    spots() {
      return this.$store.state.allSpots;
      // console.log(spots)
    },
    plans() {
      return this.$store.state.allPlans;
    },
  },
  mounted() {
    this.$store.commit("getSpots")
    this.$store.commit("getPlans")
  },
  // 0523 plansにある、
  methods: {
    getSpotData(spotid) {
      const result = this.spots.find((item) => {
        return item.spotId === spotid;
      });
      console.log(result);
      return result;
    },
  },
};
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