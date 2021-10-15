import router from './router'
import mountDialog from './plugin/dialog'

router.beforeEach((to, from, next) => {
  mountDialog({ title: 'error', content: 'errorMessage' })
  // to and from are both route objects.
  console.log('beforeEachStart')
  next()
})

router.afterEach(() => {
  console.log('afterEach')// to and from are both route objects.
})
