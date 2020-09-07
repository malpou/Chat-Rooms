import Vue from 'vue'
import App from './App.vue'
import { firestorePlugin } from 'vuefire'
import VueRouter from 'vue-router';
import VueCompositionApi from "@vue/composition-api";

Vue.use(firestorePlugin);
Vue.use(VueRouter);
Vue.use(VueCompositionApi);

import Home from './components/Home'
import ChatRoom from './components/ChatRoom'

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/chats/:id', component: ChatRoom, name: 'chat'}
  ]
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
