import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import Activity from '@/pages/Activity'
import Compose from '@/pages/Compose'
import Life from '@/pages/Life'
import Stylist from '@/pages/Stylist'

Vue.use(Router);

export default new Router({
  routes: [
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
