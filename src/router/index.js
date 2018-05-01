import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/pages/index/Index'
import Catefood from '@/components/pages/index/children/Catefood'
import Allshop from '@/components/pages/index/children/Allshop'
import Error from '@/components/pages/Error'
import Order from '@/components/pages/Order'
import Join from '@/components/pages/Join'
import Service from '@/components/pages/Service'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',//默认页面
      name: '首页',
      component: Index,
      beforeEnter:(to ,from ,next)=> {
        console.log(to);
        console.log(from);
        next({path:'/Index'});//允许往下跳转
      }
    },
    {
      path: '/Index',
      name: '首页',
      component: Index,
      children: [{
        path: '/',
        component: Allshop
      }, {
        path: 'Allshop',
        name: '全部商品',
        component: Allshop
      }, {
        path: 'Catefood',
        name: 'Catefood',
        component: Catefood
      }]
    },
    {
      path: '/Order',
      name: '我的订单',
      component: Order
    },
    {
      path: '/Join',
      name: '加盟合作',
       component: Join,
      alias:'/Service'
     // redirect:'/' //重定向
    },
    {
      path: '/Service',
      name: '我的客服',
      component: Service

    },{
      path:'*',
      component:Error
    }
  ]
})
