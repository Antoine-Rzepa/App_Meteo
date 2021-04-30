<template>
  <div id="chatbox">
    <h1>Une question ?</h1>
    <input v-model="question" placeholder="Saisissez votre question" type="text"/>
    <p v-if="question">{{response.data.citation.citation}}</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ChatBox",
  data() {
    return {
      question:'',
      response: '',
    }
  },
  mounted() {
    axios
    .get("https://kaamelott.hotentic.com/api/random")
    .then(response => this.response = response)
  }
}

</script>

<style scoped>
  #chatbox {
    position: fixed;
    top: 5px;
    right: 10px;
    background: forestgreen;
    color: white;
    margin-top: 10px;
  }
  input{
    margin-bottom: 30px;
    text-align: center;
  }
</style>