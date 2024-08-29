import animate from '../utils/animate'
import { Options } from '../utils/types'

const rollIn = (target: HTMLElement | any, done: (() => void), options: Options): Promise<void> => {
  return animate('in', target, done, options, { 
    rotationZ: -120,
    transformOrigin: "0% 50%"
  })
}

const rollOut = (target: HTMLElement | any, done: (() => void), options: Options): Promise<void> => {
  return animate('out', target, done, options, { 
    rotationZ: 120,
    transformOrigin: "0% 50%"
  })
}

export { rollIn, rollOut }