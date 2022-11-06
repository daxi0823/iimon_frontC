<template>
  <div class="mainWrapper">

  <div class="inputWrapper">
    <input type="text" class="textSpace">
    <input type="button" class="submitButton" value="追加">
  </div>

    <div class="itemWrapper" v-for="(item, index) in items" :key=index >
      <div class="itemContainer">
        <button class="buttonX itemFont ">X</button>
        <div class="items">
          <span class="choiceFont">{{item}}</span>
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
  margin: 0 auto;
}
.inputWrapper{
  display: flex;
  margin-bottom: 20px;
}

.textSpace {
  box-sizing: border-box;
  height: 30px;
  border: 1px solid navy;
}
.submitButton {
  box-sizing: border-box;
  height: 30px;
  background-color: navy;
  color: white;
}

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