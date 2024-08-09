<script setup>
import { ref, computed } from 'vue'
import { useStore } from '@/stores/store'
import AnimationsObject from '@/components/AnimationsObject.vue'

const store = useStore()

const inAnim = ref('fadeIn')
const outAnim = ref('fadeOut')

const inAnimations = {
  fade: {
    name: 'Fade',
    animations: ['fadeIn']
  },
  slide: {
    name: 'Slide',
    animations: [
      'slideInRight', 'slideInLeft', 'slideInTop', 'slideInBottom',
      'slideInTopRight', 'slideInTopLeft', 'slideInBottomRight', 'slideInBottomLeft'
    ]
  },
  wrap: {
    name: 'Wrap',
    animations: ['wrapInVertical', 'wrapInHorizontal']
  },
  flip: {
    name: 'Flip',
    animations: [
      'flipInHorizontal', 'flipInVertical',
      'flipInHorizontalRight', 'flipInHorizontalLeft', 'flipInHorizontalTop', 'flipInHorizontalBottom',
      'flipInVerticalRight', 'flipInVerticalLeft', 'flipInVerticalTop', 'flipInVerticalBottom'
    ]
  },
  zoom: {
    name: 'Zoom',
    animations: [
      'zoomIn', 'zoomInRight', 'zoomInLeft', 'zoomInTop', 'zoomInBottom',
      'zoomInTopRight', 'zoomInTopLeft', 'zoomInBottomRight', 'zoomInBottomLeft'
    ]
  },
  rotate: {
    name: 'Rotate',
    animations: [
      'rotateIn', 'rotateInBottomLeft', 'rotateInBottomRight', 'rotateInTopLeft', 'rotateInTopRight'
    ]
  },
  skew: {
    name: 'Skew',
    animations: ['skewInRight', 'skewInLeft']
  },
  roll: {
    name: 'Roll',
    animations: ['rollIn']
  },
  puff: {
    name: 'Puff',
    animations: ['puffIn']
  },
  vanish: {
    name: 'Vanish',
    animations: ['vanishIn']
  },
  perspective: {
    name: 'Perspective',
    animations: [
      'perspectiveInRight', 'perspectiveInLeft', 'perspectiveInTop', 'perspectiveInBottom'
    ]
  },
  openClose: {
    name: 'Open & Close',
    animations: [
      'openTopLeft', 'openTopRight', 'openBottomLeft', 'openBottomRight'
    ]
  },
  text: {
    name: 'Text',
    animations: ['textIn']
  }
}

const outAnimations = {
  fade: {
    name: 'Fade',
    animations: ['fadeOut']
  },
  slide: {
    name: 'Slide',
    animations: [
      'slideOutRight', 'slideOutLeft', 'slideOutTop', 'slideOutBottom',
      'slideOutTopRight', 'slideOutTopLeft', 'slideOutBottomRight', 'slideOutBottomLeft'
    ]
  },
  wrap: {
    name: 'Wrap',
    animations: ['wrapOutVertical', 'wrapOutHorizontal']
  },
  flip: {
    name: 'Flip',
    animations: [
      'flipOutHorizontal', 'flipOutVertical',
      'flipOutHorizontalRight', 'flipOutHorizontalLeft', 'flipOutHorizontalTop', 'flipOutHorizontalBottom',
      'flipOutVerticalRight', 'flipOutVerticalLeft', 'flipOutVerticalTop', 'flipOutVerticalBottom'
    ]
  },
  zoom: {
    name: 'Zoom',
    animations: [
      'zoomOut', 'zoomOutRight', 'zoomOutLeft', 'zoomOutTop', 'zoomOutBottom',
      'zoomOutTopRight', 'zoomOutTopLeft', 'zoomOutBottomRight', 'zoomOutBottomLeft'
    ]
  },
  rotate: {
    name: 'Rotate',
    animations: [
      'rotateOut', 'rotateOutBottomLeft', 'rotateOutBottomRight', 'rotateOutTopLeft', 'rotateOutTopRight'
    ]
  },
  skew: {
    name: 'Skew',
    animations: ['skewOutRight', 'skewOutLeft']
  },
  roll: {
    name: 'Roll',
    animations: ['rollOut']
  },
  puff: {
    name: 'Puff',
    animations: ['puffOut']
  },
  vanish: {
    name: 'Vanish',
    animations: ['vanishOut']
  },
  perspective: {
    name: 'Perspective',
    animations: [
      'perspectiveOutRight', 'perspectiveOutLeft', 'perspectiveOutTop', 'perspectiveOutBottom'
    ]
  },
  openClose: {
    name: 'Open & Close',
    animations: [
      'closeTopLeft', 'closeTopRight', 'closeBottomLeft', 'closeBottomRight'
    ]
  },
  text: {
    name: 'Text',
    animations: ['textOut']
  }
}
</script>

<template>
  <div class="w-full max-w-md mx-auto p-4 rounded-xl border lines mb-7">
    
    <div class="flex">
      <div class="dir mr-4">
        <p>Entrance</p>
        <select v-model="inAnim" class="lines">
          <optgroup v-for="(category, key) in inAnimations" :key="key" :label="category.name">
            <option v-for="animation in category.animations" :key="animation" :value="animation">
              {{ animation }}
            </option>
          </optgroup>
        </select>
      </div>
      
      <div class="dir">
        <p>Leaving</p>
        <select v-model="outAnim" class="lines">
          <optgroup v-for="(category, key) in outAnimations" :key="key" :label="category.name">
            <option v-for="animation in category.animations" :key="animation" :value="animation">
              {{ animation }}
            </option>
          </optgroup>
        </select>
      </div>
    </div>
    
    <AnimationsObject :inAnim="inAnim" :outAnim="outAnim" />
  </div>
</template>

<style>
.dir {
  @apply flex-1
}
.dir p {
  @apply text-sm font-semibold mb-1
}
.dir select {
  @apply w-full bg-transparent border rounded-md px-2 py-1
}
</style>