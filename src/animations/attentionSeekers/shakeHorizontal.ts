import ConstructAnimation from './constructAnimation'
import { AttentionOptions } from '../../utils/types'
import { isValidAttOptions } from '../../utils/runtimeChecks'

export function shakeHorizontal(element: any, options: AttentionOptions) {
  
  // Validate l options object to ensure it contains only allowed properties
  if (!isValidAttOptions(options)) {
    console.error('Options object should only include: duration(number), delay(number), loop(boolean)')
    return
  }
      
  return new ConstructAnimation(element, {
    duration: options.duration ? options.duration : 2,
    keyframes: [
      { x: 0, duration: 0.1 },     // 0%
      { x: -10, duration: 0.1 },   // 10%
      { x: 10, duration: 0.1 },    // 20%
      { x: -10, duration: 0.1 },   // 30%
      { x: 10, duration: 0.1 },    // 40%
      { x: -10, duration: 0.1 },   // 50%
      { x: 10, duration: 0.1 },    // 60%
      { x: -10, duration: 0.1 },   // 70%
      { x: 10, duration: 0.1 },    // 80%
      { x: -10, duration: 0.1 },   // 90%
      { x: 0, duration: 0.1 }      // 100%
    ],
    ease: "power1.inOut",
    repeat: options.loop ? -1 : 0,
    repeatDelay: options.delay ? options.delay : 0.111,
    yoyo: true,
    ...options,
  })
}