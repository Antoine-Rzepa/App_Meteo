<template>
<div>
  <h1>{{name}}</h1>
  <p>{{updatedAt.toLocaleString()}}</p>
  <p>{{weather}} / {{temperature}} °C</p>
</div>
</template>

<script>
export default {
  data(){
    return {
    }},
  props: {
    name: String,
    weather: String,
    temperature: Number,
    updatedAt: Function
  }
}
</script>

<style scoped>

</style>