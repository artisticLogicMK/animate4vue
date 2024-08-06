import ConstructAnimation from './constructAnimation'
import { AttentionOptions } from '../../utils/types'
import { isValidAttOptions } from '../../utils/runtimeChecks'

export function wobble(element: any, options: AttentionOptions) {
  
  options = {...options}
  
  // Validate l options object to ensure it contains only allowed properties
  if (!isValidAttOptions(options)) {
    console.error('Options object should only include: duration(number), delay(number), loop(boolean)')
    return
  }
      
  return new ConstructAnimation(element, {
    keyframes: [
      { xPercent: 0, rotation: 0, duration: 0.2 },
      { xPercent: -25, rotation: -5, duration: 0.15 },
      { xPercent: 20, rotation: 3, duration: 0.15 },
      { xPercent: -15, rotation: -3, duration: 0.15 },
      { xPercent: 10, rotation: 2, duration: 0.15 },
      { xPercent: -5, rotation: -1, duration: 0.15 },
      { xPercent: 0, rotation: 0, duration: 0.2 }
    ],
    transformOrigin: 'center center',
    ease: "power1.inOut",
    repeat: options.loop ? -1 : 0,
    repeatDelay: options.delay ? options.delay : 0.111,
    duration: options.duration ? options.duration : 2,
    yolo: true
  })
}