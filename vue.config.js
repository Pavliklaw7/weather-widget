module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/weather-widget/'
    : '/',
  transpileDependencies: [
    'vuetify'
  ]
}
