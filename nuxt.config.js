module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'AOK Admin',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'aok administration site' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/logo_icon2.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' },
      {
        rel: "stylesheet",
        href: "https://use.fontawesome.com/releases/v5.0.13/css/all.css"
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Nunito+Sans:400,900,600"
      }
    ]
  },
  plugins: ['~/plugins/vuetify.js'],
  css: ['~/assets/style/app.styl'],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    extractCSS: true,
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
