import Vue from 'vue'
import App from './App.vue'
import Index from './components/Index.vue'
import Detail from './components/Detail.vue'
import Cart from './components/Cart.vue'
import { Fragment } from 'vue-frag'
import VueRouter from 'vue-router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueRouter)
Vue.component('Fragment', Fragment)

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

const routes = [
  { path: '/', component: Index },
  { path: '/items/:id', component: Detail },
  { path: '/cart', component: Cart }
]

const router = new VueRouter({
  routes
});

Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
