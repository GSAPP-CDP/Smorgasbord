export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'GSAPP SMORGASBORD',
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

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/global.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [

    ['@nuxtjs/google-fonts', {
      families: {
        Lato: true,
        'IBM Plex Sans': [300, 400, 700],
      },
    }],



  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
   markdown: {
      rehypePlugins: ['~/plugins/rehype-content-img.js'],
    },
  },

  generate: {
    async routes () {
      const { $content } = require('@nuxt/content')
      const files = await $content({ deep: true }).fetch()
      console.log(files)


      return files.map(function(file) {
        if(file.path === '/index') { return  '/'; }
        else { 
          const filepathdir =  '/' + file.path.split('/')[1]
          return filepathdir + '/' + file.slug;
        }
      });

    }
  },


  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, { isDev, isClient }) {
      config.module.rules.push({
        test: /\.md$/i,
        loader: 'ignore-loader'
      })
    }
  }
}
