import React, { Component } from 'react';
//import {Route,Redirect,Switch} from 'react-router-dom';
import '../assets/css/success.css'
//import '../assets/js/success.js'
class Success extends Component {
  render() {
    return (
      <div className="success">
            <img src="/assets/images/success.png" />
            <p>恭喜您注册成功！</p>
            <div className="s_msg">
                <div className="s_title">您的用户名：<span className="s_red">13137844382</span></div>
                <div className="s_title">移动端的产品正在搭建中，请您移步PC端
请用PC电脑打开如下网站：</div>
                <span className="s_redlink"><a href="http://www.tuilang.cc" target="_blank" classname='suc'>http://www.tuilang.cc</a></span>
            </div>
        </div>
    )
  }
}

export default Success;