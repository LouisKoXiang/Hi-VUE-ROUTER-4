<template>
  <div>
    <h1>
      Vee-Validate Test1
    </h1>
    <div>
      <Field
        v-model="temp"
        type="text"
        name="temp"
        rules="required"
        v-slot="{ field, meta, errorMessage }"
      >
        <textarea
          v-bind="field"
          placeholder="hello你好嗎～衷心感謝"
          rows="4"
          :class="getTest(meta)"
        ></textarea>
        <span v-if="errorMessage" class="text-red-500">{{ errorMessage }}</span>
      </Field>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Field } from 'vee-validate'

export default defineComponent({
  name: 'ncs',
  components: {
    Field
  },
  setup () {
    const temp = ref('')
    const getTest = (meta: string) => {
      console.log(meta)
    }
    return {
      temp,
      getTest
    }
  }
})
</script>
