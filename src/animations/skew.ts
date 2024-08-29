import animate from '../utils/animate'
import { Options } from '../utils/types'
import setOffset from '../utils/setOffset'

// entrance animations
const skewInRight = (target: HTMLElement | any, done: (() => void), options: Options): Promise<void> => {
  const offset = setOffset(target, options)
  return animate('in', target, done, options, {
    skewX: 30,
    ease: 'back.out',
    x: offset ? `${offset}` : '100%'
  })
}

const skewInLeft = (target: HTMLElement | any, done: (() => void), options: Options): Promise<void> => {
  const offset = setOffset(target, options)
  return animate('in', target, done, options, {
    skewX: -30,
    ease: 'back.out',
    x: offset ? `-${offset}` : '-100%'
  })
}


// leaving animations
const skewOutRight = (target: HTMLElement | any, done: (() => void), options: Options): Promise<void> => {
  const offset = setOffset(target, options)
  return animate('out', target, done, options, {
    skewX: 30,
    ease: 'back.out',
    x: offset ? `${offset}` : '100%'
  })
}

const skewOutLeft = (target: HTMLElement | any, done: (() => void), options: Options): Promise<void> => {
  const offset = setOffset(target, options)
  return animate('out', target, done, options, {
    skewX: -30,
    ease: 'back.out',
    x: offset ? `-${offset}` : '-100%'
  })
}


export { skewInRight, skewInLeft, skewOutRight, skewOutLeft }