<template>
	<div class="product">
		<h3>我是product组件</h3>
		<router-link to= '/product/detail/001?a=1&b=2'>001</router-link>
		<router-link :to= '{name:"detail",params:{aid:"002"},query:{a:11,b:22}}'>002</router-link>
		<router-view></router-view>
	</div>
</template>
