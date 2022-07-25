<template>
  <v-app-bar app height="80px" color="primary" dark>
    <v-app-bar-title>Weather Widget</v-app-bar-title>
    <v-divider />
    <v-toolbar-title>City selection</v-toolbar-title>
    <Autocomplete />
    <v-btn class="mx-2" dark color="indigo" @click="$emit('add-city')">
      <v-icon dark> mdi-plus </v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
import Autocomplete from "./ui/Autocomplete.vue";

export default {
  components: { Autocomplete },
};
</script>

<style>
</style>