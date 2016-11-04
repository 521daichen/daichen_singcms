<template>
	<div id="catnews">
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
					},
	                ids:12, //获取栏目ID 对应后台栏目
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
//	                let params = $.param(this.searchKey);
	                //https://cnodejs.org/api/v1/topics?' + params
	                $.get('http://127.0.0.1/index.php?c=cat&a=newsapi&id='+self.ids, (d) => {
	                	
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
//	  			this.ids=this.$route.params.id;
                this.getTopics();  
            },
	}

</script>

<style></style>