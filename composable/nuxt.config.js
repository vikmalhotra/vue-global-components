// load the environment variables for using in this file, nuxt.config.js
const envPath = `config/.env.${process.env.NODE_ENV || 'local'}`;

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,
  target: 'server',
  server: {
    host: '0.0.0.0',
    port: '3003',
  },
  /**
   * global page headers
   * See https://nuxtjs.org/api/configuration-head/
   */
  head: {
    titleTemplate: '勉強会 - composable',
    htmlAttrs: {
      lang: 'ja',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/composition-api/module',
  ],

  /**
   * dotenv module configuration
   * See https://github.com/nuxt-community/dotenv-module
   */
  dotenv: {
    filename: envPath,
  },

  env: {
    IDENTITY_PLATFORM_API_KEY: process.env.IDENTITY_PLATFORM_API_KEY,
    IDENTITY_PLATFORM_AUTH_DOMAIN: process.env.IDENTITY_PLATFORM_AUTH_DOMAIN,
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      '@nuxtjs/dotenv',
      { filename: envPath }
    ],
  ],

  /**
   * customize nuxt.js router
   * See https://nuxtjs.org/api/configuration-router/
   */
  router: {
    mode: 'hash',
  },

  /**
   * vuetify module configuration
   * See https://go.nuxtjs.dev/config-vuetify
   */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    theme: { light: true },
  },

  /**
   * source directory for nuxt.js application
   * See https://nuxtjs.org/api/configuration-srcdir/
   */
  srcDir: 'src',

  /**
   * core-js3 migration guide
   * See https://nuxtjs.org/guide/release-notes#-code-core-js-3-code-
   */
  build: {},
}
