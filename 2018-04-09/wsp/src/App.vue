<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <!--<aa></aa>-->
		<router-link to="/home" active-class="active">首页</router-link>
		<router-link to="/product" active-class="active">商品</router-link>
		<router-link to="/user" active-class="active">用户</router-link>
		<router-link to="/login" active-class="active">登录</router-link>
		<router-link to="/reg" active-class="active">注册</router-link>
		
		<router-view></router-view>	
    
  </div>
</template>

<script>
//import {routerLink,routerView} from 'vue-router';
import aa from './components/aa'		//把aa组件引进来
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
  	
  }
}
</script>

<style>
.active{
	background: #ccc;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
