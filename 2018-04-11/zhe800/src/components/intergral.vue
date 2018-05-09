<template>
	<div class="int">
		<div class="count">
			<div class=" pvp">
				<p>类型：<a>积分兑换</a><a>幸运抽奖</a><a>疯狂竞拍</a></p>
				<p>分类：<a>全部</a><a>女装(36)</a><a>男装(9)</a><a>鞋包(15)</a><a>母婴(104)</a><a>居家(122)</a><a>食品(154)</a><a>数码家电(11)</a><a>配饰(15)</a><a>美妆(8)</a><a>美妆(8)</a><a>文体(21)</a><a>更多(0)</a><a>即将开始(1)</a></p>
				<p><a>默认</a><a>排序积分</a><a>只看纯积分兑换</a></p>
			</div>
			
		</div>
		<div class="i_list count">
			<dl v-for = 'item of list' :key = 'item'>
				<dt>
					<img :src="item.src"/>
				</dt>
				<dd>
					<p><a href="#" class="r_left">{{item.name1}}</a></p>
					<p><a href="#" class="p_left">{{item.name2}}</a><span class="r_right">{{item.name3}}</span><input type="button" value="我要兑换" id="btn"/></p>
				</dd>
			</dl>
		</div>
	</div>
	
</template>

<script>
  export default {
	data(){
		return {
			list:[],
		}
	},
	created() {
    // this.$store.dispatch('SHOW_LOADING');
    this.$http({
      url: "http://localhost:3000/intergral",
      // params:{start:1,count:2}
    }).then(
      res =>  {
          this.list=res.data
      }
    )
  },
 }
</script>

<style scoped>
	.pvp{padding:20px 0;border:1px #999 solid;background: #fff;}
			.pvp p{line-height: 30px;}
			.pvp p a{margin:5px 10px;}
			.i_list{width: 1210px;margin:0 auto;text-align: left;display: flex;justify-content: space-between;flex-wrap:wrap;}
			.i_list dl {float:left;width:283px;font-size:12px;}
			.i_list dl dt img{width:283px;}
			.i_list dl dd p{display:  block;width:243px;overflow: hidden;margin:10px 0;}
			.r_left{float: left;font-size:14px;}
			.r_right{float:left;color:#666;}	
			.p_right{float: right;font-size:12px;color:#666;}			
			.p_left{float: left;font-size:14px;color:#f00;}
			#btn{border:none;background:#f00;width:80px;height:30px;color:#fff;float: right;}
</style>