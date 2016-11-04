<template>
<div>
  	
    <router-view ></router-view>
   
	<cat-news></cat-news>
</div>
</template>

<script>
//	/*import $ from 'webpack-zepto';*/
	 
	  import catnews from "../components/catnews.vue";
	  export default {
	  	components:{
	  		"cat-news":catnews
	  	}
	  }
	
</script>

<style>
	
</style>