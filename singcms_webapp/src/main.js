import Vue from 'vue';
import App from './App';
import router from './router';        //路由相关
window.router = router;               //路由文件



//Vue.component('nav-bar', App);
const app = new Vue({ router }).$mount('#app');
//template: '<nav-bar/>',
/* eslint-disable no-new */
//
//记住 不能实例化两个根呀
//new Vue({
//el: '#app',
//router:router
//})
