import React, { Component } from 'react';

class Banner extends Component {
  render() {
    return (
		<div className="banner">
			<div className="down">
				<a href="">
				    <div className="down-img"><img src="../assets/images/download.png" /></div>
				    <div className="down-text">
				    	<p>立即下载</p>
				    	<p>Download</p>
				    </div>
				</a>
			</div>
		</div>
    );
  }
}

export default Banner;