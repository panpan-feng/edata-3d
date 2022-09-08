import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'


Vue.use(VueAxios, axios)

Vue.config.productionTip = false

require('@/mock')

new Vue({
  render: h => h(App),
}).$mount('#app')