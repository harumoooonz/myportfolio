import Vue from 'vue'
import App from './App.vue'

// Router
import router from './router.js'

// font awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(fas,fab)
Vue.component('font-awesome-icon', FontAwesomeIcon)

// アニメーション mo.js
import VueMoJS from 'vue-mo-js'
Vue.use(VueMoJS);

// WavingText
import WavingText from 'vue-waving-text';
Vue.component('WavingText', WavingText);

//Vue-Wavify
import VueWavify from 'vue-wavify';
Vue.component('vue-wavify', VueWavify);






Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
