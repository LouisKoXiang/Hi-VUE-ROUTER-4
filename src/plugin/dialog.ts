import { createApp } from 'vue'
import dialog from './dialog.vue'
// import ElementPlus from 'element-plus'
// import 'element-plus/lib/theme-chalk/index.css'

interface Option{
  title?: string;
  content?: string;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function mountContent (option = {} as Option) {
  const dom: HTMLElement | null = document.createElement('div')
  document.body.appendChild(dom)
  const app = createApp(dialog, {
    close: () => { document.body.removeChild(dom) },
    ...option
  })
  app.mount(dom)
}
export default mountContent
