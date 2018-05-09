<template>
	<div class="goods">
		<div class="search count">
			<div class="logo">
				<img src="../assets/img-index/reach_09.gif">
			</div>
			
			<p class="r_step">
				<span id="step_1">
					我的购物车 >
				</span>
				<span id="step_2">
					确定订单信息 >
				</span>
				<span id="step_3">
					完成付款购买
				</span>
			</p>
		</div>
		<div class="bottom">
			<div class="goods_t count">
				<p>购物车<span>1</span></p>
				<img src="../assets/img/goods.png"/>
			</div>
			
		</div>
		<table class="count">
			<tr>
				<th>
					<input type="checkbox" name="" id="" value="" />全选
				</th>
				<th>
					商品
				</th>
				<th>
					单价（元）
				</th>
				<th>
					数量
				</th>
				<th>
					金额（元）
				</th>
				<th>
					操作
				</th>
			</tr>
			<tbody id="tb">
				<tr v-for = '(item,index) of arr' :key = "index">
					<td>
						<input type="checkbox" name="" id="" value="" />
					</td>
					<td class="commodity">
						<img id="picter" v-bind:src="list[item[0]].src"/>
						<p>{{list[item[0]].name1}}</p>
						<p>
							<span id="">
								颜色: 黑色
							</span>
							<span id="">
								尺码: XL
							</span>
						</p>
					</td>
					<td >
						<span class="n_pir">{{list[item[0]].name2.split("¥")[1]}}</span><br/>
						<span class="y_pir">{{list[item[0]].name3}}</span>
					</td>
					<td class="number">
						<span class="reduce" @click='red(item[0])'>
							-
						</span>
						<span class="show" >
							{{list[item[0]].num}} 
						</span>
						<span class="add" @click = 'add(item[0])'>
							+
						</span>
					</td>
					<td>
						<span class="money">
							{{list[item[0][0]].name2.split("¥")[1]*list[item[0]].num}}
						</span>
					</td>
					<td>
						<p :index="item[0]" class="remove" @click='del(index)' id='del'>删除</p>
						<a href="#">移入收藏</a>
					</td>
				</tr>
			</tbody>
		</table>
		<div class="count zong">
			<div class="">
				<input type="checkbox" name="" id="" value="" />全选
				<a href="#">批量删除</a>
			</div>
					
			<div class="">
				共<span id="number">
					{{num}}
				</span> 件
				
					总计（不含运费）：￥<span id="zong">{{ price}}</span> 
				 
				<router-link  tag='input' type="button" to="/jiesuan" id="btn" value="结算" />
			</div>	
		</div>
		<div class="count">
			<h3>您可能还需要</h3>
			<div id="klm">
				<dl v-for = '(item,index) of list' :key="index">
						<dt>
							<router-link :to ='"/sale/"+index' tag='img' v-bind:src="item.src" :date_index="item"/>
						</dt>
						<dd>
							<p><router-link to ='/sale' class="r_left">{{item.name1}}</router-link></p>
							<p><router-link to ='/sale' class="p_left">{{item.name2}}</router-link><span class="r_right">{{item.name3}}</span><a href="#" class="p_right" @click = 'setcookie(index)'>加入购物车</span></a></p>
						</dd>
				</dl>
			</div>
		</div>	
         
         <div class="goods_list">
         	<h1></h1>
         </div>
	</div>
	
</template>

<script>
	export default{
		data(){
			return {
				arr:[],
				list:[],
				num:0,
				price:0,
			}
		},
		created() {
		    this.$http({
		      url: "./static/deta/close.json",
		    }).then(
		      res =>  {
		          this.list=res.data
		          this.num = 0;
		          this.price = 0;
		          this.arr.forEach((item)=>{
				    this.num += this.list[item[0]].num
				    this.price +=this.list[item[0]].num*this.list[item[0][0]].name2.split("¥")[1]
			      })
		      }
		    )
		    
		  },
		mounted(){
			var str = document.cookie;
			var arr1 = str.split("; ");
			var newArr=[]
			for (var i=0; i<arr1.length;i++){
				newArr.push(arr1[i].split("=")); 
			}
			this.arr = newArr;
		},
		
		methods:{
			add(index){
				if(this.list[index].num<20){
					this.list[index].num++;
				    this.num = 0;
		            this.price = 0;
					this.arr.forEach((item)=>{
				    this.num += this.list[item[0]].num
				    this.price +=this.list[item[0]].num*this.list[item[0][0]].name2.split("¥")[1]
			      })
				}
			},
			red(index){
				if(this.list[index].num>1){
					this.list[index].num--;
					this.num = 0;
		            this.price = 0;
					this.arr.forEach((item)=>{
				    this.num += this.list[item[0]].num
				    this.price +=this.list[item[0]].num*this.list[item[0][0]].name2.split("¥")[1]
			      })
				}
			},
			del(index){
				$.cookie(this.arr[index][0],null);
				this.arr.splice(index,1)	
			}
		}
	}
</script>

<style scoped>
	/*@import url("../assets/css/goods.css");*/
	
#step_1{color:#f00;}
tbody:last-child{font-size:14px;color:#aaa;border:1px #f00 solid; }
.commodity{display: flex;}
.commodity p{width:100px;margin: 0 10px;color:#999;font-size:14px;}
.commodity p span{margin-left: 20px;}
.r_step{float:right;font-size:14px;color:#aaa;}
.n_pir{font-size:16px;color:#333;}
.y_pir{text-decoration: line-through;}
.bottom{border-bottom: 2px #f00 solid;}
.goods_t {margin-top:10px;}
.goods_t p{float:left;font-size:20px;margin-left: 10px;}
.goods_t p span{color:#f00;margin-left: 10px;}
.goods_t img{float:right;}
.number {margin-right: 20px;color:#333;}
.number span{float: left;border:1px #333 solid;width:30px;height:20px;line-height: 20px;text-align: center;}
.money{color:#f00;font-weight:bold;font-size:18px;}
.zong{display: flex;justify-content: space-between;margin-top: 20px;}
footer{border:none;}
footer ul{width:648px;margin: 10px auto;}
footer ul li{width:80px;text-align: center;float: left;border-right: 1px #666 solid;color:#666;font-size:14px;}
footer ul li:last-child{border-right:none; }

#btn{width:100px;height:40px;border:none;background: #f00 ;color:#fff;}
#klm{width: 1210px;margin:20px auto;text-align: left;display: flex;justify-content: space-between;flex-wrap:wrap;}
#klm dl {float:left;width:283px;font-size:14px;}
#klm dl dt img{width:283px;}
#klm dl dd p{display:  block;width:243px;overflow: hidden;margin:10px 20px;}
.r_left{float: left;}
.r_right{float: right;color:#666;}	
.p_right{float: right;font-size:14px;color:#666;overflow:hidden}			
.p_left{float: left;font-size:16px;color:#f00;}

#picter{width:100px;height:100px;}

</style>