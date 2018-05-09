import React, { Component } from 'react';

class Slider extends Component {
  render() {
  	return (
	   <div data-am-widget="slider" className="am-slider am-slider-default" data-am-slider='{}' >
		  <ul className="am-slides">
		      <li><img src="../assets/images/banner.jpg"/></li>
		      <li><img src="../assets/images/news.jpg" /> </li>
		  </ul>
		</div>
    
    );
  }
}

export default Slider;