import { Options } from './types'

const setOffset = (target: any, options: Options): string | boolean => {
  return options && options.offset || target.dataset.vnOffset || false
}

export default setOffset