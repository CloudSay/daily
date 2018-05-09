import React, { Component } from 'react';

class Head extends Component {
  render() {
    return (
    	<div className = 'head'>
			 <header data-am-widget="header" className="am-header am-header-default header" style={{background:"#000"}}>
					<div className="am-header-left am-header-nav">
						<a href="#doc-oc-demo1" className="" data-am-offcanvas><i className="am-header-icon am-icon-bars" id='mico'></i></a>
					</div>
					<div className="am-header-right am-header-nav">
						<a href="" className=""><img src="../assets/images/logo.png"/></a>
					</div>
			</header>
		</div>
    );
  }
}

export default Head;