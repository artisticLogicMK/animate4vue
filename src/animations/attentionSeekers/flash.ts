import ConstructAnimation from './constructAnimation'
import { AttentionOptions } from '../../utils/types'
import { isValidAttOptions } from '../../utils/runtimeChecks'

export function flash(element: any, options: AttentionOptions) {
  
  options = {...options}
  
  // Validate l options object to ensure it contains only allowed properties
  if (!isValidAttOptions(options)) {
    console.error('Options object should only include: duration(number), delay(number), loop(boolean)')
    return
  }
      
  return new ConstructAnimation(element, {
    keyframes: [
      { opacity: 1, duration: 0.25 },
      { opacity: 0, duration: 0.25 },
      { opacity: 1, duration: 0.25 }
    ],
    repeat: options.loop ? -1 : 0,
    repeatDelay: options.delay ? options.delay : 0.111,
    duration: options.duration ? options.duration : 1.2,
    yolo: true
  })
}