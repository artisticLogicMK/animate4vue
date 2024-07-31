import animate from '../utils/animate'
import { Options } from '../utils/types'
import setOffset from '../utils/setOffset'

// entrance animations
const rotateIn = (target: any, done: (() => void), options: Options): Promise<void> => {
  return animate('in', target, done, options, { scale: 0, rotationZ: -200 })
}

const rotateInBottomLeft = (target: any, done: (() => void), options: Options): Promise<void> => {
  return animate('in', target, done, options, {
    scale: 0, rotationZ: -45
  })
}

const rotateInBottomRight = (target: any, done: (() => void), options: Options): Promise<void> => {
  return animate('in', target, done, options, {
    scale: 0, rotationZ: 45,
  })
}

const rotateInTopLeft = (target: any, done: (() => void), options: Options): Promise<void> => {
  return animate('in', target, done, options, {
    scale: 0, rotationZ: 45,
  })
}

const rotateInTopRight = (target: any, done: (() => void), options: Options): Promise<void> => {
  return animate('in', target, done, options, {
    scale: 0, rotationZ: -90,
  })
}


// leaving animations
const rotateOut = (target: any, done: (() => void), options: Options): Promise<void> => {
  return animate('out', target, done, options, { scale: 0, rotationZ: -200 })
}

const rotateOutBottomLeft = (target: any, done: (() => void), options: Options): Promise<void> => {
  return animate('out', target, done, options, {
    scale: 0, rotationZ: -45
  })
}

const rotateOutBottomRight = (target: any, done: (() => void), options: Options): Promise<void> => {
  return animate('out', target, done, options, {
    scale: 0, rotationZ: 45
  })
}

const rotateOutTopLeft = (target: any, done: (() => void), options: Options): Promise<void> => {
  return animate('out', target, done, options, {
    scale: 0, rotationZ: 45
  })
}

const rotateOutTopRight = (target: any, done: (() => void), options: Options): Promise<void> => {
  return animate('out', target, done, options, {
    scale: 0, rotationZ: -90
  })
}


export { rotateIn, rotateInBottomLeft, rotateInBottomRight, rotateInTopLeft, rotateInTopRight, rotateOut, rotateOutBottomLeft, rotateOutBottomRight, rotateOutTopLeft, rotateOutTopRight }