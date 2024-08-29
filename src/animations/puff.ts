import animate from '../utils/animate'
import { Options } from '../utils/types'

const puffOptions = {
  scale: 2,
  filter: "blur(2px)",
  transformOrigin: "50% 50%"
}

const puffIn = (target: HTMLElement | any, done: (() => void), options: Options): Promise<void> => {
  return animate('in', target, done, options, puffOptions )
}

const puffOut = (target: HTMLElement | any, done: (() => void), options: Options): Promise<void> => {
  return animate('out', target, done, options, puffOptions)
}

export { puffIn, puffOut }