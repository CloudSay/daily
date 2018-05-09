import React, { Component } from 'react';
import {Link,NavLink} from 'react-router-dom';
//import  '../assets/css/amazeui.min.css'

class Offcanvas extends Component {
  render() {
    return (
    
		<div id="doc-oc-demo1" className="am-offcanvas">
		  <div className="am-offcanvas-bar">
		    <div className="am-offcanvas-content">
		        <ul>
		        	<li><NavLink to="/home" activeClassName='current'>首页</NavLink></li>
		        	<li><NavLink to="/about" activeClassName='current'>关于我们</NavLink></li>
		        	<li><NavLink to="/join" activeClassName='current' activeClassName='current'>加入我们</NavLink></li>
		        	<li id='ques'><NavLink to="/question" activeClassName='current'>常见问题</NavLink></li>
		        	<li><NavLink to="/news" activeClassName='current'>新闻动态</NavLink></li>
		        	<li><NavLink to="/user" activeClassName='current'>个人中心</NavLink></li>
		        </ul>
		    </div>
		  </div>
		</div>
     
    );
  }
}

export default Offcanvas;