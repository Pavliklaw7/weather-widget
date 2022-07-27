<template>
  <v-app>
    <Header />
    <v-main class="main-wrapper">
      <Loader :active="getIsLoading" />
      <Weather
        v-for="(city, index) in citiesByPage(currentPage)"
        :key="index"
        :index="index"
        :city="city"
      />
    </v-main>
    <Pagination
      v-if="cities.length > itemsPerPage"
      :currentPage="currentPage"
      :pages="Math.ceil(cities.length / itemsPerPage)"
    />
  </v-app>
</template>

<script>
import "../src/assets/styles/main.scss";
import Loader from "./components/ui/Loader.vue";
import Header from "./components/Header.vue";
import Weather from "./components/Weather.vue";
import { mapActions, mapGetters, mapMutations } from "vuex";
import Pagination from "./components/ui/pagination.vue";
export default {
  name: "App",
  mounted() {
    this.getLocation();
  },
  components: { Loader, Header, Weather, Pagination },
  computed: {
    ...mapGetters([
      "cities",
      "citiesByPage",
      "currentCity",
      "currentPage",
      "getIsLoading",
      "itemsPerPage",
    ]),
  },
  methods: {
    ...mapActions(["getLocation"]),
    ...mapMutations(["setCurrentCity"]),
  },
};
</script>
