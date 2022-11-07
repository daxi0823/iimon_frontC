<template>
  <div class="mainWrapper">
    <div class="leftBox">
      <leftItems/>
    </div>
    <div class="rightBox">
      <rightItems/>
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
}
/* input部分 */
.leftBox .rightBox{
  box-sizing: border-box;
  width: 300px;
  border: 1px solid navy;

  display: flex;
  justify-content: space-between;
  align-items: center;
}
.inputBox {
  box-sizing: border-box;
  height: 30px;
  border: 1px solid navy;
  margin-right: 10px;
}
.submitButton {
  box-sizing: border-box;
  height: 30px;
  padding: 3px;
  background-color: navy;
  color: white;
}
/* item部分 */
.itemContainer {
  display: flex;
  align-items: center;
  box-sizing: border-box;
  height: 50px;
  border: 1px solid navy;
  margin-bottom: 3px;
}
.buttonX {
  box-sizing: border-box;
  height: 50px;
  width: 50px;
  border-right: 1px solid navy;
  background-color: navy;
  color: white;
}
.items {
  display: inline-block;
  box-sizing: border-box;
  width: 250px;
}
.itemFont {
  font-size: 16px;
  padding-left: 20px;
}
</style>