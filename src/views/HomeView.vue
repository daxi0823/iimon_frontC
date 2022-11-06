<template>
  <div class="mainWrapper">
    <!-- input部分 -->
    <div class="inputWrapper">
      <input type="text" class="inputBox" v-model="inputName">
      <input type="button" class="submitButton" @click="addItem" value="追加">
    </div>

    <!-- item部分 -->
    <div class="itemWrapper" v-for="(item, id) in items" :key=id >
      <div class="itemContainer">
        <button class="buttonX" @click="deleteItem(item.id)">X</button>
        <div class="items">
          <span class="itemFont">{{item.name}}</span>
        </div>
      </div>
    </div>
    <!-- "Apple", "Grape", "Strawberry" -->
  </div>
</template>

<script>
export default {  
  data(){
    return {
      items:[
        {id: 1, name: "Apple"},
        {id: 2, name: "Grape"},
        {id: 3, name: "Strawberry"},
      ],
      currentId: 4,
    }
  },
  methods: {
    addItem() {
      this.items.push({
        id: this.currentId,
        name: this.inputName,
      });
      currentId++
    },
    deleteItem(id){
      this.items.splice(this.id, 1);
    }
  }
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
  margin-right: 10px;
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