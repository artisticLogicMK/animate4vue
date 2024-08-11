<script setup>
import { ref, computed } from 'vue'
import {
  // Fade animations
  fadeIn, fadeOut,
  
  // Slide animations
  slideInRight, slideInLeft, slideInTop, slideInBottom, slideInTopRight, slideInTopLeft, slideInBottomRight, slideInBottomLeft, slideOutRight, slideOutLeft, slideOutTop, slideOutBottom, slideOutTopRight, slideOutTopLeft, slideOutBottomRight, slideOutBottomLeft,
  
  // Wrap animations
  wrapInVertical, wrapOutVertical, wrapInHorizontal, wrapOutHorizontal,
  
  // flip
  flipInHorizontal, flipOutHorizontal, flipInVertical, flipOutVertical, flipInHorizontalRight, flipInHorizontalLeft, flipInHorizontalTop, flipInHorizontalBottom, flipOutHorizontalRight, flipOutHorizontalLeft, flipOutHorizontalTop, flipOutHorizontalBottom, flipInVerticalRight, flipInVerticalLeft, flipInVerticalTop, flipInVerticalBottom, flipOutVerticalRight, flipOutVerticalLeft, flipOutVerticalTop, flipOutVerticalBottom,
  
  // zoom
  zoomIn, zoomInRight, zoomInLeft, zoomInTop, zoomInBottom, zoomInTopRight, zoomInTopLeft, zoomInBottomRight, zoomInBottomLeft, zoomOut, zoomOutRight, zoomOutLeft, zoomOutTop, zoomOutBottom, zoomOutTopRight, zoomOutTopLeft, zoomOutBottomRight, zoomOutBottomLeft,
  
  // Rotations
  rotateIn, rotateInBottomLeft, rotateInBottomRight, rotateInTopLeft, rotateInTopRight, rotateOut, rotateOutBottomLeft, rotateOutBottomRight, rotateOutTopLeft, rotateOutTopRight,
  
  // skew
  skewInRight, skewInLeft, skewOutRight, skewOutLeft,
  
  // Roll
  rollIn, rollOut,
  
  // Puff
  puffIn, puffOut,
  
  // Vanish
  vanishIn, vanishOut,
  
  // Perspective
  perspectiveInRight, perspectiveInLeft, perspectiveInTop, perspectiveInBottom, perspectiveOutRight, perspectiveOutLeft, perspectiveOutTop, perspectiveOutBottom,
  
  // open and close
  openTopLeft, openTopRight, openBottomLeft, openBottomRight, closeTopLeft, closeTopRight, closeBottomLeft, closeBottomRight,
  
  // Texts
  textIn, textOut
} from 'animate.vue'

const props = defineProps({
  inAnim: String,
  outAnim: String
})

const animations = {
  fadeIn: fadeIn,
  fadeOut: fadeOut,
  slideInRight: slideInRight,
  slideInLeft: slideInLeft,
  slideInTop: slideInTop,
  slideInBottom: slideInBottom,
  slideInTopRight: slideInTopRight,
  slideInTopLeft: slideInTopLeft,
  slideInBottomRight: slideInBottomRight,
  slideInBottomLeft: slideInBottomLeft,
  slideOutRight: slideOutRight,
  slideOutLeft: slideOutLeft,
  slideOutTop: slideOutTop,
  slideOutBottom: slideOutBottom,
  slideOutTopRight: slideOutTopRight,
  slideOutTopLeft: slideOutTopLeft,
  slideOutBottomRight: slideOutBottomRight,
  slideOutBottomLeft: slideOutBottomLeft,
  wrapInVertical: wrapInVertical,
  wrapOutVertical: wrapOutVertical,
  wrapInHorizontal: wrapInHorizontal,
  wrapOutHorizontal: wrapOutHorizontal,
  flipInHorizontal: flipInHorizontal,
  flipOutHorizontal: flipOutHorizontal,
  flipInVertical: flipInVertical,
  flipOutVertical: flipOutVertical,
  flipInHorizontalRight: flipInHorizontalRight,
  flipInHorizontalLeft: flipInHorizontalLeft,
  flipInHorizontalTop: flipInHorizontalTop,
  flipInHorizontalBottom: flipInHorizontalBottom,
  flipOutHorizontalRight: flipOutHorizontalRight,
  flipOutHorizontalLeft: flipOutHorizontalLeft,
  flipOutHorizontalTop: flipOutHorizontalTop,
  flipOutHorizontalBottom: flipOutHorizontalBottom,
  flipInVerticalRight: flipInVerticalRight,
  flipInVerticalLeft: flipInVerticalLeft,
  flipInVerticalTop: flipInVerticalTop,
  flipInVerticalBottom: flipInVerticalBottom,
  flipOutVerticalRight: flipOutVerticalRight,
  flipOutVerticalLeft: flipOutVerticalLeft,
  flipOutVerticalTop: flipOutVerticalTop,
  flipOutVerticalBottom: flipOutVerticalBottom,
  zoomIn: zoomIn,
  zoomInRight: zoomInRight,
  zoomInLeft: zoomInLeft,
  zoomInTop: zoomInTop,
  zoomInBottom: zoomInBottom,
  zoomInTopRight: zoomInTopRight,
  zoomInTopLeft: zoomInTopLeft,
  zoomInBottomRight: zoomInBottomRight,
  zoomInBottomLeft: zoomInBottomLeft,
  zoomOut: zoomOut,
  zoomOutRight: zoomOutRight,
  zoomOutLeft: zoomOutLeft,
  zoomOutTop: zoomOutTop,
  zoomOutBottom: zoomOutBottom,
  zoomOutTopRight: zoomOutTopRight,
  zoomOutTopLeft: zoomOutTopLeft,
  zoomOutBottomRight: zoomOutBottomRight,
  zoomOutBottomLeft: zoomOutBottomLeft,
  rotateIn: rotateIn,
  rotateInBottomLeft: rotateInBottomLeft,
  rotateInBottomRight: rotateInBottomRight,
  rotateInTopLeft: rotateInTopLeft,
  rotateInTopRight: rotateInTopRight,
  rotateOut: rotateOut,
  rotateOutBottomLeft: rotateOutBottomLeft,
  rotateOutBottomRight: rotateOutBottomRight,
  rotateOutTopLeft: rotateOutTopLeft,
  rotateOutTopRight: rotateOutTopRight,
  skewInRight: skewInRight,
  skewInLeft: skewInLeft,
  skewOutRight: skewOutRight,
  skewOutLeft: skewOutLeft,
  rollIn: rollIn,
  rollOut: rollOut,
  puffIn: puffIn,
  puffOut: puffOut,
  vanishIn: vanishIn,
  vanishOut: vanishOut,
  perspectiveInRight: perspectiveInRight,
  perspectiveInLeft: perspectiveInLeft,
  perspectiveInTop: perspectiveInTop,
  perspectiveInBottom: perspectiveInBottom,
  perspectiveOutRight: perspectiveOutRight,
  perspectiveOutLeft: perspectiveOutLeft,
  perspectiveOutTop: perspectiveOutTop,
  perspectiveOutBottom: perspectiveOutBottom,
  openTopLeft: openTopLeft,
  openTopRight: openTopRight,
  openBottomLeft: openBottomLeft,
  openBottomRight: openBottomRight,
  closeTopLeft: closeTopLeft,
  closeTopRight: closeTopRight,
  closeBottomLeft: closeBottomLeft,
  closeBottomRight: closeBottomRight,
  textIn: textIn,
  textOut: textOut
}

const animateIn = (el, done) => {
  const anim = animations[props.inAnim]
  anim(el, done)
}

const animateOut = (el, done) => {
  const anim = animations[props.outAnim]
  anim(el, done)
}

const show = ref(true)
</script>

<template>
  <div class="h-14 my-20 text-center text-[--text-color] dark:text-[--text-color-d]">
      <Transition @enter="animateIn" @leave="animateOut">
          <div v-if="show" class="bg-clip-text text-transparent bg-gradient-to-r dark:bg-gradient-to-l from-[--text-color]  to-[#41b883] font-bold text-4xl select-none">Animate.vue</div>
      </Transition>
    </div>
    
    <div class="text-center">
      <button @click="show = true" class="lines mr-4">Enter</button>
      <button @click="show = false" class="lines">Leave</button>
    </div>
</template>

<style scoped>
button {
  @apply text-base rounded-md px-3 py-1 border font-semibold active:bg-[--green] dark:active:bg-[--green-d] active:text-white/90
}
</style>