import { createApp } from 'vue'
// import { createPinia } from 'pinia'

import App from './App.vue'
// import router from './router'

import $ from 'jquery/dist/jquery'

window.jQuery = window.$ = $

import 'bootstrap/dist/js/bootstrap.min.js'
import 'popper.js/dist/popper'

const app = createApp(App)

// app.use(createPinia())
// app.use(router)
app.mount('#app')
