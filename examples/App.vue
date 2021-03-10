<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |<router-link to="/button">button</router-link>
      |<router-link to="/layout">layout</router-link>| <router-link to="/jsx">jsx</router-link> |
      <router-link to="/test">.md</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    // HelloWorld,
    // JSX,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
#nav {
  padding: 30px;
}
a {
  font-weight: bold;
  color: #2c3e50;
}
.router-link-exact-active {
  color: #42b983;
}
</style>

<style lang="scss">
table {
  border-collapse: collapse;
  width: 100%;
  background-color: #fff;
  font-size: 14px;
  margin-bottom: 45px;
  line-height: 1.5em;

  strong {
    font-weight: normal;
  }

  td,
  th {
    border-bottom: 1px solid #dcdfe6;
    padding: 15px;
    max-width: 250px;
  }

  th {
    text-align: left;
    white-space: nowrap;
    color: #909399;
    font-weight: normal;
  }

  td {
    color: #606266;
  }

  th:first-child,
  td:first-child {
    padding-left: 10px;
  }
}
</style>
