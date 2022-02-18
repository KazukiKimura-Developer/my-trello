import Vue from 'vue'
import App from './App.vue'
import store from './store'
import './assets/css/styles.css'

Vue.config.productionTip = false
Vue.config.devtools = true

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
