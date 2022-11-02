import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueKonva from 'vue-konva';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import router from './router/router'
Vue.config.productionTip = false

Vue.use(VueKonva);
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

new Vue({
  vuetify,
  VueKonva,
  router,
  render: h => h(App)
}).$mount('#app') 
