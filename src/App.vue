<template>
  <div id="app">
      <population></population>
      <!-- <color-picker></color-picker> -->
  </div>
</template>

<script>
import ColorPicker from "./components/ColorPicker"
import Population from "./components/Population"

export default {
  components: {
    ColorPicker,
    Population
  },
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
