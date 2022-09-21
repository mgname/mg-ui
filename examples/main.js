import Vue from 'vue'
import App from './App.vue'
import MgUI from '../packages'

Vue.config.productionTip = false
Vue.use(MgUI)

new Vue({
  render: h => h(App)
}).$mount('#app')
