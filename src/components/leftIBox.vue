<template>
  <div>
    <div class="mainWrapper">
      <div class="itemContainer" v-for="(item, index) in leftItems" :key="index">
        <span class="itemBlock">{{item}}</span>
      </div>
    </div>
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
  height: 500px;
  display: flex;
  flex-flow: column;
  align-items: center;
  box-sizing: border-box;
  border: 1px solid navy;
}
.itemContainer {
  width: 80%;
}
.itemBlock {
  display: block;
  width: 100%;
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid navy;
  text-align: center;
  font-size: 16px;
}
.submitButton {
  display: block;
  box-sizing: border-box;
  width: 150px;
  height: 40px;
  padding: 3px;
  margin: 30px auto;
  background-color: navy;
  color: white;
}
</style>
