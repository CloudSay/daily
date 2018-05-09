<template>
	<div id="jiesuan">
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
				<img src="../assets/img/goods.png"/>
			</div>
			
		</div>
		
		<div class="count">
			<div class="jie_b">
				<h3>收货地址</h3>
				<div class="">
					<p>183****0128</p>
					<p>上海市 宝山区 同济支路199号 上铺公寓</p>
					<p>[默认地址]</p>
				</div>
			</div>
			<div class="jie_b">
				<h3>确认订单信息</h3>
				<div class="">
					<table class="count">
						<tr>
							<th>
								宝贝
							</th>
							<th>
								规格
							</th>
							<th>
								单价（元）
							</th>
							<th>
								数量
							</th>
							<th>
								小计（元）
							</th>
							<th>
								运费（元）
							</th>
						</tr>
						<span id="tig">24小时发货，超时就赔</span>
						<tbody id="tb">
							
						</tbody>
					</table>
					<div class="">
						
						<p>留言：<input type="text" placeholder="给买家留言（140字以内）"</p>
						<span id="hej">
								店铺合计：￥68.80
						</span>
					</div>
				</div>
			</div>
			
			
				<div class="jie_b">
					<h3>优惠方式</h3>
					<div class="">
						<p><input type="checkbox" name="qwe"  />暂无可用优惠券</p>
						<p><input type="checkbox" name="qwe" /> 积分暂不可用  共0积分，满100积分可用</p>
					</div>
				</div>
				<div class="jie_b">
					<h3>选择支付方式</h3>
					<div class="">
						<p>还需支付 68.80 元</p>
						<p>推荐</p>
						<p>
							<input type="radio" name="edc" id="edc" value="" /><span>微信支付</span>
							<input type="radio" name="edc" id="edc" value="" /><span>支付宝</span>
						</p>
					</div>
				</div>
				
				<div class="jie_b">
					<h3>收货信息</h3>
					<span id="">
						商品金额：
					</span>
					<span id="">
						￥68.80
					</span>
					<div class="">
						<p>账号名 183****0128</p>
						<p>上海市 宝山区 同济支路199号 上铺公寓</p>
						<p>
							<span id="">
								实付款：
							</span>
							<span id="">
								￥68.80
							</span>
						</p>
						<div class="">
							<p>由于抢购人数众多，但商品库存有限，订单提交后请在30分钟内支付，超时将自动取消订单</p>
							<p><input type="checkbox" name="" id="" value="" /> 我已阅读并同意《折800特卖商城服务协议》</p>
							<input type="button" name="sub" id="sub" value="提交订单" />
						</div>
					</div>
			</div>
		</div>
         
         <div class="goods_list">
         	<h1></h1>
         </div>
		<footer>
			<div class="count">
				<ul>
					<li>关于我们 </li>
					<li> 诚聘英才 </li>
					<li> 服务条款 </li>
					<li> 廉正举报 </li>
					<li> 消费者保障 </li>
					<li>友情链接</li>
					<li> 意见反馈 </li>
					<li> 在线客服</li>
				</ul>
			</div>
			<p><a href="">京ICP证120075号</a>  京ICP备10051110号-5  <a href="">京公网安备11010502025623 </a> 统一社会信用代码 91110105571298269B  食品流通许可证SP1101051510352397 </p>
			<p>出版物经营许可证 新出发京零字第朝160018号  Copyright©2011-2015 版权所有 ZHE800.COM</p>
			<div class="f_img">
				<img src="../assets/img-index/toob,jpg_03.jpg"/>
				<img src="../assets/img/login0_03.jpg"/>
				<img src="../assets/img/login0_05.jpg"/>
				<img src="../assets/img/login0_07.jpg"/>
			</div>
		</footer>
	</div>
</template>

<script>
</script>

<style scoped>
	.jie_b{border:1px #aaa solid;padding:20px;margin: 20px 0;}
			.jie_b p{font-size: 14px;color:#666;margin: 20px 5px;}
			#tig{margin:10px 5px;color:#f00;font-size: 14px;}
			#hej{float: right;font-size:16px;color:#f00;}
			#sub{border: none;width:100px;height:50px;background: #f00; color:#fff;font-size:20px;}
			footer{border:none;}
footer ul{width:648px;margin: 10px auto;}
footer ul li{width:80px;text-align: center;float: left;border-right: 1px #666 solid;color:#666;font-size:14px;}
footer ul li:last-child{border-right:none; }
footer p{margin: 10px auto;text-align: center;font-size: 12px;color:#aaa;}
.f_img{width:358px;margin:0 auto;height:35px;}
.f_img img{float:left;margin:10px 2px;}
</style>