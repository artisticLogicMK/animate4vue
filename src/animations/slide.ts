import animate from '../utils/animate'
import { Options } from '../utils/types'
import setOffset from '../utils/setOffset'

// entrance animations
const slideInRight = (target: any, done: (() => void), options: Options): Promise<void> => {
  const offset = setOffset(target, options)
  return animate('in', target, done, options, {
    x: offset ? `${offset}` : 100
  })
}

const slideInLeft = (target: any, done: (() => void), options: Options): Promise<void> => {
  const offset = setOffset(target, options)
  return animate('in', target, done, options, {
    x: offset ? `-${offset}` : -100
  })
}

const slideInTop = (target: any, done: (() => void), options: Options): Promise<void> => {
  const offset = setOffset(target, options)
  return animate('in', target, done, options, {
    y: offset ? `-${offset}` : -100
  })
}

const slideInBottom = (target: any, done: (() => void), options: Options): Promise<void> => {
  const offset = setOffset(target, options)
  return animate('in', target, done, options, {
    y: offset ? `${offset}` : 100
  })
}

const slideInTopRight = (target: any, done: (() => void), options: Options): Promise<void> => {
  const offset = setOffset(target, options)
  return animate('in', target, done, options, {
    y: offset ? `-${offset}` : -100,
    x: offset ? `${offset}` : 100
  })
}

const slideInTopLeft = (target: any, done: (() => void), options: Options): Promise<void> => {
  const offset = setOffset(target, options)
  return animate('in', target, done, options, {
    y: offset ? `-${offset}` : -100,
    x: offset ? `-${offset}` : -100
  })
}

const slideInBottomRight = (target: any, done: (() => void), options: Options): Promise<void> => {
  const offset = setOffset(target, options)
  return animate('in', target, done, options, {
    y: offset ? `${offset}` : 100,
    x: offset ? `${offset}` : 100
  })
}

const slideInBottomLeft = (target: any, done: (() => void), options: Options): Promise<void> => {
  const offset = setOffset(target, options)
  return animate('in', target, done, options, {
    y: offset ? `${offset}` : 100,
    x: offset ? `-${offset}` : -100
  })
}



// leaving animations
const slideOutRight = (target: any, done: (() => void), options: Options): Promise<void> => {
  const offset = setOffset(target, options)
  return animate('out', target, done, options, {
    x: offset ? `${offset}` : 100
  })
}

const slideOutLeft = (target: any, done: (() => void), options: Options): Promise<void> => {
  const offset = setOffset(target, options)
  return animate('out', target, done, options, {
    x: offset ? `-${offset}` : -100
  })
}

const slideOutTop = (target: any, done: (() => void), options: Options): Promise<void> => {
  const offset = setOffset(target, options)
  return animate('out', target, done, options, {
    y: offset ? `-${offset}` : -100
  })
}

const slideOutBottom = (target: any, done: (() => void), options: Options): Promise<void> => {
  const offset = setOffset(target, options)
  return animate('out', target, done, options, {
    y: offset ? `${offset}` : 100
  })
}

const slideOutTopRight = (target: any, done: (() => void), options: Options): Promise<void> => {
  const offset = setOffset(target, options)
  return animate('out', target, done, options, {
    y: offset ? `-${offset}` : -100,
    x: offset ? `${offset}` : 100
  })
}

const slideOutTopLeft = (target: any, done: (() => void), options: Options): Promise<void> => {
  const offset = setOffset(target, options)
  return animate('out', target, done, options, {
    y: offset ? `-${offset}` : -100,
    x: offset ? `-${offset}` : -100
  })
}

const slideOutBottomRight = (target: any, done: (() => void), options: Options): Promise<void> => {
  const offset = setOffset(target, options)
  return animate('out', target, done, options, {
    y: offset ? `${offset}` : 100,
    x: offset ? `${offset}` : 100
  })
}

const slideOutBottomLeft = (target: any, done: (() => void), options: Options): Promise<void> => {
  const offset = setOffset(target, options)
  return animate('out', target, done, options, {
    y: offset ? `${offset}` : 100,
    x: offset ? `-${offset}` : -100
  })
}

export { slideInRight, slideInLeft, slideInTop, slideInBottom, slideInTopRight, slideInTopLeft, slideInBottomRight, slideInBottomLeft, slideOutRight, slideOutLeft, slideOutTop, slideOutBottom, slideOutTopRight, slideOutTopLeft, slideOutBottomRight, slideOutBottomLeft }