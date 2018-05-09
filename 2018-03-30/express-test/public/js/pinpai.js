var str ="";
for(let i=1; i<21;i++){
	str += `<li>
				<a href="#">
					<img src="img-index/brand${i}.jpg" />
				</a>
			</li>`
}
$(".brand").html(str);

class Pinpai{
			constructor(){
			 	this.load();
//			 	this.change();
			}
			load(){
				var that=this;
				$.ajax({
					url:"/pinpai",
					success:function(a){
						that.res = a;
//						console.log(that.res)
						that.display();
						that.cookie();
					},
					error:function(a,b,c){
						console.log("请求失败："+c)
					}
				});
			}
			
			display(){
				var str="";
			     for(let i=0;i<this.res.length;i++){
			     	if(i<36){
				     	str +=`<dl>
						<dt>
							<img src="${this.res[i].src}" date_index="${i}"/>
						</dt>
						<dd>
							<p><a href="#" class="r_left">${this.res[i].name1}</a></p>
							<p><a href="#" class="p_left">${this.res[i].name2}</a><span class="r_right">${this.res[i].name3}</span><a href="#"class="p_right">收藏品牌</span></a>
						</dd>
					</dl>`
			     	}
			     }
//			     console.log(str)
			     $('.u_list').html(str);
			}
			cookie(){
				$('.u_list').find("img").click(function(){
				    $.cookie("index",$(this).attr("date_index"));
				    window.location.href='Sale.html'
				})
			}

		}
		new Pinpai()
$(window).scroll(function(){
	if($("html").scrollTop()>400){
		$("#top-nav").stop().show()
	}else{
		$("#top-nav").stop().hide()
	}
})