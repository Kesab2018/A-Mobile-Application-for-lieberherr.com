import Vue from 'vue'
import App from './App.vue'
import Bootstrapvue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from './router'
import i18n from './i18n'

Vue.use(require('vue-moment'));


Vue.use(Bootstrapvue);
Vue.config.productionTip = false
// use beforeEach route guard to set the language
VueRouter.beforeEach((to, from, next) => {

  // use the language from the routing param or default language
  let language = to.params.lang;
  if (!language) {
    language = 'en'
  }

  // set the current language for i18n.
  i18n.locale = language
  next()
})
Vue.filter('capitalize', function (value) {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
})

new Vue({
  router: VueRouter,
  i18n,
  render: h => h(App)
}).$mount('#app')
