<template>
  <div class="list">
    <transition-group name="flip-list" tag="div">
      <li
        @dragover="e => onDragOver(item, i, e)"
        @dragend="e => finishDrag(item, i, e)"
        @dragstart="e => startDrag(item, i, e)"
        v-for="(item, i) in items"
        class="item"
        :class="{
          over: item === over.item && item !== dragFrom,
          [over.dir]: item === over.item && item !== dragFrom
        }"
        draggable="true"
        :key="item"
        @click="temp"
      >
        {{ item }}
      </li>
    </transition-group>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup () {
    const items = ref(['one', 'two', 'three', 'four'])
    const startLoc = ref(0)
    const dragging = ref(false)
    const dragFrom = ref({})
    const over = ref({})

    const startDrag = (item: any, i: any, e: any) => {

    }
    const finishDrag = (item: any, pos: any) => {
      over.value = {}
    }

    const onDragOver = (item: any, pos: any, e: { clientY: number }) => {
      const dir = startLoc.value < e.clientY ? 'down' : 'up'
      setTimeout(() => {
        over.value = { item, pos, dir }
      }, 50)
    }
    return {
      items,
      over,
      startDrag,
      finishDrag,
      onDragOver
    }
  }
})
</script>

<style lang="scss" scoped>
.list > div {
  display: flex;
  flex-direction: column;
}

.item {
  width: 200px;
  padding: 10px;
  margin: 10px auto 10px 10px;
  background: tomato;
  color: white;
  font-family: sans-serif;
  border-radius: 5px;
  display: inline-block;
  /*   transition: opacity .3s ease-in-out; */
}

.flip-list-move {
  transition: transform 0.2s;
}

.over {
  opacity: 0.6;
}

.down {
  /*   transform: translateY(-20px); */
}

.up {
  /*    transform: translateY(20px); */
}
</style>
