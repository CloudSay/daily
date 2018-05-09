import React, { Component } from 'react';
import {connect} from 'react-redux'
class App extends Component {
  render() {
  	let {list,add} = this.props
    return (
      <div className="App">
        <h3>redux 5.x</h3>
        <input type="text" ref="ipt" />
        <input type="button" value="添加" onClick={()=>{add(this.refs.ipt.value)}}/>
        {
        	list.map((value,index)=>{
        		return <li key={index}>{value}</li>
        	})
        }
      </div>
    );
  }
}
//export default App;
const mapStatetoProps=(state,ownProps)=>({
		list:state.list
})
const mapDispathToProps=(dispatch,ownProps)=>({
		add:(arg)=>{
			dispatch({type:'ADD_ITEM',payload:arg})
		}
})

export default connect(
	mapStatetoProps,
	mapDispathToProps
)(App);;