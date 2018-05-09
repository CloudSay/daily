import React, { Component } from 'react';
import {hashHistory} from 'react-router'
class Reg extends Component {
  render() {
    return (
        <div calssName = 'reg'>
          <h3>reg</h3>
          <input type= 'button' value = '按钮1' onClick = {()=>{this.props.router.go(-1)}}/>
          <input type= 'button' value = '按钮2' onClick = {()=>{hashHistory.go(-1)}}/>
          <input type= 'button' value = '按钮3' onClick = {()=>{window.history.go(-1)}}/>
        </div>
    );
  }
}

export default Reg;
