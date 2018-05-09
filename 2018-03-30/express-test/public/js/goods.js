
class Pagination{
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
			     for(let i=0;i<20;i++){
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
			     $('#klm').html(str);
			}
			cookie(){
//				console.log(document.cookie)
			var str = document.cookie;
			var arr = str.split("; ");
//			console.log(arr);
			var newArr=[]
			for (var i=0; i<arr.length;i++){
				newArr.push(arr[i].split("=")); 
			}
//			console.log(newArr)

			for (let i=0 ;i < newArr.length;i++){
               var $tr = $("<tr>");
               var that = this;
               var str =`<td>
								<input type="checkbox" name="" id="" value="" />
							</td>
							<td class="commodity">
								<img id="picter" src="${that.res[newArr[i][0]].src}"/>
								<p>${that.res[newArr[i][0]].name1}</p>
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
								<span class="n_pir">${that.res[newArr[i][0]].name2.split("¥")[1]}</span><br/>
								<span class="y_pir">${that.res[newArr[i][0]].name3}</span>
							</td>
							<td class="number">
								<span class="reduce">
									-
								</span>
								<span class="show">
									1 
								</span>
								<span class="add">
									+
								</span>
							</td>
							<td>
								<span class="money">
									${that.res[newArr[i][0]].name2.split("¥")[1]}
								</span>
							</td>
							<td>
								<p index="${newArr[i][0]}" class="remove">删除</p>
								<a href="#">移入收藏</a>
							</td>`
	
	               $(function(){
			               $tr.html (str)
			               $("#tb").append($tr)
			               var sum_n=0;
						   var sum_p=0; 
			               for(var i=0 ;i<$(".show").length;i++){
							 	 sum_n +=Number($(".show").eq(i).html())
							 	console.log(sum_n)
							 }
							 for(var j=0;j<$(".money").length;j++){
							 	sum_p +=Number($(".money").eq(j).html())
							 	console.log(sum_p)
							 }
//							 console.log($(".show").length)
                			that.pirce(sum_n,sum_p)
	               })
				}
			    this.number();
			    this.remove();
			}
			number(){
				var that=this;
				
					$(".reduce").click(function(){
						var sum_n=0;
						var sum_p=0;
//						console.log($(".reduce").index())
						if($(this).next("span").html()>1){
							$(this).next("span").html($(this).next("span").html()-1);
							var str=$(this).next("span").html()*$(this).parent("td").prev("td").children(".n_pir").html()
							$(this).parent("td").next("td").children(".money").html(str)
							 for(var i=0 ;i<$(".show").length;i++){
							 	 sum_n +=Number($(".show").eq(i).html())
							 	console.log(sum_n)
							 }
							 for(var j=0;j<$(".money").length;j++){
							 	sum_p +=Number($(".money").eq(j).html())
							 	console.log(sum_p)
							 }
//							 console.log($(".show").length)
                			that.pirce(sum_n,sum_p)
						}
					})
				
					$(".add").click(function(){
						var sum_n=0;
						var sum_p=0;
						$(this).prev("span").html(Number($(this).prev("span").html())+1);
						var str=$(this).prev("span").html()*$(this).parent("td").prev("td").children(".n_pir").html()
							$(this).parent("td").next("td").children(".money").html(str)
							 for(var i=0 ;i<$(".show").length;i++){
							 	 sum_n +=Number($(".show").eq(i).html())
							 }
							 for(var j=0;j<$(".money").length;j++){
							 	sum_p +=Number($(".money").eq(j).html())
							 }
                			that.pirce(sum_n,sum_p)
					})
//				var str=$(".show").html()*$(".n_pir").html()
//				$(".money").html(str)

			}
			pirce(sum_n,sum_p){
				
				$("#number").html(sum_n);
				$("#zong").html(sum_p)
			}
			remove(){
				$(".remove").on("click",function(){
					removeCookie($(this).attr("index"));
					$(this).parent().parent().remove();
					location.href="goods.html"
				})
			}
		}
		new Pagination()
		function setCookie(name,value,timer){
			var date = new Date ;
			date.setDate(date.getDate()+timer);
			document.cookie = name+"="+value+";expires="+date;
		}
		// 获取cookie
		function getCookie(name) {
			var arr = document.cookie.split("; ")
			for (var i=0; i<arr.length ;i++){
				arr2 = arr[i].split("=");
				if (arr2[0] == name) {
					return arr2[1];
				}
			}
			return "";
		}
		function removeCookie(name) {
			setCookie(name,"",-1)
		}
		$("#btn").click(function(){
			window.location.href="jiesuan.html"
		})
