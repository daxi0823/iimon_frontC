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
  justify-content: space-between;

}
/* input部分 */
.leftBox .rightBox{
  box-sizing: border-box;
  width: 300px;
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