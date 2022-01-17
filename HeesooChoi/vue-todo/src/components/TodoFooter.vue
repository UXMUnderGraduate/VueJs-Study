<template>
  <div class="clearAllContainer">
    <span class="clearAllBtn" v-on:click="clearTodo">Clear All</span>
  </div>
</template>

<script>
export default {
  methods: {
    clearTodo() {
      this.$store.commit('clearAllItems');
    }
  }
}
</script>

<style scoped>
.clearAllContainer {
  width: 8.5rem;
  height: 50px;
  line-height: 50px;
  background-color: rgb(235, 160, 160);
  border-radius: 5px;
  margin: 0 auto;
}
.clearAllBtn {
  color: #000000;
  display: block;
}
</style>