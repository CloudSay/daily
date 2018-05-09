import React, { Component } from 'react';
import Slider from './Slider';
import NewsMain from './NewsMain';
import {Route,Redirect,Switch} from 'react-router-dom';
import {connect} from 'react-redux'
class News extends Component {
	constructor(props){
    super(props);
    this.state={
      list:[]
    };
    let url=`/assets/data/close.json`;
    props.showLoading(true);//状态请求
    this.getJSON(url,'list')
  }

  getJSON(url,key){
    fetch(url).then(
      res=>res.json()
    ).then(
      data=>{
        setTimeout(()=>{
          this.props.showLoading(false);//状态请求
          this.setState({[key]:data})
        },1000)
      }
    )
  }
  render() {
    return (
      <React.Fragment>
		    <div style={{height: 49+'px'}}></div>
        <NewsMain list={this.state.list} dataName='news'/>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
	newsData:state.Newsdata
})
const mapDispatchToProps = dispatch => ({
	showLoading:(bl)=>{
		dispatch({type:'SHOW_LOADING',payload:bl})
	},
})
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(News);
