<template>
  <div>
    <h1>caseType name : {{ $route.params.caseType }}</h1>
    <li>
      <u>
        <router-link
          :to="{
            name: bindName,
            hash: '#p1',
            params: { title: '案件資訊', caseType: $route.params.caseType }
          }"
        >
          ParentNestCustomOne
        </router-link>
      </u>
    </li>
    <li>
      <u>
        <router-link
          :to="{
            name: bindName,
            hash: '#p2',
            params: { title: '案件資訊', caseType: $route.params.caseType }
          }"
        >
          ParentNestCustomOne P2
        </router-link>
      </u>
    </li>
    <li>
      <u>
        <router-link
          :to="{
            name: 'parent-nest-custom-two',
            params: { title: '案件審核', caseType: $route.params.caseType }
          }"
        >
          ParentNestCustomTwo
        </router-link>
      </u>
    </li>
    <li>
      <u>
        <router-link
          :to="{
            name: 'quotation-info',
            params: { title: '對保資訊', caseType: $route.params.caseType }
          }"
        >
          ParentQuotationInfo
        </router-link>
      </u>
    </li>
    <router-view v-slot="{ Component }">
      <transition name="fade-transform" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRoute } from 'vue-router'
export default defineComponent({
  name: 'parent',
  setup () {
    const rout = useRoute()
    const bindName = ref('')
    console.log(rout.params.caseType)
    bindName.value = rout.params.caseType as string
    return {
      bindName
    }
  }
})
</script>

<style lang="css" scoped>
.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all 0.5s;
}

.fade-transform-enter {
  opacity: 0;
  transform: translateX(-30px);
}

.fade-transform-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
