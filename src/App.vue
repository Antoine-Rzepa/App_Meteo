<template>
  <div id="app">
    <Navbar />
    <img
        src="https://file1.science-et-vie.com/var/scienceetvie/storage/images/8/8/88531/le-tour-france-des-regions.jpg?alias=exact1024x768_l"
        alt="logo">
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";

export default {
  name: 'App',
  components: {
    Navbar
  },
  data(){
    return {

  }},
  methods: {
    onListClick() {
      window.alert("Vous avez cliqué")
    }
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
img {
  height: 300px;
}
h1 {
  margin: 50px 50px;
}
</style>
