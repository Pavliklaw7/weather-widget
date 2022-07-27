import Vue from 'vue';
import Vuex from 'vuex';
import { weatherApiClient, cityInfoApiClien } from "../api/index";
import { WEATHER_BY_COORDS, CITY_BY_COORDS } from "../api/routes";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cities: [],
    currentCity: {},
    currentPage: 0,
    isLoading: false,
    itemsPerPage: 5
  },

  getters: {
    cities: (state) => state.cities,
    currentCity: (state) => state.currentCity,
    currentPage: (state) => state.currentPage,
    citiesByPage: (state) => (page) => state.cities.slice(page * state.itemsPerPage, (page * state.itemsPerPage) + state.itemsPerPage),
    getIsLoading: (state) => state.isLoading,
    itemsPerPage: (state) => state.itemsPerPage
  },

  actions: {
    getLocation({ commit }) {
      let location = {};

      try {
        navigator.geolocation.getCurrentPosition((pos) => {
          commit('toggleLoading')
          location = {
            latitude: pos.coords.latitude,
            longitude: pos.coords.longitude,
          };


          cityInfoApiClien.get(CITY_BY_COORDS(location)).then(({ data }) => {
            data[ 'name' ] = data[ 'city' ]
            location = { ...location, ...data }
          });

          weatherApiClient
            .get(WEATHER_BY_COORDS(location))
            .then((res) => {
              location = { ...location, ...res.data };
              commit('addCity', location)
              commit('toggleLoading')

            });
        });
      } catch (e) {
        console.log(e)
      }


    },
    async getCityByName({ commit }, query) {
      let location = query;
      commit('toggleLoading')

      await weatherApiClient
        .get(
          WEATHER_BY_COORDS(query)
        )
        .then((res) => {
          location = { ...location, ...res.data }
          commit('addCity', location)
          commit('toggleLoading')
        });
    },
  },

  mutations: {
    toggleLoading(state) {
      state.isLoading = !state.isLoading
    },
    deleteWeather(state, payload) {
      state.cities = state.cities.filter((el, i) => i != payload)

      if (state.cities.length <= state.itemsPerPage) {
        state.currentPage = state.currentPage >= 0 ? 0 : - 1;
      }
    },
    addCity(state, payload) {
      const citiesLength = state.cities.length

      if (citiesLength % state.itemsPerPage === 0 && citiesLength > 0) {
        state.currentPage += 1;
      }

      state.cities = [ ...state.cities, payload ]
    },
    setCurrentPage(state, payload) {
      state.currentPage = payload
    },
  }
})
