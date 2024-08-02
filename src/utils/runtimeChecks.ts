import { Options, AttentionOptions } from './types'

// This function checks if the properties specified in Options type are included
export const isValidOptions = (options: Options): boolean  => {
  return (options.onStart === undefined || typeof options.onStart === 'function') &&
    (options.onComplete === undefined || typeof options.onComplete === 'function') &&
    (options.duration === undefined || typeof options.duration === 'number') &&
    (options.delay === undefined || typeof options.delay === 'number') &&
    (options.fade === undefined || typeof options.fade === 'string'|| typeof options.fade === 'boolean' || typeof options.fade === 'number') &&
    (options.ease === undefined || typeof options.ease === 'string') &&
    (options.offset === undefined || typeof options.offset === 'string')
}


// This function checks if the properties specified in AttentionOptions type are included
export const isValidAttOptions = (options: AttentionOptions): boolean  => {
  return (options.duration === undefined || typeof options.duration === 'number') &&
    (options.delay === undefined || typeof options.delay === 'number') && (options.loop === undefined || typeof options.loop === 'boolean')
}