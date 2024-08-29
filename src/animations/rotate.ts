import animate from '../utils/animate'
import { Options } from '../utils/types'

// entrance animations
const rotateIn = (target: HTMLElement | any, done: (() => void), options: Options): Promise<void> => {
  return animate('in', target, done, options, { scale: 0, rotationZ: -200 })
}

const rotateInBottomLeft = (target: HTMLElement | any, done: (() => void), options: Options): Promise<void> => {
  return animate('in', target, done, options, {
    rotationZ: -45
  })
}

const rotateInBottomRight = (target: HTMLElement | any, done: (() => void), options: Options): Promise<void> => {
  return animate('in', target, done, options, {
    rotationZ: 45,
  })
}

const rotateInTopLeft = (target: HTMLElement | any, done: (() => void), options: Options): Promise<void> => {
  return animate('in', target, done, options, {
    rotationZ: 45,
  })
}

const rotateInTopRight = (target: HTMLElement | any, done: (() => void), options: Options): Promise<void> => {
  return animate('in', target, done, options, {
    rotationZ: -90,
  })
}


// leaving animations
const rotateOut = (target: HTMLElement | any, done: (() => void), options: Options): Promise<void> => {
  return animate('out', target, done, options, { scale: 0, rotationZ: -200 })
}

const rotateOutBottomLeft = (target: HTMLElement | any, done: (() => void), options: Options): Promise<void> => {
  return animate('out', target, done, options, {
    rotationZ: -45
  })
}

const rotateOutBottomRight = (target: HTMLElement | any, done: (() => void), options: Options): Promise<void> => {
  return animate('out', target, done, options, {
    rotationZ: 45
  })
}

const rotateOutTopLeft = (target: HTMLElement | any, done: (() => void), options: Options): Promise<void> => {
  return animate('out', target, done, options, {
    rotationZ: 45
  })
}

const rotateOutTopRight = (target: HTMLElement | any, done: (() => void), options: Options): Promise<void> => {
  return animate('out', target, done, options, {
    rotationZ: -90
  })
}


export { rotateIn, rotateInBottomLeft, rotateInBottomRight, rotateInTopLeft, rotateInTopRight, rotateOut, rotateOutBottomLeft, rotateOutBottomRight, rotateOutTopLeft, rotateOutTopRight }