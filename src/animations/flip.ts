import animate from '../utils/animate'
import { Options } from '../utils/types'
import setOffset from '../utils/setOffset'

const flip = (direction: string): object => {
  direction = direction === "horizontal" ? "rotationY" : "rotationX"
  return {
    perspective: 400,
    [direction]: 180,
  }
}

const flipInHorizontal = (target: HTMLElement | any, done: (() => void), options: Options): Promise<void> => {
  return animate('in', target, done, options, flip('horizontal'))
}

const flipOutHorizontal = (target: HTMLElement | any, done: (() => void), options: Options): Promise<void> => {
  return animate('out', target, done, options, flip('horizontal'))
}

const flipInVertical = (target: HTMLElement | any, done: (() => void), options: Options): Promise<void> => {
  return animate('in', target, done, options, flip('vertical'))
}

const flipOutVertical = (target: HTMLElement | any, done: (() => void), options: Options): Promise<void> => {
  return animate('out', target, done, options, flip('vertical'))
}

const flipInHorizontalRight = (target: HTMLElement | any, done: (() => void), options: Options): Promise<void> => {
  const offset = setOffset(target, options)
  return animate('in', target, done, options, Object.assign(flip('horizontal'), { x: offset ? `${offset}` : '100%' }))
}

const flipInHorizontalLeft = (target: HTMLElement | any, done: (() => void), options: Options): Promise<void> => {
  const offset = setOffset(target, options)
  return animate('in', target, done, options, Object.assign(flip('horizontal'), { x: offset ? `-${offset}` : '-100%' }))
}

const flipInHorizontalTop = (target: HTMLElement | any, done: (() => void), options: Options): Promise<void> => {
  const offset = setOffset(target, options)
  return animate('in', target, done, options, Object.assign(flip('horizontal'), { y: offset ? `-${offset}` : '-100%' }))
}

const flipInHorizontalBottom = (target: HTMLElement | any, done: (() => void), options: Options): Promise<void> => {
  const offset = setOffset(target, options)
  return animate('in', target, done, options, Object.assign(flip('horizontal'), { y: offset ? `${offset}` : '100%' }))
}

const flipOutHorizontalRight = (target: HTMLElement | any, done: (() => void), options: Options): Promise<void> => {
  const offset = setOffset(target, options)
  return animate('out', target, done, options, Object.assign(flip('horizontal'), { x: offset ? `${offset}` : '100%' }))
}

const flipOutHorizontalLeft = (target: HTMLElement | any, done: (() => void), options: Options): Promise<void> => {
  const offset = setOffset(target, options)
  return animate('out', target, done, options, Object.assign(flip('horizontal'), { x: offset ? `-${offset}` : '-100%' }))
}

const flipOutHorizontalTop = (target: HTMLElement | any, done: (() => void), options: Options): Promise<void> => {
  const offset = setOffset(target, options)
  return animate('out', target, done, options, Object.assign(flip('horizontal'), { y: offset ? `-${offset}` : '-100%' }))
}

const flipOutHorizontalBottom = (target: HTMLElement | any, done: (() => void), options: Options): Promise<void> => {
  const offset = setOffset(target, options)
  return animate('out', target, done, options, Object.assign(flip('horizontal'), { y: offset ? `${offset}` : '100%' }))
}

// flip verticals
const flipInVerticalRight = (target: HTMLElement | any, done: (() => void), options: Options): Promise<void> => {
  const offset = setOffset(target, options)
  return animate('in', target, done, options, Object.assign(flip('vertical'), { x: offset ? `-${offset}` : '100%' }))
}

const flipInVerticalLeft = (target: HTMLElement | any, done: (() => void), options: Options): Promise<void> => {
  const offset = setOffset(target, options)
  return animate('in', target, done, options, Object.assign(flip('vertical'), { x: offset ? `-${offset}` : '-100%' }))
}

const flipInVerticalTop = (target: HTMLElement | any, done: (() => void), options: Options): Promise<void> => {
  const offset = setOffset(target, options)
  return animate('in', target, done, options, Object.assign(flip('vertical'), { y: offset ? `-${offset}` : '-100%' }))
}

const flipInVerticalBottom = (target: HTMLElement | any, done: (() => void), options: Options): Promise<void> => {
  const offset = setOffset(target, options)
  return animate('in', target, done, options, Object.assign(flip('vertical'), { y: offset ? `${offset}` : '100%' }))
}

const flipOutVerticalRight = (target: HTMLElement | any, done: (() => void), options: Options): Promise<void> => {
  const offset = setOffset(target, options)
  return animate('out', target, done, options, Object.assign(flip('vertical'), { x: offset ? `${offset}` : '100%' }))
}

const flipOutVerticalLeft = (target: HTMLElement | any, done: (() => void), options: Options): Promise<void> => {
  const offset = setOffset(target, options)
  return animate('out', target, done, options, Object.assign(flip('vertical'), { x: offset ? `-${offset}` : '-100%' }))
}

const flipOutVerticalTop = (target: HTMLElement | any, done: (() => void), options: Options): Promise<void> => {
  const offset = setOffset(target, options)
  return animate('out', target, done, options, Object.assign(flip('vertical'), { y: offset ? `-${offset}` : '-100%' }))
}

const flipOutVerticalBottom = (target: HTMLElement | any, done: (() => void), options: Options): Promise<void> => {
  const offset = setOffset(target, options)
  return animate('out', target, done, options, Object.assign(flip('vertical'), { y: offset ? `${offset}` : '100%' }))
}

export { flipInHorizontal, flipOutHorizontal, flipInVertical, flipOutVertical, flipInHorizontalRight, flipInHorizontalLeft, flipInHorizontalTop, flipInHorizontalBottom, flipOutHorizontalRight, flipOutHorizontalLeft, flipOutHorizontalTop, flipOutHorizontalBottom, flipInVerticalRight, flipInVerticalLeft, flipInVerticalTop, flipInVerticalBottom, flipOutVerticalRight, flipOutVerticalLeft, flipOutVerticalTop, flipOutVerticalBottom }