<template>
  
  <div id="app">
    <img src="./assets/eye.png">
    <cypher/>
  </div>
</template>

<script>
 import Cypher from './components/Cypher.vue'

export default {
  name: 'App',
  components: {
    Cypher
  }
}
</script>

<style>
img {
  display: block;
  margin: auto;
  width: 10%;
}
</style>
