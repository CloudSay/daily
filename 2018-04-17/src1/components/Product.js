import React, { Component } from 'react';
import {Link} from 'react-router'
class Product extends Component {
  render() {
    return (
        <div calssName = 'product'>
          <h3>product</h3>
          <Link to="/product/detail/001" activeStyle={{background:"#939"}}>商品001</Link>
          <Link to="/product/detail/002?a=1&b=2" activeStyle={{background:"#939"}}>商品002</Link>
          <Link to={{pathname:"/product/detail/003",query:{a:3,b:4}}} activeStyle={{background:"#939"}}>商品003</Link>
          {this.props.children}
        </div>
    );
  }
}

export default Product;
