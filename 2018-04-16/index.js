var React = require('react')
var ReactDom = require('react-dom');

var APP = React.createClass({
  getInitialState:function(){
     msg1:'APP组件'
  },
  render(){
    return(
      <div>
        <h3>{this.state.msg1}</h3>
        <input type='button'/>
      </div>
    )
  }
})
