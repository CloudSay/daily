import error from '../components/error';
import home from '../components/home';
import pinpai from '../components/pinpai';
import count from '../components/count';
import detail from '../components/detail';
import login from '../components/login';
import reg from '../components/reg';
import jiesuan from '../components/jiesuan';
import kuai from '../components/kuai';
import sale from '../components/sale';
import goods from '../components/goods';
import intergral from '../components/intergral';
//const error =()=>import(/* webpackChunkName: "error" */ "../components/error.vue");
//const pinpai =()=>import(/* webpackChunkName: "pinpai" */ "../components/pinpai.vue");
//const count =()=>import(/* webpackChunkName: "count" */ "../components/home.count");
//const detail =()=>import(/* webpackChunkName: "detail" */ "../components/detail.vue");
//const login =()=>import(/* webpackChunkName: "login" */ "../components/login.vue");
//const reg =()=>import(/* webpackChunkName: "reg" */ "../components/reg.vue");
//const jiesuan =()=>import(/* webpackChunkName: "jiesuan" */ "../components/jiesuan.vue");
//const kuai =()=>import(/* webpackChunkName: "kuai" */ "../components/kuai.vue");
//const sale =()=>import(/* webpackChunkName: "sale" */ "../components/sale.vue");
//const goods =()=>import(/* webpackChunkName: "goods" */ "../components/goods.vue");
//const intergral =()=>import(/* webpackChunkName: "intergral" */ "../components/intergral.vue");
//const home =()=>import(/* webpackChunkName: "home" */ "../components/home.vue");


let routes = [
  {path:'/home/:id',component:home},
  {path:'/pinpai',component:pinpai,},
  {path:'/reg',component:reg},
  {path:'/login',component:login},
  {path:'/detail/',component:detail},
  {path:'/count',component:count},
  {path:'/home',component:home},
  {path:'/kuai',component:kuai},
  {path:'/goods',component:goods},
  {path:'/intergral',component:intergral},
  {path:'/sale/:id',component:sale},
  {path:'/jiesuan',component:jiesuan},
  {path:'/',redirect:'/home'},
  {path:'*',component:error}

]

export default {routes}
