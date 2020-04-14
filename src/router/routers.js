import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/admin',
    component: () => import('@/views/admin/manage')
  },
  {
    path: '/login',
    component: () => import('@/views/admin/login')
  },
  {
    path: '/home',
    component: () => import('@/views/visitor/home'),
    meta: {
      title: '华仔的博客'
    }
  },
  {
    path: '/class',
    component: () => import('@/views/visitor/class')
  },
  {
    path: '/tag',
    component: () => import('@/views/visitor/tag')
  },
  {
    path: '/write',
    component: () => import('@/views/admin/writeBlog')
  }
]

const router = new VueRouter({
  routes
})

export default router
