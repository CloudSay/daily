import Vue from 'vue'
import App from './App.vue'
//let VueRouter = require('vue-router');
import VueRouter from 'vue-router' ;

Vue.use(VueRouter);

import home from './components/home.vue';
import product from './components/product.vue';
import user from './components/user.vue';
import login from './components/login.vue';
import reg from './components/reg.vue';
import error from './components/error.vue';
import detail from './components/detail.vue';
let routes = [
  {path:'/home',component:home},
  {
  	path:'/product',
  	component:product,
  	children:[
  		{name:'detail',path:'detail/:aid',component:detail}
  	]
  },
  {path:'/user',component:user},
  {path:'/login',component:login},
  {path:'/reg',component:reg},
  {path:'/',redirect:'/home'},
  {path:'*',component:error}
]
let router = new VueRouter({
	routes
});
new Vue({
  el: '#app',
  components: { App },
  template: '<App></App>',
  router,
})
