<template>
	<div class="home">
        <detail></detail>
        <count></count>
        <top></top>
        <linkNav></linkNav>
	</div>
</template>
<!--<script src="../assets/js/jquery-2.1.0.js" type="text/javascript" charset="utf-8"></script>-->
<!--<script src="../assets/js/jQuary.banner2.0.js" type="text/javascript" charset="utf-8"></script>-->
<!--<script src="../assets/js/jquery.pagination.js" type="text/javascript" charset="utf-8"></script>-->
<!--<script src="./static/js/index.js" type="text/javascript" charset="utf-8"></script>-->
<!--<script src="../assets/js/jquery.cookie.js" type="text/javascript" charset="utf-8"></script>-->
<script>
	import detail from './detail.vue';
	import count from './count.vue';
	import top from './topNav.vue';
	import linkNav from './link.vue';
	export default {
		components:{
			detail,count,top,linkNav
		}
	};
	
</script>

