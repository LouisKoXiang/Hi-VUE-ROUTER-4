// VueRouter scrollBehavior does not work, so use this file
import * as VueRouter from 'vue-router'
import { nextTick } from 'vue'
import * as hp from 'helper-js'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function initScrollToHash (router: VueRouter.Router) {
  let latestID = 0
  console.log('----location.hash--', location.hash)
  router.afterEach(() => {
    if (location.hash) {
      const localID = ++latestID
      const elID = decodeURIComponent(location.hash.substr(1))
      nextTick(() => {
        const getEl = () =>
          document.getElementById(elID) || document.getElementsByName(elID)[0]
        console.log('document.getElementById(elID)', document.getElementById(elID))
        console.log('document.getElementsByName(elID)[0]', document.getElementsByName(elID)[0])

        // hp.waitFor(() => Boolean(getEl()), 60, 333).promise.then(() => {
        if (localID !== latestID) {
        // expired
          return
        }
        const el = getEl()
        console.log('el', el)
        if ('scrollRestoration' in window.history) {
          console.log('-=--=')
          window.history.scrollRestoration = 'manual'
        }
        setTimeout(() => {
        //   el.scrollIntoView && el.scrollIntoView()
          // eslint-disable-next-line no-unused-expressions
          // eslint-disable-next-line eqeqeq
          window.onunload = function () {
            window.scrollTo({
              top: el.offsetTop,
              behavior: 'smooth'
            })
          }
        }, 200)
      })
    //   })
    }
  })
}
