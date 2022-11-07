<template>
  <div>
    <ul>
      <li v-for="(item, index) in leftItems" :key="index">
        {{item.name}}
      </li>
    </ul>
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
    leftItems() {
      return this.$store.getters.leftItems;
    },
  }
}
</script>


