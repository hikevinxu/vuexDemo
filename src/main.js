// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'

Vue.config.productionTip = false

// 注意下面的代码
// Vue.use(Vuex);
// const store = new Vuex.Store({
//     state： {},
//     getters: {},
//     actions: {},
//     mutations: {}
// });

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
