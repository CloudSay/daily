import React, { Component } from 'react';

class Detail extends Component {
  render() {
    return (
        <div calssName = 'detail'>
          <h3>detail</h3>
          <div>接受params:{this.props.params.aid}</div>
          <div>接受query:{this.props.location.query.a}/{this.props.location.query.b}</div>
          <div>接受params:{this.props.location.pathname}</div>
        </div>
    );
  }
}

export default Detail;
