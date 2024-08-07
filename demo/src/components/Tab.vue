<script setup>
import { useStore } from '@/stores/store'

const store = useStore()

const animations = {
  attentionSeekers: {
    name: 'Attention Seekers',
    animations: [
      'jello', 'bounce', 'pulse', 'flash', 'rubberBand', 'headShake',
      'shakeHorizontal', 'shakeVertical', 'swing', 'tada', 'wobble', 'heartBeat'
    ]
  },
  fade: {
    name: 'Fade',
    animations: ['fadeIn', 'fadeOut']
  },
  slide: {
    name: 'Slide',
    animations: [
      'slideInRight', 'slideInLeft', 'slideInTop', 'slideInBottom',
      'slideInTopRight', 'slideInTopLeft', 'slideInBottomRight', 'slideInBottomLeft',
      'slideOutRight', 'slideOutLeft', 'slideOutTop', 'slideOutBottom',
      'slideOutTopRight', 'slideOutTopLeft', 'slideOutBottomRight', 'slideOutBottomLeft'
    ]
  },
  wrap: {
    name: 'Wrap',
    animations: ['wrapInVertical', 'wrapOutVertical', 'wrapInHorizontal', 'wrapOutHorizontal']
  },
  flip: {
    name: 'Flip',
    animations: [
      'flipInHorizontal', 'flipOutHorizontal', 'flipInVertical', 'flipOutVertical',
      'flipInHorizontalRight', 'flipInHorizontalLeft', 'flipInHorizontalTop', 'flipInHorizontalBottom',
      'flipOutHorizontalRight', 'flipOutHorizontalLeft', 'flipOutHorizontalTop', 'flipOutHorizontalBottom',
      'flipInVerticalRight', 'flipInVerticalLeft', 'flipInVerticalTop', 'flipInVerticalBottom',
      'flipOutVerticalRight', 'flipOutVerticalLeft', 'flipOutVerticalTop', 'flipOutVerticalBottom'
    ]
  },
  list: {
    name: 'List',
    animations: ['listInVertical', 'listOutVertical', 'listInHorizontal', 'listOutHorizontal']
  },
  zoom: {
    name: 'Zoom',
    animations: [
      'zoomIn', 'zoomInRight', 'zoomInLeft', 'zoomInTop', 'zoomInBottom',
      'zoomInTopRight', 'zoomInTopLeft', 'zoomInBottomRight', 'zoomInBottomLeft',
      'zoomOut', 'zoomOutRight', 'zoomOutLeft', 'zoomOutTop', 'zoomOutBottom',
      'zoomOutTopRight', 'zoomOutTopLeft', 'zoomOutBottomRight', 'zoomOutBottomLeft'
    ]
  },
  rotate: {
    name: 'Rotate',
    animations: [
      'rotateIn', 'rotateInBottomLeft', 'rotateInBottomRight', 'rotateInTopLeft', 'rotateInTopRight',
      'rotateOut', 'rotateOutBottomLeft', 'rotateOutBottomRight', 'rotateOutTopLeft', 'rotateOutTopRight'
    ]
  },
  skew: {
    name: 'Skew',
    animations: ['skewInRight', 'skewInLeft', 'skewOutRight', 'skewOutLeft']
  },
  roll: {
    name: 'Roll',
    animations: ['rollIn', 'rollOut']
  },
  puff: {
    name: 'Puff',
    animations: ['puffIn', 'puffOut']
  },
  vanish: {
    name: 'Vanish',
    animations: ['vanishIn', 'vanishOut']
  },
  perspective: {
    name: 'Perspective',
    animations: [
      'perspectiveInRight', 'perspectiveInLeft', 'perspectiveInTop', 'perspectiveInBottom',
      'perspectiveOutRight', 'perspectiveOutLeft', 'perspectiveOutTop', 'perspectiveOutBottom'
    ]
  },
  openClose: {
    name: 'Open & Close',
    animations: [
      'openTopLeft', 'openTopRight', 'openBottomLeft', 'openBottomRight',
      'closeTopLeft', 'closeTopRight', 'closeBottomLeft', 'closeBottomRight'
    ]
  },
  text: {
    name: 'Text',
    animations: ['textIn', 'textOut']
  }
}

const setAnim = (name, effect) => {
  if (effect.includes('In')) {
    alert(effect)
    store.setAnimation(name, effect)
    store.show = true
  } else {
    //store.setAnimation(name, effect)
    store.show = false
  }
}
</script>

<template>
  <div class="shrink-0 w-[270px] h-full bg-transparent overflow-y-auto rounded-lg border lines p-4">
    
    <h1 class="text-base font-semibold mb-3">Animations</h1>
    
    <div
      v-for="anim in animations"
      :key="anim.name"
      class="border rounded-md text-base mb-5 p-3"
      :class="{'bg-neutral-100': store.animationType == anim.name}"
    >
      <p class="font-bold mb-0.5">{{ anim.name }}</p>
      
      <button
        v-for="effects in anim.animations"
        :key="effects"
        @click="setAnim(anim.name, effects)"
        class="block mb-0.5 hover:underline underline-offset-2 pointer-events-none"
        :class="{'pointer-events-auto': store.animationType == anim.name}"
      >
        {{ effects }}
      </button>
    </div>
    
  </div>
</template>