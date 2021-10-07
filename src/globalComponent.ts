import exampleComponent from './components/HelloWorld.vue'
const example = {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  install (Vue:any) {
    Vue.component('example-component', exampleComponent)
  }
}
export default example
