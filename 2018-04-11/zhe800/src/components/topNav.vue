<template>
	<div id="top-nav">
		<div class="bord">
			<div class="count">
				<ul >
				<router-link tag = 'li' to = './home' active-class= 'active'><a href="javascriot:;">首页</a></router-link>
				<router-link tag = 'li' to = './pinpai' active-class= 'active'><a href="javascriot:;">品牌团</a></router-link>
					<li><a href="#">优品汇</a></li>
					<li><a href="#">淘宝精选</a></li>
				<router-link tag = 'li' to = './kuai' active-class= 'active'><a href="javascriot:;">9块9包邮</a></router-link>
					<li><a href="#">20元封顶</a></li>
					<li><a href="#">精选预告</a></li>
					<li><a href="#">特卖商城</a></li>
					<li><a href="#">今日上新</a></li>
					<li><a href="#">即将下架</a></li>
					<li><a href="#">每日10件</a></li>
					<li><a href="#">排行榜</a></li>
				</ul>
				<form action="" method="post">
					<input type="text"  class="txt" />
					<input type="button" class="btn"/>
				</form>
			</div>
		</div>
		<div class="count">
				<ul >
					<li><a href="#">全部</a></li>
					<li><a href="">中老年</a></li>
					<li><a href="">运动</a></li>
					<li><a href="">家纺</a></li>
					<li><a href="">美妆</a></li>
					<li><a href="">配饰</a></li>
					<li><a href="">数码</a></li>
					<li><a href="">家电</a></li>
					<li><a href="">内衣</a></li>
					<li><a href="">男装</a></li>
					<li><a href="">美食</a></li>
					<li><a href="">母婴</a></li>
					<li><a href="">儿童</a></li>
					<li><a href="">居家</a></li>
					<li><a href="">鞋包</a></li>
					<li><a href="#">女装</a></li>
				</ul>
			</div>
	</div>
</template>

<script>
	$(window).scroll(function(){
	if($("html").scrollTop()>400){
		$("#top-nav").stop().show()
	}else{
		$("#top-nav").stop().hide()
	}
})
</script>

<style scoped>
#top-nav{position: fixed;top:0;left:0;background:#fff;width:100%;z-index:9;display:none;}
.bord{width:100%;border-bottom: 2px #f00 solid;}
#top-nav ul{width:900px;float:left;}
#top-nav ul li{float:left;text-align: center;line-height: 40px;margin:0 10px;font-size:14px;}
#top-nav form{float: right;height:30px;position:relative;overflow: hidden;width:240px;top:5px;}
.btn{width:85px;height:30px;background:url(../assets/img-index/bg_img/index-common.png) -190px 0 no-repeat;border:none;position: absolute;right:0;top:0;}
.txt{height:25px;border:1px #ed625c solid;position: absolute;left:0;top:0;}

</style>