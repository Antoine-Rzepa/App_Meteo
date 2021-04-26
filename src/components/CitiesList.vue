<template>
  <div>
    <div v-for="cities in cities" :key="cities.id">
      <City
          v-bind:name="cities.name"
          v-bind:weather="cities.weather"
          v-bind:temperature="cities.temperature"
          v-bind:updated-at="cities.updatedAt"
      />
    </div>
  </div>
</template>

<script>
import City from "./City";
import { format } from 'timeago.js';

export default {
  name: "CitiesList",
  components: {
    City,
  },
  data() {
    return {
      cities: [
        {
          id: 1,
          name: 'Ville 1',
          weather: 'Ensoleillé',
          temperature: 22.0,
          updatedAt: format(Date.now())
        },
        {
          id: 2,
          name: 'Ville 2',
          weather: 'Peu nuageux',
          temperature: 19.5,
          updatedAt: format(Date.now())
        }
      ]
    }
  },
}
</script>

<style scoped>

</style>