<template>
<div>
  <h1>Carte</h1>
  <div>
    <mapbox
        access-token="pk.eyJ1IjoiYW50b2luZS1yemVwYSIsImEiOiJja28yanJ4MGcxMDIwMnVrNGZ0ZXltbGUzIn0.2QFh3Pqty2xU7_l8RlqRGQ"
        :map-options="{
        style: 'mapbox://styles/mapbox/outdoors-v11',
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

    />
  </div>
</div>
</template>

<script>
import Mapbox from 'mapbox-gl-vue'

export default {
  name: "CitiesMap",
  components: {
    Mapbox
  },
  data(){
    return {

    }},
}
</script>

<style scoped>
#map {
  width: 100%;
  height: 500px;
}
</style>