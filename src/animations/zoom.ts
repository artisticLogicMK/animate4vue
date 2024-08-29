import animate from '../utils/animate'
import { Options } from '../utils/types'
import setOffset from '../utils/setOffset'

// entrance animations
const zoomIn = (target: HTMLElement | any, done: (() => void), options: Options): Promise<void> => {
  return animate('in', target, done, options, { scale: 0 })
}

const zoomInRight = (target: HTMLElement | any, done: (() => void), options: Options): Promise<void> => {
  const offset = setOffset(target, options)
  return animate('in', target, done, options, {
    scale: 0,
    x: offset ? `${offset}` : '100%'
  })
}

const zoomInLeft = (target: HTMLElement | any, done: (() => void), options: Options): Promise<void> => {
  const offset = setOffset(target, options)
  return animate('in', target, done, options, {
    scale: 0,
    x: offset ? `-${offset}` : '-100%'
  })
}

const zoomInTop = (target: HTMLElement | any, done: (() => void), options: Options): Promise<void> => {
  const offset = setOffset(target, options)
  return animate('in', target, done, options, {
    scale: 0,
    y: offset ? `-${offset}` : '-100%'
  })
}

const zoomInBottom = (target: HTMLElement | any, done: (() => void), options: Options): Promise<void> => {
  const offset = setOffset(target, options)
  return animate('in', target, done, options, {
    scale: 0,
    y: offset ? `${offset}` : '100%'
  })
}

const zoomInTopRight = (target: HTMLElement | any, done: (() => void), options: Options): Promise<void> => {
  const offset = setOffset(target, options)
  return animate('in', target, done, options, {
    scale: 0,
    y: offset ? `-${offset}` : '-100%',
    x: offset ? `${offset}` : '100%'
  })
}

const zoomInTopLeft = (target: HTMLElement | any, done: (() => void), options: Options): Promise<void> => {
  const offset = setOffset(target, options)
  return animate('in', target, done, options, {
    scale: 0,
    y: offset ? `-${offset}` : '-100%',
    x: offset ? `-${offset}` : '-100%'
  })
}

const zoomInBottomRight = (target: HTMLElement | any, done: (() => void), options: Options): Promise<void> => {
  const offset = setOffset(target, options)
  return animate('in', target, done, options, {
    scale: 0,
    y: offset ? `${offset}` : '100%',
    x: offset ? `${offset}` : '100%'
  })
}

const zoomInBottomLeft = (target: HTMLElement | any, done: (() => void), options: Options): Promise<void> => {
  const offset = setOffset(target, options)
  return animate('in', target, done, options, {
    scale: 0,
    y: offset ? `${offset}` : '100%',
    x: offset ? `-${offset}` : '-100%'
  })
}



// leaving animations
const zoomOut = (target: HTMLElement | any, done: (() => void), options: Options): Promise<void> => {
  return animate('out', target, done, options, { scale: 0 })
}

const zoomOutRight = (target: HTMLElement | any, done: (() => void), options: Options): Promise<void> => {
  const offset = setOffset(target, options)
  return animate('out', target, done, options, {
    scale: 0,
    x: offset ? `${offset}` : '100%'
  })
}

const zoomOutLeft = (target: HTMLElement | any, done: (() => void), options: Options): Promise<void> => {
  const offset = setOffset(target, options)
  return animate('out', target, done, options, {
    scale: 0,
    x: offset ? `-${offset}` : '-100%'
  })
}

const zoomOutTop = (target: HTMLElement | any, done: (() => void), options: Options): Promise<void> => {
  const offset = setOffset(target, options)
  return animate('out', target, done, options, {
    scale: 0,
    y: offset ? `-${offset}` : '-100%'
  })
}

const zoomOutBottom = (target: HTMLElement | any, done: (() => void), options: Options): Promise<void> => {
  const offset = setOffset(target, options)
  return animate('out', target, done, options, {
    scale: 0,
    y: offset ? `${offset}` : '100%'
  })
}

const zoomOutTopRight = (target: HTMLElement | any, done: (() => void), options: Options): Promise<void> => {
  const offset = setOffset(target, options)
  return animate('out', target, done, options, {
    scale: 0,
    y: offset ? `-${offset}` : '-100%',
    x: offset ? `${offset}` : '100%'
  })
}

const zoomOutTopLeft = (target: HTMLElement | any, done: (() => void), options: Options): Promise<void> => {
  const offset = setOffset(target, options)
  return animate('out', target, done, options, {
    scale: 0,
    y: offset ? `-${offset}` : '-100%',
    x: offset ? `-${offset}` : '-100%'
  })
}

const zoomOutBottomRight = (target: HTMLElement | any, done: (() => void), options: Options): Promise<void> => {
  const offset = setOffset(target, options)
  return animate('out', target, done, options, {
    scale: 0,
    y: offset ? `${offset}` : '100%',
    x: offset ? `${offset}` : '100%'
  })
}

const zoomOutBottomLeft = (target: HTMLElement | any, done: (() => void), options: Options): Promise<void> => {
  const offset = setOffset(target, options)
  return animate('out', target, done, options, {
    scale: 0,
    y: offset ? `${offset}` : '100%',
    x: offset ? `-${offset}` : '-100%'
  })
}

export { zoomIn, zoomInRight, zoomInLeft, zoomInTop, zoomInBottom, zoomInTopRight, zoomInTopLeft, zoomInBottomRight, zoomInBottomLeft, zoomOut, zoomOutRight, zoomOutLeft, zoomOutTop, zoomOutBottom, zoomOutTopRight, zoomOutTopLeft, zoomOutBottomRight, zoomOutBottomLeft }