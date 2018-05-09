import React from 'react';
import {Router,Route,Redirect,Link,hashHistory,IndexRoute} from 'react-router';
import App from './App';
import Home from './Home';
import Product from './Product';
import User from './User';
import Login from './Login';
import Reg from './Reg';
import Detail from './Detail';
import Error from './Error';
import enterUser from '../guard/enterUser'

const RouterConfig = () =>(
	<Router history ={hashHistory}>
	   <Route path='/' component = {App}>
	       <IndexRoute component={Home} />
		   <Route path='/home' component = {Home}></Route>

		   <Route path='/product' component = {Product}>
		      <Route path='detail/:aid' component = {Detail}></Route>
		   </Route>
		   <Route path='/user' component = {User} onEnter = {enterUser}></Route>
		   <Route path='/login' component = {Login}></Route>
	   	   <Route path='/reg' component = {Reg}></Route>
	   	   <Redirect from='/bulala' to = '/home'></Redirect>
	   	   <Route path='*' component = {Error}></Route>
	   </Route>
	</Router>
);
export default RouterConfig
