<template>
  <div>
    <h1>
      TypeScript Interface try it
    </h1>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { OrderList, Option, Info } from '@/model/tstest'
import axios from 'axios'
const request = axios.create({
  baseURL: 'http://localhost:5500'
})

export default defineComponent({
  name: 'typescript-test',
  setup () {
    const bundle = ref({})
    const unBundle = ref({})

    const bundleArr =
      {
        lv1: [] as Info[],
        lv2: [] as Info[],
        lv3: [] as Info[]
      }

    const ubBundleArr =
      {
        lv1: [] as Info[],
        lv2: [] as Info[],
        lv3: [] as Info[]
      }
    const init = async () => {
      const getData = await request.get('/src/assets/pdf/test.json')
      const result = getData.data.info as Info[]
      result.filter((x) => {
        if (x.isBundle === true && x.class === 1) {
          return bundleArr.lv1.push(x)
        }
        if (x.isBundle === true && x.class === 2) {
          return bundleArr.lv2.push(x)
        }
        if (x.isBundle === true && x.class === 3) {
          return bundleArr.lv3.push(x)
        }
      })
      result.filter((x) => {
        if (x.isBundle === false && x.class === 1) {
          return ubBundleArr.lv1.push(x)
        }
        if (x.isBundle === false && x.class === 2) {
          return ubBundleArr.lv2.push(x)
        }
        if (x.isBundle === false && x.class === 3) {
          return ubBundleArr.lv3.push(x)
        }
      })
      console.log(bundleArr)
      console.log(ubBundleArr)
      bundle.value = bundle
      unBundle.value = unBundle
    }
    init()
    return {
      bundle,
      unBundle
    }
  }
})
</script>
