<template>
  <div>
    <h1>
     PDF Demo 1
    </h1>
    <object data="http://127.0.0.1:5500/src/assets/pdf/XD.pdf#zoom=85&scrollbar=0&toolbar=0&navpanes=0" type="application/pdf" title="UserGuide" width="100%" height="800"></object>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'pdf',
  setup () {
    return {

    }
  }
})
</script>
