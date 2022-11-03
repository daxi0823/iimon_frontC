<template>
  <v-container>
  <v-card class="mx-auto" max-width="375px" v-for="(plan, index) in plans" :key="index">
      <v-card-title>{{plan.planName}}</v-card-title>

      <v-timeline align-top dense>
        <v-timeline-item v-for="(spot, index) in plan.spotId" :key="index" justify="space-around">
          <span v-if="getSpotData(spot)">
          <v-card>
            <v-img
            :src="getSpotData(spot).spotImgUrl"
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="100px"
            max-width="375px"
            >
              <!-- <v-card-title v-text="spot.spotName"></v-card-title> -->
                        <v-card-text>
            {{ getSpotData(spot).spotName }}
          </v-card-text>
            </v-img>
          </v-card>
          </span>
        </v-timeline-item>
      </v-timeline>
  </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'PlanCard',
    computed: {
    spots() {
      return this.$store.getters.allSpots
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
