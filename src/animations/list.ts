import animate from '../utils/animate'
import { Options } from '../utils/types'

// List animations
const verticalOptions = { height: 0, opacity: 0, overflowY: 'hidden', ease: "none", transformOrigin: 'top' }
const horizontalOptions = { width: 0, overflowX: 'hidden', ease: "none", transformOrigin: 'left' }

const listInVertical = (target: any, done: (() => void), options: Options): Promise<void> => {
  return animate('in', target, done, options, verticalOptions)
}

const listOutVertical = (target: any, done: (() => void), options: Options): Promise<void> => {
  return animate('out', target, done, options, verticalOptions)
}

const listInHorizontal = (target: any, done: (() => void), options: Options): Promise<void> => {
  return animate('in', target, done, options, horizontalOptions)
}

const listOutHorizontal = (target: any, done: (() => void), options: Options): Promise<void> => {
  return animate('out', target, done, options, horizontalOptions)
}

export { listInVertical, listOutVertical, listInHorizontal, listOutHorizontal }