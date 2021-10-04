<template>
  <div>
    <h1> {{ $route.params.title }}</h1>
    <br />
    <h1>編輯狀態: {{ $route.params.isEdit }}</h1>
    <div v-if="$route.params.isEdit === 'true'" >
      <input type="text">
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import { useRoute } from 'vue-router'
export default defineComponent({
  name: 'quotationi-info',
  setup () {
    const rout = useRoute()
    console.log(rout.params.isEdit)
    onMounted(() => {
      rout.params.isEdit = 'false' as string
    })
  }
})
</script>
