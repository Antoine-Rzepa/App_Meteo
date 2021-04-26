<template>
  <div>
    <h1>{{msg}}</h1>
    <City name="Annecy" weather="Ensoleillé" v-bind:temperature="21" v-bind:updated-at="new Date()"/>
  </div>
</template>

<script>
import City from "./City";

export default {
  name: "CitiesList",
  components: {
    City,
  },
  props:{
    msg: String
  }
}
</script>

<style scoped>

</style>