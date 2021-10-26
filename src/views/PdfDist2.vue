<template>
  <div>
    <button @click="changePdf1">XD PDF</button>
    <button @click="changePdf2">XD2 PDF</button>
    <object-pdf :key="componentKey" :bindUrl="bindUrl" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import ObjectPdf from '@/components/ObjectPdf.vue' // @ is an alias to /src

// const request = axios.create({
//   baseURL: 'http://localhost:3000/',
//   transformResponse: (r: ServerResponse) => r.data
// })

export default defineComponent({
  name: 'pdf',
  components: {
    ObjectPdf
  },
  setup () {
    const bindUrl = ref('')
    const renderComponent = ref(false)
    const componentKey = ref(0)
    const changePdf1 = async () => {
      componentKey.value += 1
      const pdfFileToArrayBuffer = await fetch('http://127.0.0.1:5500/src/assets/pdf/XD2.pdf')
      const buffer = await pdfFileToArrayBuffer.arrayBuffer()
      console.log(buffer, buffer instanceof ArrayBuffer)
      const bufferToUrl = URL.createObjectURL(
        new Blob([buffer], {
          type: 'application/pdf'
        })
      )
      bindUrl.value = bufferToUrl
      // forceRerender()
    }
    const changePdf2 = () => {
      componentKey.value += 1
      bindUrl.value = 'http://127.0.0.1:5500/src/assets/pdf/XD2.pdf'
      // forceRerender()
    }

    // const forceRerender = () => {
    //   // Remove my-component from the DOM
    //   renderComponent.value = false

    //   nextTick(() => {
    //     // Add the component back in
    //     renderComponent.value = true
    //   })
    // }

    return {
      bindUrl,
      changePdf1,
      changePdf2,
      renderComponent,
      componentKey
    }
  }
})
</script>
