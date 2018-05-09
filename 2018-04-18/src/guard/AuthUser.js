import React from 'react';
import {Route,Redirect} from "react-router-dom";

class AuthUser extends React.Component{
	constructor(){
		super();
		this.state={
			user:[]
		}
	}
	componentDidMount(){
		fetch(
			'/assets/data/user.json'
		).then(
			res => res.json()
		).then(
			data => {
				data[0].hasAuthed = true;
				this.setState({user:data[0]})
			}
		)
	}
	render(){
		let {component:User,...rest} = this.props;
		if(!this.state.user.hasAuthed) return null;
		return <Route {...rest} render={props =>
		this.state.user.auth?
		  <User data={this.state.user} {...props}/>:
		  <Redirect to ="/login"/>
		}/>
	}
}
export default AuthUser;