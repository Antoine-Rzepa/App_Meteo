<template>
  <div id="app">
    <Navbar />
    <img
        src="https://file1.science-et-vie.com/var/scienceetvie/storage/images/8/8/88531/le-tour-france-des-regions.jpg?alias=exact1024x768_l"
        alt="logo">
    <router-view></router-view>
    <ChatBox/>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import ChatBox from "./components/ChatBox";

export default {
  name: 'App',
  components: {
    Navbar,
    ChatBox
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
  margin-top: 50px;
  height: 300px;
}
h1 {
  margin: 50px 50px;
}
#map {
  width: 100%;
  height: 700px;
}
#map .marker {
  background-size: 7em;
  /*border: 2px solid rgba(255, 0, 0, 0.5);*/
  /*border-radius: 50%;*/
  width: 7em;
  height: 7em;
  cursor: pointer;
}
</style>
