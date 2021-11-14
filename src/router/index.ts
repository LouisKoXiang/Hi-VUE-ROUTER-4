import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import smoothscroll from 'smoothscroll-polyfill'

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
    path: '/pdf',
    name: 'Pdf',
    component: () => import(/* webpackChunkName: "about" */ '../views/Pdf.vue')
  },
  {
    path: '/pdf-dist',
    name: 'PdfDist',
    component: () => import(/* webpackChunkName: "about" */ '../views/PdfDist.vue')
  },
  {
    path: '/pdf-dist-2',
    name: 'PdfDist2',
    component: () => import(/* webpackChunkName: "about" */ '../views/PdfDist2.vue')
  },
  {
    path: '/validate',
    name: 'Validate',
    component: () => import(/* webpackChunkName: "about" */ '../views/Validate.vue')
  },
  {
    path: '/use-validate',
    name: 'UseValidate',
    component: () => import(/* webpackChunkName: "about" */ '../views/UseValidate.vue')
  },
  {
    path: '/typescript-test',
    name: 'typescript-test',
    component: () => import(/* webpackChunkName: "about" */ '../views/TypeSctiptTest.vue')
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
      return SavedPosition
    }
    if (to.hash) {
      smoothscroll.polyfill()
      const getHash: string | null = window.location.href.split('#')[1]
      const el: HTMLElement | null = document.getElementById(getHash)
      if (el) {
        return window.scrollTo({
          top: el.offsetTop,
          behavior: 'smooth'
        })
      }
    }
  },
  routes
})

export default router
