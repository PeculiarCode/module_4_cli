<template>
  <div id="app">
    <img src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Vue from 'vue'
export default {
  name: 'App',
  components: {
    HelloWorld,
  }

}
</script>

<style>

</style>
