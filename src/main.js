import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import storeConfig from './store/store-config'

Vue.use(Vuex)
const store = new Vuex.Store(storeConfig)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
