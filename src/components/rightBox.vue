<template>
  <div>
    <ul>
      <li v-for="(item, index) in rightItems" :key="index">
        <div class="items">{{item}}</div>
      </li>
    </ul>
    <!-- ボタン -->
    <input type="button" class="submitButton" @click="rightButton" value="左へ移動">
  </div>
</template>

<script>
export default {
  data(){
    return{

    }
  },
  methods: {
    rightButton() {
      this.$store.commit('rightButton')
    }
  },
  computed: {
    rightItems() {
      return this.$store.state.rightItems;
    },
  }
}
</script>

<style scoped>



</style>
