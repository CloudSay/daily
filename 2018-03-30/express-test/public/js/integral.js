class Pagination{
			constructor(){
			 	this.load();
//			 	this.change();
			}
			load(){
				var that=this;
				$.ajax({
					url:"/integral",
					success:function(a){
						that.res = a;
//						console.log(that.res)
						that.display();
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
							<img src="${this.res[i].src}"/>
						</dt>
						<dd>
							<p><a href="#" class="r_left">${this.res[i].name1}</a></p>
							<p><a href="#" class="p_left">${this.res[i].name2}</a><span class="r_right">${this.res[i].name3}</span><input type="button" value="我要兑换" id="btn"/></p>
						</dd>
					</dl>`
			     	}
			     }
			     
//			     console.log(str)
			     $('.i_list').html(str);
			}

		}
		new Pagination()
		$(window).scroll(function(){
	if($("html").scrollTop()>$(".pvp")[0].offsetTop){
		$(".pvp").css({
			top:0,
			position:"fixed"
		})
	}else{
		$(".pvp").css({
			position:""
		})
	}
})