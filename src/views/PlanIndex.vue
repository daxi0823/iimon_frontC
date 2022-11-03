<template>
  <v-card class="mx-auto" max-width="375px">
    <v-row justify="space-around">
      <v-card v-for="(plan, index) in plans" :key="index" class="plancard">
        <v-card v-for="(spot, index) in plan.spotId" :key="index" justify="space-around">
          <span v-if="getSpotData(spot)">
          <v-img
            :src="getSpotData(spot).spotImgUrl"
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="100px"
            max-width="375px"
          >
          

          <v-card-text>
            {{ getSpotData(spot).spotName }}
          </v-card-text>
          </v-img>
          </span>
        </v-card>
      </v-card>
    </v-row>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  computed: {
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
  },
};
</script>

<style scoped>
.wrapper {
  max-width: 100%;
}
</style>