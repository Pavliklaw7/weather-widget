export const CITY_BY_QUERY = (query) => `/v1/city?name=${query}`;
export const CITY_BY_COORDS = (coords) => `/data/reverse-geocode-client?latitude=${coords.latitude}&longitude=${coords.longitude}`;
export const WEATHER_BY_COORDS = (coords) => `/v1/weather?lat=${coords.latitude}&lon=${coords.longitude}`
