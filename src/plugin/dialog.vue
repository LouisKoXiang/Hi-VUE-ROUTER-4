<template>
  <div class="alert">
    <span class="closebtn" onclick="this.parentElement.style.display='none'"
      >&times;</span
    >
    <strong>Danger!</strong> Indicates a dangerous or potentially negative
    action.
    <button @click="test"> testButton </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    close: {
      type: Function
    },
    content: {
      type: String,
      default: '訊息不明'
    },
    type: {
      type: String,
      default: 'error'
    }
  },
  setup (props) {
    console.log('props', props)
    const test = () => {
      console.log('關閉它')
    }
    return {
      dialogVisible: true,
      test
    }
  }
})
</script>

<style>
.alert {
  padding: 20px;
  background-color: #f44336;
  color: white;
}

.closebtn {
  margin-left: 15px;
  color: white;
  font-weight: bold;
  float: right;
  font-size: 22px;
  line-height: 20px;
  cursor: pointer;
  transition: 0.3s;
}

.closebtn:hover {
  color: black;
}
</style>
