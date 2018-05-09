import React, { Component } from 'react';
import {Link} from 'react-router';
//import style from '../assets/css/App.css';
import '../assets/css/App.css';

class App extends Component {
  render() {
    return (
        <div calssName = 'app'>
          <h3>app</h3>
          <Link to= '/home' activeClassName={'routerActive'}>首页</Link>
          <Link to= '/product' activeClassName={'routerActive'}>商品</Link>
          <Link to= '/user' activeClassName={'routerActive'}>VIP</Link>
          <Link to= '/login' activeClassName={'routerActive'}>登录</Link>
          <Link to= '/reg' activeClassName={'routerActive'}>注册</Link>

          {this.props.children}
        </div>
    );
  }
}

export default App;
