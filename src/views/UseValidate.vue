<template>
  <div>
    <h1>
      Vee-Validate useField Demo
    </h1>
    <div>
      <textarea
        v-model="content"
        placeholder="hello你好嗎～衷心感謝"
        rows="4"
      ></textarea>
      <span v-if="errorMessage" class="text-red-500">{{ errorMessage }}</span>
    </div>
    <div>
      <button @click="handleValidateClick">123</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useField } from 'vee-validate'

export default defineComponent({
  name: 'ncs',
  setup () {
    const isRequired = (value: string) => {
      if (value && value.trim()) {
        return true
      }
      return 'This is required'
    }
    const { errorMessage, value: content, validate } = useField(
      'content',
      isRequired,
      {
        validateOnValueUpdate: false
      }
    )

    const handleValidateClick = async () => {
      const res = await validate()
      console.log('Validate Result', res)
    }

    return {
      content,
      errorMessage,
      handleValidateClick
    }
  }
})
</script>
