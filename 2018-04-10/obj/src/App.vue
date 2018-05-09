<template>
  <div id="app">
    <navbar></navbar>
    <router-view></router-view>
    <footbar></footbar>
  </div>
</template>

<script>
import navbar from './components/navbar';
import footbar from './components/footer';
export default {
  name: 'App',
  components:{
  	navbar,footbar
  },
}
</script>
