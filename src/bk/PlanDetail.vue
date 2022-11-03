<template>
  <v-timeline align-top dense>
    
    <v-timeline-item
      v-for="(spot, index) in spots"
      :key="index"
      :color="spot.color"
      small
    >
      <v-card>
        <v-img
          :src="spot.img"
          class="white--text align-end"
          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
          height="200px"
        >
          <v-card-title>{{ spot.name }}</v-card-title>
        </v-img>
        <v-card-text>
          <ul class="my-4 text-subtitle-1 spotinfo">
            <li>{{ spot.address }}</li>
            <li>営業時間：{{ spot.hours }}</li>
          </ul>
          <p>{{ spot.intro }}</p>
        </v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
export default {
  data() {
    return {

    };
  },
  computed: {
    spots() {
      return this.$store.state.spots
    }
  }
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
.spotinfo {
  list-style: none;
}
</style>
