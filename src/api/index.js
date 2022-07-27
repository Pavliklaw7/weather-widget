import axios from 'axios'

const cityInfoApiClien = axios.create({
  baseURL: 'https://api.bigdatacloud.net',
})

const weatherApiClient = axios.create({
  baseURL: 'https://api.api-ninjas.com/',
  headers: {
    'X-Api-Key': "1/4px2mjd3VZgrLQekOlxg==bkuGoKyYqGdcNukk",
  },
})

const citiesApiClient = axios.create({
  baseURL: 'https://api.api-ninjas.com',
  headers: {
    'X-Api-Key': "1/4px2mjd3VZgrLQekOlxg==bkuGoKyYqGdcNukk",
  },
})

export {
  weatherApiClient,
  citiesApiClient,
  cityInfoApiClien
} 
