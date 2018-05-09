import React, { Component } from 'react';

class NewsDetail extends Component {
	constructor(props){
		super();
		this.state = {
			list:[]
		}
		let url =`http://localhost:8080/detail`;
		let id = props.match.params.id;
		fetch(url).then(
			res=> res.json()
		).then(
			data=>this.setState({list:data[id-1]})
		)
	}
  render() {
    return (
    	<div className ="NewsDetail">
			<div style={{height: 49+'px'}}></div>
	        <div className="article">
				<h2>{this.state.list.id}.{this.state.list.tit}</h2>
				<p>时间：{this.state.list.time}   作者：{this.state.list.auther} </p>
				<div className="con">
					<img src={this.state.list.src} />
					<p>{this.state.list.articl}</p>
				</div>
			</div>
	    </div>
    )
  }
}

export default NewsDetail;