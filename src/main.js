import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Accueil from "./components/Accueil";
import CitiesList from "./components/CitiesList";
import City from "./components/City";
import CitiesMap from "./components/CitiesMap";

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  {path: '/', component: Accueil},
  {path: '/villes', component: CitiesList},
  {path: '/ville', component: City},
  {path: '/carte', component: CitiesMap}
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')