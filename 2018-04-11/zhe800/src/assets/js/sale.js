function Magnifier(){
			this.oB_box=document.getElementById("b_box")
			this.oB_img=this.oB_box.children[0]
			this.oZ_box=document.getElementById("z_box")
			this.oP_box=document.getElementById("p_box")
			this.oC_box=document.getElementById("c_box")
			this.oP_img=this.oP_box.children[1];
			this.aS =this.oC_box.children;
			this.changeimg();
			this.mouseenter();
			this.mousemove();
			this.mouseleave();
		}
		Magnifier.prototype.changeimg = function () {
			var that =this;
			for(var i=0;i<this.aS.length;i++){
				this.aS[i].onclick = function () {
					that.oP_img.src =this.src;
					that.oZ_box.style.backgroundImage ="url("+this.src+")";
					that.oB_img.src =this.src;
					for(var j=0;j<that.aS.length;j++){
						that.aS[j].style.opacity = 0.5
					}
					this.style.opacity = 1
				}
			}
			
		}
		Magnifier.prototype.mouseenter = function () {
			var that=this;
			this.oP_box.onmouseenter = function (){
				that.oB_box.style.display ="block";
				that.oZ_box.style.display ="block";
//				that.oB_box.style.width ="0";
//				that.oB_box.style.height ="0";
//				move(that.oB_box,{"width":300,"height":300})
			}
		}
		Magnifier.prototype.mousemove = function () {
			var that=this;
			this.oP_box.onmousemove = function (eve) {
				var e =eve  || window.event
				var x = eve.offsetX-that.oZ_box.offsetWidth/2;
				var y = eve.offsetY-that.oZ_box.offsetHeight/2;
	//			console.log(x,y)
				if (x<0){
					x=0;
				}
				if (x>(that.oP_box.offsetWidth-that.oZ_box.offsetWidth)){
					x=that.oP_box.offsetWidth-that.oZ_box.offsetWidth;
				}
				if (y<0){
					y=0;
				}
				if (y>(that.oP_box.offsetHeight-that.oZ_box.offsetHeight)){
					y=that.oP_box.offsetHeight-that.oZ_box.offsetHeight;
				}
				that.oZ_box.style.left = x+"px";
				that.oZ_box.style.top = y +"px";
				var numX =x/(that.oP_box.offsetWidth-that.oZ_box.offsetWidth);
				var numY =y/(that.oP_box.offsetHeight-that.oZ_box.offsetHeight);
	//			console.log(numX,numY)
				that.oB_img.style.left=-(that.oB_img.offsetWidth-that.oB_box.offsetWidth)*numX+"px";
				that.oB_img.style.top=-(that.oB_img.offsetHeight-that.oB_box.offsetHeight)*numY+"px";
				that.oZ_box.style.backgroundPosition =  -x+"px "+ -y+"px"
			}
		}
		Magnifier.prototype.mouseleave = function () {
			var that=this;
			this.oP_box.onmouseleave = function (){
				that.oB_box.style.display ="none"
				that.oZ_box.style.display ="none"
			}
		}
		new Magnifier()

class Pagination{
			constructor(){
			 	this.load();
//			 	this.change();
			}
			load(){
				var that=this;
				$.ajax({
					url:"deta/goods.json",
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
			     for(let i=0;i<10;i++){
			     	if(i<36){
				     	str +=`<dl>
						<dt>
							<img src="${this.res[i].src}"/>
						</dt>
						<dd>
							<p><a href="#" class="r_left">${this.res[i].name1}</a><span class="r_right">${this.res[i].name3}</span></p>
							<p><a href="#" class="p_left">${this.res[i].name2}</a><a href="#"class="p_right">收藏品牌</span></a>
						</dd>
					</dl>`
			     	}
			     }
//			     console.log(str)
			     $('.left_news').html(str);
			}
			
		}
		new Pagination()
		$("#btn2").click(()=>{
			$.cookie($.cookie("index"),$.cookie("index"))
			$.cookie("index",null)
			window.location.href="goods.html"
		})
//		var str = document.cookie;
//			var arr = str.split("; ");
//			var newArr=[]
//			for (var i=0; i<arr.length;i++){
//				newArr.push(arr[i].split("=")); 
//			}
			$(function(){
				console.log($.cookie("index"))
				$.ajax({
						url:"deta/close.json",
						success:function(a){
							var myjson = a;
	//						console.log(myjson) 
							$("#img").attr("src",myjson[$.cookie("index")].src)
							$("#b_img").attr("src",myjson[$.cookie("index")].src)
							$("#s1").attr("src",myjson[$.cookie("index")].src)
							$("#s2").attr("src",myjson[$.cookie("index")].src)
							$("#s3").attr("src",myjson[$.cookie("index")].src)
							$("#z_box").css("background-image","url("+myjson[$.cookie("index")].src+")")
							$("#h_name").html(myjson[$.cookie("index")].name1)
							$("#pic").html(myjson[$.cookie("index")].name2)
							$("#i_pic").html(myjson[$.cookie("index")].name3)
//							$.cookie("index",null)
						},
						error:function(a,b,c){
							console.log("请求失败："+c)
						}
					});
			})
				
//				console.log([newArr[newArr.length-1][0]]);
