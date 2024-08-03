import animate from '../utils/animate'
import { Options } from '../utils/types'
import { gsap } from 'gsap'
import TextPlugin from 'gsap/TextPlugin'

gsap.registerPlugin(TextPlugin)

const textOptions = {
  duration: 1,
  opacity: 1,
  text: '',
}

// entrance animations
const textIn = (target: any, done: (() => void), options: Options): Promise<void> => {
  return animate('in', target, done, options, textOptions)
}

// leaving animations
const textOut = (target: any, done: (() => void), options: Options): Promise<void> => {
  return animate('out', target, done, options, textOptions)
}

export { textIn, textOut }