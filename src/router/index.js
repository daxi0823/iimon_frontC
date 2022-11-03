import Vue from 'vue'
import VueRouter from 'vue-router'
import PlanIndex from '../views/PlanIndex.vue'
import PlanEdit from '../views/PlanId.vue'
import PlanId from '../views/PlanId.vue'
import PlanRegister from '../views/PlanRegister.vue'
import SpotDetail from '../views/SpotDetail.vue'
import SpotDiscovery from '../views/SpotDiscovery.vue'
import SpotRegister from '../views/SpotRegister.vue'

import HomeView from '../views/HomeView.vue'

import TestPage from '../views/TestPage.vue'
import TestPage2 from '../views/TestPage2.vue'






Vue.use(VueRouter)

const routes = [
  {
    path: '/planindex',
    name: 'planindex',
    component: PlanIndex
  },
  {
    path: '/planregister',
    name: 'planregister',
    component: PlanRegister
  },
  {
    path: '/planedit',
    name: 'planedit',
    component: PlanEdit
  },
  {
    path: '/plan/:planId',
    name: 'planid',
    component: PlanId
  },
  {
    path: '/spot/:spotId',
    name: 'spot',
    component: SpotDetail
  },
  {
    path: '/spotdiscovery',
    name: 'spotdiscovery',
    component: SpotDiscovery
  },
  {
    path: '/spotregister',
    name: 'spotregister',
    component: SpotRegister
  },

  {
    path: '/',
    name: 'homeview',
    component: HomeView
  },

  {
    path: '/test',
    name: 'test',
    component: TestPage
  },
  {
    path: '/test2',
    name: 'test2',
    component: TestPage2
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
