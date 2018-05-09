import React, { Component } from 'react';
import TabsNav from './TabsNav';
import TabsBd from './TabsBd';
import {Route,Redirect,Switch} from 'react-router-dom';
import Panel0 from './Panel0';
import Panel1 from './Panel1';
import Panel2 from './Panel2';
import Panel3 from './Panel3';
class Question extends Component {
  render() {
    return (
      <React.Fragment>
		    <div style={{height: 49+'px'}}></div>
				<div data-am-widget="tabs" className="am-tabs am-tabs-d2">
	        <TabsNav />
		 			<div className="am-tabs-bd" style={{background: "#2d3240"}}>
		        <Switch>
		          <Route path='/question/panel0'  component={Panel0}/>
		          <Route path='/question/panel1'  component={Panel1}/>
		          <Route path='/question/panel2'  component={Panel2}/>
		          <Route path='/question/panel3'  component={Panel3}/>
		          <Redirect from='/question' to="/question/panel0" />
		          <Route component={Error}/>
		        </Switch>
		      </div> 
        </div>
      </React.Fragment>
    )
  }
}

export default Question;