<template>
  <v-autocomplete
    v-model="select"
    :loading="loading"
    :items="items"
    :search-input.sync="search"
    class="mx-4"
    flat
    hide-no-data
    hide-details
    label="What the weather tn the city?"
    solo-inverted
  >
    <template v-slot:item="{ item }">
      <v-list-item-content @click="getCityByName(cityObj)">
        <v-list-item-title v-text="item"></v-list-item-title>
      </v-list-item-content>
    </template>
  </v-autocomplete>
</template>

<script>
import { citiesApiClient } from "@/api/index";
import { CITY_BY_QUERY } from "@/api/routes";
import { mapActions } from "vuex";

export default {
  data() {
    return {
      loading: false,
      items: [],
      search: null,
      select: null,
      cities: [],
      cityObj: {},
    };
  },
  watch: {
    search(val) {
      val && val !== this.select && this.querySelections(val);
    },
  },
  methods: {
    ...mapActions(["getCityByName"]),
    querySelections(query) {
      this.loading = true;
      citiesApiClient.get(CITY_BY_QUERY(query)).then(({ data }) => {
        this.items = data.map((city) => {
          this.cityObj = city;
          return `${city.name}, ${city.country}`;
        });
        this.loading = false;
      });
    },
  },
};
</script>
