<template>
  <div>
    <ul>
      <li>{{rightItems}}</li>
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


