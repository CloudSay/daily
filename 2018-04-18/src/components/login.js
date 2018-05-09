import React, { Component } from 'react';
import {Route,Redirect,Switch,Link} from 'react-router-dom';
import '../assets/css/login.css'
import '../assets/js/login.js'
class Login extends Component {
	constructor(){
		super();
		this.state={
			username:'dsgdfgsdfg',
			password:'12312312'
		}
		this.add = this.add.bind(this)
	}
	add(){
		fetch('http://localhost:8009/user',{
			method: 'post',
			credentials:'include',
			body:JSON.stringify({username:$('.text').val(),password:$('.psd').val(),type:'login'}),
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
      <div className="login" >
            <div className="login-title">
               <p>悦跑圈登录</p>
               <i></i>
            </div>
            
            <form method="post" action="">
	            <div className="login-bar">
	                <ul>
	                    <li><img src="/assets/images/login_user.png"/><input type="text" className="text" placeholder="请输入用户名" /></li>
	                    <li><img src="/assets/images/login_pwd.png"/><input type="password" className="psd" placeholder="请输入确认密码" /></li>
	                </ul>
	            </div>
	            <div className="login-btn">
	                <input type="button" value='登录' onClick={this.add} className ='submit'/>
	                <div className="login-reg"><p>没有账号，先<Link to='/reg' className='suc'>注册</Link></p></div>
	            </div>
           </form>
       </div>
    )
  }
}

export default Login;