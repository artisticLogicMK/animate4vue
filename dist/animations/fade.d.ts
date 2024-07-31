import { Options } from '../utils/types';
declare const fadeIn: (target: any, done: (() => void), options: Options) => Promise<void>;
declare const fadeOut: (target: any, done: (() => void), options: Options) => Promise<void>;
export { fadeIn, fadeOut };
