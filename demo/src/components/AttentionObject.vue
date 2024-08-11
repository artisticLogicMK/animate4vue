<script setup>
import { ref, computed } from 'vue'
import { jello, bounce, pulse, flash, rubberBand, headShake, shakeHorizontal, shakeVertical, swing, tada, wobble, heartBeat } from 'animate.vue'

const props = defineProps({
  attention: String,
  loop: Boolean
})

const animations = {
  jello: jello,
  bounce: bounce,
  pulse: pulse,
  flash: flash,
  rubberBand: rubberBand,
  headShake: headShake,
  shakeHorizontal: shakeHorizontal,
  shakeVertical: shakeVertical,
  swing: swing,
  tada: tada,
  wobble: wobble,
  heartBeat: heartBeat
}

let animate = null

const animateEl = () => {
  if (animate !== null) animate.kill()
  const anim = animations[props.attention]
  animate = anim('.target', {loop: props.loop})
}

const stop = () => {
  animate.kill()
}
</script>

<template>
  <div class="my-16 text-center text-[--text-color] dark:text-[--text-color-d]">
    <div class="flex items-center justify-evenly">
      <img class="target" src="../assets/img/vue.webp" />
      <img class="target" src="../assets/img/bell.png" />
    </div>
  </div>
    
    <div class="text-center">
      <button @click="animateEl()" class="lines mr-4">Animate</button>
      <button v-if="loop" @click="stop()" class="lines">Stop</button>
    </div>

</template>

<style scoped>
img {
  @apply w-24
}
button {
  @apply text-base rounded-md px-3 py-1 border font-semibold active:bg-[--green] dark:active:bg-[--green-d] active:text-white/90
}
</style>