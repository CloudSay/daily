<template>
	<div class="login">
		<div class="top count">
			<img src="../assets/img/logo.jpg" />
			<span>
			还没有账号？
			<a href="register.html">立即注册</a>
			</span>
		</div>
		<div class="center count">
			<img src="../assets/img/login_03.jpg"/>
			<form action="" method="post">
				<p>
					<input type="text" v-model="iptusername" placeholder="请输入用户名" id="txt" name='' value=''/>
				</p>
				<p>
					<input type="password" v-model="iptpassword" placeholder="请输入密码" id='pass' name='' value=''/>
				</p>
				<p>
					<input type="button" value="登录" @click = 'login'/><a href="#">忘记密码？</a>
				</p>
			</form>
		</div>
		<div class="buttom">
			<p><a href="">京ICP证120075号</a>  京ICP备10051110号-5  <a href="">京公网安备11010502025623 </a> 统一社会信用代码 91110105571298269B  食品流通许可证SP1101051510352397 </p>
			<p>出版物经营许可证 新出发京零字第朝160018号  Copyright©2011-2015 版权所有 ZHE800.COM</p>
			<div>
				<img src="../assets/img/login0_03.jpg"/>
				<img src="../assets/img/login0_05.jpg"/>
				<img src="../assets/img/login0_07.jpg"/>
			</div>
		</div>
	</div>
</template>

<script>
	
	export default{
		data(){
			return {
				iptusername:'',
				iptpassword:'',
			}
		},
		methods:{
			login(){
//				console.log(1)
				this.$http({
			      url: "http://datainfo.duapp.com/shopdata/userinfo.php",
			      params:{
							status:"login",
							userID:this.iptusername,
							password:this.iptpassword
						},
			    }).then(
			      a =>  {
//			      	console.log(a.data)
			        if(typeof a.data == "object"){
						if(this.iptusername != "" ){
							this.$router.push({path:'/home/'+this.iptusername});
							$.cookie("usename",this.iptusername)
						}
					}else if(a.data == 2){
						alert("用户名和密码不符")
					}else if(a.data == 0){
						alert("用户名不存在")
					}
			      }
			    )
			}
		}

	}
</script>

<style scoped>
	/*@import url("../assets/css/login.css");*/
body{background: #f5f5f5;}
.count{width:1210px;margin: 10px auto;overflow: hidden;}
.top {height:70px;}
.top img{float:left;}
.top span{float:right;padding-top:40px;font-size: 12px;}
.top span a{color:#7fcdf5;}
.center{background: #fff;height:550px;}
.center img{float:left;margin-top:20px;margin-left: 150px;width:500px;}
.center form{float:right;width:350px;height:480px;border:#eee solid 1px;margin-top:50px;margin-right: 100px;}
.center form p:nth-child(1),.center form p:nth-child(2){display:block;height:50px;width:280px;border:1px #999 solid;margin: 50px 50px;}
.center form p:nth-child(1){background: url(../assets/img/list_03.jpg) no-repeat 10px center;margin-top:100px;}
.center form p:nth-child(2){background: url(../assets/img/list_06.jpg)no-repeat 10px center;}
.center form p:nth-child(1) input,.center form p:nth-child(2) input{border:none;height:40px;margin-left: 50px;font-size: 18px;outline: none;}
.center form p:nth-child(3) input{border:none;background: #ef3129;color:white;font-size:18px;width:150px;height:50px;margin-left: 80px;margin-right: 10px;}
.center form p:nth-child(3) a {font-size: 14px;}
.buttom{height:120px;background: #fff;text-align: center;font-size: 12px;color:#aaa;}
.buttom p{margin:10px 0;}
.buttom p a{color:#aaa;}
.buttom div{width:288px;margin:0 auto;height:35px;}
.buttom img{float:left;margin:10px 2px;}

</style>