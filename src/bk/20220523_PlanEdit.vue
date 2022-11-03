<template>
  <v-container>
    <v-row justify="space-around"><!-- content01 -->
      <v-card class="wrapper" width="400">
        <p>{{ plans }}</p>
        <v-card-text>
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
                  <v-card-title v-text="spot.name"></v-card-title>
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
    }
  },
  computed: {
    spots() {
      return this.$store.state.allSpots
      console.log(spots)
    },
    plans() {
      return this.$store.state.allPlans
    }
  },
    mounted() {
    this.$store.commit('getSpots'),
    this.$store.commit('getPlans')
    }
}
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