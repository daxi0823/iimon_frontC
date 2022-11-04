<template>
  <div class="mainWrapper">
    <input type="text" class="textSpace">
    <input type="button" class="submitButton">

    <div class="buttonWrapper">
      <div>
        <button class="buttonX">x</button>
        <p class="choices">Apple</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {  
  
}
</script>

<style scoped>
.mainWrapper {
  width: 300px;
  margin: 0 auto;

}

.textSpace {
  height: 30px;
  border: 1px solid navy;
}
.submitButton {
  height: 30px;
  background-color: navy;
  color: white;
}

.buttonX {
  box-sizing: border-box;
  height: 50px;
  width: 50px;
  border: 1px solid navy;
}
.choices {
  display: inline-block;
  box-sizing: border-box;
  height: 50px;
  width: 250px;
  border: 1px solid navy;
}
</style>