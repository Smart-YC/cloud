import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/pages/Index'
import Activity from '@/components/pages/Activity'
import Compose from '@/components/pages/Compose'
import Life from '@/components/pages/Life'
import Stylist from '@/components/pages/Stylist'

Vue.use(Router);

export default new Router({
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
      path: '/Activity',
      name: 'Activity',
      component: Activity
    },
    {
      path: '/Compose',
      name: 'Compose',
      component: Compose
    },
    {
      path: '/Life',
      name: 'Life',
      component: Life
    },
    {
      path: '/Stylist',
      name: 'Stylist',
      component: Stylist
    }
  ]
})
