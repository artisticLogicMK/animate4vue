<script setup>
import { useStore } from '@/stores/store'

import Tab from '@/components/Tab.vue'
import Animations from '@/components/Animations.vue'
import Attention from '@/components/Attention.vue'
import List from '@/components/List.vue'

import { PhSun, PhList } from "@phosphor-icons/vue"

const store = useStore()
</script>

<template>
  <div class="flex h-full max-w-4xl mx-auto text-[--text-color] p-5">
    
    <div class="grow shrink-0 flex flex-col px-4">
      <div class="shrink-0 flex justify-between items-center w-full">
        <img src="./assets/img/animatevue.svg" class="h-6" />
        <div class="flex">
          <button>
            <PhSun />
          </button>
          
          <button class="ml-3">
            <PhList />
          </button>
        </div>
      </div>
      
      
      <div class="grow h-full py-10">
        
        <Animations v-if="store.openTab === 'animations'" />
        <Attention v-if="store.openTab === 'attention'" />
        <List v-if="store.openTab === 'list'" />
        
        <div class="text-base w-full max-w-md mx-auto text-center mb-5">
          A library for ready-to-use animations designed for Vue.js applications, featuring over 100 high-performance UI animations crafted with GSAP, offering GPU-accelerated rendering with better performance and efficiency across all devices, unlike traditional CSS animation libraries--that can be taxing and less efficient on low-end devices.
        </div>
        <div class="text-center font-semibold">
          <p class="text-xl font-bold mb-1">Get started using Animate.vue</p>
          <div class="flex justify-center text-[--green-dark] text-base">
            <a href="" class="mr-3">NPM Repository</a>
            <a href="">Github Repository</a>
          </div>
        </div>
  
      </div>
    </div>
    
    
    <Tab />
    
  </div>
</template>

<style scoped>
</style>
