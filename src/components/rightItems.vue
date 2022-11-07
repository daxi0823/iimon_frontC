<template>
  <div class="contentBox">
    <div v-for="(item, index) in rightItemList" :key="index">
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
    rightItemList() {
      return this.$store.getters.rightItemList;
    },
  }
}
</script>

<style scoped>
</style>
