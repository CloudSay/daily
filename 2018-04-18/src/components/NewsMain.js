import React, { Component } from 'react';
import {Link,NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import asyncAction from '../store/asyncAction';
class NewsMain extends Component {
	constructor(props){
    super(props);
	props.get('http://localhost:8080/detail',{credentials:'include'});
  }
  render() {
  	let {NewsDetailData} = this.props;
  	console.log(NewsDetailData)
    return (
		<div className="main">
			<h2>新闻动态</h2>
			<ul data-am-widget="gallery" className="am-gallery am-avg-sm-1 am-avg-md-1 am-avg-lg-1 am-gallery-overlay" >
		      {
		      	this.props.list.map(item=>(
				      <li key={item.id}>
				        <div className="am-gallery-item">
				            <Link  className="" to={{pathname:"/NewsDetail/"+item.id,query:{data:NewsDetailData}}} >
				              <img src={item.src}  alt={item.alt}/>
				                <h3 className="am-gallery-title">{item.alt}</h3>
				                <div className="am-gallery-desc">{item.time}</div>
				            </Link>
				        </div>
				      </li>
		      	)
		       )
		      }
		      
		  </ul>
		</div>
    );
  }
}

const mapStateToProps = state => ({
	NewsDetailData:state.NewsDetailData,
})
const mapDispatchToProps = dispatch => ({
	showLoading:(bl)=>{
		dispatch({type:'SHOW_LOADING',payload:bl})
	},
	get:(url,cred)=>{dispatch(asyncAction(dispatch,url,cred,'SHOW_DETAIL_DATA'))}
})
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(NewsMain);