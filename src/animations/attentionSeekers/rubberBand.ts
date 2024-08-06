import ConstructAnimation from './constructAnimation'
import { AttentionOptions } from '../../utils/types'
import { isValidAttOptions } from '../../utils/runtimeChecks'

export function rubberBand(element: any, options: AttentionOptions) {
  
  options = {...options}
  
  // Validate l options object to ensure it contains only allowed properties
  if (!isValidAttOptions(options)) {
    console.error('Options object should only include: duration(number), delay(number), loop(boolean)')
    return
  }
      
  return new ConstructAnimation(element, {
    keyframes: [
      { scaleX: 1, scaleY: 1, duration: 0.1 },
      { scaleX: 1.25, scaleY: 0.75, duration: 0.1 },
      { scaleX: 0.75, scaleY: 1.25, duration: 0.1 },
      { scaleX: 1.15, scaleY: 0.85, duration: 0.1 },
      { scaleX: 0.95, scaleY: 1.05, duration: 0.1 },
      { scaleX: 1.05, scaleY: 0.95, duration: 0.1 },
      { scaleX: 1, scaleY: 1, duration: 0.1 }
    ],
    ease: "power1.inOut",
    repeat: options.loop ? -1 : 0,
    repeatDelay: options.delay ? options.delay : 0.111,
    duration: options.duration ? options.duration : 2,
    yolo: true
  })
}