<template>
  <div class="mainWrapper">
    <div class="leftWrapper">
      <div class="leftBox">
        <leftItems/>
      </div>
      <input type="button" class="submitButton" @click="transferToRight" value="右へ移動">
    </div>

    <div class="rightBox">
      <rightItems/>
      <input type="text">
    </div>


  </div>
</template>

<script>
import leftItems from "../components/leftItems.vue"
import rightItems from "../components/rightItems.vue"

export default {  
  data(){
    return {
    }
  },
  methods: {
    transferToRight() {
      console.log(leftItems.slice(-1)[0])
    }
  },
  components: {
    leftItems,
    rightItems,
  }
}
</script>

<style scoped>
.mainWrapper {
  width: 700px;
  margin: 100px auto;
  display: flex;
  justify-content: space-between;

}
/* input部分 */
.leftWrapper {
  width: 300px;
  height: 800px;
}
.leftBox, .rightBox{
  width: 300px;
  height: 700px;
  box-sizing: border-box;
  border: 1px solid navy;

  align-items: center;
}

.submitButton {
  box-sizing: border-box;
  height: 30px;
  padding: 3px;
  background-color: navy;
  color: white;
}
</style>