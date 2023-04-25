import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import TestDict from './components/TestDict'

Vue.component('TestDict', TestDict)

if (process.env.NODE_ENV === 'development') {
  require('./mock/index')
}

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
