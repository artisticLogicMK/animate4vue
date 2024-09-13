import animate from '../utils/animate'
import { Options } from '../utils/types'
import { gsap } from 'gsap'
import TextPlugin from 'gsap/TextPlugin'

gsap.registerPlugin(TextPlugin)

const textOptions = {
  opacity: 1,
  text: '',
}

// entrance animations
const textIn = (target: HTMLElement | any, done: (() => void), options: Options): Promise<void> => {
  return animate('in', target, done, options, {
    ...textOptions,
    duration: options?.duration || parseFloat(target.dataset.avDuration) || 1
  })
}

// leaving animations
const textOut = (target: HTMLElement | any, done: (() => void), options: Options): Promise<void> => {
  return animate('out', target, done, options, {
    ...textOptions,
    duration: options?.duration || parseFloat(target.dataset.avDuration) || 1
  })
}

export { textIn, textOut }