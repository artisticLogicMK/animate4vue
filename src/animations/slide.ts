import animate from '../utils/animate'
import { Options } from '../utils/types'
import setOffset from '../utils/setOffset'

// entrance animations
const slideInRight = (target: HTMLElement | any, done: (() => void), options: Options): Promise<void> => {
  const offset = setOffset(target, options)
  return animate('in', target, done, options, {
    x: offset ? `${offset}` : '100%'
  })
}

const slideInLeft = (target: HTMLElement | any, done: (() => void), options: Options): Promise<void> => {
  const offset = setOffset(target, options)
  return animate('in', target, done, options, {
    x: offset ? `-${offset}` : '-100%'
  })
}

const slideInTop = (target: HTMLElement | any, done: (() => void), options: Options): Promise<void> => {
  const offset = setOffset(target, options)
  return animate('in', target, done, options, {
    y: offset ? `-${offset}` : '-100%'
  })
}

const slideInBottom = (target: HTMLElement | any, done: (() => void), options: Options): Promise<void> => {
  const offset = setOffset(target, options)
  return animate('in', target, done, options, {
    y: offset ? `${offset}` : '100%'
  })
}

const slideInTopRight = (target: HTMLElement | any, done: (() => void), options: Options): Promise<void> => {
  const offset = setOffset(target, options)
  return animate('in', target, done, options, {
    y: offset ? `-${offset}` : '-100%',
    x: offset ? `${offset}` : '100%'
  })
}

const slideInTopLeft = (target: HTMLElement | any, done: (() => void), options: Options): Promise<void> => {
  const offset = setOffset(target, options)
  return animate('in', target, done, options, {
    y: offset ? `-${offset}` : '-100%',
    x: offset ? `-${offset}` : '-100%'
  })
}

const slideInBottomRight = (target: HTMLElement | any, done: (() => void), options: Options): Promise<void> => {
  const offset = setOffset(target, options)
  return animate('in', target, done, options, {
    y: offset ? `${offset}` : '100%',
    x: offset ? `${offset}` : '100%'
  })
}

const slideInBottomLeft = (target: HTMLElement | any, done: (() => void), options: Options): Promise<void> => {
  const offset = setOffset(target, options)
  return animate('in', target, done, options, {
    y: offset ? `${offset}` : '100%',
    x: offset ? `-${offset}` : '-100%'
  })
}



// leaving animations
const slideOutRight = (target: HTMLElement | any, done: (() => void), options: Options): Promise<void> => {
  const offset = setOffset(target, options)
  return animate('out', target, done, options, {
    x: offset ? `${offset}` : '100%'
  })
}

const slideOutLeft = (target: HTMLElement | any, done: (() => void), options: Options): Promise<void> => {
  const offset = setOffset(target, options)
  return animate('out', target, done, options, {
    x: offset ? `-${offset}` : '-100%'
  })
}

const slideOutTop = (target: HTMLElement | any, done: (() => void), options: Options): Promise<void> => {
  const offset = setOffset(target, options)
  return animate('out', target, done, options, {
    y: offset ? `-${offset}` : '-100%'
  })
}

const slideOutBottom = (target: HTMLElement | any, done: (() => void), options: Options): Promise<void> => {
  const offset = setOffset(target, options)
  return animate('out', target, done, options, {
    y: offset ? `${offset}` : '100%'
  })
}

const slideOutTopRight = (target: HTMLElement | any, done: (() => void), options: Options): Promise<void> => {
  const offset = setOffset(target, options)
  return animate('out', target, done, options, {
    y: offset ? `-${offset}` : '-100%',
    x: offset ? `${offset}` : '100%'
  })
}

const slideOutTopLeft = (target: HTMLElement | any, done: (() => void), options: Options): Promise<void> => {
  const offset = setOffset(target, options)
  return animate('out', target, done, options, {
    y: offset ? `-${offset}` : '-100%',
    x: offset ? `-${offset}` : '-100%'
  })
}

const slideOutBottomRight = (target: HTMLElement | any, done: (() => void), options: Options): Promise<void> => {
  const offset = setOffset(target, options)
  return animate('out', target, done, options, {
    y: offset ? `${offset}` : '100%',
    x: offset ? `${offset}` : '100%'
  })
}

const slideOutBottomLeft = (target: HTMLElement | any, done: (() => void), options: Options): Promise<void> => {
  const offset = setOffset(target, options)
  return animate('out', target, done, options, {
    y: offset ? `${offset}` : '100%',
    x: offset ? `-${offset}` : '-100%'
  })
}

export { slideInRight, slideInLeft, slideInTop, slideInBottom, slideInTopRight, slideInTopLeft, slideInBottomRight, slideInBottomLeft, slideOutRight, slideOutLeft, slideOutTop, slideOutBottom, slideOutTopRight, slideOutTopLeft, slideOutBottomRight, slideOutBottomLeft }