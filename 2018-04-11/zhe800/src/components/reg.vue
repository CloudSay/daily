<template>
	<div class="reg">
		<div class="top count">
				<img src="../assets/img/logo.jpg" />
				<span>
				   已经有团800或折800帐号了？
				<a href="Login.html">去登录</a>
				</span>
		</div>
		<div class="center count">
			
			<form action="" method="post">
				<p>
					<span >
						手机号：
					</span>
					<input type="text" value="" id="txt"/>
					<span id="txt_n">
						
					</span>
				</p>
				<p>
					<span >
						密码：
					</span>
					<input type="password" value=""  id="pass"/>
					<span id="pass_n">
						
					</span>
				</p>
				<p>
					<span>
						确认密码：
					</span>
					<input type="password" value="" id="a_pass"/>
					<span id="a_pass_n">
						
					</span>
				</p>
				<p id="v-code">
					<span>
						验证码：
					</span>
					<input type="number"  id="code"/>
					<span id="num">0000</span>
					<span id="code_n">
						
					</span>
				</p>
				<p class="check">
				   <input type="checkbox" id="check" /> 我已阅读并接受折800的<a href="">《用户服务协议》</a><br />
				</p>
				   <input type="button" value="注册" class="btn"/>
				
			</form>
			<div class="f-left">
				<p>还可以使用这些账号登录</p>
				<p>
				<span>QQ登录</span>
				<span>百度登录</span>
				</p>
				<p>
				<span id="dis">淘宝账号</span>
				<span id="dis">人人账号</span>
				</p>
			</div>
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
		mounted(){
			$("#num").on("click",function(){
			var sum="";
			var i=0;
			while(i<4){
				var a=parseInt(Math.random()*74+48)
				if (48<=a&&a<=57){
					sum+=String.fromCharCode(a);
					i++;
				}
			}
			$("#num").html(sum);
		})
		var onOff1 =false;
		var onOff2 =false;
		var onOff3 =false;
		var onOff4 =false;
		$("#txt").focus(()=>{
			$("#txt").val("")
			$("#txt_n").css({color:"#aaa"})
			$("#txt_n").html("请输入手机号码");
		})
		$("#txt").blur(function () {
			if(!isNaN(Number($("#txt").val()))){
				onOff1=true;
			}else{
				$("#txt_n").css({color:"#f00"})
				$("#txt_n").html("手机号格式不正确，请重新输入")
//				alert();
			}
		})
		$("#pass").focus(()=>{
			$("#pass").val("")
			$("#pass_n").css({color:"#aaa"})
			$("#pass_n").html("请输入密码")
		})
		$("#pass").blur(function () {
			$("#pass").val("")
			var str = $("#pass").val();
			var reg=/^[a-z0-9_-]{6,24}$/;
			if(reg.test(str)){
				onOff2=true;
			}else{
				$("#pass_n").css({color:"#f00"})
				$("#pass_n").html("请输入6-24位字母，数字，半角符")
			}
		})
		$("#a_pass").focus(()=>{
			$("#a_pass").val("")
			$("#a_pass_n").css({color:"#aaa"})
			$("#a_pass_n").html("请重复输入密码")
		})
		$("#a_pass").blur(function (){
			if ($("#a_pass").val() == $("#pass").val()){
				onOff3=true;
			}else{
				 $("#a_pass_n").css({color:"#f00"})
				$("#a_pass_n").html( "重复密码不一致")
			}
		}) 
		$("#code").focus(()=>{
			$("#code").val("")
			$("#code_n").css({color:"#aaa"})
			$("#code_n").html("请输入验证码")
		})
		$("#code").blur(function () {
			if($("#code").val() == $("#num").html()){
				onOff4=true;
			}else{
				 $("#code_n").css({color:"#f00"})
				
				$("#code_n").html("验证码不正确，请重新输入")
//				alert();
			}
		}) 
		$("#num").trigger("click")
		$("input[type=button]").click(function(){
			if(onOff1&&onOff2&&onOff3&&onOff4&&$("#check").is(':checked')){
				$.ajax({
					type:"post",
					url:"http://datainfo.duapp.com/shopdata/userinfo.php",
					data:{
						status:"register",
						userID:$("input[type=text]").val(),
						password:$("input[type=password]").val()
					}
				}).then(function(a){
					if(a == 1){
						alert("注册成功")
						this.$router.push({path:'/login/'});
					}else if(a == 0){
						alert("用户名重复")
					}else if(a == 2){
						alert("数据库报错")
					}
				})
			}
		})
		}
	}
	
</script>

<style scoped>
	/*@import url("../assets/css/register.css");*/
body{background: #f5f5f5;}
.count{width:1210px;margin: 10px auto;overflow: hidden;}
.top {height:70px;}
.top img{float:left;}
.top span{float:right;padding-top:40px;font-size: 12px;}
.top span a{color:#7fcdf5;}
.center{background: #fff;height:550px;}
.center form{float:left;width:600px;height:480px;margin-top:50px;margin-right: 100px;}
.center form p{display:block;height:35px;line-height:35px;margin: 50px 50px;text-align: right;}
.center form p span{border:none;height:35px;font-size: 18px;}
.center form p input{border:1px #ccc solid;border-radius:5px;height:35px;width:300px;font-size: 18px;float: right;}
.center form p:nth-last-child(2){height:30px;line-height: 30px;margin: 10px 0;font-size:12px}
.center form p:nth-last-child(2) input{width:15px;height:15px;float:none;}
.center form p:nth-last-child span{display: block;width:100px;height:40px;border:1px #333 solid;}
.center form p:nth-last-child input{width:100px;height:40px;border:1px #333 solid;}
.btn{border:none;background: #ef3129;color:white;font-size:18px;width:150px;height:50px;margin-left: 260px;}
.check{margin-left: 180px;}
#v-code{text-align:left;margin-left: 175px;}
#v-code input{float:none;width:180px;}
#num {float: right;width:90px;height:35px;border:1px #aaa solid;border-radius: 5px;text-align: center;line-height: 35px;;}
#txt_n,#pass_n,#a_pass_n,#code_n{font-size:12px;color:#aaa;float: right;margin-left: 180px;}


.buttom{height:120px;background: #fff;text-align: center;font-size: 12px;color:#aaa;}
.buttom p{margin:10px 0;}
.buttom p a{color:#aaa;}
.buttom div{width:288px;margin:0 auto;height:35px;}
.buttom img{float:left;margin:10px 2px;}
.f-left {padding-top:30px;overflow: hidden;}
.f-left p{margin: 20px auto;text-align: center;overflow: hidden;}
.f-left p:last-child,.f-left p:nth-child(2){margin-left:80px;}
.f-left p span{float: left;margin-left:50px;width:100px;height:40px;text-align: center;line-height: 40px;background: #eee;border: 1px #333 solid;}

</style>