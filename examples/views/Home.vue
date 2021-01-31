<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <zm-test bgColor="blue"></zm-test>
  </div>
</template>
<script>
// @ is an alias to /examples
import HelloWorld from "@/components/HelloWorld.vue";
export default {
  name: "home",
  components: {
    HelloWorld,
  },
};
</script>