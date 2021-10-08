import router from './router'
import mountDialog from './plugin/dialog'

router.beforeEach((to, from, next) => {
  mountDialog({ title: '自定义标题', content: '自定义内容' })
  console.log('自定义标题')// to and from are both route objects.
  next()
})

router.afterEach((to, from) => {
  console.log('bye')// to and from are both route objects.
})
