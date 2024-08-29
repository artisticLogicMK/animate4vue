import animate from '../utils/animate'
import { Options } from '../utils/types'

const vanishOptions = {
  scale: 2,
  filter: "blur(90px)",
  transformOrigin: "50% 50%",
  duration: 0.65
}

const vanishIn = (target: HTMLElement | any, done: (() => void), options: Options): Promise<void> => {
  return animate('in', target, done, options, vanishOptions)
}

const vanishOut = (target: HTMLElement | any, done: (() => void), options: Options): Promise<void> => {
  return animate('out', target, done, options, { ...vanishOptions, filter: "blur(20px)"})
}

export { vanishIn, vanishOut }