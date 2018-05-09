<template>
	<div class="detail">
		<h3>我是detail组件</h3>
		<div>参数{{this.$route.params.aid}}</div>
		<div>参数{{this.$route.query}}</div>
		<div>参数{{this.$route.path}}</div>
	</div>
</template>

<script type="text/javascript">
	export default{
		updated(){
			console.log(this.$route.params)
			console.log(this.$route.query)
		}
	}
</script>
