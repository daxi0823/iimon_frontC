<template>
  <div class="mainWrapper">
    <div class="leftWrapper">
      <div class="leftBox">
        <leftBox/>
      </div>
    </div>

    <div class="rightBox">
      <rightBox/>
    </div>


  </div>
</template>

<script>
import leftBox from "../components/leftIBox.vue"
import rightBox from "../components/rightBox.vue"

export default {  
  data(){
    return {
    }
  },
  methods: {
  },
  components: {
    leftBox,
    rightBox,
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