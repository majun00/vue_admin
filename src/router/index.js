import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Buy from '@/components/Buy'
import BuyDetail from '@/components/BuyDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/buy',
      name: 'Buy',
      component: Buy,
      children: [

      ]
    },
    {
    	path: '/buydetail',
    	name: 'BuyDetail',
    	component: BuyDetail
    },
    {
    	path: '*',
    	name: 'BuyDetail',
    	component: BuyDetail
    },
  ]
})
