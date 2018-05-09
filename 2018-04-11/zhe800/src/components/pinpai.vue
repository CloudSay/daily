<template>
	<div class="content">
			<div class="list count">
				<ul class="brand_nav">
					<li>全部品牌</li>
					<li><a href="">中老年</a></li>
					<li><a href="">运动</a></li>
					<li><a href="">家纺</a></li>
					<li><a href="">美妆</a></li>
					<li><a href="">配饰</a></li>
					<li><a href="">数码家电</a></li>
					<li><a href="">内衣</a></li>
					<li><a href="">男装</a></li>
					<li><a href="">美食</a></li>
					<li><a href="">母婴儿童</a></li>
					<li><a href="">居家</a></li>
					<li><a href="">鞋包</a></li>
					<li><a href="">女装</a></li>
				</ul>
				<span class="brand_link">
					<a href="#">品牌排行榜</a>
				</span>
			</div>
			<div class="hot count">
				<div class=" tit">
					<h1>热卖品牌</h1>
				</div>
				<div class="brand_banner">
					<ul class="brand">
						<li v-for = 'item of arr' :key = 'item'>
			    		
						<a href="#">
							<img :src="item"/>
						</a>
					</li>
					</ul>
				</div>
			</div>
			<div class="all count tit">
				<div class="tit">
					<h1>全部品牌</h1>
				</div>
				<div class="u_list">
					<dl v-for = '(item,index) of list' :key="index">
						<dt>
							<router-link :to ='"/sale/"+index' tag='img' :src="item.src" :date_index="item"/>
						</dt>
						<dd>
							<p><router-link :to ='"/sale/"+index' class="r_left">{{item.name1}}</router-link></p>
							<p><router-link :to ='"/sale/"+index' class="p_left">{{item.name2}}</router-link><span class="r_right">{{item.name3}}</span><a href="#" class="p_right" @click = 'setcookie(index)'>加入购物车</span></a></p>
						</dd>
					</dl>
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
		}
	},
	created() {
    // this.$store.dispatch('SHOW_LOADING');
    this.$http({
      url: "http://localhost:3000/close",
      // params:{start:1,count:2}
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
		$(window).scroll(function(){
			if($("html").scrollTop()>400){
				$("#top-nav").stop().show()
			}else{
				$("#top-nav").stop().hide()
			}
		})
	},
	methods:{
		setcookie (index) {
// 	 		var num=this.$router.params.id
			console.log(index)
			this.$cookie.set(index,index,10)
 	 	}
	}
}

</script>

<style scoped>
.content{background:#efefef}
.list{ padding-top:20px;}
.brand_nav{float:left;overflow: hidden;}
.brand_nav li{float:left;text-align: center;line-height:40px;}
.brand_nav li a{display: block;height:40px;width:60px;text-align: center;line-height:40px;}
.brand_link {float:right;line-height: 40px;}

.banner_banner{overflow: hidden;}
.brand {width:100%;}
.brand li{float: left;}
.brand li img{width:120px;}	

.u_list{width: 1210px;margin:0 auto;text-align: left;display: flex;justify-content: space-between;flex-wrap:wrap;}
.u_list dl {float:left;width:283px;font-size:14px;}
.u_list dl dt img{width:283px;}
.u_list dl dd p{display:  block;width:243px;overflow: hidden;margin:10px 20px;}
.r_left{float: left;}
.r_right{float:left;color:#666;font-size:14px;text-decoration: line-through;}	
.p_right{float: right;font-size:14px;color:#666;overflow:hidden}			
.p_left{float: left;font-size:16px;color:#f00;}	
</style>