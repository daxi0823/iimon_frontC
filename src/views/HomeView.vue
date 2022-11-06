<template>
  <div class="mainWrapper">
    <!-- input部分 -->
    <div class="inputWrapper">
      <input type="text" class="inputBox">
      <input type="button" class="submitButton" value="追加">
    </div>

    <!-- item部分 -->
    <div class="itemWrapper" v-for="(item, index) in items" :key=index >
      <div class="itemContainer">
        <button class="buttonX">X</button>
        <div class="items">
          <span class="itemFont">{{item}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {  
  data(){
    return{
      items:["Apple", "Grape", "Strawberry"],
    }
  },
}
</script>

<style scoped>
.mainWrapper {
  width: 300px;
  margin: 100px auto;
}
/* input部分 */
.inputWrapper{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
.inputBox {
  box-sizing: border-box;
  height: 30px;
  border: 1px solid navy;
  margin-right: 20px;
  width: 100%;
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