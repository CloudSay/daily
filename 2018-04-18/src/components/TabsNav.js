import React, { Component } from 'react';
import {Link,NavLink} from 'react-router-dom';
class TabsNav extends Component {
  render() {
    return (
				 <ul className="am-tabs-nav am-cf" style={{background: "#2d3240"}}>
		        	<li><NavLink to="/question/panel0" activeClassName='am-active'>数据问题</NavLink></li>
		        	<li><NavLink to="/question/panel1" activeClassName='am-active'>分享问题</NavLink></li>
		        	<li><NavLink to="/question/panel2" activeClassName='am-active'>功能使用</NavLink></li>
		        	<li><NavLink to="/question/panel3" activeClassName='am-active'>跑团问题</NavLink></li>
			   </ul>
    );
  }
}

export default TabsNav;