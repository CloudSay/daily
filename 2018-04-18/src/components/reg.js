import React, { Component } from 'react';
import {Route,Redirect,Switch,Link,Prompt} from 'react-router-dom';
import '../assets/css/register.css'
import '../assets/js/register.js'

class Reg extends Component {
		add(){
		fetch('http://localhost:8009/user',{
			method: 'post',
			credentials:'include',
			body:JSON.stringify({username:$('.username').val(),password:$('.pwd').val(),type:'reg'}),
			headers: {
		        'Accept': 'application/json',
		        'Content-Type': 'application/json'
		    }
			}).then(
		    res=>res.json()
		).then(
		    res=>console.log(res)
		)

	}
  render() {
    return (
      <div id="layout">
            <span>悦跑圈账号注册</span>
            <form  method="post">
            <ul>
                <p id="err_msg"></p>
                <li><i className="un"><img src="/assets/images/user_name.png"/></i><input className="username" type="text" placeholder="请输入用户名" /></li>
                <li><i className="yz"><img src="/assets/images/msg.png"/></i><input className="yzm" type="text" placeholder="请输入手机验证码" /><input type="button" id="send" value="获取验证码" /></li>
                <li><i className="pw"><img src="/assets/images/pwd.png"/></i><input className="pwd" type="password" placeholder="请输入密码" /></li>
                <li><i className="pw2"><img src="/assets/images/pwd.png"/></i><input className="pwd2" type="password" placeholder="请输入确认密码" /></li>
                <div className="queren"><input className="fx" type="checkbox" defaultChecked="checked" /><p>我已阅读并同意《用户协议》</p></div>
            </ul>
                <div className="reg_btn">
                    <input className="submit" type="button" value='注册' onClick = {this.add}/>
                    <div className="reg-login"><p>已有帐号，立即<Link to='/login' className='suc'>登陆</Link></p></div>
                </div>
            </form>
            <Prompt
              when={true}
              message='确定要离开吗?'
            />
        </div>
    )
  }
}

export default Reg;