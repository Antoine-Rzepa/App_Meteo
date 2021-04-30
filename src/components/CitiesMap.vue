<template>
  <div>
    <h1>Carte</h1>
    <div>
      <mapbox
          access-token="pk.eyJ1IjoiYW50b2luZS1yemVwYSIsImEiOiJja28yanJ4MGcxMDIwMnVrNGZ0ZXltbGUzIn0.2QFh3Pqty2xU7_l8RlqRGQ"
          :map-options="{
        style: 'mapbox://styles/mapbox/satellite-v9',
        center: [6.124211, 45.91],
        zoom: 10,
      }"
          :scale-control="{
        show: true,
        position: 'bottom-left',
      }"
          :fullscreen-control="{
        show: true,
        position: 'bottom-right',
      }"
          :geolocate-control="{
        show: true,
        position: 'top-left',
      }"
          @map-load="loaded"
      />
    </div>
  </div>
</template>

<script>
import mapboxgl from 'mapbox-gl'
import Mapbox from 'mapbox-gl-vue'
import axios from "axios";

export default {
  name: "CitiesMap",
  components: {
    Mapbox,
  },
  data() {
    return {
      cities: [],
      loading: false,
      error: null,
    }
  },

  methods: {
    loaded(map) {
      for (let i = 0; i < this.cities.length; i++) {
      let el = document.createElement('div');

      el.className = 'marker';
      el.style.backgroundImage = 'url(http://openweathermap.org/img/wn/' + this.cities[i].weather[0].icon + '@2x.png)';
      new mapboxgl.Marker(el)
          .setLngLat([this.cities[i].coord.lon, this.cities[i].coord.lat])
          .addTo(map);
      }
    }
  },
  mounted() {
    this.loading = true
    axios
        .get('http://api.openweathermap.org/data/2.5/find?lat=45.9&lon=6.1167&cnt=50&appid=e2ab7c6fcdec487394e865226e6e15fa')
        .then(response => (this.cities = response.data.list))
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