import { gsap } from 'gsap'

const customAnimation = (
  target: any,
  done: (() => void),
  direction: "enter" | "leave",
  config: object
): Promise<void> => {
  return new Promise((resolve, reject) => {
    
    try {
      // Initialize timeline animation of element
      const timeline = gsap.timeline()
    
      // Perform the animation based on the direction 'enter' or 'leave'
      if (direction === 'enter') { // Animation to enter
        // Animate from the target state to the default state (e.g. fade in)
        timeline.from(target, config)
        timeline.to(target, { onComplete: () => {
            done() // Let vue know animation is complete
            resolve() // Resolve promise
          }
        })
      }
      
      else {
        // Animate from the default state to the target state (e.g. fade in)
        timeline.to(target, config)
        timeline.to(target, {
          onStart: () => done(), // Let vue know animation is complete
          onComplete: () => resolve() // Resolve promise
        })
      }
      
    } catch (error) {
      reject('Animate.vue: ' + error)
    }
    
  })
}

export default customAnimation