import React, { Component } from 'react';
import {Link} from 'react-router';

class App extends Component {
  render() {
    return (
      <div className="App">
       
      <h3>router3</h3>
          <Link to= '/home' activeClassName={'routerActive'}>首页</Link>
       {this.props.children}
      </div>
    );
  }
}

export default App;
