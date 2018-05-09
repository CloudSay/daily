<template>
	<div class="content count">
			<div class="j_chose count">
				<div class="tit count">
					<h1>品牌精选</h1>
					<strong>·</strong>
					<span>
					       今日在线品牌1611个	
					</span>
					<ul>
						<li><a href="#">全部品牌</a></li>
						<li><a href="">居家</a></li>
						<li><a href="">箱包</a></li>
						<li><a href="">男装</a></li>
						<li><a href="">内衣</a></li>
						<li><a href="">母婴</a></li>
						<li><a href="">美妆</a></li>
						<li><a href="">家纺</a></li>
						<li><a href="">女装</a></li>
					</ul>
				</div>
				
				<div class="goods-banner">
					<div class="goodbox">
						<div>
							<dl>
								<dt>
									<img src="../assets/img-index/good1.jpg" />
								</dt>
								<dd><a href="#">【小米】领50元优惠券</a></dd>
							</dl>
							<dl>
								<dt>
									<img src="../assets/img-index/good2.jpg"/>
								</dt>
								<dd><a href="#">【小米】领50元优惠券</a></dd>
							</dl>
							<dl>
								<dt>
									<img src="../assets/img-index/good3.jpg"/>
								</dt>
								<dd><a href="#">【小米】领50元优惠券</a></dd>
							</dl>
						</div>
						<div>
							<dl>
								<dt>
									<img src="../assets/img-index/good4.jpg" />
								</dt>
								<dd><a href="#">【小米】领50元优惠券</a></dd>
							</dl>
							<dl>
								<dt>
									<img src="../assets/img-index/good5.jpg"/>
								</dt>
								<dd><a href="#">【小米】领50元优惠券</a></dd>
							</dl>
							<dl>
								<dt>
									<img src="../assets/img-index/good6.jpg"/>
								</dt>
								<dd><a href="#">【小米】领50元优惠券</a></dd>
							</dl>
						</div>
					</div>
					<a class="b_prev">&lt;</a>
					<a class="b_next">&gt;</a>
					
				</div>
			    <ul class="brand">
			    	<li v-for = 'item of arr' :key = 'item'>
			    		
						<a href="#">
							<img :src="item"/>
						</a>
					</li>
			    </ul>
			</div>
			<div class="m_kill">
				<div class="tit count">
					<h1>限量秒杀</h1>
					<strong>·</strong>
					<span>
					       精选爆款，限时限量	
					</span>
					<ul>
						<li><a href="#">明日预告</a></li>
						<li><a href="">20:00 开抢</a></li>
						<li><a href="">18:00 开抢</a></li>
						<li><a href="">16:00 开抢</a></li>
						<li><a href="">14:00 开抢</a></li>
						<li><a href="">12:00 开抢</a></li>
						<li><a href="">10:00 开抢</a></li>
						<li><a href="">08:00 开抢</a></li>
					</ul>
				</div>
				<div class="m_list">
					<div class="m_banner">
						<div v-for='i of 6' :key = 'i'>
							<dl v-for = 'j of 6' :key = 'i*6+j'>
								<dt>
									<a href="#"><img :src="arr2[i*6+j]" /></a>
								</dt>
								<dd>
									<span><a href="#">￥ 8.8</a></span>
									<p>新款OPPOR9/r11S/A59/vivoX7/x9/X20/y67苹果6S/7/8plus手机壳</p>
								</dd>
							</dl>
							
						</div>
					</div>
					<a class="prev2">&lt;</a>
					<a class="next2">&gt;</a>
				</div>
			</div>
			<div class="h_show count">
				<div class="tit count">
					<h1>热销推荐</h1>
					<strong>·</strong>
					<span>
					     即将下架 | 人气爆款 | 每日更新	
					</span>
				</div>
				<div class="h_goods">
					<a href="#" v-for = 'item of arr3'>
						<img :src="item"/>
					</a>
				</div>
			</div>

			<div class="today_n">
				<div class="tit count">
					<h1>今日更新</h1>
					<strong>·</strong>
					<span>
					   1291款	
					</span>
					<ul>
						<li><a href="#">最热</a></li>
						<li><a href="">最新</a></li>
						<li><a href="">排序 </a></li>
						<li><a href="">辣妈 </a></li>
						<li><a href="">|女|</a></li>
						<li><a href="">|男</a></li>
						<li><a href=""> 默认</a></li>
					</ul>
				</div>
				<div class="u_list">
					<dl :date_index="item" v-for='(item,index) in list' :key='index'>
							<dt>
								<router-link to='./pinpai' :src='item.src' :date_index="item" tag="img"/>
							</dt>
							<dd>
								<p><router-link to='./pinpai' class="r_left">{{item.name1}}</router-link><span class="r_right">{{item.name3}}</span></p>
								<p><router-link to='./pinpai' class="p_left">{{item.name2}}</router-link><a href="#"class="p_right">收藏品牌</span></a></p>
							</dd>
					</dl>
				</div>
		        <div class="count">
		        	<div id="Pagination" class="pagination"></div>
		        </div>
			</div>
	</div>
</template>

<script>
export default {
	data(){
		return {
			list:[],
			arr:[],
			arr2:[],
			arr3:[],
		}
	},
	created() {
    this.$http({
      url: "http://localhost:3000/news",
    }).then(
      res =>  {
          this.list=res.data
      }
    )
  },
    mounted() {
	for(let i=1; i<21;i++){
		this.arr.push( './static/img-index/brand'+i+'.jpg');
	}
    for(let i=1; i<36;i++){
		this.arr2.push( './static/img-index/m-img'+i+'.jpg');
	}
	for(let i=1; i<6;i++){
		this.arr3.push( './static/img-index/hot'+i+'.jpg');
	}

	
	$(".goods-banner").banner({
		img:$(".goodbox").children("div"),
		left:$(".prev"),
		right:$(".next"),
		autoPlay:true
	})
	
	
	$(".m_list").banner({
		img:$(".m_banner").children("div"),
		left:$(".prev2"),
		right:$(".next2"),
		autoPlay:false
	})

	}
}
</script>

<style scoped>
.content {text-align: center;color:#333}
.tit{margin-top: 40px;}
.tit h1{height:50px;float: left;color:#ff686f;font-size:25px;}
.tit span {heigth:50px;float: left;font-size: 14px;padding-top: 12px;}
.tit strong{font-size: 28px;heigth:50px;float: left;margin-left: 10px;color:#ff686f;}
.tit ul{float:right}
.tit ul li{float:right;height:50px;line-height: 50px;text-align: center;margin:0 10px;}
.tit ul li:first-child a{display:block;background: #ff404c;color:white;height: 30px;width:100px;margin-top: 10px;line-height: 30px;}
.goods-banner{width: 1210px;height: 200px;margin: 0 auto;position: relative;}
			.goods-banner .goodbox{width: 100%;height: 100%;position: absolute;overflow: hidden;}
			.goodbox div{position: absolute;width: 100%;height: 100%;left: 1210px;display: flex;justify-content: space-between;}
			.goodbox div:nth-child(1){left: 0;}
			.b_prev,.b_next{position: absolute;width: 40px;height: 40px;background: rgba(100,100,100,0.4);text-decoration: none;text-align: center;line-height: 40px;font-size: 30px;color: #fff;top: 75px;cursor: pointer;}
			.b_prev{left: 0;}
			.b_next{right: 0;}
.goodbox div dl{position: relative;width:392px;height:200px;}			
.goodbox div dl dd{position:absolute ;bottom:0;left:0;height:30px;text-align: center;line-height: 30px;background: rgba(100,100,100,0.5);z-index: 5;width:392px;}
.goodbox div dl dd a{font-size: 14px;color:#fff;}		
.brand {width:100%;}
.brand li{float: left;}
.brand li img{width:120px;}	
.m_list{width: 1210px;height: 260px;margin: 0 auto;position: relative;}
			.m_list .m_banner{width: 100%;height: 100%;position: absolute;overflow: hidden;}
			.m_banner div{position: absolute;width: 100%;height: 100%;left: 1210px;display: flex;justify-content: space-between;}
			.m_banner div dl {width:185px;}
			.m_banner div dl dt img{width:185px;}	
			.m_banner div dl dd span{font-size:18px;color:#f00;width:185px;text-align: left;}			
			.m_banner div dl dd p{font-size:12px;color:#ccc;overflow:hidden;width:185px;text-align: left;}
			.m_banner div:nth-child(1){left: 0;}
			.prev2,.next2{position: absolute;width: 40px;height: 40px;background: rgba(100,100,100,0.4);text-decoration: none;text-align: center;line-height: 40px;font-size: 30px;color: #fff;top: 75px;cursor: pointer;}
			.prev2{left: 0;}
			.next2{right: 0;}




.h_goods{display: flex;justify-content: space-between;}	
.h_goods img{flex: 1;}

.u_list{width: 1210px;margin:0 auto;text-align: left;display: flex;justify-content: space-between;flex-wrap:wrap;}
.u_list dl {float:left;width:283px;font-size:14px;}
.u_list dl dt img{width:283px;}
.u_list dl dd p{display:  block;width:243px;overflow: hidden;margin:10px 20px;}
.r_left{float: left;}
.r_right{float: right;color:#666;}	
.p_right{float: right;font-size:14px;color:#666;overflow:hidden}			
.p_left{float: left;font-size:16px;color:#f00;}	
</style>