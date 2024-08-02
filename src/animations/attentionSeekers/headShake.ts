import ConstructAnimation from './constructAnimation'
import { AttentionOptions } from '../../utils/types'
import { isValidAttOptions } from '../../utils/runtimeChecks'

export function headShake(element: any, options: AttentionOptions) {
  
  // Validate l options object to ensure it contains only allowed properties
  if (!isValidAttOptions(options)) {
    console.error('Options object should only include: duration(number), delay(number), loop(boolean)')
    return
  }
      
  return new ConstructAnimation(element, {
    duration: options.duration ? options.duration : 1.5,
    keyframes: [
      { transform: "translateX(0) rotateY(0deg)", duration: 0.065 },
      { transform: "translateX(-6px) rotateY(-9deg)", duration: 0.065 },
      { transform: "translateX(5px) rotateY(7deg)", duration: 0.12 },
      { transform: "translateX(-3px) rotateY(-5deg)", duration: 0.12 },
      { transform: "translateX(2px) rotateY(3deg)", duration: 0.12 },
      { transform: "translateX(0) rotateY(0deg)", duration: 0.18 }
    ],
    ease: "power1.inOut",
    repeat: options.loop ? -1 : 0,
    repeatDelay: options.delay ? options.delay : 0.111,
    yoyo: true,
    ...options,
  })
}