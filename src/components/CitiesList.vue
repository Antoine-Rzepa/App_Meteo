<template>

  <div>
    <h1>Liste des Villes</h1>
    <section v-if="error">
      <h1>Nous sommes désolé, nous n'arrivons pas a retrouver les informations, essayer plus tard</h1>
    </section>
    <section v-else>
      <div v-if="loading"><h1>En cours de chargement</h1></div>
      <table class="table">
        <thead>
        <tr>
          <th scope="col">Nom</th>
          <th scope="col">Température</th>
          <th scope="col">Etat</th>
          <th scope="col">Mise à jour</th>
        </tr>
        </thead>
        <tbody>
        <City v-for="city in info.data.list"
              :key="city.id"
              :name="city.name"
              :weather="city.weather[0].main"
              :temperature="city.main.temp | kelvinToCelsius"
              :updated-at="formatDate(city.dt)"
        />
        </tbody>
      </table>
    </section>
  </div>


</template>

<script>
import City from "./City";
import {format} from 'timeago.js';
import axios from "axios";

export default {
  name: "CitiesList",
  components: {
    City,
  },
  data() {
    return {
      info: {
        data: {
          list: []
        }
      },
      loading: false,
      error: null,
    }
  },
  filters: {
    kelvinToCelsius(value) {
      return (value - 273.15).toFixed(2)
    }
  },
  methods: {
    formatDate(date) {
      return format(date * 1000)
    }
  },
  mounted() {
    this.loading = true
    axios
        .get('http://api.openweathermap.org/data/2.5/find?lat=45.9&lon=6.1167&cnt=50&appid=e2ab7c6fcdec487394e865226e6e15fa')
        .then(response => (this.info = response))
        .catch(error => {
          console.log(error)
          this.error = true
        })
        .finally(() => this.loading = false)
  }
}
</script>

<style scoped>

</style>