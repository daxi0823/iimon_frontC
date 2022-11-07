<template>
  <div>
    <ul>
      <li v-for="(item, index) in leftItemList" :key="index">
        {{item.name}}
      </li>
    </ul>
    <!-- ボタン -->
    <input type="button" class="submitButton" @click="transferToRight" value="右へ移動">
    
  </div>
</template>

<script>
export default {
  data(){
    return{

    }
  },
  methods: {

  },
  computed: {
    leftItemList() {
      return this.$store.getters.leftItemList;
    },
  }
}
</script>


