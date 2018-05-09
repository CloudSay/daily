import React,{Component} from "react";
import ReactDom from 'react-dom';

class ToDoList extends Component{
  constructor(){
    super();
    this.state = {
      iptUsername:'',
      iptContent:'',
      list:[
        {name:'user',content:'sdfasdfasdfa'}
      ]
    };
    this.add = this.add.bind(this);
  }
  render () {
    return (
      <div>
         <h3></h3>
         <input
           type= 'text'
           name='iptUsername'
           value={this.state.iptUsername}
           onChange= {this.changeIpt}/><br />
           <input
             type= 'text'
             name='iptContent'
             value={this.state.iptContent}
             onChange= {this.changeIpt}/><br />
         <input type= 'text' ref='iptContent '/><br />
         <input type= 'button' value='按钮'/><br />
         <ul>
            <li>xxx-alex</li>
         </ul>
      </div>
    )
    changeIpt(ev){
      console.log(ev.target.value)
      this.setState({
        [ev.target.name]:ev.target.value;
      })
    }
  }


ReactDom.render(
  <ToDoList />,
  document.querySelector('#app')
);
