import React, { Component } from 'react';

class Panel0 extends Component {
	constructor(props){
		super();
		this.state = {
			list:[]
		}
		let url =`/assets/data/question.json`;
		fetch(url).then(
			res=> res.json()
		).then(
			data=>this.setState({list:data})
		)
	}
  render() {
    return (
	          <div data-tab-panel-0>
	             <ul>
	             {
	             	this.state.list.map(item=>(
		             	<li key={item.id}>
		             		<a href="">
		             			<h2>Q{item.id}.{item.tit}</h2>
		             			<p>{item.articl}</p>
		             		</a>
		             	</li>
	             		
		             	)
		            )
	             }
	             	
	             </ul>
	          </div>
    );
  }
}

export default Panel0;