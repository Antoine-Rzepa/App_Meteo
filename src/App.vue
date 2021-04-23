<template>
  <div id="app">
    <Accueil msg="Liste des villes"/>
    <a v-on:click="onListClick" href="" target="_blank" rel="noopener">Villes</a>
    <CitiesList msg="Météo - Liste des villes"/>
  </div>
</template>

<script>
import Accueil from './components/Accueil.vue'
import CitiesList from "./components/CitiesList.vue";

export default {
  name: 'App',
  components: {
    Accueil,
    CitiesList,
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
