<template>
  <v-card :class="{ byDefault: index == 0 }">
    <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title class="text-h5"> {{ city.name }} </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-card-text>
      <v-row>
        <v-col class="text-h4" cols="12">
          {{ Math.round(city.temp) }}&deg;C
        </v-col>
      </v-row>
    </v-card-text>

    <v-list-item>
      <v-list-item-icon>
        <v-icon>mdi-send</v-icon>
      </v-list-item-icon>
      <v-list-item-subtitle
        >speed: {{ city.wind_speed }} km/h</v-list-item-subtitle
      >
    </v-list-item>

    <v-list-item>
      <v-list-item-icon>
        <v-icon>fa-solid fa-droplet</v-icon>
      </v-list-item-icon>
      <v-list-item-subtitle
        >humidity: {{ city.humidity }}%</v-list-item-subtitle
      >
    </v-list-item>

    <v-list-item>
      <v-list-item-icon>
        <v-icon>fa-solid fa-temperature-high</v-icon>
      </v-list-item-icon>
      <v-list-item-subtitle
        >max: {{ city.max_temp }}&deg;C</v-list-item-subtitle
      >
    </v-list-item>

    <v-list-item>
      <v-list-item-icon>
        <v-icon>fa-solid fa-temperature-low</v-icon>
      </v-list-item-icon>
      <v-list-item-subtitle
        >min: {{ city.min_temp }}&deg;C</v-list-item-subtitle
      >
    </v-list-item>
    <v-list-item>
      <v-list-item-subtitle class="delete" @click="deleteWeather(index)"
        >Delete
      </v-list-item-subtitle>
    </v-list-item>
  </v-card>
</template>


<script>
import { mapMutations } from "vuex";
export default {
  props: ["city", "index"],
  data() {
    return {};
  },
  mounted() {
    this.getDate();
  },
  methods: {
    ...mapMutations(["deleteWeather"]),
    getDate(weather) {
      const res = `${new Date().toLocaleDateString("en-US", {
        weekday: "short",
      })} ${new Date().toLocaleString("en-US", {
        hour: "numeric",
        hour12: true,
      })}, ${weather}`;

      return res;
    },
  },

  comuted: {},
};
</script>

<style>
.byDefault {
  background-color: #1976d18a !important;
}

.delete {
  color: red !important;
  cursor: pointer;
}
</style>
