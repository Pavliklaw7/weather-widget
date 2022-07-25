import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: '',
})

const accuWeatherClient = axios.create({
  baseURL: 'http://dataservice.accuweather.com',
  params: {
    apikey: "ZLqtoRNZnsBPhrhQGO14AajDwnuoNYKj",
  },
})

export {
  axiosInstance,
  accuWeatherClient
} 
