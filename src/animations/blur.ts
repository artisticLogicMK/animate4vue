import animate from '../utils/animate'
import { Options } from '../utils/types'

const blurOptions = {
  opacity: 0.5,
  filter: "blur(6px)"
}

const blurIn = (target: HTMLElement | any, done: (() => void), options: Options): Promise<void> => {
  return animate('in', target, done, options, blurOptions )
}

const blurOut = (target: HTMLElement | any, done: (() => void), options: Options): Promise<void> => {
  return animate('out', target, done, options, blurOptions)
}

export { blurIn, blurOut }