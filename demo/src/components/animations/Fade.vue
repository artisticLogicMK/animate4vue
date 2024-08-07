<script setup>
import { useStore } from '@/stores/store'
import { fadeIn, fadeOut } from 'animate.vue'

const store = useStore()

const animateIn = (el, done) => {
  if (store.animationType.effect === 'fadeIn') {
    fadeIn(el, done)
  }
}

const animateOut = (el, done) => {
  if (store.animationType.effect === 'fadeOut') {
    fadeIn(el, done)
  }
}
</script>

<template>{{ store.show }}
  <Transition @enter="animateIn" @leave="animateOut">
    <img v-if="store.show" src="../../assets/img/animatevue.svg" class="h-full" />
  </Transition>
</template>