import Vue from 'vue'
import App from './App.vue'
import router from './router'


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'


Vue.use(MintUI)


// new Vue({
//   el: '#app',
//   components: { App }
// })