<template>
  <div>
    <div class="mainWrapper" v-for="(item, index) in leftItems" :key="index">
      <div class="item">{{item}}</div>
    </div>
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

<style scoped>
.mainWrapper {
  width: 300px;
  height: 800px;
  display: flex;
  flex-flow: column;
  align-items: center;
  box-sizing: border-box;
  border: 1px solid navy;
}
.item{
  width: 80%;
  height: 50px;
  font-size: 16px;

}
.submitButton {
  box-sizing: border-box;
  height: 30px;
  padding: 3px;
  background-color: navy;
  color: white;
}
</style>
