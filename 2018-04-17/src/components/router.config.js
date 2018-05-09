import React from 'react';
import {Router,Route,Redirect,Link,hashHistory,browserHistory} from 'react-router'
import Home from './Home';
import App from "./App";
import Product from './Product';


const RouterConfig = (props) => (
    <Router history={hashHistory}>
          <Route path='/' component = {App}>
		   <Route path='/home' component = {Home}></Route>
            

        </Route>
    </Router>
)

export default RouterConfig;