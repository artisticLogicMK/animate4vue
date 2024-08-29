import { Options } from '../utils/types';
declare const puffIn: (target: HTMLElement | any, done: (() => void), options: Options) => Promise<void>;
declare const puffOut: (target: HTMLElement | any, done: (() => void), options: Options) => Promise<void>;
export { puffIn, puffOut };
