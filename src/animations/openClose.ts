import animate from '../utils/animate'
import { Options } from '../utils/types'

const openOptions = {
  ease: "power.inOut"
}

// entrance animations
const OpenTopRight = (target: any, done: (() => void), options: Options): Promise<void> => {
  return animate('in', target, done, options, {
    ...openOptions,
    transformOrigin: "top right",
    rotation: -110,
  })
}

const OpenTopLeft = (target: any, done: (() => void), options: Options): Promise<void> => {
  return animate('in', target, done, options, {
    ...openOptions,
    transformOrigin: "top left",
    rotation: 110,
  })
}

const OpenBottomRight = (target: any, done: (() => void), options: Options): Promise<void> => {
  return animate('in', target, done, options, {
    ...openOptions,
    transformOrigin: "bottom right",
    rotation: 110,
  })
}

const OpenBottomLeft = (target: any, done: (() => void), options: Options): Promise<void> => {
  return animate('in', target, done, options, {
    ...openOptions,
    transformOrigin: "bottom left",
    rotation: -110,
  })
}


// Leaving animations
const closeTopRight = (target: any, done: (() => void), options: Options): Promise<void> => {
  return animate('out', target, done, options, {
    ...openOptions,
    transformOrigin: "top right",
    rotation: 0,
  })
}

const closeTopLeft = (target: any, done: (() => void), options: Options): Promise<void> => {
  return animate('out', target, done, options, {
    ...openOptions,
    transformOrigin: "top left",
    rotation: 0,
  })
}

const closeBottomRight = (target: any, done: (() => void), options: Options): Promise<void> => {
  return animate('out', target, done, options, {
    ...openOptions,
    transformOrigin: "bottom right",
    rotation: 110,
  })
}

const closeBottomLeft = (target: any, done: (() => void), options: Options): Promise<void> => {
  return animate('out', target, done, options, {
    ...openOptions,
    transformOrigin: "bottom left",
    rotation: -110,
  })
}

export { OpenTopLeft, OpenTopRight, OpenBottomLeft, OpenBottomRight, closeTopLeft, closeTopRight, closeBottomLeft, closeBottomRight }