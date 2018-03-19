// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router' 
import Goods from "./components/Goods/Goods"
import Ratings from "./components/Ratings/Ratings"
import Seller from "./components/Seller/Seller"

Vue.config.productionTip = false

Vue.use(VueRouter);

const routes = [
	{
		path:'/',
		redirect:'/goods'
	},
    {
    		path:'/goods',
    		component: Goods
    },
    {
    		path:'/ratings',
    		component: Ratings
    },
    {
    		path:'/seller',
    		component: Seller
    }
];

const router = new VueRouter({
	routes,
	linkActiveClass: 'active'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router
})
