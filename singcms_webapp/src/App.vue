<template>
 	<!-- 主界面菜单同时移动 -->
	    <!-- 侧滑导航根容器 -->
	    <div class="mui-off-canvas-wrap mui-draggable">
	        <!-- 主页面容器 -->
	        <div class="mui-inner-wrap">
	            <!-- 菜单容器 -->
	            <aside class="mui-off-canvas-left" id="offCanvasSide">
	                <div class="mui-scroll-wrapper">
	                    <div class="mui-scroll">
	                        <!-- 菜单具体展示内容 -->
	                        
	                    </div>
	                </div>
	            </aside>
	            <!-- 主页面标题 -->
	            <header class="mui-bar mui-bar-nav">
	                <a class="mui-icon mui-action-menu mui-icon-bars mui-pull-left" href="#offCanvasSide"></a>
	                <h1 class="mui-title">singcms-webapp</h1>
	            </header>
	            <nav class="mui-bar mui-bar-tab">
	    		    <a class="mui-tab-item mui-active">
	    		        <span class="mui-icon mui-icon-home"></span>
	    		        <span class="mui-tab-label">
	    		        	  <router-link to="/">首页</router-link>
	    		        </span>
	    		    </a>
	    		    <a class="mui-tab-item">
	    		        <span class="mui-icon mui-icon-phone"></span>
	    		        <span class="mui-tab-label">
	    		        	
	    		        	<!--路由参数 为3 对应后端id=3-->
	    		        	<router-link to="/list/3">体育</router-link>
	    		        </span>
	    		        
	    		         
	    		    </a>
	    		    <a class="mui-tab-item">
	    		        <span class="mui-icon mui-icon-email"></span>
	    		        <span class="mui-tab-label">
	    		        	<router-link to="/list/12">新闻</router-link>
	    		        </span>
	    		    </a>
	    		  
	    		    <a class="mui-tab-item">
	    		        <span class="mui-icon mui-icon-gear"></span>
	    		        <span class="mui-tab-label">
	    		        	<router-link to="/list/8">科技</router-link>
	    		        </span>
	    		    </a>
	    		</nav>
	            <!-- 主页面内容容器 -->
	            <div class="mui-content mui-scroll-wrapper">
	                <div class="mui-scroll">
	                    <!-- 主界面具体展示内容 -->
	                    <lists></lists>
	                    
	                   
	                    
	                </div>
	            </div>
	       	 <div class="mui-off-canvas-backdrop"></div>
	        </div>
	    </div>
	
</template>

<script>
//import Hello from './components/Hello'
import list from './Views/list.vue';
import catnewslist from './Views/catnewslist';
export default {
  name: 'app',
  components: {
   	"lists":list,
   	"catnews":catnewslist
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
