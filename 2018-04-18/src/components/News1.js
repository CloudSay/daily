import React, { Component } from 'react';
import Slider from './Slider';
import NewsMain from './NewsMain';
import {Route,Redirect,Switch} from 'react-router-dom';
import {connect} from 'react-redux'
class News extends Component {
	constructor(props){
    super(props);
	props.get('/assets/data/close.json');
  }
  render() {
  	let {NewsData} = this.props;
    return (
      <React.Fragment>
		 <div style={{height: 49+'px'}}></div>
         <NewsMain list={NewsData} dataName='news'/>
      </React.Fragment>
    )
  }
}
const asyncAction = (dispatch,url,type)=>{
    fetch(url).then(
      res=>res.json()
    ).then(
      data=>{
        setTimeout(()=>{
          dispatch({type:'SHOW_LOADING',payload:false})//状态请求
          dispatch({type:type,payload:data})
        },1000)
      }
    )
    return  dispatch({type:'SHOW_LOADING',payload:true})//状态请求
}
const mapStateToProps = state => ({
	NewsData:state.NewsData
})
const mapDispatchToProps = dispatch => ({
	showLoading:(bl)=>{
		dispatch({type:'SHOW_LOADING',payload:bl})
	},
	get:(url)=>{dispatch(asyncAction(dispatch,url,'SHOW_HOME_DATA'))}
})
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(News);
