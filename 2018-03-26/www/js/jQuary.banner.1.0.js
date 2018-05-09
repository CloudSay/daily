;(function($){
	"use strict";
	$.fn.banner = function (options){
		this.LOCAL = {
			iPrev:options.img.length-1,
			index:0
		}
		var that=this;
		if((typeof options.left == "object") && (options.left.length != 0 )&& (typeof options.right == "object") && (options.right.length !=0)){
			options.left.on("click",function(){
				if(that.LOCAL.index == 0){
					that.LOCAL.index = options.img.length-1;
					that.LOCAL.iPrev = 0;
				}else{
					that.LOCAL.index--;
					that.LOCAL.iPrev = that.LOCAL.index+1;
				}
				that.LOCAL.leftMove(that.LOCAL.index,that.LOCAL.iPrev);
				that.LOCAL.active(that.LOCAL.index)
			})
			options.right.on("click",function(){
				if(that.LOCAL.index ==  options.img.length-1){
					that.LOCAL.index = 0;
					that.LOCAL.iPrev =  options.img.length-1;
				}else{
					that.LOCAL.index++;
					that.LOCAL.iPrev = that.LOCAL.index-1;
				}
				that.LOCAL.rightMove(that.LOCAL.index,that.LOCAL.iPrev);
				that.LOCAL.active(that.LOCAL.index)
			})
		}
		this.LOCAL.leftMove = function(now,prev){
			options.img.eq(now).css({
				left:-1130
			}).stop(false,true).animate({
				left:0
			})
			options.img.eq(prev).stop(false,true).animate({
				left:1130
			})
		}
		this.LOCAL.rightMove = function(now,prev){
			options.img.eq(now).css({
				left:1130
			}).stop(false,true).animate({
				left:0
			})
			options.img.eq(prev).stop(false,true).animate({
				left:-1130
			})
		}
		this.LOCAL.active=function(index){
			options.items.eq(index).css({
				background:"red"
			}).siblings().css({
				background:"rgba(100,100,100,0.5)"
			})
		}
		if(typeof options.items == "object" && options.items.length !=0){
			options.items.eq(0).css({
				background:"red"
			})
			options.items.on("click",function(){
				that.LOCAL.iNext = $(this).index();
				if(that.LOCAL.index<that.LOCAL.iNext){
					that.LOCAL.rightMove(that.LOCAL.iNext,that.LOCAL.index)
				}
				if(that.LOCAL.index>that.LOCAL.iNext){
					that.LOCAL.leftMove(that.LOCAL.iNext,that.LOCAL.index)
				}
				that.LOCAL.index = that.LOCAL.iNext;
				that.LOCAL.active(that.LOCAL.index)
			})
		}
		if(options.autoPlay == undefined || options.autoPlay == true){
			this.LOCAL.timer = setInterval(function(){
				options.right.trigger("click");
			},2000)
			this.hover(function(){
				clearInterval(that.LOCAL.timer);
			},function(){
				that.LOCAL.timer = setInterval(function(){
				options.right.trigger("click");
			},2000)
			})
		}
	}
})(jQuery)
