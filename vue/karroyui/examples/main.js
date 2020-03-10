import Vue from 'vue'
import App from './App.vue'
import karroyui from '../packages'
Vue.use(karroyui)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
