import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
        <div calssName = 'home'>
          <h3>我是home</h3>
          <input type= 'button' value = '按钮' onClick = {this.go.bind(this)}/>
        </div>
    );
  }
  go(){
  	this.props.router.push({pathname:'/product/detail/005',query:{a:111,b:222}})
  }
  componentDidMount(){
  	this.props.router.replace('/home')
  }
}

export default Home;
