import animate from '../utils/animate'
import { Options } from '../utils/types'

const vanishOptions = {
  scale: 2,
  filter: "blur(90px)",
  transformOrigin: "50% 50%",
}

const vanishIn = (target: HTMLElement | any, done: (() => void), options: Options): Promise<void> => {
  return animate('in', target, done, options, {
    ...vanishOptions,
    duration: options?.duration || parseFloat(target.dataset.avDuration) || 0.65
  })
}

const vanishOut = (target: HTMLElement | any, done: (() => void), options: Options): Promise<void> => {
  return animate('out', target, done, options, {
    ...vanishOptions,
    duration: options?.duration || parseFloat(target.dataset.avDuration) || 0.65
  })
}

export { vanishIn, vanishOut }