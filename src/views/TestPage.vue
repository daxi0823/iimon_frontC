<template>
  <v-container>
    <v-row justify="space-around">

      <TestComponent /><!-- plan01 -->

    </v-row>
  </v-container>
</template>


<script>
import PlanCard from '../components/PlanCard.vue'
import TestComponent from '../components/TestComponent.vue'

export default {
  components: {
      PlanCard,
      TestComponent
    },
  data() {
    return {
    }
  },
}
</script>

<style scoped>
.wrapper {
  max-width: 375px;
  width: 100%;
}
</style>
