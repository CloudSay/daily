<template>
	<div class="banner count">
		<div class="left">
			<ul class="l_list">
				<li>
					<a href="">女装</a><a href="">内衣</a>
						<div class="outbox">
							<div class="l_img">
								<img src="../assets/img-index/l_img.jpg"/>
								<img src="../assets/img-index/l_img2.jpg"/>
								<img src="../assets/img-index/l_img3.jpg"/>
							</div>
							<div class="r_text">
								<h3 class="h3_1">男装</h3>
								<div class="tab_a">
									<a href="">男士衬衫</a>
									<a href="">羽绒服</a>
									<a href="">休闲夹克</a>
									<a href="">男士西装</a>
									<a href="">长袖T恤</a>
									<a href="">男士外套</a>
									<a href="">男士针织</a>
									<a href="">男士套装</a>
									<a href="">休闲长裤</a>
									<a href="">男士上装</a>
									<a href="">牛仔裤</a>
									<a href="">休闲装</a>
								</div>
								<h3 class="h3_2">美食</h3>
								<div class="tab_a">
									<a href="">肉松饼</a>
									<a href="">营养生鲜</a>
									<a href="">茶叶</a>
									<a href="">大红枣</a>
									<a href="">粮油干货</a>
									<a href="">饮料冲调</a>
									<a href="">瓜果干脯</a>
									<a href="">休闲食品</a>
									<a href="">蜂蜜</a>
									<a href="">饼干</a>
									<a href="">核桃</a>
									<a href="">糖果</a>
									<a href="">牛肉干</a>
								</div>
							</div>
						</div>
				</li>
				<li><a href="">男装</a><a href="">美食</a></li>
				<li><a href="">母婴</a><a href="">儿童</a></li>
				<li><a href="">家纺</a><a href="">居家</a></li>
				<li><a href="">美妆</a><a href="">配饰</a></li>
				<li><a href="">数码</a><a href="">家电</a></li>
				<li><a href="">运动</a><a href="">中老年</a></li>
			</ul>
			<ul class="link">
				<li><a href="">今日上新 </a><a href="">最后抢 </a><a href=""> 排行榜</a></li>
				<li><a href="">每日十件 </a><a href="">淘精选 </a><a href=""> 限时秒</a></li>
			</ul>
			</div>
		
		<div class="center">
			<div class="imgbox">
				<div>
				    <img src="../assets/img-index/banner1.jpg" />
				    <div class="l_box">
				    	<img src="../assets/img-index/l_box1.jpg" />
				    	<img src="../assets/img-index/l_box2.jpg" />
				    </div>
				</div>
				<div>
				    <img src="../assets/img-index/banner2.jpg" />
				    <div class="l_box">
				    	<img src="../assets/img-index/l_box3.jpg" />
				    	<img src="../assets/img-index/l_box4.jpg" />
				    </div>
				</div>
				<div>
				    <img src="../assets/img-index/banner3.jpg" />
				    <div class="l_box">
				    	<img src="../assets/img-index/l_box5.jpg" />
				    	<img src="../assets/img-index/l_box6.jpg"/>
				    </div>
				</div>
			</div>
			<div class="items">
				<span></span>
				<span></span>
				<span></span>
			</div>
		</div>
		<div class="right">
				<dl>
					<dt>
						<img src="../assets/img-index/r-1_06.jpg"/>
					</dt>
					<dd>
						签到送积分
					</dd>
				</dl>
				<dl>
					<dt>
						<img src="../assets/img-index/r-1_03.jpg"  />
					</dt>
					<dd>
						评价得积分
					</dd>
				</dl>
				<dl>
					<dt>
						<img src="../assets/img-index/r-1_08.jpg"/>
					</dt>
					<dd>
						0元抽奖
					</dd>
				</dl>
			</div>
	</div>
</template>

<script type="text/javascript">
export default {
  mounted() {
	$(".l_list").children("li").on("mouseenter",function(){
	$(".outbox").stop().show();
	$(".h3_1").html($(this).children("a").eq(0).html())
	$(".h3_2").html($(this).children("a").eq(1).html())
})
$(".left ul").children("li").on("mouseleave",function(){
	$(".outbox").stop().hide();
})
	$(".center").banner({
			img:$(".imgbox").children("div"),
			items:$(".items").children("span"),
			autoPlay:true
		})
	}
 }
</script>

<style scoped>
	
header img{width:100%;}


.banner{border:#e5e5e5 solid 1px;position: relative; }
.banner .left {float:left;overflow: hidden;width:150px;height:304px;}
.banner>.left>ul>li{border:#e5e5e5 solid 1px;height:32px;line-height: 30px;text-align: center;}
 .l_list li a{font-size: 14px;margin: 0 10px;}

.link li a{font-size:12px;margin: 0 2px;border-right: #666 solid 1px;}
.link li a:last-child{border-right:none;}

.outbox{display:none;padding:10px;position: absolute;top:0;left:150px;height:304px;width:400px;z-index: 9;background: #f3f9e6;}
.r_text{font-size:14px;color:#5c5d59;width:250px;}
.r_text h3{text-align: left;border-bottom: 1px #999 solid;padding-bottom:10px;width:240px;}
.tab_a{overflow: hidden;}
.tab_a a{float:left;margin: 10px 5px;font-size: 12px;}
.l_img{float: right;}
.l_img img{width:150px;}
.l_img img:nth-child(2){margin: 2px 0;}
.center{width: 951px;height: 304px;float:left;position: relative;}
			.center .imgbox{width: 100%;height: 100%;position: absolute;overflow: hidden;}
			.imgbox>div{position: absolute;width: 100%;height: 100%;left: 951px;}
			.imgbox>div:nth-child(1){left: 0;}
.l_box{position: absolute;right:0;top:0;height:304px;}
.l_box img{width:140px;margin:8px 10px;}		
			.center .items{position: absolute;bottom: 0;left:450px;}
			.center .items span{float:left;width:20px;height:20px;border-radius:50%;background: #fff;margin:5px;}
	
.right{float:left;height:304px;background: #f3f9e6;}
.right dl{height:100px;width:109px;display: flex;flex-direction: column;justify-content: center;align-items: center;}
.right dl dd{text-align: center;margin-top: 5px;}

</style>