import Vue from 'vue';
import VueRouter from 'vue-router';

// 読み込み
import Home from '@/views/Home.vue'
import AboutMe from '@/views/AboutMe.vue'
import Skills from '@/views/Skills.vue'
import Sample from '@/views/Sample.vue'
import Contact from '@/views/Contact.vue'

Vue.use(VueRouter);


const router = new VueRouter({
  // URLのマッピング
  routes:[
    { path: '/', component: Home },
    { path: '/aboutme', component: AboutMe},
    { path: '/skills', component: Skills },
    { path: '/sample', component: Sample },
    { path: '/contact', component: Contact },

  ]
})


// エクスポート
export default router
