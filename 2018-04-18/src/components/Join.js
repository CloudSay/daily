import React, { Component } from 'react';
import JoinL from './JoinL';
import JoinCon from './JoinCon';
import Job from './Job';
class Join extends Component {
  render() {
    return (
      <React.Fragment>
        <JoinL />
        <JoinCon />
        <Job />
      </React.Fragment>
    )
  }
}

export default Join;