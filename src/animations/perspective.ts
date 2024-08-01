import animate from '../utils/animate'
import { Options } from '../utils/types'

const rightOptions = {
  transformOrigin: "100% 0", 
  perspective: "800px", 
  rotationY: 180
}
const leftOptions = {
  transformOrigin: "0 0", 
  perspective: "800px", 
  rotationY: -180
}
const topOptions = {
  transformOrigin: "0 100%", 
  perspective: "800px", 
  rotationX: 180
}
const bottomOptions = {
  transformOrigin: "0 0", 
  perspective: "800px", 
  rotationX: -180
}

// entrance animations
const perspectiveInRight = (target: any, done: (() => void), options: Options): Promise<void> => {
  return animate('in', target, done, options, rightOptions)
}

const perspectiveInLeft = (target: any, done: (() => void), options: Options): Promise<void> => {
  return animate('in', target, done, options, leftOptions)
}

const perspectiveInTop = (target: any, done: (() => void), options: Options): Promise<void> => {
  return animate('in', target, done, options, topOptions)
}

const perspectiveInBottom = (target: any, done: (() => void), options: Options): Promise<void> => {
  return animate('in', target, done, options, bottomOptions)
}


// leaving animations
const perspectiveOutRight = (target: any, done: (() => void), options: Options): Promise<void> => {
  return animate('out', target, done, options, rightOptions)
}

const perspectiveOutLeft = (target: any, done: (() => void), options: Options): Promise<void> => {
  return animate('out', target, done, options, leftOptions)
}

const perspectiveOutTop = (target: any, done: (() => void), options: Options): Promise<void> => {
  return animate('out', target, done, options, topOptions)
}

const perspectiveOutBottom = (target: any, done: (() => void), options: Options): Promise<void> => {
  return animate('out', target, done, options, bottomOptions)
}

export { perspectiveInRight, perspectiveInLeft, perspectiveInTop, perspectiveInBottom, perspectiveOutRight, perspectiveOutLeft, perspectiveOutTop, perspectiveOutBottom }