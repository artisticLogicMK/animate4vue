import ConstructAnimation from './constructAnimation'
import { AttentionOptions } from '../../utils/types'
import { isValidAttOptions } from '../../utils/runtimeChecks'
import animationIsRunning from '../../utils/animationIsRunning'

export function spin(element: HTMLElement | any, options: AttentionOptions) {
  
  options = {...options}
  
  // Validate options object to ensure it contains only allowed properties
  if (!isValidAttOptions(options)) {
    console.error('Options object should only include: duration(number), delay(number), loop(boolean)')
    return
  }
  
  // Prevent starting a new animation if the current element is already animating
  if (animationIsRunning(element)) return // exit
      
  return new ConstructAnimation(element, {
    rotate: 360,
    ease: "power1.inOut",
    repeat: options.loop ? -1 : 0,
    repeatDelay: options.delay ? options.delay : 0.111,
    duration: options.duration ? options.duration : 1.6,
    yolo: true
  })
}