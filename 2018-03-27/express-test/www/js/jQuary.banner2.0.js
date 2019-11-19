;(function($){
	"use strict";
	$.fn.banner = function(options){
		this.LOCAL = {
			iPrev:options.img.length-1,
			index:0
		}
		if(typeof options.left == "object" && options.left.length != 0 && typeof options.right == "object" && options.right.length != 0 ){
		  var that =this;
		  options.left.on("click",function(){
		  	that.LOCAL.changeIndex("left");
		  	that.LOCAL.move(that.LOCAL.index,that.LOCAL.iPrev,-1);
		  	that.LOCAL.active(that.LOCAL.index);
		  })
		  options.right.on("click",function(){
		  	that.LOCAL.changeIndex("right");
		  	that.LOCAL.move(that.LOCAL.index,that.LOCAL.iPrev,1);
		  	that.LOCAL.active(that.LOCAL.index)
		  })
		}
		this.LOCAL.changeIndex = function () {
				if (that.LOCAL.index == options.img.length-1){
		  		that.LOCAL.index = 0;
		  		that.LOCAL.iPrev = options.img.length-1;
			  	}else{
			  		that.LOCAL.index++;
			  		that.LOCAL.iPrev = that.LOCAL.index -1;
			  	}
		}
		this.LOCAL.move = function(index,iPrev,num){
			options.img.eq(index).css({
		  		left:options.img[0].offsetWidth*num,
		  	}).stop(false,true).animate({
		  		left:0
		  	})
		  	options.img.eq(iPrev).stop(false,true).animate({
		  		left:options.img[0].offsetWidth*(-num)
		  	})
		}
		this.LOCAL.active=function(){}
		if(typeof options.items == "object"  && options.items.length != 0){
			this.LOCAL.active=function(active){
	//			console.log(active)
				options.items.eq(active).css({
					background:"red"
				}).siblings().css({
					background:"white"
				})
			}
			options.items.eq(0).css({
						background:"red"
					})
			var that =this;
			options.items.on("click",function(){
				if(that.LOCAL.index<$(this).index()){
		  			that.LOCAL.move($(this).index(),that.LOCAL.index,1)
				}
				if(that.LOCAL.index>$(this).index()){
		  			that.LOCAL.move($(this).index(),that.LOCAL.index,-1)
				}
				that.LOCAL.active($(this).index())
				that.LOCAL.index = $(this).index()
//				console.log($(this).index())
			})
		}
		if(options.autoPlay == undefined || options.autoPlay == true){
//			console.log("执行自动播放")
            var that = this;
            this.LOCAL.timer = setInterval(function(){
            	that.LOCAL.changeIndex();
		  	    that.LOCAL.move(that.LOCAL.index,that.LOCAL.iPrev,1);
		  	    that.LOCAL.active(that.LOCAL.index);
            },3000)
            this.hover(function(){
            	clearInterval(that.LOCAL.timer);
            },function(){
            	that.LOCAL.timer = setInterval(function(){
	            	that.LOCAL.changeIndex();
			  	    that.LOCAL.move(that.LOCAL.index,that.LOCAL.iPrev,1);
			  	    that.LOCAL.active(that.LOCAL.index);
            	},3000)
            })
		}
   }
})(jQuery)
