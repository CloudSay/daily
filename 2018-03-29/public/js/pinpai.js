var str ="";
for(let i=1; i<21;i++){
	str += `<li>
				<a href="#">
					<img src="img-index/brand${i}.jpg" />
				</a>
			</li>`
}
$(".brand").html(str);

	$('.u_list').find("img").click(function(){
		$.cookie("index",$(this).attr("date_index"));
		window.location.href='/Sale';
	})

$(window).scroll(function(){
	if($("html").scrollTop()>400){
		$("#top-nav").stop().show()
	}else{
		$("#top-nav").stop().hide()
	}
})