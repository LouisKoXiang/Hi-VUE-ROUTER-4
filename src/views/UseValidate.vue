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
      <button @click="handleValidateClick">Go Validate</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useField } from 'vee-validate'

export default defineComponent({
  name: 'ncs',
  setup () {
    // eslint-disable-next-line
    const isRequired = (value: any) => {
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
