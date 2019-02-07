const path = require('path')

module.exports = {
  head: {
    title: 'Hello world!',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=0.1, maximum-scale=1.0' },
    ],
    link: [],
    script: [],
  },
  modules: [
    ['nuxt-sass-resources-loader', 'sass/*.sass'],
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],
  axios: {
    proxy: true
  },
  proxy: [
    'http://nginx:80/api'
  ],
  router: {
    middleware: []
  },
  loading: { color: '#f60036' },
  build: {
    vendor: []
  },
  plugins: []
}
