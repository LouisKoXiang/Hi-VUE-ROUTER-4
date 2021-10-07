import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
// import { initScrollToHash } from './scroll-to-hash'
import example from './globalComponent'

// initScrollToHash(router)
createApp(App).use(store).use(router).use(example).mount('#app')
