import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import GoodsDetail from '@/pages/GoodsDetail/GoodsDetail'
import Order from "../pages/Order/Order";
import 'vue-layer-mobile/need/layer.css'
import layer from 'vue-layer-mobile'

Vue.use(layer);
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path:'/GoodsDetail',
      name:'GoodsDetail',
      component:GoodsDetail
    },
    {
      path:'/Order',
      name:'Order',
      component:Order
    },
  ]
})
