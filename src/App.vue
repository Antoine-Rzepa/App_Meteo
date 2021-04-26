<template>
  <div id="app">
    <Accueil msg="Accueil"/>
    <a v-on:click="onListClick" href="">Villes</a>
    <hr>
    <router-link to="/">Accueil</router-link>
    <hr>
    <router-link to="/villes">Villes</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import Accueil from './components/Accueil.vue'

export default {
  name: 'App',
  components: {
    Accueil,
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
</style>
