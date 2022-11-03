<template>
  <v-container>
    <v-row justify="space-around">

      <PlanCard /><!-- plan01 -->

    </v-row>
  </v-container>
</template>


<script>
import PlanCard from '../components/PlanCard.vue'
import jsonspots from  '../assets/spots.json'
export default {
  components: {
      PlanCard,
    },
  data() {
    return {
      spots: spots,
    }
  },
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
