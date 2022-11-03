<template>
  <v-container>
    <v-row justify="space-around"
      >
      <v-card v-for="(plan, index) in plans" :key="index" class="wrapper" width="400">{{ plan.planId }}
        <p v-for="(spot, index) in plan.spotId" :key="index">{{ spot }}</p>
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
    // currentPlan() {
    //   return this.$store.state.currentPlan;
    // }
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