<template>
  <div>
    <ul>
      <li>{{rightItems.name}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){

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


