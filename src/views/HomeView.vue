<template>
  <div class="mainWrapper">
    <rightItems/>

  </div>
</template>

<script>
import rightItems from "../components/rightItems.vue"
export default {  
  data(){
    return {
    }
  },
  methods: {

  },
  components: {
    rightItems,
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