<template>
  <h1>Vue3</h1>
  <vue3Message msg="Welcome to Your Vue.js App"/>
</template>

<script>
import vue3Message from './components/vue3-message.vue'

export default {
  name: 'App',
  components: {
    vue3Message
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
