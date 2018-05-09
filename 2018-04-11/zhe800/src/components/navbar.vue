<template>
	<div class="navbar">
			<nav>
			<ul>
				<li><a href="#">卖家中心</a></li>
				<li><a href="#">帮助中心</a></li>
				<li><a href="#">我的订单</a></li>
				<li><a href="#">购物车<span>0</span></a></li>
				<li class='welcom2'><router-link to="/login">登录</router-link></li>
				<li class='welcom1'><router-link to="/reg">免费注册</router-link></li>
				<li><a href="#">QQ登录</a></li>
				<li>
					<a href="#">手机版</a>
					<ul>
					   <li>
							<img src="../assets/img-index/code_03.jpg"/>
					   </li>
					</ul>
				</li>
				<li><a href="#">800旗下网站</a></li>
			</ul>
		</nav>
		<div class="search count">
			<div class="logo">
				<img src="../assets/img-index/reach_09.gif">
			</div>
			<form  >
				<input type="text" name="" id="" value="" />
				<input type="button" name="" id="" value="" />
			</form>
			<img src="../assets/img-index/head_three_icon_retina.png" />
		</div>
		<div class="nav count">
			<ul>
				<router-link tag = 'li' to = './home' active-class= 'active'><a href="javascriot:;">首页</a></router-link>
				<router-link tag = 'li' to = './pinpai' active-class= 'active'><a href="javascriot:;">品牌团</a></router-link>
				<router-link tag = 'li' to = './' ><a href="javascriot:;">优品汇</a></router-link>
				<router-link tag = 'li' to = './home' ><a href="javascriot:;">淘宝精选</a></router-link>
				<router-link tag = 'li' to = './kuai' active-class= 'active'><a href="javascriot:;">9块9包邮</a></router-link>
				<router-link tag = 'li' to = './' ><a href="javascriot:;">精选预告</a></router-link>
				<router-link tag = 'li' to = './' ><a href="javascriot:;">特卖商城</a></router-link>
				<router-link tag = 'li' to = './intergral' active-class= 'active'><a href="javascriot:;">积分商城</a></router-link>
				<router-link tag = 'li' to = './home' ><a href="javascriot:;">签到享好礼</a></router-link>
			</ul>
		</div>	
	</div>
</template>

<script>
	export default{
		mounted(){
			$("nav ul").children("li").eq(7).on("mouseenter",function(){
			$("nav ul").children("li").eq(7).children("ul").stop().slideDown()
		})
		    $("nav ul").children("li").eq(7).on("mouseleave",function(){
			$("nav ul").children("li").eq(7).children("ul").stop().slideUp()
		})
			$(function(){
					if($.cookie("usename")){

						$(".welcom2").html("<a>欢迎您！"+$.cookie("usename")+"</a>")
						$(".welcom1").html("<a class='welcom'>退出</a>")
						$.cookie("usename",null)
					}
					$(".welcom").on("click",function(){
		
						$(".welcom2").html('<a href="javascript:;">免费注册</a>')
					    $(".welcom1").html('<a href="javascript:;">登录</a>')
					})
				})
		}
	}
</script>

<style scoped>
	
nav{background: #efefef;}
nav>ul{width:1210px;height:29px;margin: 0 auto;}
nav>ul>li{float:right;line-height: 29px;text-align: center;}
nav>ul>li a{color:#999;font-size:12px;border-right:#ccc solid 1px;padding: 0 20px;}
nav>ul>li:first-child a{border-right:none;}
nav>ul>li:nth-child(5) a,nav>ul>li:nth-child(6) a{color:#ed625c;}
nav>ul>li:nth-child(8){width:100px;position:relative;}
nav>ul>li:nth-child(8) ul {display: none;position: absolute;z-index:1;border: #eee solid 1px;}
nav>ul>li:nth-child(8) ul img{width:120px;}
nav>ul>li a:hover{color:#ed625c;}

.search{margin-top:20px;}
.logo{float: left;width:250px;height:50px;}
.logo>img{float: left;width:250px;height:50px;}
.search form{float:left;background: url(../assets/img-index/reach.jpg) no-repeat;background-size:600px 40px;overflow: hidden;height:50px;width:600px;}
.search form input:nth-child(1){margin-left: 125px;border:none;float: left;height:20px;margin-top:8px;width:400px;outline: none;font-size: 20px;outline: none;}
.search form input:nth-child(2){float:right;margin-top:6px;width:50px;height:30px;margin-right: 18px;background: url(../assets/img-index/large_27.jpg);border:none;background-size:50px 30px;}
.search>img{float:right;height:40px;}

.nav{margin-top:10px;border-bottom:#e60044 solid 2px;}
.nav>ul {display: flex;justify-content: center;align-items: center;}
.nav>ul>li{flex:1;height:40px}
.nav>ul>li{display: flex;justify-content: center;align-items: center;}

.nav>ul>li:hover{box-shadow: 5px 0 3px #aaa;}
.nav>ul>li.active{background:#e60044;}
.nav>ul>li.active a{color:#fff;}

.tit{margin-top: 40px;overflow: hidden;}
.tit>h1{height:50px;float: left;color:#ff686f;font-size:25px;}
.tit>span {heigth:50px;float: left;font-size: 14px;padding-top: 12px;}
.tit>strong{font-size: 28px;heigth:50px;float: left;margin-left: 10px;color:#ff686f;}
.tit>ul{float:right}
.tit>ul li{float:right;height:50px;line-height: 50px;text-align: center;margin:0 10px;}
.tit>ul li:first-child a{display:block;background: #ff404c;color:white;height: 30px;width:100px;margin-top: 10px;line-height: 30px;}
</style>