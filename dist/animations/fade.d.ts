import { Options } from '../utils/types';
declare const fadeIn: (target: HTMLElement | any, done: (() => void), options: Options) => Promise<void>;
declare const fadeOut: (target: HTMLElement | any, done: (() => void), options: Options) => Promise<void>;
export { fadeIn, fadeOut };
