<template>
  <div>
    <hr />
    <ul class="drag-sort-enable" ref="dragTable">
      <li draggable="true" @drag.stop="handleDrag($event)" @dragend.stop="handleDrop">
        Application2
      </li>
      <li draggable="true" @drag.stop="handleDrag($event)" @dragend.stop="handleDrop">
        Blank
      </li>
      <li draggable="true" @drag.stop="handleDrag($event)" @dragend.stop="handleDrop">
        Class
      </li>
      <li draggable="true" @drag.stop="handleDrag($event)" @dragend.stop="handleDrop">
        Data
      </li>
      <li draggable="true" @drag.stop="handleDrag($event)" @dragend.stop="handleDrop">
        Element1
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup () {
    function enableDragSort (listClass: string) {
      const sortableLists = document.getElementsByClassName(listClass)

      Array.prototype.map.call(sortableLists, list => {
        enableDragList(list)
      })
    }

    function enableDragList (list: { children: Element }) {
      Array.prototype.map.call(list.children, item => {
        enableDragItem(item)
      })
    }

    function enableDragItem (item: {
      setAttribute: (arg0: string, arg1: boolean) => void
      ondrag: typeof handleDrag
      ondragend: typeof handleDrop
    }) {
      item.setAttribute('draggable', true)
      item.ondrag = handleDrag
      item.ondragend = handleDrop
    }
    function handleDrag (event: {
      target: Element
      clientX: number
      clientY: number
    }) {
      const selectedItem = event.target as Element
      const list = selectedItem.parentNode
      const x = event?.clientX
      const y = event?.clientY

      selectedItem.classList.add('drag-sort-active')
      let swapItem =
        document.elementFromPoint(x, y) === null
          ? selectedItem
          : (document.elementFromPoint(x, y) as Node | null)
      if (list === swapItem?.parentNode) {
        swapItem =
          swapItem !== selectedItem.nextSibling
            ? swapItem
            : swapItem.nextSibling

        // eslint-disable-next-line no-unused-expressions
        list?.insertBefore(selectedItem, swapItem)
      }
    }
    function handleDrop (item: {
      target: { classList: { remove: (arg0: string) => void } }
    }) {
      item.target.classList.remove('drag-sort-active')
    }

    (() => {
      enableDragSort('drag-sort-enable')
    })()
    return {
      handleDrop,
      handleDrag
    }
  }
})
</script>

<style lang="scss" scoped>
html,
body {
  height: 100%;
}

li {
  margin: 5px 0;
  background: darkblue;
  color: #fff;
}

.drag-sort-active {
  background: transparent;
  color: transparent;
  margin: 5px;
}
</style>
