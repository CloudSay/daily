import React, { Component } from 'react';
import {Route,Redirect,Switch} from 'react-router-dom';
import Banner from './Banner';
import Sticky from './Sticky';
import Main from './Main';
import GropeMain from './GroupMain';
import BrandMain from './BrandMain';
import Error from './Error';
class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Banner />
        <Sticky />
        <Switch>
          <Route path='/home/main'  component={Main}/>
          <Route path='/home/groupMain'  component={GropeMain}/>
          <Route path='/home/brandMain'  component={BrandMain}/>
          <Redirect from='/home' to="/home/main" />
          <Route component={Error}/>
        </Switch>
      </React.Fragment>
    )
  }
}

export default Home;