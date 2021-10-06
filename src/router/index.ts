import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { ref } from 'vue'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/parent/:caseType/:isEdit',
    name: 'Parent',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Parent.vue'),
    children: [
      {
        path: 'parentNestCustomOne',
        name: 'parent-nest-custom-one',
        component: () => import(/* webpackChunkName: "about" */ '../views/ParentNestCustomOne.vue')
      },
      {
        path: 'parentNestCustomTwo',
        name: 'parent-nest-custom-two',
        component: () => import(/* webpackChunkName: "about" */ '../views/ParentNestCustomTwo.vue')
      },
      {
        path: 'quotationInfo',
        name: 'quotation-info',
        component: () => import(/* webpackChunkName: "about" */ '../views/QuotationInfo.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  scrollBehavior (to, from, SavedPosition) {
    if (SavedPosition) {
      console.log('SavePositon', SavedPosition)
      return SavedPosition
    }
    // if (to.hash) {
    //   const getHash: string | null = window.location.href.split('#')[1]
    //   const el: HTMLElement | null = document.getElementById(getHash)
    //   if (el) {
    //     return window.scrollTo({
    //       top: el.offsetTop,
    //       behavior: 'smooth'
    //     })
    //   }
  //   }
  },
  routes
})

export default router
export const routeViewKey = ref(Math.random().toString())
export const reloadRouteView = () => {
  routeViewKey.value = Math.random().toString()
}
