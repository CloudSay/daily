<template>
  <div id="app">
  	<loading v-show='Sloading'></loading>
    <topNav v-show = 'StopNav'></topNav>
    <navbar v-show = 'Snavbar'></navbar>
    <router-view></router-view>
    <footbar v-show = 'Sfootbar'></footbar>
    <linkNav v-show = 'SlinkNav'></linkNav>
  </div>
</template>

<script>
import navbar from './components/navbar';
import footbar from './components/footbar';
import topNav from './components/topNav';
import linkNav from './components/link';


import { mapGetters} from 'vuex';

export default {
  name: 'App',
  components: {
    navbar,footbar,linkNav,topNav
  },
  computed:mapGetters([
  	'StopNav','Snavbar','Sfootbar','SlinkNav','Sloading'
  ]),
  watch:{
	   $route:function(newValue,oldValue){
	   	let path = newValue.path;
	   	if(/home|pinpai|/.test(path)){
	   		this.$store.dispatch('SHOW_NAV')
	   		this.$store.dispatch('SHOW_TOP')
	   		this.$store.dispatch('SHOW_LINK')
	   		this.$store.dispatch('SHOW_FOOT')
	   	}
	   	if(/login|reg|goods|jiesuan/.test(path)){
	   		this.$store.dispatch('HIDE_NAV')
	   		this.$store.dispatch('HIDE_TOP')
	   		this.$store.dispatch('HIDE_LINK')
	   		this.$store.dispatch('HIDE_FOOT')
	   	}
	   
	  }
  }
}
</script>


