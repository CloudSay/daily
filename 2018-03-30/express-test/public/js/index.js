$(".center").banner({
			img:$(".imgbox").children("div"),
			items:$(".items").children("span"),
			autoPlay:true
		})
$(".goods-banner").banner({
	img:$(".goodbox").children("div"),
	left:$(".prev"),
	right:$(".next"),
	autoPlay:true
})
//$(".goodbox").on("mouseenter",function(){
//	$(".prev").stop().show()
//	$(".next").stop().show()
//})
//$(".goodbox").on("mouseleave",function(){
//	$(".prev").stop().hide()
//	$(".next").stop().hide()
//})
$("nav ul").children("li").eq(7).on("mouseenter",function(){
	$("nav ul").children("li").eq(7).children("ul").stop().slideDown()
})
$("nav ul").children("li").eq(7).on("mouseleave",function(){
	$("nav ul").children("li").eq(7).children("ul").stop().slideUp()
})
$(".l_list").children("li").on("mouseenter",function(){
	$(".outbox").stop().show();
	$(".h3_1").html($(this).children("a").eq(0).html())
	$(".h3_2").html($(this).children("a").eq(1).html())
})
$(".left ul").children("li").on("mouseleave",function(){
	$(".outbox").stop().hide();
})
var str ="";
for(let i=1; i<21;i++){
	str += `<li>
				<a href="#">
					<img src="img-index/brand${i}.jpg" />
				</a>
			</li>`
}
$(".brand").html(str);
var str2 = ""
for(var j= 0 ;j<6; j++){
	
		 str2 +=`<div >
						<dl>
							<dt>
								<a href="#"><img src="img-index/m-img${j*6+1}.jpg" /></a>
							</dt>
							<dd>
								<span><a href="#">￥ 8.8</a></span>
								<p>新款OPPOR9/r11S/A59/vivoX7/x9/X20/y67苹果6S/7/8plus手机壳</p>
							</dd>
						</dl>
						<dl>
							<dt>
								<a href="#"><img src="img-index/m-img${j*6+2}.jpg" /></a>
							</dt>
							<dd>
								<span><a href="#">￥ 8.8</a></span>
								<p>新款OPPOR9/r11S/A59/vivoX7/x9/X20/y67苹果6S/7/8plus手机壳</p>
							</dd>
						</dl>
						<dl>
							<dt>
								<a href="#"><img src="img-index/m-img${j*6+3}.jpg" /></a>
							</dt>
							<dd>
								<span><a href="#">￥ 8.8</a></span>
								<p>新款OPPOR9/r11S/A59/vivoX7/x9/X20/y67苹果6S/7/8plus手机壳</p>
							</dd>
						</dl>
						<dl>
							<dt>
								<a href="#"><img src="img-index/m-img${j*6+4}.jpg" /></a>
							</dt>
							<dd>
								<span><a href="#">￥ 8.8</a></span>
								<p>新款OPPOR9/r11S/A59/vivoX7/x9/X20/y67苹果6S/7/8plus手机壳</p>
							</dd>
						</dl>
						<dl>
							<dt>
								<a href="#"><img src="img-index/m-img${j*6+5}.jpg" /></a>
							</dt>
							<dd>
								<span><a href="#">￥ 8.8</a></span>
								<p>新款OPPOR9/r11S/A59/vivoX7/x9/X20/y67苹果6S/7/8plus手机壳</p>
							</dd>
						</dl>
						<dl>
							<dt>
								<a href="#"><img src="img-index/m-img${j*6+6}.jpg" /></a>
							</dt>
							<dd>
								<span><a href="#">￥ 8.8</a></span>
								<p>新款OPPOR9/r11S/A59/vivoX7/x9/X20/y67苹果6S/7/8plus手机壳</p>
							</dd>
						</dl>
					</div>`
	}
$(".m_banner").html(str2);
$(".m_list").banner({
	img:$(".m_banner").children("div"),
	left:$(".prev2"),
	right:$(".next2"),
	autoPlay:false
})
var str3="";
for(var i=0;i<5;i++){
	str3 +=`<a href="#">
			<img src="img-index/hot${i+1}.jpg"/>
		 </a>`
}
$(".h_goods").html(str3);

$(window).scroll(function(){
	if($("html").scrollTop()>400){
		$("#top-nav").stop().show()
	}else{
		$("#top-nav").stop().hide()
	}
})
	class Pagination{
			constructor(){
				this.num=12;
			 	this.load();
//			 	this.change();
			}
			load(){
				var that=this;
				$.ajax({
					url:"http://localhost:3000/home",
					success:function(a){
						that.res = a;
//						console.log(that.res)
						that.init();
					},
					error:function(a,b,c){
						console.log("请求失败："+c)
					}
				});
			}
			init(){
			     var that=this;
			     $(".pagination").pagination(that.res.length,{
				 items_per_page:that.num,
				 callback:function(index){
					that.index = index;
					that.display();
				 }
			   })
			}
			display(){
				var str="";
			     for(let i=this.num*this.index;i<this.num*(this.index+1);i++){
			     	if(i<this.res.length){
				     	str +=`<dl date_index="${i}">
						<dt>
							<img src="${this.res[i].src}" date_index="${i}"/>
						</dt>
						<dd>
							<p><a href="" class="r_left">${this.res[i].name1}</a><span class="r_right">${this.res[i].name3}</span></p>
							<p><a href="" class="p_left">${this.res[i].name2}</a><a href="#"class="p_right">收藏品牌</span></a>
						</dd>
					</dl>`
			     	}
			     }
//			     console.log(str)
			     $('.u_list').html(str);
			     this.cookie()
			}
			cookie(){
				$('.u_list').find("img").click(function(){
//				    $.cookie($(this).attr("date_index"),$(this).attr("date_index"));
				    window.location.href='pinpaituan.html'

				})
			}

		}
		new Pagination()
		$(function(){
//			console.log($.cookie("usename"))
			if($.cookie("usename")){
			
				$(".welcom2").html("<a>欢迎您！"+$.cookie("usename")+"</a>")
				$(".welcom1").html("<a class='welcom'>退出</a>")
				$.cookie("usename",null)
			}
			$(".welcom").on("click",function(){

				$(".welcom2").html('<a href="register.html">免费注册</a>')
			    $(".welcom1").html('<a href="Login.html">登录</a>')
			})
		})
