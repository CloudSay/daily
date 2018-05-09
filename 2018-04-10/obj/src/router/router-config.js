//import navbar from './components/navbar';
import error from '../components/error';
import home from '../components/home';
import follow from '../components/follow';
//import footbar from './components/footer';
import column from '../components/column';
import user from '../components/user';
import detail from '../components/detail';
import login from '../components/login';
import reg from '../components/reg';

let routes = [
  {path:'/home',component:home},
  {path:'/follow',component:follow,},
  {path:'/reg',component:reg},
  {path:'/login',component:login},
  {path:'/detail/:id',component:detail},
  {path:'/user',component:user},
  {path:'/column',component:column},
  {path:'/home',component:home},
  {path:'/',redirect:'/home'},
  {path:'*',component:error}

]

export default {routes}
