
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

    ['@nuxt/image', {
        provider: 'static',
        dir: "assets/images",
    }],
    

    ['@nuxtjs/google-fonts', {
      families: {
        'Lato': [300, 400, 700],
        'IBM Plex Sans': [300, 400, 700],
      },
    }],



  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '~/modules/process_content.js',
  ],

  router: {
    base: '/'
  },

  // Content module configuration: https://go.nuxtjs.dev/config-contents
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


      var fdir = files.map(function(file) {
        console.log(file, " xxx")
        if(file.path === '/index') { return  '/'; }
        else { 
         // const filepathdir =  '/' + file.path.split('/')[1]
//          return filepathdir + '/' + file.slug;
            return file.path;
        }
      });

      console.log(fdir);

      return fdir;

    },
    dir: 'dist',
  },


  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, { isDev, isClient }) {
      config.module.rules.push({
        test: /\.md$/i,
        loader: 'ignore-loader'
      })
    },
  },

/*  hooks: {
    'content:file:beforeInsert': (document) => {
      if (document.extension === '.md') {
        const { time } = require('reading-time')(document.text);

        const uniqueLinks = [...new Set(document.text.match(/\[\[(.*?)\]]/g))];

        document.readingTime = time;
        document.uniqueLinks = uniqueLinks;
      }
    }
  },
  */



}
