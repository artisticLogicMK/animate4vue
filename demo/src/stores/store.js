import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useStore = defineStore('store', () => {
  const show = ref(false)
  
  const animationType = ref({
    name: 'Fade',
    effect: 'fadeIn'
  })
  
  
  function setAnimation(name, effect) {
    //show.value = false
    animationType.value = {
      name: name,
      effect: effect
    }
    //show.value = true
  }

  return { animationType, setAnimation, show }
})
