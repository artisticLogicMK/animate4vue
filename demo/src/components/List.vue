<script setup>
import { ref, computed } from 'vue'
import { listInVertical, listOutVertical, listInHorizontal, listOutHorizontal } from 'animate.vue'

const listType = ref('vertical')

const sch = ref('')
const numbers = ref(['356', '67', '90', '54', '11', '78'])
const compNumbers = computed(() => {
  return numbers.value.filter(val => val.includes(sch.value))
})
</script>

<template>
  <div class="w-full max-w-sm mx-auto p-4 rounded-xl border lines mb-7">
    
    <div class="m">
      <p class="text-sm font-semibold mb-1">Select Layout</p>
      <select v-model="listType" class="w-full bg-transparent border rounded-md px-2 py-1 lines">
        <option value="vertical">
          listInVertical, listOutVertical
        </option>
        <option value="horizontal">
          listInHorizontal, listOutHorizontal
        </option>
      </select>
    </div>

    <div class="mt-5">
      <div class="flex justify-between items-end py-2 border-nb lines">
        <input v-model="sch" type="search" placeholder="Search names..." class="border rounded-full lines px-3 py-1"/>
        <button class="text-sm px-3 py-1 border lines rounded-full">Vertical</button>
      </div>
    </div>
    
    <div class="flex border lines rounded-lg" :class="{'flex-col': listType === 'vertical'}">
      <TransitionGroup @enter="listInVertical" @leave="listOutVertical">
        <div v-for="num in compNumbers" :key="num" class="p-2 text-base w-fit">{{num}}</div>
      </TransitionGroup>
    </div>
  </div>
</template>

<style scoped>
button {
  @apply text-base rounded-md px-3 py-1 border font-semibold active:bg-[--green] active:text-white
}
</style>