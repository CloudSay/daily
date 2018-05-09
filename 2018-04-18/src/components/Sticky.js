import React, { Component } from 'react';
import {Link,NavLink} from 'react-router-dom';
class Sticky extends Component {
  render() {
    return (
		<nav className="scrollspy-nav" data-am-scrollspynav="{offsetTop: 45}" data-am-sticky>
		  <ul>
    		<li><NavLink to="/home/main" activeClassName='am-active'>悦跑圈</NavLink></li>
    		<li><NavLink to="/home/groupMain" activeClassName='am-active'>悦跑团</NavLink></li>
    		<li><NavLink to="/home/brandMain" activeClassName='am-active'>跑团招募</NavLink></li>
		  </ul>
		</nav>
    );
  }
}

export default Sticky;