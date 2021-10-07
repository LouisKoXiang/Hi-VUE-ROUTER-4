import router from './router'

router.beforeEach((to, from, next) => {
  next()
})

router.afterEach((to, from) => {
  console.log('bye')// to and from are both route objects.
})
