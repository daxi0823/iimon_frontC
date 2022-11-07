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


</style>