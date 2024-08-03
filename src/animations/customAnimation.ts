import { gsap } from 'gsap'

const customAnimation = (
  target: any,
  done: () => void,
  direction: "enter" | "leave",
  config: object
): Promise<void> => {
  return new Promise((resolve, reject) => {
    try {
      if (direction === "enter") {
        gsap.from(target, config)
        gsap.to(target, { onComplete: () => {
            done()
            resolve()
          }
        })
      }
      
      else {
        gsap.to(target, config)
        gsap.to(target, { onStart: () => {
            done()
            resolve()
          }
        })
      }
      
    } catch (error) {
      reject(error)
    }
    
  })
}

export default customAnimation