import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ActivePublic from '@/components/activePublic'
import Step1 from '@/components/step1'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/activePublic',
      name: 'activePublic',
      component: ActivePublic,
      children: [
        {
          path: 'step1',
          name: 'step1',
          component: Step1
        }
      ]
    }
  ]
})
