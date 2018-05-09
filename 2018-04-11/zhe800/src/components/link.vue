<template>
	<div id="main-link">
			<p class="link_t">
				<span><a href=""><img src="../assets/img-index/bg_img/l-tu_05.jpg"/>购物车</a></span>
				<span><a href=""><img src="../assets/img-index/bg_img/l-tu_03.jpg"/></a></span>
				<span><a href=""><img src="../assets/img-index/bg_img/l-tu_07.jpg"/></a></span>
				<span><a href=""><img src="../assets/img-index/bg_img/l-tu_09.jpg"/></a></span>
				<span><a href=""><img src="../assets/img-index/bg_img/l-tu_11.jpg"/></a></span>
				
			</p >
			<p class="link_b">
				<span><a href=""><img src="../assets/img-index/bg_img/sidePanel_checkin1N.gif"/></a></span>
				<span><a href=""><img src="../assets/img-index/bg_img/l-tu_13.jpg"/></a></span>
				<span><a href=""><img src="../assets/img-index/bg_img/l-tu_15.jpg"/></a></span>
				<span><a href=""><img src="../assets/img-index/bg_img/l-tu_17.jpg"/></a></span>
				<span><a href=""><img src="../assets/img-index/bg_img/l-tu_19.jpg"/></a></span>
			</p>
	</div>
</template>

<script>
</script>

<style scoped>
#main-link{position: fixed;top:0;right:0;background:#000;height:100%;z-index:10;width:30px;color:#fff;display: flex;flex-direction: column;}
.link_b,.link_t{text-align: center;display: flex;flex-direction: column;flex:1;justify-content: center;}
#main-link span{margin-bottom:20px;}
#main-link span:hover{background: #f00;}
#main-link a{color:#fff}
#main-link img{width:20px;margin: 0 auto;}
</style>