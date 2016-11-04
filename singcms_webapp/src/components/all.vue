<template>

	<div id="all">
	 	
		<!--<button v-on:click="test()">aa</button>-->
		<ul class="mui-table-view">
	                        <li v-for="news in topics" class="mui-table-view-cell mui-media">
	                             
	                           
	                            <a href="javascript:;">
	                                <img class="mui-media-object mui-pull-left" :src="news.thumb">
	                                <div class="mui-media-body">
	                                    {{news.title}}
	                                    <p class="mui-ellipsis">{{news.description}}</p>
	                                </div>
	                            </a>
	                        </li>


	                    </ul>
	</div>
</template>

<script>
	  import $ from 'webpack-zepto';
	  export default {
	  		data() {
	            return {
	                topics:[],
	                searchKey: {
	                    page: 1,
	                    limit: 20,
	                    tab: 'all',
	                    mdrender: true
					}
	            }
     		},
	  		methods:{
	  			test(){
	  				 alert(this.topics);
	  				console.log(this.topics);
	  			},
	  			  // 获取主题数据
	            getTopics() {
	           
	            	let self=this;
	            	
	                let params = $.param(this.searchKey);
	                
	                //https://cnodejs.org/api/v1/topics?' + params
	                $.get('http://127.0.0.1/index.php?m=home&c=index&a=indexapi', (d) => {
//	                	console.log(typeof(d));
	                	var res= JSON.parse(d); 
 						   for(var x in res.data){
	                       		res.data[x].thumb="http://127.0.0.1"+res.data[x].thumb;
//	                       		console.log(res.data[x].thumb);
	                       }
 						   
	                    if (res && res.data) {
	                       
	                      self.topics = res.data;
	                      
	                    }
	                });
	             },
	  		},
	  		created() {
                this.getTopics();   
               
            },
	}
</script>

<style>
	@import url("../../static/css/mui.css");
</style>