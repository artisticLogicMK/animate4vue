import { Options } from './types'

const setOffset = (target: any, options: Options): string | boolean => {
  const offsetValue = options && options.offset || target.dataset.avOffset
  if (offsetValue && offsetValue.includes('-')) {
    return false
  } else {
    return offsetValue || false
  }
}

export default setOffset