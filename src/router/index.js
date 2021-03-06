import Vue from 'vue'
import VueRouter from 'vue-router'
import layout from '../views/layout/index.vue'

Vue.use(VueRouter)

const routes = [  
  {
    path: '/',
    name: 'index',
    component: () => import('@/views/index/index.vue')
  },
  {
    path: '/user',
    name: 'layout',
    component: layout,
    children: [
      {
        path: 'buildDiy',
        name: 'buildDiy',
        component: () => import('@/views/navBuildDIY/index.vue'),
        meta: {
          title: '自定义建站',
        }
      },
      {
        path: 'myWeb',
        name: 'myWeb',
        component: () => import('@/views/navMyWeb/index.vue'),
        meta: {
          title: '我的作品',
        }
      },
      {
        path: 'myDraft',
        name: 'myDraft',
        component: () => import('@/views/navMyDraft/index.vue'),
        meta: {
          title: '我的草稿',
        }
      },

    ]
  },
  {
    path: '/buildingDiy',
    name: 'buildingDiy',
    component: () => import('@/views/buildingDIY/index.vue')
  },
  {
    path: '/web',
    name: 'web',
    component: () => import('@/views/web/index.vue')
  },
]

const router = new VueRouter({
  routes
})


export default router
