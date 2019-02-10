// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import '~/assets/sass/app.scss'

export default function (Vue, {router, head, isClient}) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  head.meta.push({
    name: 'theme_color',
    content: '#FFE037'
  })
  head.meta.push({
    name: 'author',
    content: 'Fahmi Irsyad khairi'
  })
  head.meta.push({
    name: 'Description',
    content: 'My little journey'
  })
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Roboto:400,700'
  })
}