<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <div><me-test bgColor="blue"></me-test></div>
    <JSX></JSX>
    <HelloWorld msg="Welcome to My Vue.js UI  By WebPack!" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import JSX from "./components/JSX.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    JSX,
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
