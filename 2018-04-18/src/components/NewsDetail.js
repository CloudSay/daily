import React, { Component } from 'react';

class NewsDetail extends Component {
 
  render() {
  	let data =this.props.location.query.data[this.props.match.params.id-1]
    return (
    	<div className ="NewsDetail">
			<div style={{height: 49+'px'}}></div>
	        <div className="article">
				<h2>{data.id}.{data.tit}</h2>
				<p>时间：{data.time}   作者：{data.auther} </p>
				<div className="con">
					<img src={data.src} />
					<p>{data.articl}</p>
				</div>
			</div>
	    </div>
    )
  }
}

export default NewsDetail