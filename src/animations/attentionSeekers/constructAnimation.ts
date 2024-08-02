import gsap from 'gsap'

class ConstructAnimation {
  private animation: any
  private element: any
  private options: object
  
  constructor(element: any, options: object) {
    this.element = element
    this.options = options
    this.animation = gsap.to(element, options)
  }

  kill() {
    // Ensure the animation exists before calling kill
    if (this.animation) {
      this.animation.kill()
      // Clear properties set by GSAP to revert element to its initial state
      gsap.set(this.element, { clearProps: "all" })
    }
    return this // Return `this` for chaining
  }
}

export default ConstructAnimation