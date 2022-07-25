<template>
  <v-app>
    <Loader v-if="false" />
    <Header @add-city="addCity" />
    <v-main class="main-wrapper">
      <v-list>
        <v-btn v-for="city in cities" :key="city.id" color="primary"
          >{{ city.name }}
        </v-btn>
      </v-list>
      <Weather :city="currentCity.name" />
    </v-main>
  </v-app>
</template>

<script>
import axios from "axios";
import "../src/assets/styles/main.scss";
import Loader from "./components/ui/Loader.vue";
import Header from "./components/Header.vue";
import Weather from "./components/Weather.vue";
export default {
  name: "App",
  mounted() {
    this.getCurrentLocation();
  },

  components: { Loader, Header, Weather },

  data: () => ({
    currentCity: {},
    cities: [],
  }),
  computed: {},
  methods: {
    addCity(city) {
      this.cities = [...this.cities, city];
      this.currentCity = this.cities[this.cities.length - 1];
    },
    async getCurrentLocation() {
      let location = {};

      await navigator.geolocation.getCurrentPosition((pos) => {
        location = {
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
        };

        axios
          .get(
            `https://fcc-weather-api.glitch.me/api/current?lat=${location.latitude}&lon=${location.longitude}`
          )
          .then((res) => {
            location = { ...location, ...res.data };
            this.addCity(location);
          });
      });
    },
  },
};
</script>
