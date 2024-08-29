import animate from '../utils/animate'
import { Options } from '../utils/types'

const openOptions = {
  ease: "power.inOut"
}

// entrance animations
const openTopRight = (target: HTMLElement | any, done: (() => void), options: Options): Promise<void> => {
  return animate('in', target, done, options, {
    ...openOptions,
    transformOrigin: "top right",
    rotation: -110,
  })
}

const openTopLeft = (target: HTMLElement | any, done: (() => void), options: Options): Promise<void> => {
  return animate('in', target, done, options, {
    ...openOptions,
    transformOrigin: "top left",
    rotation: 110,
  })
}

const openBottomRight = (target: HTMLElement | any, done: (() => void), options: Options): Promise<void> => {
  return animate('in', target, done, options, {
    ...openOptions,
    transformOrigin: "bottom right",
    rotation: 110,
  })
}

const openBottomLeft = (target: HTMLElement | any, done: (() => void), options: Options): Promise<void> => {
  return animate('in', target, done, options, {
    ...openOptions,
    transformOrigin: "bottom left",
    rotation: -110,
  })
}


// Leaving animations
const closeTopRight = (target: HTMLElement | any, done: (() => void), options: Options): Promise<void> => {
  return animate('out', target, done, options, {
    ...openOptions,
    transformOrigin: "top right",
    rotation: -110,
  })
}

const closeTopLeft = (target: HTMLElement | any, done: (() => void), options: Options): Promise<void> => {
  return animate('out', target, done, options, {
    ...openOptions,
    transformOrigin: "top left",
    rotation: 110,
  })
}

const closeBottomRight = (target: HTMLElement | any, done: (() => void), options: Options): Promise<void> => {
  return animate('out', target, done, options, {
    ...openOptions,
    transformOrigin: "bottom right",
    rotation: -110,
  })
}

const closeBottomLeft = (target: HTMLElement | any, done: (() => void), options: Options): Promise<void> => {
  return animate('out', target, done, options, {
    ...openOptions,
    transformOrigin: "bottom left",
    rotation: 110,
  })
}

export { openTopLeft, openTopRight, openBottomLeft, openBottomRight, closeTopLeft, closeTopRight, closeBottomLeft, closeBottomRight }