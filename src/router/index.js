import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/pages/Index'
import Order from '@/components/pages/Order'
import Join from '@/components/pages/Join'
import Service from '@/components/pages/Service'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',//默认页面
      name: 'Index',
      component: Index
    },
    {
      path: '/Index',
      name: 'Index',
      component: Index
    },
    {
      path: '/Order',
      name: 'Order',
      component: Order
    },
    {
      path: '/Join',
      name: 'Join',
      component: Join
    },
    {
      path: '/Service',
      name: 'Service',
      component: Service
    }
  ]
})
