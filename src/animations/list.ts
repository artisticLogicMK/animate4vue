import animate from '../utils/animate'
import { Options } from '../utils/types'

// List animations
const verticalOptions = { height: 0, scale: 0.2, overflowY: 'hidden', ease: "none" }
const horizontalOptions = { width: 0, scale: 0.2, overflowX: 'hidden', ease: "none" }

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