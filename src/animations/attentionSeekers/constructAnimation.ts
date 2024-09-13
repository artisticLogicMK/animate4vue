import gsap from 'gsap'
import '../../utils/globalTypes'

class ConstructAnimation {
  private animation: any
  private element: HTMLElement | any
  private options: Record<string, any>
  
  constructor(element: HTMLElement | any, options: Record<string, any>) {
    this.element = element
    this.options = options
    this.animation = gsap.to(element, {
      ...options,
      onComplete: () => {
        // If animation is set to perform once,
        // Run kill method to clear animation
        if (options.repeat === 0) this.kill()
      }
    })
  }

  kill() {
    // Ensure the animation exists before calling kill
    if (this.animation) {
      this.animation.kill()
      
      // Clear properties set by GSAP to revert element to its initial state
      gsap.set(this.element, { clearProps: "all" })
      
      // Clear the global animation state when the animation is finished 
      window.attAnimation = undefined
    }
    
    return this // Return `this` for chaining
  }
}

export default ConstructAnimation