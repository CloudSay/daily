import React, { Component } from 'react';
import Slider from './Slider';
import NewsMain from './NewsMain';
import {Route,Redirect,Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import asyncAction from '../store/asyncAction';

class News extends Component {
	constructor(props){
    super(props);
	props.get('http://localhost:8080/close',{credentials:'include'});
  }
  render() {
  	let {NewsData} = this.props;
  	console.log(NewsData)
    return (
      <React.Fragment>
		 <div style={{height: 49+'px'}}></div>
         <NewsMain list={NewsData} dataName='news'/>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
	NewsData:state.NewsData
})
const mapDispatchToProps = dispatch => ({
	showLoading:(bl)=>{
		dispatch({type:'SHOW_LOADING',payload:bl})
	},
	get:(url,cred)=>{dispatch(asyncAction(dispatch,url,cred,'SHOW_HOME_DATA'))}
})
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(News);
