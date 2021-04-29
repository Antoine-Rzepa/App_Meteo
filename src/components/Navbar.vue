<template>
<nav class="navbar">
  <router-link class="navbar-brand" to="/">Accueil</router-link>
  <router-link class="navbar-brand" to="/villes">Villes</router-link>
  <router-link class="navbar-brand" to="/carte">Carte</router-link>
</nav>
</template>

<script>
export default {
  name: "Navbar",
  data(){
    return {

    }},
}
</script>

<style scoped>
 nav {
   justify-content: center;
 }
</style>