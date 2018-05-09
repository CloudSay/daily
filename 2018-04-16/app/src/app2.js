import React,{Component} from 'react';
import ReactDom from 'react-dom';

class ToDoList extends Component{
	constructor(){
		super();
		this.state = {
			iptUserName :'XX',
			iptContent :'000',
			sendActie:null,
			list:[
			{name:'alex',content:'xxx'}
			]
		};
		this.add = this.add.bind(this)
		this.changeIpt = this.changeIpt.bind(this)
	}
	render(){
		return (
			<div>
			   <h3>留言板</h3>
			   <input
			      type='text'
			      value = {this.state.iptUserName}
			      name = 'iptUserName'
			      onChange= {this.changeIpt}
			    /><br/>
			    <input
			      type='text'
			      value = {this.state.iptContent}
			      name = 'iptContent'
			      onChange= {this.changeIpt}
			    /><br/>
			    <input type = 'button' value ='按钮' onClick ={this.add}/>
			    <ul>
			       {
			       	this.state.list.map((item,index)=>{
			       		return (
			       			<li key = {index}>
			       			  {item.content}
			       			  <span> 
			       			     {item.name}
			       			  </span>
			       			</li>
			       		)
			       	})
			       }
			    </ul>
			</div>
		);
	}
	changeIpt(ev){
		if(ev.target.name === 'iptUserName'){
			this.setState({
				sendActive:ev.target
			});
		}
		this.setState({
			[ev.target.name]:ev.target.value,
		})
	}
	add(ev){
		let arr = [...this.state.list];
		arr.push({
			name:this.state.iptUserName,
			content:this.state.iptContent,
		})
		this.setState({
			list:arr,
			iptUserName:'',
			iptContent:''
		});
		this.state.sendActive && this.state.sendActive.focus()
	}
}
export default ToDoList;


