<template>
  <div>
    <ul>
      <li v-for="(item, index) in rightItems" :key="index">
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
    rightItems() {
      return this.$store.getters.rightItems;
    },
  }
}
</script>


