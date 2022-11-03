<template>
  <v-card class="wrapper" width="400">

    <v-card-text>
      <v-card-title>Plan1</v-card-title>

      <v-timeline align-top dense>
        <v-timeline-item
          v-for="(spot, spotId) in spots"
          :key="spotId"
          small
        >
          <v-card>
            <v-img
              :src="spot.spotImgUrl"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="100px"
            >
              <v-card-title v-text="spot.spotName"></v-card-title>
            </v-img>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'PlanCard',
    computed: {
    spots() {
      return this.$store.getters.allSpots
    }
  },
    mounted() {
    this.$store.commit('getSpots')
  }
};
</script>
