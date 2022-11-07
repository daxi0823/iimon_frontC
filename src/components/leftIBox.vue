<template>
  <div>
    <ul>
      <li v-for="(item, index) in leftItems" :key="index">
        {{item}}
      </li>
    </ul>
    <!-- ボタン -->
    <input type="button" class="submitButton" @click="leftButton" value="右へ移動">
  </div>
</template>

<script>
export default {
  data(){
    return{

    }
  },
  methods: {
    leftButton() {
      this.$store.commit('leftButton')
    }
  },
  computed: {
    leftItems() {
      return this.$store.state.leftItems;
    },
  }
}
</script>


