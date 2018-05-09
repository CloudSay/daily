import React, { Component } from 'react';
import {Route,Redirect,Switch} from 'react-router-dom';
import {connect} from 'react-redux'
import loadable from 'react-loadable'

import Offcanvas from './Offcanvas';
import Head from './Head';
import Home from './Home';
import Loading from './Loading'

const Reg  = loadable({loader:()=>import("./reg"),loading:Loading})
const Success  = loadable({loader:()=>import("./success"),loading:Loading})
const Login  = loadable({loader:()=>import("./login"),loading:Loading})
const About  = loadable({loader:()=>import("./About"),loading:Loading})
const Join  = loadable({loader:()=>import("./Join"),loading:Loading})
const Question  = loadable({loader:()=>import("./Question"),loading:Loading})
const News  = loadable({loader:()=>import("./News"),loading:Loading})
const NewsDetail  = loadable({loader:()=>import("./NewsDetail"),loading:Loading})
const Error  = loadable({loader:()=>import("./Error"),loading:Loading})
const AuthUser  = loadable({loader:()=>import("../guard/AuthUser"),loading:Loading})
const User  = loadable({loader:()=>import("./User"),loading:Loading})
//import Reg from './reg';
//import Success from './success';
//import Login from './login';
//import About from './About';
//import Join from './Join';
//import Question from './Question';
//import News from './News';
//import NewsDetail from './NewsDetail';
//import Error from './Error';
//import AuthUser from '../guard/AuthUser'
//import User from './User';

class App extends Component {
  render() {
  	let {bLoading,bHead,bOffcanvas,showLoading,showHead,showOffcanvas,location}= this.props;
    let path = location.pathname;
    if(/home|about|join|question|news/.test(path)){
    	setTimeout(()=>{
    		showHead(true);
    	  showOffcanvas(true);
    	},0)
    }
    if(/Reg|Login|Success|user/.test(path)){
    	setTimeout(()=>{
    		showHead(false);
    	  showOffcanvas(false);
    	},0)
    }
    
    return (
       <React.Fragment>
        {bLoading && <Loading/>} 
        {bHead && <Head/>}
        {bOffcanvas && <Offcanvas/>}
        <Switch>
          <Route path='/home'  component={Home}/>
          <Route path='/about'  component={About}/>
          <Route path='/join'  component={Join}/>
          <Route path='/question'  component={Question}/>
          <Route path='/news'  component={News}/>
          <Route path='/NewsDetail/:id'  component={NewsDetail}/>
          <Route path='/Reg'  component={Reg}/>
          <Route path='/Login'  component={Login}/>
          <Route path='/Success'  component={Success}/>
          <AuthUser path='/user'  component={User}/>
          <Route path='/User'  component={User}/>
          <Redirect from='/' to="/home" />
          <Route component={Error}/>
        </Switch>
        
      </React.Fragment>
    )
  }
}
const mapStateToProps = state => ({
	bLoading:state.bLoading,
	bHead:state.bHead,
	bOffcanvas:state.bOffcanvas,
})
const mapDispatchToProps = dispatch => ({
	showHead:(bl)=>{
		dispatch({type:'SHOW_HEAD',payload:bl})
	},
	showOffcanvas:(bl)=>{
		dispatch({type:'SHOW_OFFCANVAS',payload:bl})
	},
})
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
