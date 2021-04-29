<template>

    <tr>
      <td>{{name}}</td>
      <td>{{temperature}} °C</td>
      <td>{{weather}}</td>
      <td>{{updatedAt.toLocaleString()}}</td>
    </tr>

</template>

<script>
export default {
  name: "City",
  props: {
    name: String,
    weather: String,
    temperature: Number,
    updatedAt: String
  }
}
</script>

<style scoped>

</style>