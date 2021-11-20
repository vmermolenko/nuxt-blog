export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-blog',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  loading: {
    color: 'blue',
    height: '5px'
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  // css: [
  //   'element-ui/lib/theme-chalk/index.css'
  // ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  // plugins: [
  //   '@/plugins/globals'
  // ],
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true
  },
  plugins: ['~plugins/vuetify.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // Simple usage
    '@nuxtjs/vuetify',

    // With options
    // ['@nuxtjs/vuetify', { /* module options */ }]
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'nuxt-express-module',
    '@nuxtjs/auth-next',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    //debug: true,
    baseURL: "http://localhost:3000/"  // here set your API url
  },
  /*
  publicRuntimeConfig: {
    axios: {
      browserBaseURL: process.env.BROWSER_BASE_URL
    }
  },
  privateRuntimeConfig: {
    axios: {
      baseURL: process.env.BASE_URL
    }
  },
  */

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ["vee-validate/dist/rules"],
    vendor: ['vuetify']
  },
  router: {
    //middleware: ['auth']
  },
  auth: {
    strategies: {
      local: {
        scheme: "refresh",
        token: {
          property: "accessToken",
          global: true,
          required: true,
          type: "",
          maxAge: 1800
        },
        /*
        user: {
          property: "user",
          autoFetch: true
        }
        ,*/
        refreshToken: {  // it sends request automatically when the access token expires, and its expire time has set on the Back-end and does not need to we set it here, because is useless
          property: "refreshToken",
          data: "refresh_token",
          maxAge: 60 * 60 * 24 * 30
        },
        endpoints: {
          login: { url: "/api/auth/signin", method: "post", propertyName: 'accessToken' },
          refresh: { url: "/api/auth/refreshtoken", method: "post", propertyName: 'refreshToken'},
          logout: false, //  we don't have an endpoint for our logout in our API and we just remove the token from localstorage
          user: { url: "/api/auth/user", method: "get",  propertyName: 'username' }
        }
      }
    }
  },
}
