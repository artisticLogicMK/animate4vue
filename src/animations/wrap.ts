import animate from '../utils/animate'
import { Options } from '../utils/types'

// List animations
const verticalOptions = { height: 0, opacity: 1, overflowY: 'hidden'  }
const horizontalOptions = { width: 0, opacity: 1, overflowX: 'hidden' }

const wrapInVertical = (target: any, done: (() => void), options: Options): Promise<void> => {
  return animate('in', target, done, options, verticalOptions)
}

const wrapOutVertical = (target: any, done: (() => void), options: Options): Promise<void> => {
  return animate('out', target, done, options, verticalOptions)
}

const wrapInHorizontal = (target: any, done: (() => void), options: Options): Promise<void> => {
  return animate('in', target, done, options, horizontalOptions)
}

const wrapOutHorizontal = (target: any, done: (() => void), options: Options): Promise<void> => {
  return animate('out', target, done, options, horizontalOptions)
}

export { wrapInVertical, wrapOutVertical, wrapInHorizontal, wrapOutHorizontal }