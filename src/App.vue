<template>
  <div id="app">
    <h1>ZingChart Vue Playground</h1>
    <nav>
      <router-link to="/">Simple</router-link>
      <router-link to="/module">Module Chart</router-link>
      <router-link to="/dynamic">Dynamic</router-link>
      <router-link to="/methods">Methods</router-link>
      <router-link to="/events">Events</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

nav {
  margin-bottom: 25px;
}

nav a {
  padding: 5px 10px;
  text-decoration: none;
  margin: 5px 2px;
  display: inline-block;
  background-color: #eee;
  border-radius: 4px;
  font-family: Roboto, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial,
    Lucida Grande, sans-serif;
  font-weight: 400;
  letter-spacing: 0.5px;
  font-size: 15px;
  cursor: pointer;
}

nav a:visited,
nav a:link {
  color: #607D8B;
}

nav a:hover,
.router-link-exact-active {
  color: white !important;
  background-color: #607D8B;
}
</style>
