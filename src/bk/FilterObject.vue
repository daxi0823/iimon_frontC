<template>
  <div>
    <div v-for="(js, index) in objInArray" :key="index">
      {{ index }} {{ js[1].name }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      obj: {
        '1': { id: 1, name: 'javascript' },
        '2': { id: 2, name: 'vue.js'},
        '3': { id: 3, name: 'react'},
        '4': { id: 4, name: 'angular'},
        '5': { id: 5, name: 'vue.js'},
        '6': { id: 6, name: 'angular'},
        '7': { id: 7, name: 'vue.js'}
      }
    };
  },
  computed: {
    objInArray() {
      this.objectOperation();
      return this.obj;
    },
  },
  methods: {
    objectOperation() {
      const arr = Object.entries(this.obj);
      console.log(arr);
      const result = arr.filter(([id, value]) => {
        console.log(id);
        return value.name === "vue.js";
      });
      this.obj = result;
    },
  },
    mounted() {
    this.$store.commit("getSpots");
  },
};
</script>
