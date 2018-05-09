// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false;
import router from './router'

import axios from 'axios';
Vue.prototype.$http=axios; 

import cookie from 'vue-cookie'
Vue.use(cookie)

import store from './store';
 import loading from './components/loading';
 Vue.use(loading)

// 拦截器
axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  store.dispatch('SHOW_LOADING')
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  // Do something with response data
  store.dispatch('HIDE_LOADING')
  return response;
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,store
})
