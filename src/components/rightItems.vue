<template>
  <div class="contentBox">
    <div v-for="(item, index) in rightItems" :key="index">
      {{item.name}}
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{

    }
  },
  methods: {

  },
  computed: {
    rightItems() {
      return this.$store.getters.rightItems;
    },
  }
}
</script>

<style scoped>
</style>
