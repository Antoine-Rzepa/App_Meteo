<template>
<div>
  <h1>{{name}}</h1>
  <p>{{updatedAt.toLocaleString()}}</p>
  <p>{{weather}} {{temperature}} °C</p>
</div>
</template>

<script>
export default {
  data(){
    return {
      name: 'Ma ville', // nom de la ville
      weather: 'Peu nuageux', // descriptif météo
      temperature: 20.55, // température en °C
      updatedAt: new Date() // date de dernière mise à jour
    }},
}
</script>

<style scoped>

</style>