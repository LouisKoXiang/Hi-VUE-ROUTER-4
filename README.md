# HI-VUE3

Vue2 -> Vue3 Sample With TypeScript

1. option api -> composition api
2. vue-router3 -> vue-router4
3. vee-validate 3.0 -> vee-validat4.0
4. vuex 3.0 -> 4.0
5. Vue2 Instal -> Vue3 mount
6. smoothscroll-polyfill (compatibility Safari)


- [2] vue-router4 sample
  ```bash
   Sample
   # router/index.ts
  ```

- [3] vee-validat4.0 建置中
  ```bash
   Sample
   # 建置中
  ```

- [4] vuex 3.0 -> 4.0
  ```bash
   Sample
   # 建置中
  ```

- [5] Vue2 Instal -> Vue3 Mount Global Component With TypeScript
  ```bash
   /src/routerBeforeEach.ts
   #import mountDialog from './plugin/dialog'
   #mountDialog({ type: 'error', content: 'errorMessage' })
   註解拿掉即可檢視全局component 點點路由你就會發現有點意思
  ```

- [6]  Vue-router-`4` behavior: 'smooth' Not Work On Safari
  ```bash
   Solution 
   # Use smoothscroll-polyfill Lib
   How to use
   # import smoothscroll & add smoothscroll.polyfill()
   Sample
   # router/index.ts
  ```


## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
yarn test:unit
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
