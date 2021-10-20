<template>
  <div id="aa">
      <object
        :data="bindUrlResult"
        type="application/pdf"
        title="UserGuide"
        width="100%"
        height="800"
      ></object>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRef } from 'vue'

export default defineComponent({
  name: 'pdf',
  props: {
    bindUrl: String
  },
  setup (props) {
    const bindUrlResult = toRef(props, 'bindUrl')
    return {
      bindUrlResult
    }
  }
})
</script>
