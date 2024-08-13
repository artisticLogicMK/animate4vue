<script setup>
import { ref, computed } from 'vue'
import { useStore } from '@/stores/store'
import AttentionObject from '@/components/AttentionObject.vue'

const store = useStore()

const att = ref('swing')
const loop = ref(false)

const animations = [
  'swing', 'jello', 'bounce', 'pulse', 'flash', 'rubberBand', 'headShake',
  'shakeHorizontal', 'shakeVertical', 'tada', 'wobble', 'heartBeat'
]

</script>

<template>
  <div class="w-full max-w-md mx-auto p-4 rounded-xl border lines mb-7">
    
    <div class="flex items-start justify-center">
        <div class="mr-4">
          <p class="text-sm font-semibold mb-1">Select Animation</p>
          <select v-model="att" class="w-full bg-transparent border rounded-md px-2 py-1 lines">
            <option v-for="anim in animations" :key="anim" :value="anim">
              {{ anim }}
            </option>
          </select>
        </div>
        
        <div>
          <p class="text-sm font-semibold mb-3">Should it loop</p>
          <input type="checkbox" v-model="loop" class="scale-125" />
        </div>
      
    </div>
    
    <AttentionObject :attention="att" :loop="loop" />
  </div>
</template>

<style>

</style>