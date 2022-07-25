<template>
  <v-autocomplete
    v-model="select"
    :loading="loading"
    :items="items"
    :search-input.sync="search"
    cache-items
    class="mx-4"
    flat
    hide-no-data
    hide-details
    label="What state are you from?"
    solo-inverted
  ></v-autocomplete>
</template>

<script>
import { accuWeatherClient } from "@/api/index";
import { CITY_BY_QUERY } from "@/api/routes";

export default {
  data() {
    return {
      inputValue: "",
      loading: false,
      items: [],
      search: null,
      select: null,
      cities: [],
    };
  },
  watch: {
    search(val) {
      val && val !== this.select && this.querySelections(val);
    },
  },
  methods: {
    querySelections(query) {
      this.loading = true;
      // `http://dataservice.accuweather.com/locations/v1/cities/search?q=${query}`
      accuWeatherClient.get(CITY_BY_QUERY(query)).then(({ data }) => {
        this.items = data.map((city) => {
          return `${city.LocalizedName}, ${
            isNaN(city.AdministrativeArea.ID)
              ? city.AdministrativeArea.ID
              : city.AdministrativeArea.LocalizedType
          }, ${city.Country.LocalizedName}`;
        });
        this.loading = false;
      });
    },
  },
};
</script>

<style>
</style>