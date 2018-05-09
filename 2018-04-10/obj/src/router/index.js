import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

import routes from './router-config';
let router = new Router(routes)
export default router;
