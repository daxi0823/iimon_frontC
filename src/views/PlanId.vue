<template>
  <v-container>
    <v-row>
      <v-card class="mx-auto" max-width="375">
        <v-card-text v-if="plans[$route.params.planId]">
          <v-timeline align-top dense>
            <!-- plansのIDには、currentplanidなりを渡す -->
            <!-- 同じ場所を複数回指定されても良いように、indexを渡す -->
            <v-timeline-item
              v-for="(spot, index) in plans[$route.params.planId].spotId"
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
  methods: {
    getSpotData(spotid) {
      const result = this.spots.find((item) => {
        return item.spotId === spotid;
      });
      console.log(result);
      return result;
    },
    currentPlan() {
      currentPlanId = plans[0]
      console.log(currentPlan)
    }
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