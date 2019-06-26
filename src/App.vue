<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Example 1</router-link>&nbsp;|&nbsp;
      <router-link to="/quotes">Example 2</router-link>&nbsp;|&nbsp;
      <router-link to="/progress">Example 3</router-link>&nbsp;|&nbsp;
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss" scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #e0e0e0;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
