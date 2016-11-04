import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

/*  配置路由规则 */
const map = [
    // 重定向
    {path:'/index',redirect: '/'},
    // 路由根路径
    {
    	path:'/',component:require('./views/list'),
        // 定义子路由
//      children:[
//          {path:'/order',component:require('./views/list')},            
//    
//      ]
    },
    {
    	path:'/catnewslist',component:require('./views/catnewslist'),
        // 定义子路由
//      children: [
//      { path: 'keji', component:require('./views/cat/keji') },
//   	 { path: 'xinwen', component:require('./views/cat/xinwen') },
//   	  { path: 'tiyu', component:require('./views/cat/tiyu') },
//      ]
      
    },
    
    {
    	path:'/tiyu',component:require('./views/cat/tiyu'),
        // 定义子路由
    },
      {
    	path:'/keji',component:require('./views/cat/keji'),
        // 定义子路由
    },
     {
    	path:'/xinwen',component:require('./views/cat/xinwen'),
        // 定义子路由
    },
    
    // 正常路由
//  {path:'/catnewslist/:id',component:require('./views/catnewslist')}
]


/* 实例化路由 */
const router = new VueRouter({
    routes : map
})

router.afterEach((to, from) => {
    //console.log(to, from)
})


export default router;