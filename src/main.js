// import Vue from 'vue'
// import App from './App.vue'
// import Topic from './topic.vue'
// import VueRouter from 'vue-router'
// import './assets/flex.less'
// import './assets/index.less'
// Vue.use(VueRouter)

// const router = new VueRouter({
//   routes: [
//       { path: '/app', component: Home },
//       { path: '/topic', component: Topic }
//   ]
// });

// new Vue({
//   router,
//   el: '#app',
//   render: h => h(App)
// })


import Vue from 'vue'
import App from './App.vue'
import './assets/flex.less'
import './assets/index.less'
new Vue({
  el: '#app',
  render: h => h(App)
})


