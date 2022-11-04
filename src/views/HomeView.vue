<template>
  <div class="mainWrapper">
    <input type="text" class="textSpace">
    <input type="button" class="submitButton" value="追加">

    <div class="buttonWrapper">
      <div class="buttonContainer">
        <button class="buttonX">x</button>
        <div class="choices">
          <span>Apple</span>
        </div>
      </div>

            <div class="buttonContainer">
        <button class="buttonX">x</button>
        <div class="choices">
          <span>Grape</span>
        </div>
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

.buttonContainer {
  height: 50px;

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