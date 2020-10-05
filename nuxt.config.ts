export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/scss/style.scss',
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxt/typescript-build',
    // 'nuxt-typed-vuex'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    "@nuxtjs/axios",
    "@nuxtjs/proxy",
  ],
  axios: {
  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
    transpile: [/typed-vuex/],
    extend(config: any, ctx: any) { },
  },
  proxy: {
    '/api/offers': {
      target: 'http://localhost:3000/stubs',
      pathRewrite: {
        '^/api/offers': 'offers.json'
      }
    },
    '/api/prefectures': {
      target: 'http://localhost:3000/stubs',
      pathRewrite: {
        '^/api/prefectures': 'prefectures.json'
      }
    },
    '/api/seminars': {
      target: 'http://localhost:3000/stubs',
      pathRewrite: {
        '^/api/seminars': 'seminars.json'
      }
    },
    '/api/seminar': {
      target: 'http://localhost:3000/stubs',
      pathRewrite: {
        '^/api/seminar': 'seminar.json'
      }
    }
  },
  storybook: {
  },
  typescript: {
    typeCheck: true,
    ignoreNotFoundWarnings: true
  },
};
