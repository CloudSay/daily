import React, { Component } from 'react';

class App extends Component {
	constructor(props){
		super(props);
		this.state={
			list:['a','b']
		}
		this.state=this.props.store.getState()
    console.log('aconstructor',this.props.store.getState())
			props.store.subscribe(()=>{
				this.setState(this.props.store.getState())
			})
	}
	component
  render() {
    return (
      <div className="App">
        <h3>redux 5.x</h3>
        <input type="text" ref="ipt"/>
        <input type="button" value="添加" onClick={this.send.bind(this)}/>
        <input type="button" value="异步添加" onClick={this.asyncAdd.bind(this)}/>
        {
        	this.state.list.map((value,index)=>{
        		return <li key={index}>{value}</li>
        	})
        }
      </div>
    );
  }
  send(){
//	this.setState({
//		list:this.state.list.concat(this.refs.ipt.value)
//	})
    this.props.store.dispatch({type:'ADD_ITEM',payload:this.refs.ipt.value})
    
  }
  asyncAdd(){
//	fetch(url).then(
//		res=>res.json()
//	).then(
//		data=>this.props.store.dispatch({type:'ADD_ITEM',payload:{a:this.refs.ipt.value,b:data}})
//	)
    let vau= this.refs.ipt.value
    setTimeout(()=>{
    	 this.props.store.dispatch({type:'ADD_ITEM',payload:vau})
    },1000)
  }
}

export default App;
