<template>

  <div>
    <img src="https://file1.science-et-vie.com/var/scienceetvie/storage/images/8/8/88531/le-tour-france-des-regions.jpg?alias=exact1024x768_l" alt="logo">
    <h1>Liste des Villes</h1>
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
    <p>{{info.data.list[0]}}</p>
  </div>


</template>

<script>
import City from "./City";
import { format } from 'timeago.js';
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
      }
    }
  },
  filters: {
    kelvinToCelsius (value) {
      return (value- 273.15).toFixed(2)
    }
  },
  methods:{
    formatDate(date){
      return format(date * 1000)
    }
  },
  mounted() {
    axios
        .get('http://api.openweathermap.org/data/2.5/find?lat=45.9&lon=6.1167&cnt=50&appid=e2ab7c6fcdec487394e865226e6e15fa')
        .then(response => (this.info = response))
  }
}
</script>

<style scoped>
 img {
   height: 300px;
 }
</style>