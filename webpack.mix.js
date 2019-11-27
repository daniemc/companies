const path = require('path')
const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
   .sass('resources/sass/app.scss', 'public/css')
   .sourceMaps()
   .setResourceRoot('../');

   if (mix.inProduction()) {
    mix.version()

    mix.extract([
      'vue',
      'vform',
      'axios',
      'vuex',
      'vue-i18n',
      'vue-meta',
      'js-cookie',
      'vue-router',
      'vuetify',
      'vee-validate',
      'vuex-router-sync'
    ])
  }

  mix.webpackConfig({
    plugins: [
    ],
    resolve: {
      alias: {
        '~': path.join(__dirname, './resources/js')
      },
      extensions: ['*', '.js', '.vue', '.json']
    }
  })
