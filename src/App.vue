<template>
  <div id="app">
    <HelloThree />
  </div>
</template>

<script>
import HelloThree from './components/HelloThree.vue';

export default {
  name: 'App',
  components: {
    HelloThree,
  },
};
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
