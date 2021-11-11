<template>
  <div id="app">
    <h1>Vue2</h1>
    <vue2Message msg="This is vu2 component"/>
  </div>
</template>

<script>
import vue2Message from './components/vue2-message.vue'


export default {
  name: 'App',
  components: {
    vue2Message
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
