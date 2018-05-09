import React, { Component } from 'react';
import AboutHead from './AboutHead';
import AboutCon from './AboutCon';
class About extends Component {
  render() {
    return (
      <React.Fragment>
        <AboutHead />
        <AboutCon />
      </React.Fragment>
    )
  }
}

export default About;