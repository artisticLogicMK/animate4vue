<script setup>
import { onMounted } from 'vue'
import { useStore } from '@/stores/store'
import setThemeMode from '@/utils/setTheme.js'

import Tab from '@/components/Tab.vue'
import Animations from '@/components/Animations.vue'
import Attention from '@/components/Attention.vue'

import { PhSun, PhList, PhMoon } from "@phosphor-icons/vue"

const store = useStore()

const changeTheme = () => {
  const theme = localStorage.theme
  document.documentElement.classList.remove("dark", "light")
  document.documentElement.classList.add(theme === 'dark' ? 'light' : 'dark') 
  document.querySelector('meta[name=theme-color]').setAttribute("content", theme === 'dark' ? "#171717" : "#F1F1F1")
  localStorage.theme = theme === 'dark' ? 'light' : 'dark'
}

onMounted(() => {
  setThemeMode()
})
</script>

<template>
  <div class="max-w-4xl mx-auto text-[--text-color] dark:text-[--text-color-d] flex flex-col px-4">
    <div class="shrink-0 flex justify-between items-center w-full pt-5 pb-3">
      <img src="./assets/img/animatevue.svg" class="h-6" />
      <div class="flex">
        <button @click="changeTheme()">
          <PhSun class="hidden dark:block" />
          <PhMoon class="dark:hidden" />
        </button>
        
        <button class="ml-3 hidden">
          <PhList />
        </button>
      </div>
    </div>
    
    
    <div class="grow h-full py-10">
      <div class="flex justify-center mb-5">
        <button
          @click="store.openTab = 'animations'"
          class="tabs mr-3"
          :class="{'active': store.openTab === 'animations'}"
        >Animations</button>
        
        <button
          @click="store.openTab = 'attention'"
          class="tabs"
          :class="{'active': store.openTab === 'attention'}"
        >Attention Seekers</button>
        </div>
      
      <Animations v-if="store.openTab === 'animations'" />
      <Attention v-if="store.openTab === 'attention'" />
      
      <div class="text-sm xs:text-base w-full max-w-md mx-auto text-center mb-5">
        A library for ready-to-use animations designed for Vue.js applications, featuring over 100 high-performance UI animations crafted with GSAP, offering GPU-accelerated rendering with better performance and efficiency across all devices, unlike traditional CSS animation libraries that can be taxing and less efficient on low-end devices.
      </div>
      
      <div class="text-center font-semibold">
        <p class="text-base xl:text-xl font-bold mb-1">Get started using Animate.vue</p>
        <div class="flex justify-center text-[--green] dark:text-[--green-d] text-sm xs:text-base">
          <a href="" class="mr-3">NPM Repository</a>
          <a href="">Github Repository</a>
        </div>
      </div>

    </div>
    
  </div>
</template>

<style scoped>
.tabs {
  @apply text-base font-semibold mb-4 rounded-full px-3 py-1.5
}
.tabs.active {
  @apply bg-[--green] dark:bg-[--green-d] text-white
}
</style>
